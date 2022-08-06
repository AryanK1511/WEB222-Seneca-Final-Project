let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle('move');
});

window.onscroll = () => {
    navbar.classList.remove('open-menu');
    menu.classList.remove('move');
}