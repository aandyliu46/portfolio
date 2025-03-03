document.addEventListener("DOMContentLoaded", function(){

    // toggle light and dark mode...
    const themeToggle = document.getElementById("theme");
    console.log(themeToggle);
    let darkMode = false;
    themeToggle.addEventListener('click', () => {
        darkMode = !darkMode;
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
      });

});