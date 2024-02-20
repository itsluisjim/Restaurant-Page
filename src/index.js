const { initialize } = require("./initial-load");
const { about } = require("./about");
const { menu } = require("./menu");
const { home } = require("./home");

let content = document.getElementById('content');

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');


homeBtn.addEventListener('click', (e) => {
    content.textContent = ''
    aboutBtn.classList.remove('active');
    menuBtn.classList.remove('active');

    homeBtn.classList.add('active');

    content.appendChild(home());
});
menuBtn.addEventListener('click', (e) => {
    content.textContent = ''
    homeBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    
    menuBtn.classList.add('active');

    content.appendChild(menu());
});
aboutBtn.addEventListener('click', (e) => {
    content.textContent = ''
    homeBtn.classList.remove('active');
    menuBtn.classList.remove('active');

    aboutBtn.classList.add('active');

    content.appendChild(about());
});

window.onload = initialize();
homeBtn.classList.add('active');