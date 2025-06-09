<template>
  <main>
    <header v-for="headerDetail in headerDetails" :key="headerDetail.id">
      <section class="header-info">
        <img :src="headerDetail.headerIcon" alt="Frontend Mentor" />
        <a :href="headerDetail.projectUrl">
          <h1><span>Frontend</span> Mentor Challenge Solutions</h1>
        </a>
      </section>
      <nav class="icon-navigation">
        <img
          class="nav-icon"
          :src="headerDetail.navIcon"
          alt="Open navigation menu"
          @click="toggleMenu" />

        <ul
          class="main-menu"
          :class="isToggled ? 'show-menu' : ''"
          @click="toggleMenu">
          <li>
            <i class="fas fa-home"></i
            ><a :href="headerDetail.projectUrl">Home</a>
          </li>
          <li>
            <i class="fas fa-project-diagram"></i
            ><a :href="headerDetail.frontendMentorUrl" target="_blank"
              >Frontend mentor</a
            >
          </li>
          <li>
            <i class="fab fa-github-square"></i>
            <a :href="headerDetail.gitHubUrl" target="_blank">Project repo</a>
          </li>
          <li>
            <i class="fab fa-linkedin"></i
            ><a :href="headerDetail.linkedinUrl" target="_blank"
              >Let's connect</a
            >
          </li>
        </ul>
      </nav>
    </header>
    <section class="all-solutions">
      <h2>All solutions</h2>
      <!-- Solutions Container -->
      <ul class="solutions">
        <li
          class="solution"
          v-for="solution in solutions.slice().reverse()"
          :key="solution.id">
          <!-- Project Preview -->
          <section class="project-preview">
            <img
              class="project-image"
              :src="solution.projectPreview"
              :alt="solution.projectName" />
          </section>
          <!-- Project Info -->
          <section class="project-info">
            <!-- Project Name -->
            <p class="project-name">{{ solution.projectName }}</p>
            <!-- Project Stack -->
            <section class="project-stacks">
              <p
                class="project-stack"
                v-for="projectStack in solution.projectStack"
                :class="projectStack"
                :key="projectStack">
                {{ projectStack }}
              </p>
            </section>
            <!-- Project Describtion -->
            <section class="project-describtion">
              <p>{{ solution.projectDescribtion }}</p>
            </section>
            <!-- Links -->
            <section
              class="links-container"
              @mouseenter="showMenu(solution.id)"
              @mouseleave="hideMenu">
              <button
                class="learn-more-btn"
                :class="activeId === solution.id ? 'hidden' : 'shown-links'">
                Learn more
              </button>
              <ul
                class="links"
                :class="activeId === solution.id ? 'shown-links' : 'hidden'">
                <li class="link-btn">
                  <a :href="solution.repoLink" target="_blank">Solution</a>
                </li>
                <li class="link-btn">
                  <a :href="solution.projectLink" target="_blank"
                    >Accept challenge</a
                  >
                </li>
              </ul>
            </section>
          </section>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import headerIcon from "./assets/images/favicon.png";
