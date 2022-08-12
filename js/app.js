// Dérouler le menu de la barre de navigation (sur petits écrans)
const burger = document.getElementById('burger');
const links = document.getElementById('links');

burger.addEventListener('click', () => {
    links.classList.toggle('show-links');
})