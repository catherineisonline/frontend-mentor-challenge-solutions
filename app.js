const ratingNumbers = document.querySelectorAll(".rating-number");
const defaultActive = document.querySelector(".default-active");
const submitbtn = document.querySelector(".btn");
const resultCard = document.querySelector(".back-section");
const questionCard = document.querySelector(".front-section");
const resultText = document.querySelector(".result-text");
//Targeting selected value
ratingNumbers.forEach((button) => {
  button.addEventListener("click", function () {
    ratingNumbers.forEach((ifSelected) => {
      ifSelected.classList.remove("was-selected");
    });
    button.classList.add("was-selected");
    defaultActive.classList.remove("default-active");
  });
});
//Rendering selected value
submitbtn.addEventListener("click", function () {
  const wasSelected = document.querySelector(".was-selected");
  // Check if the value was selected
  if (wasSelected === null) {
    window.alert("Please select a value ⁉️");
  }
  else {
    resultCard.classList.add("show-card");
    questionCard.classList.add("hide-card");
    resultText.textContent = `You selected ${wasSelected.textContent} out of 5`;
  }

});
