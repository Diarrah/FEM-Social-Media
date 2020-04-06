let darkMode = document.getElementById('dark-mode');
let { body } = document;

darkMode.addEventListener('change', (e) => {
    darkMode.checked ? body.className = 'dark' : body.className = 'light';
});