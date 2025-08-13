document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-theme');
  const body = document.body;

  // Aplica o tema salvo no localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    toggleBtn.textContent = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
      toggleBtn.textContent = '☀️'; // sol
      localStorage.setItem('theme', 'dark');
    } else {
      toggleBtn.textContent = '🌙'; // lua
      localStorage.setItem('theme', 'light');
    }
  });
});