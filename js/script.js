function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
  document.body.classList.toggle("menu-open");
}

// script.js
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".fade-in-section").classList.add("show");
});
