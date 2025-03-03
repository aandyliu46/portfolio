document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme");

    let darkMode = localStorage.getItem('theme') === 'dark';

    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    document.body.classList.add('theme-loaded');
    themeToggle.addEventListener('click', () => {
        darkMode = !darkMode; 
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
        
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        document.body.classList.add('theme-loaded');

    });
});
