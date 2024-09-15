const openModalBtn = document.querySelector('.add_book_btn');
const closeModalBtn = document.querySelector('.close');
const backdrop = document.querySelector('.js-backdrop');

openModalBtn.addEventListener('click', function () {
  document.body.classList.add('show-modal');
});
closeModalBtn.addEventListener('click', function () {
  document.body.classList.remove('show-modal');
});

// ======================================1=================================================

function closeModal() {
  document.body.classList.remove('show-modal');
}

backdrop.addEventListener('click', function (event) {
  if (event.target === backdrop) {
    closeModal();
  }
});

// ======================================================================

document.getElementById('book-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting normally

  // Get values from the form
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const publisher = document.getElementById('publisher').value;
  const copies = document.getElementById('copies').value;

  addBookCard(title, author, publisher, copies);

  this.reset();
});


function addBookCard(title, author, publisher, copies) {
  const bookList = document.getElementById("book-list");
  const card = document.createElement("div");
  card.className = "book-card";
  
  card.innerHTML = `
      <h3>${title}</h3>
      <p>Автор: ${author}</p>
      <p>Видавництво: ${publisher}</p>
      <p>Екземплярів: ${copies}</p>
      <button onclick="this.parentElement.remove()"><span>Видалити</span></button>
  `;
  
  bookList.appendChild(card);
}