import navIcon from "./assets/images/nav-icon.jpeg";
import projectPreview_1 from "./assets/images/stats-preview-card-component.jpeg";
import projectPreview_2 from "./assets/images/order-summary-component.jpeg";
import projectPreview_3 from "./assets/images/profile-card-component.jpeg";
import projectPreview_4 from "./assets/images/single-price-grid-component.jpeg";
import projectPreview_5 from "./assets/images/3-column-preview-card-component.jpeg";
import projectPreview_6 from "./assets/images/social-proof-section.jpeg";
import projectPreview_7 from "./assets/images/four-card-feature-section.jpeg";
import projectPreview_8 from "./assets/images/NFT-preview-card-component.jpeg";
import projectPreview_9 from "./assets/images/huddle-landing-page-with-a-single-introductory section.jpeg";
import projectPreview_10 from "./assets/images/fylo-data-storage-component.jpeg";
import projectPreview_11 from "./assets/images/QR-code-component.jpeg";
import projectPreview_12 from "./assets/images/testimonials-grid-section.jpeg";
import projectPreview_13 from "./assets/images/IP-address-tracker-challenge.jpeg";
import projectPreview_14 from "./assets/images/URL-shortening-API-landing-page.jpeg";
import projectPreview_15 from "./assets/images/article-preview-component.jpeg";
import projectPreview_16 from "./assets/images/ping-coming-soon.jpeg";
import projectPreview_17 from "./assets/images/FAQ-accordion-card.jpeg";
import projectPreview_18 from "./assets/images/Base-Apparel-coming-soon-page.jpeg";
import projectPreview_19 from "./assets/images/advice-generator-app.jpeg";
import projectPreview_20 from "./assets/images/Intro-component-with-sign-up-form.jpeg";
import projectPreview_21 from "./assets/images/pricing-component-with-toggle.jpeg";
import projectPreview_22 from "./assets/images/sunnyside-agency-landing-page.jpeg";
import projectPreview_23 from "./assets/images/fylo-dark-theme-landing-page.jpeg";
import projectPreview_24 from "./assets/images/rest-countries-api-with-color-theme-switcher.jpeg";
import projectPreview_25 from "./assets/images/interactive-rating-component.webp";
import projectPreview_26 from "./assets/images/calculator-app.webp";
import projectPreview_27 from "./assets/images/product-preview-card-component.webp";
import projectPreview_28 from "./assets/images/crowdfunding-product-page.webp";
import projectPreview_29 from "./assets/images/huddle-landing-page-with-alternating-feature-blocks.webp";
import projectPreview_30 from "./assets/images/news-homepage.webp";
import projectPreview_31 from "./assets/images/intro-section-with-dropdown-navigation.webp";
import projectPreview_32 from "./assets/images/fylo-landing-page-with-two-column-layout.webp";

