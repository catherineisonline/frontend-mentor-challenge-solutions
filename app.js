"use strict";

const app = new Vue({
  el: "#app",
  data: {
    solutions: [
      {
        id: 1,
        projectName: "Stats preview card component",
        projectDescribtion:
          "This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills.",
        projectStack: ["HTML", "CSS"],
        projectPreview: "images/stats-preview-card-component.jpg",
        liveLink:
          "https://catherineisonline.github.io/stats-preview-card-component-frontendmentor/",
        projectLink:
          "https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62",
        repoLink:
          "https://github.com/catherineisonline/stats-preview-card-component-frontendmentor",
      },
      {
        id: 2,
        projectName: "Order summary component",
        projectDescribtion:
          "A perfect project for newbies who are starting to build confidence with layouts!",
        projectStack: ["HTML", "CSS"],
        projectPreview: "images/order-summary-component.jpg",
        liveLink:
          "https://catherineisonline.github.io/order-summary-component-frontendmentor/",
        projectLink:
          "https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj",
        repoLink:
          "https://github.com/catherineisonline/order-summary-component-frontendmentor",
      },
      {
        id: 3,
        projectName: "Profile card component",
        projectDescribtion:
          "This is a perfect challenge to test your layout skills. The card layout doesn't shift, so it's also great for those that haven't dived into responsive websites yet!",
        projectStack: ["HTML", "CSS"],
        projectPreview: "images/profile-card-component.jpg",
        liveLink:
          "https://catherineisonline.github.io/profile-card-component-frontendmentor/",
        projectLink:
          "https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ",
        repoLink:
          "https://github.com/catherineisonline/profile-card-component-frontendmentor",
      },
      {
        id: 4,
        projectName: "Single price grid component",
        projectDescribtion:
          "In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.",
        projectStack: ["HTML", "CSS"],
        projectPreview: "images/single-price-grid-component.jpg",
        liveLink:
          "https://catherineisonline.github.io/single-price-grid-component-frontendmentor/",

        projectLink:
          "https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc",
        repoLink:
          "https://github.com/catherineisonline/single-price-grid-component-frontendmentor",
      },
      {
        id: 5,
        projectName: "3-column preview card component",
        projectDescribtion:
          "This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.",
        projectStack: ["HTML", "CSS"],
        projectPreview: "images/3-column-preview-card-component.jpg",
        liveLink:
          "https://catherineisonline.github.io/3-column-card-component-frontendmentor/",
        projectLink:
          "https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-",
        repoLink:
          "https://github.com/catherineisonline/3-column-card-component-frontendmentor",
      },
      {
        id: 6,
        projectName: "Social proof section",
        projectDescribtion:
          "This project will test your layout skills. If you're starting to get confident with Flexbox or Grid, this will provide a nice challenge!",
        projectStack: ["HTML", "CSS"],
        projectPreview: "images/social-proof-section.jpg",
        liveLink:
          "https://catherineisonline.github.io/social-proof-section-frontendmentor/",

        projectLink:
          "https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA",
        repoLink:
          "https://github.com/catherineisonline/social-proof-section-frontendmentor",
      },
      {
        id: 7,
        projectName: "Four card feature section",
        projectDescribtion:
          "A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.",
        projectStack: ["HTML", "CSS"],
        projectPreview: "images/four-card-feature-section.jpg",
        liveLink:
          "https://catherineisonline.github.io/four-card-feature-section-frontendmentor/",

        projectLink:
          "https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK",
        repoLink:
          "https://github.com/catherineisonline/four-card-feature-section-frontendmentor",
      },
      {
        id: 8,
        projectName: "NFT preview card component",
        projectDescribtion:
          "This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.",
        projectStack: ["HTML", "CSS"],
        projectPreview: "images/NFT-preview-card-component.jpg",
        liveLink:
          "https://catherineisonline.github.io/nft-preview-card-frontendmentor/",

        projectLink:
          "https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U",
        repoLink:
          "https://github.com/catherineisonline/nft-preview-card-frontendmentor",
      },
      {
        id: 9,
        projectName: "Huddle landing page with a single introductory section",
        projectDescribtion:
          "A perfect challenge for beginners, this project will get you working with a two column layout.",
        projectStack: ["HTML", "CSS"],
        projectPreview:
          "images/huddle-landing-page-with-a-single-introductory section.jpg",
        liveLink:
          "https://catherineisonline.github.io/huddle-landing-page-with-a-single-introductory-section-frontendmentor/",

        projectLink:
          "https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0",
        repoLink:
          "https://github.com/catherineisonline/huddle-landing-page-with-a-single-introductory-section-frontendmentor",
      },
      {
        id: 10,
        projectName: "Fylo data storage component",
        projectDescribtion:
          "This component has some interesting CSS challenges in the design. If you're looking to test your CSS skills, this will be a great project for you!",
        projectStack: ["HTML", "CSS"],
        projectPreview: "images/fylo-data-storage-component.jpg",
        liveLink:
          "https://catherineisonline.github.io/fylo-data-storage-component-frontendmentor/",
        projectLink:
          "https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n",
        repoLink:
          "https://github.com/catherineisonline/fylo-data-storage-component-frontendmentor",
      },
      {
        id: 11,
        projectName: "QR code component",
        projectDescribtion:
          "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
        projectStack: ["HTML", "CSS"],
        projectPreview: "images/QR-code-component.jpg",
        liveLink:
          "https://catherineisonline.github.io/QR-code-component-frontendmentor/",

        projectLink:
          "https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H",
        repoLink:
          "https://github.com/catherineisonline/QR-code-component-frontendmentor",
      },
    ],
  },

  methods: {
    mouseenter(e) {
      let Target = e.currentTarget;
      const childOne = Target.firstChild;
      const childTwo = Target.lastChild;
      childOne.classList.add("hidden");
      childTwo.classList.add("shown-links");
    },
    mouseleave(i) {
      let Target = i.currentTarget;
      const childOne = Target.firstChild;
      const childTwo = Target.lastChild;
      childOne.classList.remove("hidden");
      childTwo.classList.remove("shown-links");
    },
  },
});








//Navigation menu

const navIcon = document.querySelector('.nav-icon');
const navMenu = document.querySelector('.main-menu');

navIcon.addEventListener('click', function(){
navMenu.classList.toggle('show-menu');
})


