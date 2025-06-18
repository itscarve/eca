window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('fade-in');
      }
    });
  });

const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.fade-in-left, .fade-in-right').forEach(el => {
  observer.observe(el);
});
