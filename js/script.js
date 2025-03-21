// Toggle Menu for Mobile
document.addEventListener("DOMContentLoaded", function () {
  const toggleMenu = document.querySelector(".toggle-menu");
  const navLinks = document.querySelector(".nav-links");

  toggleMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

// Form Submission Message
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting (for demo purposes)

    alert("Your message has been sent successfully!");
    contactForm.reset(); // Clear the form
  });
});

// Language Switcher
document.addEventListener("DOMContentLoaded", function () {
  const langButtons = document.querySelectorAll(".lang-btn");

  langButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Language switched to: " + this.textContent);
    });
  });
});
