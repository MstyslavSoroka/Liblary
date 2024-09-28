const library = [
    { id: 1, title: "Гаррі Поттер", author: "Дж. К. Роулінг", copies: 5 },
    { id: 2, title: "Володар Перснів", author: "Дж. Р. Р. Толкін", copies: 7 },
    { id: 3, title: "1984", author: "Джордж Орвелл", copies: 4 },
    { id: 4, title: "Убити пересмішника", author: "Харпер Лі", copies: 9 },
  ];
  
  let takenBooks = [];
  
  //* ==================================
  
  function populateBookDropdown() {
    const dropdown = document.getElementById("book-select");
    dropdown.innerHTML = "";
    library.forEach((item) => {
      if (item.copies > 0) {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.title;
        dropdown.appendChild(option);
      }
    });
  }
  
  //* ==================================
  
  document.getElementById("issue-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedId = parseInt(document.getElementById("book-select").value);
    const selectedBook = library.find((b) => b.id === selectedId);
  
    if (selectedBook) {
      selectedBook.copies -= 1;
      const dateIssued = new Date().toLocaleDateString();
      takenBooks.push({
        book: selectedBook,
        issueDate: dateIssued,
        returnDate: null,
      });
      displayTakenBooks();
      populateBookDropdown();
    }
  });
  
  //* ==================================
  
  document.getElementById("return-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const cardId = parseInt(document.getElementById("cart-id").value);
    const takenBook = takenBooks.find(
      (b) => b.book.id === cardId && !b.returnDate
    );
  
    if (takenBook) {
      takenBook.returnDate = new Date().toLocaleDateString();
      const book = library.find((b) => b.id === cardId);
      if (book) {
        book.copies += 1;
      }
      displayTakenBooks();
      populateBookDropdown();
    }
  });
  
  //* ==================================
  
  function displayTakenBooks() {
    const list =
      document.querySelector(".taken-book-title + ul") ||
      document.createElement("ul");
      
      if (!document.querySelector(".taken-book-title + ul")) {
        list.classList.add("taken-books-list"); 
      }

    list.innerHTML = "";
    takenBooks.forEach((b) => {
      const item = document.createElement("li");
      item.textContent = `${b.book.title} - Видача: ${b.issueDate}, Повернення: ${
        b.returnDate || "не повернено"
      }`;
  list.appendChild(item);
    });
    if (!document.querySelector(".taken-book-title + ul")) {
      document.querySelector(".taken-book-title").after(list);
    }
  }

  populateBookDropdown();