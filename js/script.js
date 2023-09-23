<<<<<<< HEAD
let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav__links");
let navPhone = document.querySelector(".nav__phone");
let nav = document.querySelector("nav");
let servicesItemAll = document.querySelectorAll(".services__item");
let servicesImgAll = document.querySelectorAll(".services__img img");
let servicesSpanAll = document.querySelectorAll(".services__spans span")

hamburger.onclick = function () {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active");
    navPhone.classList.toggle("nav__phone_active");
}
function navShow() {
    let startHeight = window.pageYOffset;
    window.onscroll = function () {
        let realHeight = window.pageYOffset;
        if (realHeight == 0 || startHeight > realHeight) {
            nav.style.top = "0px";
            if (realHeight != 0) {
                nav.classList.add("nav_white");
            }
            else {
                nav.classList.remove("nav_white");
            }
        }
        else {
            nav.style.top = "-120px";
        }
        startHeight = realHeight;
    }
}
navShow();
// функция айтемов, картинок, включение выключение спанов
for(let i = 0; i < servicesItemAll.length; i++) {
    servicesItemAll[i].onclick = function() {
        for(let a = 0; a < servicesItemAll.length; a++) {
            servicesItemAll[a].classList.remove("_active");
            servicesImgAll[a].classList.remove("_show");
            servicesSpanAll[a].classList.remove("services__span_active")
        }
        servicesItemAll[i].classList.add("_active");
        servicesImgAll[i].classList.add("_show");
        servicesSpanAll[i].classList.add("services__span_active")
    }
}
// функция спан кликабельность
for(let i = 0; i < servicesItemAll.length; i++) {
    servicesSpanAll[i].onclick = function() {
        for(let a = 0; a < servicesItemAll.length; a++) {
            servicesItemAll[a].classList.remove("_active");
            servicesImgAll[a].classList.remove("_show");
            servicesSpanAll[a].classList.remove("services__span_active")
        }
        servicesItemAll[i].classList.add("_active");
        servicesImgAll[i].classList.add("_show");
        servicesSpanAll[i].classList.add("services__span_active")
    }
=======
let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav__links");
let navPhone = document.querySelector(".nav__phone");
let nav = document.querySelector("nav");
let servicesItemAll = document.querySelectorAll(".services__item");
let servicesImgAll = document.querySelectorAll(".services__img img");
let servicesSpanAll = document.querySelectorAll(".services__spans span")

hamburger.onclick = function () {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active");
    navPhone.classList.toggle("nav__phone_active");
}
function navShow() {
    let startHeight = window.pageYOffset;
    window.onscroll = function () {
        let realHeight = window.pageYOffset;
        if (realHeight == 0 || startHeight > realHeight) {
            nav.style.top = "0px";
            if (realHeight != 0) {
                nav.classList.add("nav_white");
            }
            else {
                nav.classList.remove("nav_white");
            }
        }
        else {
            nav.style.top = "-120px";
        }
        startHeight = realHeight;
    }
}
navShow();
// функция айтемов, картинок, включение выключение спанов
for(let i = 0; i < servicesItemAll.length; i++) {
    servicesItemAll[i].onclick = function() {
        for(let a = 0; a < servicesItemAll.length; a++) {
            servicesItemAll[a].classList.remove("_active");
            servicesImgAll[a].classList.remove("_show");
            servicesSpanAll[a].classList.remove("services__span_active")
        }
        servicesItemAll[i].classList.add("_active");
        servicesImgAll[i].classList.add("_show");
        servicesSpanAll[i].classList.add("services__span_active")
    }
}
// функция спан кликабельность
for(let i = 0; i < servicesItemAll.length; i++) {
    servicesSpanAll[i].onclick = function() {
        for(let a = 0; a < servicesItemAll.length; a++) {
            servicesItemAll[a].classList.remove("_active");
            servicesImgAll[a].classList.remove("_show");
            servicesSpanAll[a].classList.remove("services__span_active")
        }
        servicesItemAll[i].classList.add("_active");
        servicesImgAll[i].classList.add("_show");
        servicesSpanAll[i].classList.add("services__span_active")
    }
>>>>>>> e127a7435aba2c9f8ccb4c7375d221665d717750
}