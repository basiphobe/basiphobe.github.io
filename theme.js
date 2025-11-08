// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const html = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
themeIcon.textContent = currentTheme === 'dark' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeIcon.textContent = next === 'dark' ? '🌙' : '☀️';
});
