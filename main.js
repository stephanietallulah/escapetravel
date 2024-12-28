let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times')
    searchBar.classList.remove('active')
};

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active')
});

const menuBar = document.getElementById('menu-bar');
const navbar = document.querySelector('.navbar');

menuBar.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (!input.value) {
            input.setCustomValidity('This field is required');
        } else {
            input.setCustomValidity('');
        }
    });
});

