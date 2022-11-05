btn_toggle = document.querySelector('.menu-icon');
menu = document.querySelector('.navbar');

btn_toggle.addEventListener('click', () => {
    menu.classList.toggle('navbar-active');
});