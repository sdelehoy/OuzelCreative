// JavaScript Document

// NAVIGATION
const hamb = document.querySelector(".hamb");
const navMenu = document.querySelector(".main-nav");

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamb.classList.toggle("active");
	navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
	hamb.classList.remove("active");
	navMenu.classList.remove("active");
}

// UPDATE COPYRIGHT
document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
