let darkMode = document.getElementById('dark-mode');
let theme = document.getElementById('theme')
let { body } = document;

darkMode.addEventListener('change', (e) => {
    darkMode.checked ? body.className = 'dark' : body.className = 'light';

    if (darkMode.checked) {
        theme.innerText = `Light Mode`
    } else { theme.innerText = `Dark Mode` }
});