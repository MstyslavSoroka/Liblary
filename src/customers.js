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
  
    // ======================================1=================================================
  
    function closeModal() {
      document.body.classList.remove("show-modal");
    }
  
    backdrop.addEventListener("click", function (event) {
      if (event.target === backdrop) {
        closeModal();
      }
    });
  });
  
  