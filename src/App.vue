<template>
  <main>
    <header v-for="headerDetail in headerDetails" v-bind:key="headerDetail.id">
      <section class="header-info">
        <img :src="headerDetail.headerIcon" alt="icon" />
        <a :href="headerDetail.projectUrl">
          <h1><span>Frontend</span> Mentor Challenge Solutions</h1>
        </a>
      </section>
      <nav class="icon-navigation">
        <img
          class="nav-icon"
          :src="headerDetail.navIcon"
          alt=""
          @click="click"
        />

        <ul class="main-menu">
          <li>
            <i class="fas fa-home"></i
            ><a :href="headerDetail.projectUrl" @click="removeMenu">Home</a>
          </li>
          <li>
            <i class="fas fa-project-diagram"></i
            ><a
              :href="headerDetail.frontendMentorUrl"
              @click="removeMenu"
              target="_blank"
              >Frontend mentor</a
            >
          </li>
          <li>
            <i class="fab fa-github-square"></i
            ><a
              :href="headerDetail.gitHubUrl"
              @click="removeMenu"
              target="_blank"
              >Project repo</a
            >
          </li>
          <li>
            <i class="fab fa-linkedin"></i
            ><a
              :href="headerDetail.linkedinUrl"
              @click="removeMenu"
              target="_blank"
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
          v-bind:key="solution.id"
        >
          <!-- Project Preview -->
          <section class="project-preview">
            <img
              class="project-image"
              v-bind:src="solution.projectPreview"
              alt="project preview"
            />
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
                v-bind:class="projectStack"
                v-bind:key="projectStack"
              >
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
              @mouseenter="mouseenter"
              @mouseleave="mouseleave"
            >
              <button class="learn-more-btn">Learn more</button>
              <ul class="links">
                <li class="link-btn">
                  <a v-bind:href="solution.liveLink" target="_blank">Live</a>
                </li>
                <li class="link-btn">
                  <a v-bind:href="solution.repoLink" target="_blank">Repo</a>
                </li>
                <li class="link-btn">
                  <a v-bind:href="solution.projectLink" target="_blank"
                    >Try Out</a
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
export default {
  name: "App",
  components: {},
  data() {
    return {
      headerDetails: [
        {
          headerIcon: require("@/assets/images/favicon.png"),
          navIcon: require("@/assets/images/nav-icon.jpeg"),
          projectUrl: "https://frontend-mentor-challenge-solutions.vercel.app/",
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
          projectPreview: require("@/assets/images/stats-preview-card-component.jpeg"),
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
          projectPreview: require("@/assets/images/order-summary-component.jpeg"),
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
          projectPreview: require("@/assets/images/profile-card-component.jpeg"),
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
          projectPreview: require("@/assets/images/single-price-grid-component.jpeg"),
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
          projectPreview: require("@/assets/images/3-column-preview-card-component.jpeg"),
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
          projectPreview: require("@/assets/images/social-proof-section.jpeg"),
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
          projectPreview: require("@/assets/images/four-card-feature-section.jpeg"),
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
          projectPreview: require("@/assets/images/NFT-preview-card-component.jpeg"),
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
          projectPreview: require("@/assets/images/huddle-landing-page-with-a-single-introductory section.jpeg"),
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
          projectPreview: require("@/assets/images/fylo-data-storage-component.jpeg"),
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
          projectPreview: require("@/assets/images/QR-code-component.jpeg"),
          liveLink:
            "https://catherineisonline.github.io/QR-code-component-frontendmentor/",

          projectLink:
            "https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H",
          repoLink:
            "https://github.com/catherineisonline/QR-code-component-frontendmentor",
        },
        {
          id: 12,
          projectName: "Testimonials grid section",
          projectDescribtion:
            "This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!",
          projectStack: ["HTML", "CSS"],
          projectPreview: require("@/assets/images/testimonials-grid-section.jpeg"),
          liveLink:
            "https://catherineisonline.github.io/testimonials-grid-section-frontendmentor/",

          projectLink:
            "https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7",
          repoLink:
            "https://github.com/catherineisonline/testimonials-grid-section-frontendmentor",
        },
        {
          id: 13,
          projectName: "IP Address Tracker",
          projectDescribtion:
            "In this challenge, you'll be using two separate APIs together to create an IP Address Tracking app.",
          projectStack: ["HTML", "CSS", "JS", "API"],
          projectPreview: require("@/assets/images/IP-address-tracker-challenge.jpeg"),
          liveLink:
            "https://catherineisonline.github.io/ip-address-tracker-frontendmentor/",

          projectLink:
            "https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0",
          repoLink:
            "https://github.com/catherineisonline/ip-address-tracker-frontendmentor",
        },
        {
          id: 14,
          projectName: "URL shortening API landing page",
          projectDescribtion:
            "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge.",
          projectStack: ["HTML", "CSS", "JS", "API"],
          projectPreview: require("@/assets/images/URL-shortening-API-landing-page.jpeg"),
          liveLink:
            "https://catherineisonline.github.io/url-shortening-api-frontendmentor/",

          projectLink:
            "https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G",
          repoLink:
            "https://github.com/catherineisonline/url-shortening-api-frontendmentor",
        },
        {
          id: 15,
          projectName: "Article preview component",
          projectDescribtion:
            "Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well.",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: require("@/assets/images/article-preview-component.jpeg"),
          liveLink:
            "https://catherineisonline.github.io/article-preview-component-frontendmentor/",

          projectLink:
            "https://www.frontendmentor.io/solutions/article-preview-component-USFNBjIaV",
          repoLink:
            "https://github.com/catherineisonline/article-preview-component-frontendmentor",
        },
        {
          id: 16,
          projectName: "Ping coming soon page",
          projectDescribtion:
            "This challenge is great for beginners and offers a chance to practice basic client-side form validation.",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: require("@/assets/images/ping-coming-soon.jpeg"),
          liveLink:
            "https://catherineisonline.github.io/ping-coming-soon-page-frontendmentor/",

          projectLink:
            "https://www.frontendmentor.io/solutions/ping-coming-soon-page-iKops4Jwj",
          repoLink:
            "https://github.com/catherineisonline/ping-coming-soon-page-frontendmentor",
        },
        {
          id: 17,
          projectName: "FAQ Accordion Card",
          projectDescribtion:
            "In this challenge, you'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: require("@/assets/images/FAQ-accordion-card.jpeg"),
          liveLink:
            "https://catherineisonline.github.io/faq-accordion-card-frontendmentor/",

          projectLink:
            "https://www.frontendmentor.io/solutions/faq-accordion-card-tFrPJh5hD",
          repoLink:
            "https://github.com/catherineisonline/faq-accordion-card-frontendmentor",
        },
        {
          id: 18,
          projectName: "Base Apparel coming soon page",
          projectDescribtion:
            "This layout looks simple enough, but there are some interesting details to it that will test your CSS skills. You'll also get to practice basic form validation.",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: require("@/assets/images/Base-Apparel-coming-soon-page.jpeg"),
          liveLink:
            "https://catherineisonline.github.io/base-apparel-coming-soon-frontendmentor/",

          projectLink:
            "https://www.frontendmentor.io/solutions/base-apparel-coming-soon-page-KdvKyw8NE",
          repoLink:
            "https://github.com/catherineisonline/base-apparel-coming-soon-frontendmentor",
        },
        {
          id: 19,
          projectName: "Advice generator app",
          projectDescribtion:
            "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
          projectStack: ["HTML", "CSS", "JS", "API"],
          projectPreview: require("@/assets/images/advice-generator-app.jpeg"),
          liveLink:
            "https://catherineisonline.github.io/advice-generator-app-frontendmentor/",

          projectLink:
            "https://www.frontendmentor.io/solutions/advice-generator-app-wYjTeAeAf",
          repoLink:
            "https://github.com/catherineisonline/advice-generator-app-frontendmentor",
        },
        {
          id: 20,
          projectName: "Intro component with sign-up form",
          projectDescribtion:
            "Practice building out a sign-up form complete with client-side validation using JavaScript.",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: require("@/assets/images/Intro-component-with-sign-up-form.jpeg"),
          liveLink:
            "https://catherineisonline.github.io/intro-component-with-sign-up-form-frontendmentor/",

          projectLink:
            "https://www.frontendmentor.io/solutions/intro-component-with-signup-form-BfhVbWQEM",
          repoLink:
            "https://github.com/catherineisonline/intro-component-with-sign-up-form-frontendmentor",
        },
        {
          id: 21,
          projectName: "Pricing component with toggle",
          projectDescribtion:
            "This challenge will get you thinking about building an accessible custom toggle control and also test your layout skills.",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: require("@/assets/images/pricing-component-with-toggle.jpeg"),
          liveLink:
            "https://catherineisonline.github.io/pricing-component-with-toggle-frontendmentor/",

          projectLink:
            "https://www.frontendmentor.io/solutions/pricing-component-with-toggle-IUaYc_2FA",
          repoLink:
            "https://github.com/catherineisonline/pricing-component-with-toggle-frontendmentor",
        },
        {
          id: 22,
          projectName: "Sunnyside agency landing page",
          projectDescribtion:
            "This challenge will be a perfect test of your layout and responsive skills. There's a tiny bit of JS for the mobile menu, but the focus is HTML & CSS.",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: require("@/assets/images/sunnyside-agency-landing-page.jpeg"),
          liveLink:
            "https://catherineisonline.github.io/sunnyside-agency-landing-page-frontendmentor/",

          projectLink:
            "https://www.frontendmentor.io/solutions/sunnyside-agency-landing-page-QfXrSGu5A",
          repoLink:
            "https://github.com/catherineisonline/sunnyside-agency-landing-page-frontendmentor",
        },
        {
          id: 23,
          projectName: "Fylo dark theme landing page",
          projectDescribtion:
            "This design has some nice layout challenges in it. A perfect training ground to practice your Flexbox and/or Grid skills.",
          projectStack: ["HTML", "CSS", "JS"],
          projectPreview: require("@/assets/images/fylo-dark-theme-landing-page.jpeg"),
          liveLink:
            "https://catherineisonline.github.io/fylo-dark-theme-landing-page-frontendmentor/",

          projectLink:
            "https://www.frontendmentor.io/solutions/fylo-dark-theme-landing-page-97wbDcVX8",
          repoLink:
            "https://github.com/catherineisonline/fylo-dark-theme-landing-page-frontendmentor",
        },
        {
          id: 24,
          projectName: "REST Countries API with color theme switcher",
          projectDescribtion:
            "If you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.",
          projectStack: ["HTML", "CSS", "JS", "API"],
          projectPreview: require("@/assets/images/rest-countries-api-with-color-theme-switcher.jpeg"),
          liveLink: "https://catherineisonline.github.io/rest-countries/",

          projectLink:
            "https://www.frontendmentor.io/solutions/rest-countries-api-with-color-theme-switcher-SySqXmn49",
          repoLink: "https://github.com/catherineisonline/rest-countries",
        },
      ],
    };
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
    click() {
      document.querySelector(".main-menu").classList.toggle("show-menu");
    },
    removeMenu() {
      document.querySelector(".main-menu").classList.remove("show-menu");
    },
  },
};
</script>

<style>
</style>
