document.addEventListener('DOMContentLoaded', function(){

    // responsive navbar | hamburger menu

    const menu = document.getElementById('menu');
    const navbar = document.getElementById('navbar');
    const close = document.getElementById('close');

    if (menu) {
        menu.addEventListener('click', () => {
            navbar.classList.add('active');
        })
    }

    if (close) {
        close.addEventListener('click', function(){
            navbar.classList.remove('active');
        })
    }







})