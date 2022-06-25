// navigation
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const submitButton = document.querySelector(".submit-button");

navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

submitButton.addEventListener("submit", () => {});
