"use strict";

const inputEl = document.querySelector(".email-input");
const submitBtn = document.querySelector(".submit-btn");
const errorMsg = document.querySelector(".email-input-message");
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const timeoutFunc = setInterval(() => {
  errorMsg.style.display = "none";
}, 2500);

submitBtn.addEventListener("click", function () {
  if (inputEl.value.length === 0) {
    errorMsg.style.display = "inline";
    errorMsg.textContent = "Whoops! It looks like you forgot to add your email";
    timeoutFunc;
  } else if (
    !inputEl.value.match(emailValidation) &&
    inputEl.value.length !== 0
  ) {
    errorMsg.style.display = "inline";
    errorMsg.textContent = "Please provide a valid email address";
    timeoutFunc;
  } else {
    errorMsg.style.display = "inline";
    errorMsg.style.color = "green";
    errorMsg.textContent = "We sent you a gift, check it out!";
    timeoutFunc;
  }
});
