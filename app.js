"use strict";

const shareBtn = document.querySelector(".share-btn");
const hiddenShareBtn = document.querySelector(".hidden-share-btn");
const shareSection = document.querySelector(".share-section");
const shareLink = document.querySelector(".share-link");
const socialMediaSection = document.querySelector(".social-icons");

const toggleSection = () => shareSection.classList.toggle("shown");
const removeHiddenSection = () => shareSection.classList.remove("shown");


shareBtn.addEventListener("click", function () {
  toggleSection();
});
hiddenShareBtn.addEventListener("click", function () {
  toggleSection();
});


//Hide section event
document.addEventListener("click", function (e) {
  let targetSection = shareBtn.contains(e.target);
  let showntargetSection = hiddenShareBtn.contains(e.target);
  let sharableLink = shareLink.contains(e.target);
  let socialIcons = socialMediaSection.contains(e.target);
  if (!showntargetSection && !targetSection && !sharableLink && !socialIcons) {
    removeHiddenSection();
  }
});
