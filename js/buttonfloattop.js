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

// Infinite sliders - seamless loop with double buffer
const sliders = document.querySelectorAll(".skills-slider");

sliders.forEach((slider) => {
  const track = slider.querySelector(".skills-slider__track");
  const group = slider.querySelector(".skills-slider__group");

  if (!track || !group) return;

  // Clone the group multiple times for seamless scroll
  const clone1 = group.cloneNode(true);
  clone1.setAttribute("aria-hidden", "true");
  const clone2 = group.cloneNode(true);
  clone2.setAttribute("aria-hidden", "true");
  track.appendChild(clone1);
  track.appendChild(clone2);

  // Get the width of one group
  const groupWidth = group.getBoundingClientRect().width;

  // Set exact widths
  group.style.width = `${groupWidth}px`;
  clone1.style.width = `${groupWidth}px`;
  clone2.style.width = `${groupWidth}px`;

  // Remove CSS animation
  track.style.animation = "none";
  track.style.transition = "none";

  // Determine direction based on slider class
  const isReverse = slider.classList.contains("skills-slider--reverse");

  // Start position: show the middle clone
  let position = -groupWidth;
  const speed = 0.5;

  // Pause on hover
  let isPaused = false;
  slider.addEventListener("mouseenter", () => {
    isPaused = true;
  });

  slider.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  function animateWithPause() {
    if (!isPaused) {
      if (isReverse) {
        // Right to left
        position -= speed;
        if (position <= -groupWidth * 2) {
          position = -groupWidth;
        }
      } else {
        // Left to right
        position += speed;
        if (position >= 0) {
          position = -groupWidth;
        }
      }

      track.style.transform = `translateX(${position}px)`;
    }

    requestAnimationFrame(animateWithPause);
  }

  animateWithPause();
});

// Scroll animations with IntersectionObserver
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px 50px 0px",
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

// Observe child cards within sections (excluding skill tags in sliders)
const cardsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    } else {
      entry.target.classList.remove("animate-in");
    }
  });
}, observerOptions);

const projectCards = document.querySelectorAll(".project-card");
const educationCards = document.querySelectorAll(".education-card");
const stats = document.querySelectorAll(".stat");

[...projectCards, ...educationCards, ...stats].forEach((el) => {
  cardsObserver.observe(el);
});
