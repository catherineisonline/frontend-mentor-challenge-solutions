"use strict";

const shortlyInput = document.querySelector(".url-input");
const shortlyBtn = document.querySelector(".url-button");
const shortlyResult = document.querySelector(".shortly-result");
const insertedLink = document.querySelector(".inserted-link");
const shortCode = document.querySelector(".short-code");
const copyBtn = document.querySelector(".copy-btn");
const copyParent = document.querySelector(".search-results");

let inputValue = "https://www.frontendmentor.io/profile/catherineisonline";
let shortlyCode;
let url = "https://api.shrtco.de/v2/shorten?url=" + inputValue;

const apiFunc = function init() {
  $.getJSON(url, function (data) {
    //Getting the key value
    shortlyCode = data.result.short_link;

    // Getting & placing result values
    const inputResults = function () {
      inputValue = shortlyInput.value;
      insertedLink.textContent = `${inputValue}`;
      shortCode.textContent = `${shortlyCode}`;
    };

    //Copy Process
    const copyProcess = function () {
      let clone = shortlyResult.cloneNode(true);
      clone.classList = "search-result";
      copyParent.appendChild(clone);
    };
    // Click event
    shortlyBtn.addEventListener("click", function () {
      inputResults();
      copyProcess();
    });
    copyBtn.addEventListener("click", function () {
      let textToCopy = shortCode.textContent;
      console.log(textToCopy);
      // Coped Text
      navigator.clipboard.writeText(textToCopy);
      copyBtn.textContent = "Copied!";
      copyBtn.style.backgroundColor = "var(--dark-violet)";
    });
  });
};
apiFunc();
