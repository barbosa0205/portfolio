const $btnMoon = document.querySelector('#btn-moon');
const $wave = document.querySelector('.wave');
let dark = false;

$btnMoon.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
