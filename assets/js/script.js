const MENU = document.querySelector('#menu');
const HEADLINE = document.querySelector('#headline');

HEADLINE.addEventListener('click', () => {
    MENU.classList.toggle('aktiv');
});

MENU.addEventListener('click', () => {
    MENU.classList.toggle('aktiv');
});