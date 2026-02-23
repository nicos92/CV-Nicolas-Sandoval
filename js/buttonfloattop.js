// Scroll to top button functionality
const scrollToTopBtn = document.getElementById("scrollToTop");

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Show/hide button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("visible");
  } else {
    scrollToTopBtn.classList.remove("visible");
  }
});

// Click event
scrollToTopBtn.addEventListener("click", scrollToTop);

// Scroll animations with IntersectionObserver
const observerOptions = {
  threshold: 0.05,
  rootMargin: "0px 0px 200px 0px",
};

// Observe sections
const sections = document.querySelectorAll(".section");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    } else {
      entry.target.classList.remove("animate-in");
    }
  });
}, observerOptions);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// Observe child cards - trigger when section is visible
const cardsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    } else {
      entry.target.classList.remove("animate-in");
    }
  });
}, observerOptions);

const skillCategories = document.querySelectorAll(".skill-category");
const projectCards = document.querySelectorAll(".project-card");
const educationCards = document.querySelectorAll(".education-card");
const stats = document.querySelectorAll(".stat");

[...skillCategories, ...projectCards, ...educationCards, ...stats].forEach(
  (el) => {
    cardsObserver.observe(el);
  },
);
