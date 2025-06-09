const emailInputOne = document.querySelector(".input-one input");
const emailInputTwo = document.querySelector(".input-two input");
const labelOne = document.querySelector(".input-one");
const labelTwo = document.querySelector(".input-two");
const buttonOne = document.querySelector(".button-one");
const buttonTwo = document.querySelector(".button-two");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const emailValidation = function (input, label) {
  if (input.value.match(emailRegex)) {
    input.style.borderColor = "black";
    label.classList.remove("error");
    label.classList.add("success");
  } else {
    input.style.borderColor = "red";
    label.classList.remove("success");
    label.classList.add("error");
  }
};

buttonOne.addEventListener("click", function () {
  emailValidation(emailInputOne, labelOne);
});

buttonTwo.addEventListener("click", function () {
  emailValidation(emailInputTwo, labelTwo);
});
