const openModalBtn = document.querySelector('.add_book_btn');
const closeModalBtn = document.querySelector('.close');
const backdrop = document.querySelector('.js-backdrop');

openModalBtn.addEventListener('click', function () {
  document.body.classList.add('show-modal');
});
closeModalBtn.addEventListener('click', function () {
  document.body.classList.remove('show-modal');
});

function closeModal() {
  document.body.classList.remove('show-modal');
}

backdrop.addEventListener('click', function (event) {
  if (event.target === backdrop) {
    closeModal();
  }
});

// ======================================================================

let books = [
  {
    title: 'Гаррі Поттер',
    author: 'Джоан Роулінг',
    publisher: 'А-БА-БА-ГА-ЛА-МА-ГА',
    copies: 5,
  },
  {
    title: 'Майстер і Маргарита',
    author: 'Михайло Булгаков',
    publisher: 'АСТ',
    copies: 8,
  },
  {
    title: 'Кобзар',
    author: 'Тарас Шевченко',
    publisher: 'Веселка',
    copies: 12,
  },
];

function displayBooks() {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';

  books.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p>Автор: ${book.author}</p>
      <p>Видавництво: ${book.publisher}</p>
      <p>Екземплярів: ${book.copies}</p>
      <button onclick="removeBook('${book.title}')"><span>Видалити</span></button>
    `;

    bookList.appendChild(card);
  });

  applySearchFilter();
}

function sortBooks() {
  const sortOption = document.getElementById('sort').value;

  books.sort((a, b) => {
    if (sortOption === 'copies') {
      return parseInt(a[sortOption]) - parseInt(b[sortOption]);
    } else {
      return a[sortOption].localeCompare(b[sortOption]);
    }
  });

  displayBooks();
}

function removeBook(title) {
  books = books.filter(book => book.title !== title);
  displayBooks();
}

document.getElementById('book-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const publisher = document.getElementById('publisher').value;
  const copies = document.getElementById('copies').value;

  books.push({ title, author, publisher, copies });

  sortBooks();
  this.reset();
});

function applySearchFilter() {
  const input = document.querySelector('.search_books');
  const bookCards = document.querySelectorAll('.book-card');

  input.addEventListener('input', function() {
    const searchQuery = input.value.toLowerCase(); 

    bookCards.forEach(function(card) {
      const bookTitle = card.querySelector('h3').textContent.toLowerCase(); 
      const bookAuthor = card.querySelector('p').textContent.toLowerCase();
      const bookCopies = card.querySelectorAll('p')[2].textContent.toLowerCase(); 

      if (bookTitle.includes(searchQuery) || bookAuthor.includes(searchQuery) || bookCopies.includes(searchQuery)) {
        card.style.display = ''; 
      } else {
        card.style.display = 'none'; 
      }
    });
  });
}

displayBooks();