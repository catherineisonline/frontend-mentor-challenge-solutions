const backBtn = document.querySelector(".back-btn");
const closeModal = document.querySelector(".close-modal");
const bookmarkBtn = document.querySelector(".bookmark");
const typeSelection = document.querySelectorAll(".type-selection");
const pledgeInput = document.querySelectorAll(".pledge-input");
const gotItBtn = document.querySelector(".got-it");
const hamburgerBtn = document.querySelector(".hamburger-menu");
const navigationMenu = document.querySelector(".menu");
const selectReward = document.querySelectorAll(".select-reward");
const pledgeName = document.querySelectorAll(".info .item-header h3");
const modal = document.querySelector(".modal");
const modalSuccess = document.querySelector(".modal-success");
const item2 = document.querySelector("#item-2");
const item2Selection = document.querySelector("#item-2 .type-selection");
const item3 = document.querySelector("#item-3");
const item3Selection = document.querySelector("#item-2 .type-selection");
const item4 = document.querySelector("#item-4");
const item4Selection = document.querySelector("#item-2 .type-selection");

function showModal() {
  document.body.classList.add("show-modal");
}
function hideModal() {
  document.body.classList.remove("show-modal");
}
function uncompleteModal() {
  modal.classList.remove("completed");
}
function completeModal() {
  modal.classList.add("completed");
}
function scrollToItem() {
  modalSuccess.scrollIntoView(true);
}
//Back btn
backBtn.addEventListener("click", showModal);
//Close Modal
closeModal.addEventListener("click", () => {
  hideModal();
  uncompleteModal();
});
//Toggle bookmark class
bookmarkBtn.addEventListener("click", () => {
  bookmarkBtn.classList.toggle("bookmarked");
});

//Type selection
typeSelection.forEach((button) => {
  button.addEventListener("change", () => {
    typeSelection.forEach((btn) => {
      if (btn.checked) {
        btn.parentElement.parentElement.classList.add("item-selected");
      } else {
        btn.parentElement.parentElement.classList.remove("item-selected");
      }
      if (button.id == "support") {
        completeModal();
        scrollToItem();
      }
    });
    if (button.checked) {
      button.parentElement.parentElement.classList.add("item-selected");
    } else {
      button.parentElement.parentElement.classList.remove("item-selected");
    }
    if (button.id == "support") {
      completeModal();
      scrollToItem();
    }
  });
});
//Choose pledge
pledgeName.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentElement.previousElementSibling.click();
  });
});
//Pledge input
pledgeInput.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    completeModal();
    scrollToItem();
  });
});
//'Got It' Btn
gotItBtn.addEventListener("click", () => {
  hideModal();
  uncompleteModal();
  typeSelection.forEach((button) => {
    if (button.checked) {
      button.checked = false;
      button.parentElement.parentElement.classList.remove("item-selected");
    }
  });
});

//Hamburger menu
hamburgerBtn.addEventListener("click", () => {
  navigationMenu.classList.toggle("active");
});
//Reward selection
selectReward.forEach((reward) => {
  reward.addEventListener("click", () => {
    showModal();
    if (reward.id == "reward-1") {
      item2Selection.click();
      item2.scrollIntoView(true);
    } else if (reward.id == "reward-2") {
      item3Selection.click();
      item3.scrollIntoView(true);
    } else {
      item4Selection.click();
      item4.scrollIntoView(true);
    }
  });
});
// Numbers Animation
function AnimateIncreaseNum(
  target,
  start,
  end,
  increment = 200,
  dollar = true
) {
  let animationEvent = setInterval(() => {
    start += increment;
    if (start >= end) {
      clearInterval(animationEvent);
      start = end;
    }
    if (dollar) {
      target.innerHTML = `$${start}`;
    } else {
      target.innerHTML = `${start}`;
    }
  }, 1);
}
let Scroll100Flag = true;
window.addEventListener("scroll", () => {
  if (Scroll100Flag) {
    if (window.scrollY >= 100) {
      Scroll100Flag = false;
      AnimateIncreaseNum(document.getElementById("increment-one"), 0, 89914);
      AnimateIncreaseNum(
        document.getElementById("increment-two"),
        0,
        5007,
        (increment = 10),
        (dollar = false)
      );
      AnimateIncreaseNum(
        document.getElementById("increment-three"),
        0,
        56,
        (increment = 1),
        (dollar = false)
      );
    }
  }
});
