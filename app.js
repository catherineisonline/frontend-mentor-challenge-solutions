const burgerMenu = document.querySelector(".fa-solid");
const hiddenMenu = document.querySelector(".menu");

burgerMenu.addEventListener("click", function () {
  hiddenMenu.classList.toggle("shown");
  burgerMenu.classList.toggle('reverse');
});
