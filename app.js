"use strict";

const inputEl = document.querySelector(".email-input");
const submitBtn = document.querySelector(".submit-btn");
const errorMsg = document.querySelector(".email-input-message");
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


submitBtn.addEventListener("click", function () {
  if (inputEl.value.length === 0) {
    errorMsg.style.display = "inline";
    errorMsg.textContent = "Whoops! It looks like you forgot to add your email";
    errorMsg.style.color = "var(--light-red)";
  } else if (
    !inputEl.value.match(emailValidation) &&
    inputEl.value.length !== 0
  ) {
    errorMsg.style.display = "inline";
    errorMsg.textContent = "Please provide a valid email address";
    errorMsg.style.color = "var(--light-red)";
  } else {
    errorMsg.style.display = "inline";
    errorMsg.style.color = "green";
    errorMsg.textContent = "We sent you a gift, check it out!";
  }
});
