$(document).ready(function () {
    $("a").on('click', function (event) {

        if ((this.hash !== "") && (this.hash !== "#forDesktop") && (this.hash !== "#forMobile")) {
            event.preventDefault();

            const elem = this;
            $('html, body').animate({
                scrollTop: $($(elem).attr('href')).offset().top
            }, 1000);
        }
    });
});

$(document).ready(function () {
    $("a").on('click', function (event) {

        if ((this.hash === "#forDesktop") && (this.hash !== "#forMobile")) {
            event.preventDefault();
        }
    });
});


function hideURLbar() {
    window.scrollTo(0, 1);
}

addEventListener("load", function () {
    setTimeout(hideURLbar, 0);
}, false);


const hamburger = document.querySelector('.menu');
const navLink = document.querySelector('nav');
const Links = document.querySelectorAll('nav ul li');
const navHeader = document.querySelector('.navigation-bar');

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('Navtoggle');
    // navLink.toggle('bacolor');
    Links.forEach(link => {
        link.classList.toggle('fade');
    });
});

let i = 0;
const text = "November 2, 2019";
const speed = 150;

function type() {
    let alphabet = text.charAt(i);

    document.getElementById("eventDate").innerHTML += alphabet;
    i++;
    setTimeout(type, speed);


};
// hamburger.addEventListener('click',function () {
//     $(navHeader).toggleClass('nav-scroll');
// });
type();
AOS.init({
    disable: 'mobile'
});

addEventListener("load", function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 70) {
            // $('.navigation-bar').addClass('nav-scroll');
            $(".navigation-bar").fadeIn(500, function () {
                $(this).addClass("nav-scroll");
            });
        } else {
            // $('.navigation-bar').removeClass('nav-scroll');
            $(".navigation-bar").fadeIn("slow", function () {
                $(this).removeClass("nav-scroll");
            });
        }
    });
});


var targetDate = new Date(2019, 10, 2, 0, 0, 0); // target date

function calcDays() {
    var currentDate = new Date();
    var day = (targetDate - currentDate) / (1000 * 60 * 60 * 24);
    if (day <= 0) {
        day = 0;
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

document.querySelector('video').defaultPlaybackRate = 0.5;
document.querySelector('video').play();



$('#accordion0').click(function () {
    $(this).addClass("opened");
    $('#accordion1').removeClass("opened");
    $('#accordion2').removeClass("opened");
    $('#accordion3').removeClass("opened");

    $('#tab0').addClass("active");
    $('#tab1').removeClass("active");
    $('#tab2').removeClass("active");
    $('#tab3').removeClass("active");
});

$('#accordion1').click(function () {
    $(this).addClass("opened");
    $('#accordion0').removeClass("opened");
    $('#accordion2').removeClass("opened");
    $('#accordion3').removeClass("opened");

    $('#tab1').addClass("active");
    $('#tab0').removeClass("active");
    $('#tab2').removeClass("active");
    $('#tab3').removeClass("active");
});
$('#accordion2').click(function () {
    $(this).addClass("opened");
    $('#accordion0').removeClass("opened");
    $('#accordion1').removeClass("opened");
    $('#accordion3').removeClass("opened");

    $('#tab2').addClass("active");
    $('#tab0').removeClass("active");
    $('#tab1').removeClass("active");
    $('#tab3').removeClass("active");
});
$('#accordion3').click(function () {
    $(this).addClass("opened");
    $('#accordion0').removeClass("opened");
    $('#accordion1').removeClass("opened");
    $('#accordion2').removeClass("opened");

    $('#tab3').addClass("active");
    $('#tab1').removeClass("active");
    $('#tab2').removeClass("active");
    $('#tab0').removeClass("active");
});




$('#panellist0').click(function () {
    $(this).addClass("active");
    $('#panellist1').removeClass("active");
    $('#panellist2').removeClass("active");
    $('#panellist3').removeClass("active");

    $('#Panel0').addClass("active");
    $('#Panel1').removeClass("active");
    $('#Panel2').removeClass("active");
    $('#Panel3').removeClass("active");
});

$('#panellist1').click(function () {
    $(this).addClass("active");
    $('#panellist0').removeClass("active");
    $('#panellist2').removeClass("active");
    $('#panellist3').removeClass("active");

    $('#Panel1').addClass("active");
    $('#Panel0').removeClass("active");
    $('#Panel2').removeClass("active");
    $('#Panel3').removeClass("active");
});
$('#panellist2').click(function () {
    $(this).addClass("active");
    $('#panellist0').removeClass("active");
    $('#panellist1').removeClass("active");
    $('#panellist3').removeClass("active");

    $('#Panel2').addClass("active");
    $('#Panel1').removeClass("active");
    $('#Panel0').removeClass("active");
    $('#Panel3').removeClass("active");
});
$('#panellist3').click(function () {
    $(this).addClass("active");
    $('#panellist0').removeClass("active");
    $('#panellist1').removeClass("active");
    $('#panellist2').removeClass("active");

    $('#Panel3').addClass("active");
    $('#Panel2').removeClass("active");
    $('#Panel1').removeClass("active");
    $('#Panel0').removeClass("active");
});