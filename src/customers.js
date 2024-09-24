document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.querySelector(".add_customer_btn");
    const closeModalBtn = document.querySelector(".close");
    const backdrop = document.querySelector(".js-backdrop");
  
    openModalBtn.addEventListener("click", function () {
      document.body.classList.add("show-modal");
    });
    closeModalBtn.addEventListener("click", function () {
      document.body.classList.remove("show-modal");
    });
  
  
    function closeModal() {
      document.body.classList.remove("show-modal");
    }
  
    backdrop.addEventListener("click", function (event) {
      if (event.target === backdrop) {
        closeModal();
      }
    });
  });
  
  
  // =============================================================================
let customers = [
  {
    name: 'Олексій',
    surname: 'Петренко',
    phone_num: '380501234567',
  },
  {
    name: 'Марія',
    surname: 'Іваненко',
    phone_num: '380671234567',
  },
  {
    name: 'Іван',
    surname: 'Сидоренко',
    phone_num: '380931234567',
  },
];

function displayCustomers() {
  const customerList = document.getElementById('customers-list');
  customerList.innerHTML = '';

  customers.forEach(customer => {
    const card = document.createElement('div');
    card.className = 'customer-card';

    card.innerHTML = `
      <h3>${customer.name} ${customer.surname}</h3>
      <p>Номер телефону: ${customer.phone_num}</p>
      <button onclick="removeCustomer('${customer.phone_num}')"><span>Видалити</span></button>
    `;

    customerList.appendChild(card);
  });

  applySearchFilter();
}

function sortCustomers() {
  const sortOption = document.getElementById('sort').value;

  customers.sort((a, b) => {
    if (sortOption === 'number') {
      return parseInt(a.phone_num) - parseInt(b.phone_num);
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  displayCustomers();
}

function removeCustomer(phone_num) {
  customers = customers.filter(customer => customer.phone_num !== phone_num);
  displayCustomers();
}

document.getElementById('customers_form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const password = document.getElementById('password').value;  // you might handle password storage differently in a real app
  const phone_num = document.getElementById('phone_num').value;

  customers.push({ name, surname, phone_num });

  sortCustomers();
  this.reset();
});

function applySearchFilter() {
  const input = document.querySelector('.search_customers');
  const customerCards = document.querySelectorAll('.customer-card');

  input.addEventListener('input', function() {
    const searchQuery = input.value.toLowerCase();

    customerCards.forEach(function(card) {
      const customerName = card.querySelector('h3').textContent.toLowerCase();
      const customerPhone = card.querySelector('p').textContent.toLowerCase();

      if (customerName.includes(searchQuery) || customerPhone.includes(searchQuery)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

displayCustomers();
