const headerBars = document.querySelector("#header__bars");
const headerLinks = document.querySelectorAll(".header__menu li a ");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile__nav-link");
const themeToggle = document.querySelector("#theme-toggle");
const icons = document.querySelectorAll(".about__me-icon-path");
const heroTitle = document.querySelector(".hero__subtitle");
const mobileLinkAnchors = document.querySelectorAll(".mobile__nav-link a");
const mobileThemeToggle = document.querySelector("#theme-toggle-mobile");
const aboutSubtitle = document.querySelector(".about__me-subtitle");
const email = document.querySelector(".contact__email");
const footer = document.querySelector("footer");
const projectDesc = document.querySelectorAll(".project__description");
const projectCards = document.querySelectorAll(".project__card");
let isMobileNavOpen = false;

headerBars.addEventListener("click", () => {
  mobileNav.style.display =
    mobileNav.style.display === "block" ? "none" : "block";

  console.log("hello");
});
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.style.display = "none";
    document.body.style.overflowY = "auto";
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.classList.toggle("dark");
  icons.forEach((icon) => {
    icon.classList.toggle("dark-icon");
  });
  heroTitle.classList.toggle("dark-title");
  headerBars.classList.toggle("dark");
  mobileLinks.forEach((link) => {
    link.classList.toggle("dark");
  });
  mobileNav.classList.toggle("dark");
  mobileLinkAnchors.forEach((anchor) => {
    anchor.classList.toggle("dark");
  });
  headerLinks.forEach((link) => {
    link.classList.toggle("dark");
  });
  aboutSubtitle.classList.toggle("dark");
  email.classList.toggle("dark");
  footer.classList.toggle("dark");
  projectDesc.forEach((desc) => {
    desc.classList.toggle("dark");
  });
  projectCards.forEach((card) => {
    card.classList.toggle("dark-card");
  });
  mobileThemeToggle.classList.toggle("dark");
});

mobileThemeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.classList.toggle("dark");
  icons.forEach((icon) => {
    icon.classList.toggle("dark-icon");
  });
  heroTitle.classList.toggle("dark-title");
  headerBars.classList.toggle("dark");
  mobileLinks.forEach((link) => {
    link.classList.toggle("dark");
  });
  mobileNav.classList.toggle("dark");
  mobileLinkAnchors.forEach((anchor) => {
    anchor.classList.toggle("dark");
  });
  headerLinks.forEach((link) => {
    link.classList.toggle("dark");
  });
  aboutSubtitle.classList.toggle("dark");
  email.classList.toggle("dark");
  footer.classList.toggle("dark");
  projectDesc.forEach((desc) => {
    desc.classList.toggle("dark");
  });
  projectCards.forEach((card) => {
    card.classList.toggle("dark-card");
  });
  mobileThemeToggle.classList.toggle("dark");
});
