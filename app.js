const sendBtn = document.querySelector(".btn");
const errorMsg = document.querySelector(".error-msg");
const errorIcon = document.querySelector(".error");

const inputEl = document.querySelector(".input-field");

const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const timeoutFunc = setInterval(() => {
  errorMsg.style.display = "none";
  errorIcon.style.display = "none";
}, 2000);

sendBtn.addEventListener("click", function () {
  if (inputEl.value.length === 0 || !inputEl.value.match(emailValidation)) {
    errorMsg.style.display = "inline";
    errorIcon.style.display = "inline";
    errorMsg.textContent = "Please provide a valid email address";
    return timeoutFunc;
  } else {
    errorMsg.style.display = "inline";
    errorMsg.style.color = "green";
    errorMsg.textContent = "Thank you for subscribing to our newsletter!";
    return timeoutFunc;
  }
});
