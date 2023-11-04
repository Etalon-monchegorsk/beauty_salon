let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav__links");
let navPhone = document.querySelector(".nav__phone");
let links = document.querySelectorAll(".nav__elements a")
let nav = document.querySelector("nav");
let servicesItemAll = document.querySelectorAll(".services__item");
let servicesImgAll = document.querySelectorAll(".services__img img");
let servicesSpanAll = document.querySelectorAll(".services__spans span")

hamburger.onclick = function () {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active");
    navPhone.classList.toggle("nav__phone_active");
}
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        hamburger.classList.remove("hamburger_active");
        navLinks.classList.remove("nav__links_active");
        navPhone.classList.remove("nav__phone_active");
    }
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
for (let i = 0; i < servicesItemAll.length; i++) {
    servicesItemAll[i].onclick = function () {
        for (let a = 0; a < servicesItemAll.length; a++) {
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
for (let i = 0; i < servicesItemAll.length; i++) {
    servicesSpanAll[i].onclick = function () {
        for (let a = 0; a < servicesItemAll.length; a++) {
            servicesItemAll[a].classList.remove("_active");
            servicesImgAll[a].classList.remove("_show");
            servicesSpanAll[a].classList.remove("services__span_active")
        }
        servicesItemAll[i].classList.add("_active");
        servicesImgAll[i].classList.add("_show");
        servicesSpanAll[i].classList.add("services__span_active")
    }
}
function ChangeDate() {
    let inputDate = document.querySelector("#data");
    let divDate = document.querySelector(".data-input");
    inputDate.onchange = function () {
        let dataText = inputDate.value;
        divDate.innerText = dataText;
    }
}
function ChangeSelect() {
    let inputSelect = document.querySelector("#select");
    let divSelect = document.querySelector(".select-input");
    inputSelect.onchange = function () {
        let selectText = inputSelect.value;
        divSelect.innerText = selectText;
    }
}
ChangeSelect();
ChangeDate();


// var date_string = "2023-10-29T15:54";

// // Преобразование строки в объект Date
// var date_obj = new Date(date_string);

// // Функция для добавления ведущего нуля, если число < 10
// function pad(number) {
//   if (number < 10) {
//     return "0" + number;
//   }
//   return number;
// }

// // Форматирование даты в желаемый формат
// var formatted_date = pad(date_obj.getDate()) + "." + pad(date_obj.getMonth() + 1) + "." + date_obj.getFullYear() + " " + pad(date_obj.getHours()) + ":" + pad(date_obj.getMinutes());