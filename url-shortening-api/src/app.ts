"use strict";
// DOM
const shortlyInput = document.querySelector(".url-input") as HTMLInputElement;
const shortlyBtn = document.querySelector(".url-button") as HTMLButtonElement;
const parentNode = document.querySelector(".search-result-block") as HTMLElement;
const errorMsg = document.querySelector(".error-msg") as HTMLElement;
const resetResults = document.querySelector(".reset-results") as HTMLButtonElement;
const sectionThree = document.querySelector(".section-3") as HTMLElement;
//Hamburger Menu
const burgerIcon = document.querySelector(".fa-bars") as HTMLElement;
const navMenu = document.querySelector(".menu-section") as HTMLElement;
const mainElement = document.querySelector(".main-container") as HTMLElement;
// Other
let resultSkeleton: string = ''
let resultStorage: (string | null)[] = [];



//URL Validiation
function urlValidation(defaultUrl: string) {
  const urlRule =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  if (defaultUrl.match(urlRule)) {
    return true;
  } else {
    return false;
  }
}

// URL Submission Click Event
shortlyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let inputValue = shortlyInput.value;
  //URL Validation
  if (!urlValidation(inputValue)) {
    errorMsg.classList.add("shown");
    shortlyInput.classList.add("shown");
    errorMsg.innerHTML = "Please enter a link";
  } else {
    errorMsg.classList.remove("shown");
    shortlyInput.classList.remove("shown");
    //Passed Validation - init API
    fetch(`https://api.shrtco.de/v2/shorten?url=` + inputValue)
      .then((response) => response.json())
      .then((response) => {
        if (response.ok) {
          let shortlyCode = response.result.code;

          resultSkeleton = `<div class="result">
          <p class="inserted-link">${inputValue}</p>
          <hr class="result-block-hr">
          <div class="results">
            <p class="short-code">shrtco.de/${shortlyCode}</p>
            <button class="copy-btn">Copy</button>
          </div>
          </div>`;

          //check if I have some storage and show results from it
          if (sessionStorage.getItem("resultsStorage") !== null) {
            resultStorage = [resultSkeleton, sessionStorage.getItem("resultsStorage")].reverse();
            parentNode.innerHTML = [resultStorage].join('').split(',').join('');
            sessionStorage.setItem("resultsStorage", [resultStorage].join('').split(',').join(''));
            resetResults.classList.add("active");
          }
          //if I don't have storage just show the first/current result
          else {
            parentNode.innerHTML = resultSkeleton;
            //then push this first result to my storage and then session storage
            resultStorage.push(resultSkeleton);
            sessionStorage.setItem("resultsStorage", [resultStorage].join('').split(',').join(''));
            resetResults.classList.add("active");
          }
        }
      });
  }
});

parentNode.addEventListener("click", function (e) {
  e.stopPropagation();
  let copyBtn: HTMLElement | null = null;
  let target = e.target as HTMLElement as HTMLElement | null;
  if (target) {
    const parent = target.parentNode;
    if (parent) {
      copyBtn = parent.querySelector(".copy-btn");
      if (target.classList.value === 'copy-btn') {
        let textToCopy = parent?.querySelector(".short-code")?.textContent;
        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy);
        }

      }
      else {
        return null;
      }
      //Change CSS
      if (copyBtn) {
        copyBtn.textContent = "Copied!";
        copyBtn.style.backgroundColor = "var(--dark-violet)";
        setTimeout(function () {
          if (copyBtn) {
            copyBtn.textContent = "Copy";
            copyBtn.style.backgroundColor = "var(--cyan)";
          }
        }, 1000);
      }
    }
  }

});



sectionThree.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  if (target) {
    const classList = target.classList;
    if (classList) {
      if (classList.value === resetResults.classList.value) {
        sessionStorage.clear();
        parentNode.innerHTML = "";
        shortlyInput.value = "";
        resultStorage = [];
        resetResults.classList.remove("active");
      }
      else sectionThree.removeEventListener("click", (e) => (e));
    }
  }
})

// MIGHT BE MISTAKE AT THE REMOVELISTENER


// Reload function
window.addEventListener("load", () => {
  const stordResults = sessionStorage.getItem("resultsStorage");
  if (stordResults !== null) {
    parentNode.innerHTML = stordResults;
    resetResults.classList.add("active");
  }
  else {
    parentNode.innerHTML = "";

  }
})




//Toggle Menu
const menuToggle = () => navMenu.classList.toggle("show");
//Remove Menu
const removeMenu = () => navMenu.classList.remove("show");

//Toggle menu with hamburger
burgerIcon.addEventListener("click", function () {
  menuToggle();
});

//Remove menu by clicking outside navigation
mainElement.addEventListener("click", function () {
  removeMenu();
});
