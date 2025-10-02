// Navigation menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navMenu.classList.toggle('hidden');
});

// Dark mode switch
const darkModeBtn = document.getElementById('dark-mode-btn');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Dynamic footer year
document.getElementById('footer-year').textContent = new Date().getFullYear();

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('form-feedback');
  if (!name || !email || !message) {
    feedback.textContent = "Please fill out all fields.";
    feedback.style.color = "red";
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
    return;
  }
  feedback.textContent = "Thank you for contacting us!";
  feedback.style.color = "green";
});
