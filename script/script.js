const hamburger = document.querySelector('.menu');
const navLink = document.querySelector('nav');
const Links = document.querySelectorAll('ul li');

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('active');
    Links.forEach(link => {
        link.classList.toggle('fade');
    });
});

let i = 0;
const text = "October 19, 2019";
const speed = 150;

function type() {
    let alphabet = text.charAt(i);

    document.getElementById("eventDate").innerHTML += alphabet;
    i++;
    setTimeout(type, speed);

};

type();

AOS.init();