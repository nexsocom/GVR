const fadeElements = document.querySelectorAll(
  '.service-card, .about-content, .hero-left'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

fadeElements.forEach((element) => {
  element.classList.add('hidden');
  observer.observe(element);
});
