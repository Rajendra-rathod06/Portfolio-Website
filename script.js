// Theme toggle with localStorage
document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') html.classList.add('dark');
  if (saved === 'light') html.classList.remove('dark');

  const btn = document.getElementById('themeToggle');
  btn.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Dynamic year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
