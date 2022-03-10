const burgerMenu = document.querySelector(".fa-solid");
const hiddenMenu = document.querySelector(".menu-section");

burgerMenu.addEventListener("click", function () {
  hiddenMenu.classList.toggle("shown");
});
