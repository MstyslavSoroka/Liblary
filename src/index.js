const viewPopularBooksBtn = document.getElementById("viewPopularBooks");
const viewActiveUsersBtn = document.getElementById("viewActiveUsers");
const statsBooksContainer = document.getElementById("statsBooksContainer");
const statsUsersContainer = document.getElementById("statsUsersContainer");

viewPopularBooksBtn.addEventListener("click", function () {
  statsBooksContainer.style.display = "flex";
  statsUsersContainer.style.display = "none";
});

viewActiveUsersBtn.addEventListener("click", function () {
  statsUsersContainer.style.display = "flex";
  statsBooksContainer.style.display = "none";
});