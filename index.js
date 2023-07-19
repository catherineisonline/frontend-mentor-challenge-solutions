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
const forms = document.querySelectorAll(".form");

// Data
// let amountBacked = 89914;
let amountBackedTotal = 89914;
let totalBackers = 5007;
let bambooCapacity = 101;
let blackCapacity = 64;
let amountPledged = 0;



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

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const targetInput = e.target.querySelector(".pledge-input");

    if (targetInput.value === targetInput.defaultValue) {
      if (localStorage) {
        localStorage.setItem("amountPledged", +targetInput.defaultValue + +localStorage.getItem("amountPledged"));
      }
      else {
        localStorage.setItem("amountPledged", +targetInput.defaultValue + amountPledged);
      }

    }
    else {
      if (localStorage) {
        localStorage.setItem("amountPledged", +targetInput.value + +localStorage.getItem("amountPledged"));
      }
      else {
        localStorage.setItem("amountPledged", +targetInput.value + amountPledged);
      }
    }

    if (localStorage) {
      AnimateIncreaseNum(document.getElementById("increment-one"), 0, amountBackedTotal + +localStorage.getItem("amountPledged"));
    }
    else {
      AnimateIncreaseNum(document.getElementById("increment-one"), 0, amountBackedTotal + amountPledged);
    }



    //! Bamboo Capacity
    if (+localStorage.getItem("bambooCapacityStorage") > 0 && e.target.querySelector(`[aria-label="Bamboo"]`) !== null) {
      localStorage.setItem("bambooCapacityStorage", +localStorage.getItem("bambooCapacityStorage") - 1);
      // document.querySelector(".bamboo-capacity").textContent = +localStorage.getItem("bambooCapacityStorage");
    }
    //! Black Capacity
    if (+ localStorage.getItem("blackCapacityStorage") > 0 && e.target.querySelector(`[aria-label="Black"]`) !== null) {
      localStorage.setItem("blackCapacityStorage", +localStorage.getItem("blackCapacityStorage") - 1);
    }

    //! Black Capacity
    if (+localStorage.getItem("blackCapacityStorage") === 0 && e.target.querySelector(`[aria-label="Black"]`) !== null) {
      localStorage.setItem("blackCapacityStorage", blackCapacity - 1);
    }
    //! Bamboo Capacity
    if (+ localStorage.getItem("bambooCapacityStorage") === 0 && e.target.querySelector(`[aria-label="Bamboo"]`) !== null) {
      localStorage.setItem("bambooCapacityStorage", bambooCapacity - 1);
    }

    // ! Update HTML if capacity changed
    if (+localStorage.getItem("bambooCapacityStorage") === 0) {
      document.querySelectorAll(".bamboo-capacity").forEach(span => span.textContent = bambooCapacity);
    }

    else {
      document.querySelectorAll(".bamboo-capacity").forEach(span => span.textContent = +localStorage.getItem("bambooCapacityStorage"));
    }
    // ! Update HTML if capacity changed
    if (+localStorage.getItem("blackCapacityStorage") === 0) {
      document.querySelectorAll(".black-capacity").forEach(span => span.textContent = blackCapacity);
    }

    else {
      document.querySelectorAll(".black-capacity").forEach(span => span.textContent = +localStorage.getItem("blackCapacityStorage"));
    }

    completeModal();
    scrollToItem();
  });
})

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
      target.innerHTML = `${start}`;
    } else {
      target.innerHTML = `${start}`;
    }
  }, 1);
}
let Scroll100Flag = true;
window.addEventListener("scroll", () => {
  if (Scroll100Flag) {
    if (window.scrollY >= 50) {
      Scroll100Flag = false;
      if (localStorage) {
        AnimateIncreaseNum(document.getElementById("increment-one"), 0, amountBackedTotal + +localStorage.getItem("amountPledged"));
      }
      else {
        AnimateIncreaseNum(document.getElementById("increment-one"), 0, amountBackedTotal + amountPledged);
      }
      AnimateIncreaseNum(
        document.getElementById("increment-two"),
        0,
        totalBackers,
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





window.addEventListener("load", () => {
  if (localStorage) {
    document.getElementById("increment-one").textContent = amountBackedTotal + +localStorage.getItem("amountPledged");
  }
  else {
    AnimateIncreaseNum(document.getElementById("increment-one"), 0, amountBackedTotal + amountPledged);

  }
  document.getElementById("increment-two").textContent = totalBackers;
  document.getElementById("increment-three").textContent = 56;

})