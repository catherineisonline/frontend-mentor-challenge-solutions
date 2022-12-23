const ham  = document.querySelector(".hamburger");
const header  = document.querySelector(".header");

ham.addEventListener("click", function(){
    header.classList.toggle("active");
})


