"use strict";

const submitBtn = document.getElementById("submit-info");
//USERNAME
const userName = document.querySelector(".first-name");
const nameLabel = document.querySelector(".name-label");
const nameError = document.querySelector(".first-name-error");
//LASTNAME
const userLastName = document.querySelector(".last-name");
const lastNameLabel = document.querySelector(".lastname-label");
const lastNameError = document.querySelector(".last-name-error");
//EMAIL
const userEmail = document.querySelector(".user-email");
const emailLabel = document.querySelector(".email-label");
const emailError = document.querySelector(".user-email-error");

//PASS
const userPass = document.querySelector(".user-pass");
const passLabel = document.querySelector(".pass-label");
const passError = document.querySelector(".user-pass-error");

const successMsg = document.querySelector(".success-msg");

let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passValidation = /^[A-Za-z]\w{7,14}$/;

let errorFunc = function () {

  if (userName.value.length === 0) {
    nameLabel.textContent = "First Name cannot be empty";
    userName.style.borderColor = "red";
    nameError.style.display = "inline";
  }
  if (userLastName.value.length === 0) {
    lastNameLabel.textContent = "Last Name cannot be empty";
    userLastName.style.borderColor = "red";
    lastNameError.style.display = "inline";
  }
  if (userName.value.length > 0) {
    nameLabel.textContent = "";
    userName.style.borderColor = "var(--grayish-blue)";
    nameError.style.display = "none";
  }
  if (userLastName.value.length > 0) {
    lastNameLabel.textContent = "";
    userLastName.style.borderColor = "var(--grayish-blue)";
    lastNameError.style.display = "none";
  }
  if (userEmail.value.length === 0) {
    emailLabel.textContent = "Email cannot be empty";
    userEmail.style.borderColor = "red";
    emailError.style.display = "inline";
  }
  if (!userEmail.value.match(emailValidation) && userEmail.value.length !== 0) {
    emailLabel.textContent = "Looks like this is not an email";
    userEmail.style.borderColor = "red";
    emailError.style.display = "inline";
  }
  if (userEmail.value.match(emailValidation)) {
    emailLabel.textContent = "";
    userEmail.style.borderColor = "var(--grayish-blue)";
    emailError.style.display = "none";
  }
  if (userPass.value.length === 0) {
    passLabel.textContent = "Password cannot be empty";
    userPass.style.borderColor = "red";
    passError.style.display = "inline";
  }
  if (!userPass.value.match(passValidation) && userPass.value.length !== 0) {
    passLabel.textContent =
      "A password must be between 7-16 characters that starts with a letter(Only letters, numbers & underscore)";
    userPass.style.borderColor = "red";
    passError.style.display = "inline";
  }
  if (userPass.value.match(passValidation)) {
    passLabel.textContent = "";
    userPass.style.borderColor = "var(--grayish-blue)";
    passError.style.display = "none";
  }
  if (
    userName.value.length > 0 &&
    userLastName.value.length > 0 &&
    userEmail.value.match(emailValidation) &&
    userPass.value.match(passValidation)
  ) {
    successMsg.textContent = "Success! Please check your email";
  } else {
    console.log("Unkown error");
  }
};

//CLick with mouse
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  errorFunc();
});

//Click with Enter
userName.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    errorFunc();
  }
});

userLastName.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    errorFunc();
  }
});

userEmail.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    errorFunc();
  }
});

userPass.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    errorFunc();
  }
});
