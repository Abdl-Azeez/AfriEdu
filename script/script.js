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
const text = "October 30, 2019";
const speed = 150;

function type() {
    let alphabet = text.charAt(i);

    document.getElementById("eventDate").innerHTML += alphabet;
    i++;
    setTimeout(type, speed);


};

type();

AOS.init();


// var targetDate = new Date(2020, 0, 1, 0, 0, 0);  // target date

// function calcDays()
// {
//   var currentDate = new Date();
//   var day  = (targetDate - currentDate) / (1000 * 60 * 60 * 24);

//    return day;
// }

// function calcHours(day)
// {
//    var hour = (day  - Math.floor(day)) * 24;

//    return hour;
// }

// function calcMin(hour)
// {
//    var min  = (hour  - Math.floor(hour)) * 60;

//    return min;
// }

// function calcSec(min)
// {
//    var sec  = (min  - Math.floor(min)) * 60;
//    return sec;
// }

//  function countdown()
// {
//    var day  = calcDays();
//    var hour = calcHours(day);
//    var min  = calcMin(hour);
//    var sec  = calcSec(min);

//    document.getElementById("fday").innerHTML  = Math.floor(day);
//    document.getElementById("fhour").innerHTML = Math.floor(hour);
//    document.getElementById("fmin").innerHTML  = Math.floor(min);
//    document.getElementById("fsec").innerHTML  = Math.floor(sec);
// } 



var targetDate = new Date(2019, 9, 30, 0, 0, 0); // target date

function calcDays() {
    var currentDate = new Date();
    var day = (targetDate - currentDate) / (1000 * 60 * 60 * 24);
    if (day<=0){
        day=0;
    }
    return day;
}

function calcHours(day) {
    var hour = (day - Math.floor(day)) * 24;

    return hour;
}

function calcMin(hour) {
    var min = (hour - Math.floor(hour)) * 60;

    return min;
}

function calcSec(min) {
    var sec = (min - Math.floor(min)) * 60;
    return sec;
}

function countdown() {
    var day = calcDays();
    var hour = calcHours(day);
    var min = calcMin(hour);
    var sec = calcSec(min);

    document.getElementById("fday").innerHTML = Math.floor(day);
    document.getElementById("fhour").innerHTML = Math.floor(hour);
    document.getElementById("fmin").innerHTML = Math.floor(min);
    document.getElementById("fsec").innerHTML = Math.floor(sec);
}