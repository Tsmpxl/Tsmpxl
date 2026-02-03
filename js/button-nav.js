const toggleBtn = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu .nav-links");

// Toggle menu on button click
toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu when any link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Close menu when clicking outside of it
document.addEventListener("click", (e) => {
  // Check if click is outside navMenu and toggleBtn
  if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});