export default {
  name: "App",
  components: {},
  data() {
    return {
      activeId: null,
      isToggled: false,
      headerDetails: [
        {
          headerIcon: headerIcon,
          navIcon: navIcon,
          projectUrl:
            "https://catherineisonline.github.io/frontend-mentor-challenge-solutions/",
          frontendMentorUrl:
            "https://www.frontendmentor.io/profile/catherineisonline",
          gitHubUrl:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions",
          linkedinUrl: "https://www.linkedin.com/in/catherinemitagvaria/",
        },
      ],
      solutions: [
        {
          id: 1,
          projectName: "Stats preview card component",
          projectDescribtion:
            "This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills.",
          projectStack: ["HTML", "CSS"],
          projectPreview: projectPreview_1,
          projectLink:
            "https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/stats-preview-card",
        },
        {
          id: 2,
          projectName: "Order summary component",
          projectDescribtion:
            "A perfect project for newbies who are starting to build confidence with layouts!",
          projectStack: ["HTML", "CSS"],
          projectPreview: projectPreview_2,
          projectLink:
            "https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/order-summary-component",
        },
        {
          id: 3,
          projectName: "Profile card component",
          projectDescribtion:
            "This is a perfect challenge to test your layout skills. The card layout doesn't shift, so it's also great for those that haven't dived into responsive websites yet!",
          projectStack: ["HTML", "CSS"],
          projectPreview: projectPreview_3,
          projectLink:
            "https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/profile-card",
        },
        {
          id: 4,
          projectName: "Single price grid component",
          projectDescribtion:
            "In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.",
          projectStack: ["HTML", "CSS"],
          projectPreview: projectPreview_4,
          projectLink:
            "https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/single-price-grid",
        },
        {
          id: 5,
          projectName: "3-column preview card component",
          projectDescribtion:
            "This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.",
          projectStack: ["HTML", "CSS"],
          projectPreview: projectPreview_5,
          projectLink:
            "https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/three-column-card",
        },
        {
          id: 6,
          projectName: "Social proof section",
          projectDescribtion:
            "This project will test your layout skills. If you're starting to get confident with Flexbox or Grid, this will provide a nice challenge!",
          projectStack: ["HTML", "CSS"],
          projectPreview: projectPreview_6,
          projectLink:
            "https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/social-proof-section",
        },
        {
          id: 7,
          projectName: "Four card feature section",
          projectDescribtion:
            "A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.",
          projectStack: ["HTML", "CSS"],
          projectPreview: projectPreview_7,
          projectLink:
            "https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/four-card-feature-section",
        },
        {
          id: 8,
          projectName: "NFT preview card component",
          projectDescribtion:
            "This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.",
          projectStack: ["HTML", "CSS"],
          projectPreview: projectPreview_8,
          projectLink:
            "https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/nft-preview-card",
        },
        {
          id: 9,
          projectName: "Huddle landing page with a single introductory section",
          projectDescribtion:
            "A perfect challenge for beginners, this project will get you working with a two column layout.",
          projectStack: ["HTML", "CSS"],
          projectPreview: projectPreview_9,
          projectLink:
            "https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/huddle-landing-page",
        },
        {
          id: 10,
          projectName: "Fylo data storage component",
          projectDescribtion:
            "This component has some interesting CSS challenges in the design. If you're looking to test your CSS skills, this will be a great project for you!",
          projectStack: ["HTML", "CSS"],
          projectPreview: projectPreview_10,
          projectLink:
            "https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/fylo-data-storage",
        },
        {
          id: 11,
          projectName: "QR code component",
          projectDescribtion:
            "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
          projectStack: ["HTML", "CSS"],
          projectPreview: projectPreview_11,
          projectLink:
            "https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/qr-code-component",
        },
        {
          id: 12,
          projectName: "Testimonials grid section",
          projectDescribtion:
            "This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!",
          projectStack: ["HTML", "CSS"],
          projectPreview: projectPreview_12,
          projectLink:
            "https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/testimonials-grid",
        },
        {
          id: 13,
          projectName: "IP Address Tracker",
          projectDescribtion:
            "In this challenge, you'll be using two separate APIs together to create an IP Address Tracking app.",
          projectStack: ["HTML", "CSS", "JS", "API"],
          projectPreview: projectPreview_13,
          projectLink:
            "https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/ip-address-tracker",
        },
        {
          id: 14,
          projectName: "URL shortening API landing page",
          projectDescribtion:
            "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge.",
          projectStack: ["HTML", "CSS", "JS", "API"],
          projectPreview: projectPreview_14,
          projectLink:
            "https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/url-shortening-api",
        },
        {
          id: 15,
          projectName: "Article preview component",
          projectDescribtion:
            "Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well.",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: projectPreview_15,
          projectLink:
            "https://www.frontendmentor.io/solutions/article-preview-component-USFNBjIaV",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/article-preview-component",
        },
        {
          id: 16,
          projectName: "Ping coming soon page",
          projectDescribtion:
            "This challenge is great for beginners and offers a chance to practice basic client-side form validation.",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: projectPreview_16,
          projectLink:
            "https://www.frontendmentor.io/solutions/ping-coming-soon-page-iKops4Jwj",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/ping-coming-soon-page",
        },
        {
          id: 17,
          projectName: "FAQ Accordion Card",
          projectDescribtion:
            "In this challenge, you'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: projectPreview_17,
          projectLink:
            "https://www.frontendmentor.io/solutions/faq-accordion-card-tFrPJh5hD",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/faq-accordion-card",
        },
        {
          id: 18,
          projectName: "Base Apparel coming soon page",
          projectDescribtion:
            "This layout looks simple enough, but there are some interesting details to it that will test your CSS skills. You'll also get to practice basic form validation.",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: projectPreview_18,
          projectLink:
            "https://www.frontendmentor.io/solutions/base-apparel-coming-soon-page-KdvKyw8NE",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/base-apparel-coming-soon",
        },
        {
          id: 19,
          projectName: "Advice generator app",
          projectDescribtion:
            "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
          projectStack: ["HTML", "CSS", "JS", "API"],
          projectPreview: projectPreview_19,
          projectLink:
            "https://www.frontendmentor.io/solutions/advice-generator-app-wYjTeAeAf",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/advice-generator-app",
        },
        {
          id: 20,
          projectName: "Intro component with sign-up form",
          projectDescribtion:
            "Practice building out a sign-up form complete with client-side validation using JavaScript.",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: projectPreview_20,
          projectLink:
            "https://www.frontendmentor.io/solutions/intro-component-with-signup-form-BfhVbWQEM",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/intro-component-with-sign-up",
        },
        {
          id: 21,
          projectName: "Pricing component with toggle",
          projectDescribtion:
            "This challenge will get you thinking about building an accessible custom toggle control and also test your layout skills.",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: projectPreview_21,
          projectLink:
            "https://www.frontendmentor.io/solutions/pricing-component-with-toggle-IUaYc_2FA",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/pricing-component",
        },
        {
          id: 22,
          projectName: "Sunnyside agency landing page",
          projectDescribtion:
            "This challenge will be a perfect test of your layout and responsive skills. There's a tiny bit of JS for the mobile menu, but the focus is HTML & CSS.",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: projectPreview_22,
          projectLink:
            "https://www.frontendmentor.io/solutions/sunnyside-agency-landing-page-QfXrSGu5A",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/sunnyside-agency-landing",
        },
        {
          id: 23,
          projectName: "Fylo dark theme landing page",
          projectDescribtion:
            "This design has some nice layout challenges in it. A perfect training ground to practice your Flexbox and/or Grid skills.",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: projectPreview_23,
          projectLink:
            "https://www.frontendmentor.io/solutions/fylo-dark-theme-landing-page-97wbDcVX8",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/fylo-dark-theme",
        },
        {
          id: 24,
          projectName: "REST Countries API with color theme switcher",
          projectDescribtion:
            "If you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.",
          projectStack: ["HTML", "CSS", "JS", "API"],
          projectPreview: projectPreview_24,
          projectLink:
            "https://www.frontendmentor.io/solutions/rest-countries-api-with-color-theme-switcher-SySqXmn49",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/rest-countries",
        },
        {
          id: 25,
          projectName: "Interactive rating component",
          projectDescribtion:
            "This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: projectPreview_25,
          projectLink:
            "https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/main/interactive-rating-component",
        },
        {
          id: 26,
          projectName: "Calculator App",
          projectDescribtion:
            "This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: projectPreview_26,
          projectLink:
            "https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/refactor/calculator",
        },

        {
          id: 27,
          projectName: "Product preview card component",
          projectDescribtion:
            "This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects.",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: projectPreview_27,
          projectLink:
            "https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/refactor/product-preview-card",
        },
        {
          id: 28,
          projectName: "Crowdfunding product page",
          projectDescribtion:
            "This challenge will test both your layout and state management skills. As visitors make pledges, your goal is to keep track of the changes.",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: projectPreview_28,
          projectLink:
            "https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/refactor/crowdfunding-product-page",
        },
        {
          id: 29,
          projectName: "Huddle landing page with alternating feature blocks",
          projectDescribtion:
            "This challenge is perfect if you're wanting to practice your layout skills. If you're starting to get a bit more confident laying out a web page, give this project a go.",
          projectStack: ["HTML", "CSS"],
          projectPreview: projectPreview_29,
          projectLink:
            "https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/refactor/huddle-page-with-blocks",
        },
        {
          id: 30,
          projectName: "News homepage",
          projectDescribtion:
            "This news homepage will be an excellent opportunity to practice your CSS Grid skills. There will be lots of tricky decisions to make and plenty of learning opportunities!",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: projectPreview_30,
          projectLink:
            "https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/refactor/news-homepage",
        },
        {
          id: 31,
          projectName: "Intro section with dropdown navigation",
          projectDescribtion:
            "This challenge will test your ability to create dropdown navigation menus, a common pattern on larger sites. It will also provide some nice basic layout challenges.",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: projectPreview_31,
          projectLink:
            "https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/refactor/intro-section-with-dropdown",
        },
        {
          id: 32,
          projectName: "Fylo landing page with two column layout",
          projectDescribtion:
            "This project is great if you're starting to get confident with slightly more complex layouts. The second section with the testimonial area will provide a nice challenge.",
          projectStack: ["HTML", "CSS"],
          projectPreview: projectPreview_32,
          projectLink:
            "https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5",
          repoLink:
            "https://github.com/catherineisonline/frontend-mentor-challenge-solutions/tree/refactor/fylo-landing-with-two-columns",
        },
      ],
    };
  },
  methods: {
    showMenu(id) {
      this.activeId = id;
    },
    hideMenu() {
      this.activeId = null;
    },
    toggleMenu() {
      this.isToggled = !this.isToggled;
    },
  },
};
</script>
