<script src="script.js" defer></script>
javascript
Copy code
// Dark/Light Mode Toggle
const toggle = document.createElement('button');
toggle.innerText = '🌙';
toggle.style.cssText = `
  position: fixed; top: 1rem; right: 1rem; z-index: 999;
  background: #222; color: #fff; border: none;
  padding: 0.5rem 0.8rem; border-radius: 5px; cursor: pointer;
`;
document.body.appendChild(toggle);

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  toggle.innerText = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
});

// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '⬆️';
scrollBtn.id = 'scrollToTop';
scrollBtn.style.cssText = `
  position: fixed; bottom: 2rem; right: 1.5rem; padding: 0.8rem;
  font-size: 1.2rem; display: none; z-index: 999;
  background: #27c7c7; color: #111; border: none; border-radius: 50%;
`;
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Section reveal on scroll
const reveals = document.querySelectorAll('.container');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
  });
}, { threshold: 0.15 });
reveals.forEach(sec => observer.observe(sec));

