const sendBtn = document.querySelector(".email-btn");
const errorMsg = document.querySelector(".error-msg");

const inputEl = document.querySelector(".input-field");

const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const timeoutFunc = setTimeout(() => {
  errorMsg.style.display = "none";
}, 3000);

sendBtn.addEventListener("click", function () {
  if (inputEl.value.length === 0 || !inputEl.value.match(emailValidation)) {
    errorMsg.style.display = "inline";
    errorMsg.textContent = "Please enter a valid email address";
    return timeoutFunc;
  } else {
    errorMsg.style.display = "inline";
    errorMsg.style.color = "green";
    errorMsg.textContent = "Thank you for subscribing to our newsletter!";
    return timeoutFunc;
  }
});
