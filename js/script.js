let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav__links");
let navPhone = document.querySelector(".nav__phone");

hamburger.onclick = function() {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active");
    navPhone.classList.toggle("nav__phone_active");
}