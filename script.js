// Typing animation for header paragraph
const typingText = document.getElementById("typing-text");
const phrases = [
  "MERN Stack Developer",
  "Frontend Enthusiast",
  "Passionate Coder",
  "Lifelong Learner"
];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 120;

function type() {
  const currentPhrase = phrases[currentPhraseIndex];
  if (isDeleting) {
    currentCharIndex--;
    typingText.textContent = currentPhrase.substring(0, currentCharIndex);
    if (currentCharIndex == 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }
  } else {
    currentCharIndex++;
    typingText.textContent = currentPhrase.substring(0, currentCharIndex);
    if (currentCharIndex == currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1500; // Pause before deleting
    } else {
      typingSpeed = 120;
    }
  }
  setTimeout(type, typingSpeed);
}
type();

// Scroll reveal animation for sections
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Theme toggle button
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggleBtn.textContent = "🌗";
  }
});

// Load theme from localStorage
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggleBtn.textContent = "☀️";
  } else {
    themeToggleBtn.textContent = "🌗";
  }
});

// Contact form submission (simple alert, no backend)
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for your message! I'll get back to you soon.");
  contactForm.reset();
});
