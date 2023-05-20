let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav__links");
let navPhone = document.querySelector(".nav__phone");
let nav = document.querySelector("nav");

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