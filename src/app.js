"use strict";
// DOM
const shortlyInput = document.querySelector(".url-input");
const shortlyBtn = document.querySelector(".url-button");
const parentNode = document.querySelector(".search-result-block");
const errorMsg = document.querySelector(".error-msg");
const resetResults = document.querySelector(".reset-results");
const sectionThree = document.querySelector(".section-3");
//Hamburger Menu
const burgerIcon = document.querySelector(".fa-bars");
const navMenu = document.querySelector(".menu-section");
const mainElement = document.querySelector(".main-container");

// Other
let resultSkeleton = '';
let resultStorage = [];

//URL Validiation
function urlValidation(defaultUrl) {
    const urlRule = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    if (defaultUrl.match(urlRule)) {
        return true;
    }
    else {
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
    }
    else {
        errorMsg.classList.remove("shown");
        shortlyInput.classList.remove("shown");
        //Passed Validation - init API
        fetchBackupUrl(inputValue);
    }
});
function fetchBackupUrl(inputValue) {

    fetch('https://pizza-time-backend.vercel.app/shortener', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputValue: inputValue })
    }).then(response => response.json()).then((response) => {

        if (response.success) {
            let shortlyCode = response.data.url;
            resultSkeleton = `<div class="result">
<p class="inserted-link">${inputValue}</p>
<hr class="result-block-hr">
<div class="results">
 <p class="short-code">${shortlyCode}</p>
 <button class="copy-btn">Copy</button>
</div>
</div>`;

            if (sessionStorage.getItem("resultsStorage") !== null) {
                resultStorage = [resultSkeleton, sessionStorage.getItem("resultsStorage")]
                parentNode.innerHTML = [resultStorage].join('').split(',').join('');
                sessionStorage.setItem("resultsStorage", [resultStorage].join('').split(',').join(''));
                resetResults.classList.add("active");
            }
            else {
                parentNode.insertAdjacentHTML('afterbegin', resultSkeleton);

                resultStorage.push(resultSkeleton);
                sessionStorage.setItem("resultsStorage", [resultStorage].join('').split(',').join(''));
                resetResults.classList.add("active");
            }
        }

    })
        .catch(error => console.log(`Error with API: ${error.message}`));
}

parentNode.addEventListener("click", function (e) {
    var _a;
    e.stopPropagation();
    let copyBtn = null;
    let target = e.target;
    if (target) {
        const parent = target.parentNode;
        if (parent) {
            copyBtn = parent.querySelector(".copy-btn");
            if (target.classList.value === 'copy-btn') {
                let textToCopy = (_a = parent === null || parent === void 0 ? void 0 : parent.querySelector(".short-code")) === null || _a === void 0 ? void 0 : _a.textContent;
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
    const target = e.target;
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
            else
                sectionThree.removeEventListener("click", (e) => (e));
        }
    }
});

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
});
//Toggle Menu
const menuToggle = () => navMenu.classList.toggle("show");
//Remove Menu
const removeMenu = () => navMenu.classList.remove("show");
//Toggle menu with hamburger
burgerIcon.addEventListener("click", menuToggle);
//Remove menu by clicking outside navigation
mainElement.addEventListener("click", removeMenu);
