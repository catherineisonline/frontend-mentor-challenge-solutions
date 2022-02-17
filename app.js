"use strict";



const shortlyInput = document.querySelector(".url-input");
const shortlyBtn = document.querySelector(".url-button");
const shortlyResult = document.querySelector(".hidden-result");
const insertedLink = document.querySelector(".inserted-link");
const shortCode = document.querySelector(".short-code");
const parentNode = document.querySelector(".search-result-block");
const errorMsg = document.querySelector(".error-msg");

//URL Validiation
function urlValidation(defaultUrl) {
  const urlRule =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  if (defaultUrl.match(urlRule)) {
    return true;
  } else {
    return false;
  }
}
// URL Submission Click Event
const apiFunc = shortlyBtn.addEventListener("click", function () {
  let inputValue = shortlyInput.value;
  //URL Validation
  if (!urlValidation(inputValue)) {
    // alert("Please enter a valid URL!");
    errorMsg.classList.add("shown");
    errorMsg.innerHTML = "Please enter a valid URL!";
  } else {
    errorMsg.classList.remove("shown");
    //Passed Validation - init API
    fetch(`https://api.shrtco.de/v2/shorten?url=` + inputValue)
      .then((response) => response.json())
      .then((response) => {
        if (response.ok) {
          let shortlyCode = response.result.code;
          //Started Cloning
          let mainClone = shortlyResult.cloneNode(true);
          mainClone.classList = "search-result";
          parentNode.appendChild(mainClone);
          //Finished Cloning
          //Target clone child elements
          let cloneLink = mainClone.querySelector(".inserted-link");
          let cloneResultLink = mainClone.querySelector(".short-code");
          let cloneCopyBtn = mainClone.querySelector(".copy-btn");
          //Inserting value of search input
          cloneLink.textContent = `${inputValue}`;
          //Inserting the result value
          cloneResultLink.textContent = `shrtco.de/${shortlyCode}`;
          //Link Copy Event
          cloneCopyBtn.addEventListener("click", function (e) {
            e.preventDefault();
            //Target text
            let textToCopy = cloneResultLink.textContent;
            //  Copy Text
            navigator.clipboard.writeText(textToCopy);
            //Change CSS
            cloneCopyBtn.textContent = "Copied!";
            cloneCopyBtn.style.backgroundColor = "var(--dark-violet)";
            setTimeout(function () {
              cloneCopyBtn.textContent = "Copy";
              cloneCopyBtn.style.backgroundColor = "var(--cyan)";
            }, 1000);
          });
        } else {
          console.log("error");
        }
      });
  }
});

apiFunc();
