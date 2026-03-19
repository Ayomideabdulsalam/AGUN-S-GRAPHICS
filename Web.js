const mobileMenu = document.getElementById('mobileMenu');
const mainNav = document.getElementById('mainNav');
mobileMenu.addEventListener('click', function() {
  mainNav.classList.toggle('active');
  mobileMenu.innerHTML = mainNav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('active');
    mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
  });
});
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    const filterValue = button.getAttribute('data-filter');
    portfolioCards.forEach(card => {
      if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
const fadeElements = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
fadeElements.forEach(element => {
  appearOnScroll.observe(element);
});
const whatsappButton = document.querySelector('.whatsapp-button');
whatsappButton.addEventListener('click', function(e) {
  // The link already has the pre-filled message, so we just let it open
  // You could add analytics here if needed
  console.log('WhatsApp contact initiated');
});

// Add some random animation to service cards on page load
document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });
  // Animate hero text
  const heroContent = document.querySelector('.hero-content');
  heroContent.classList.add('animate_animated', 'animate_fadeIn');
});
