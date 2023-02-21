// JavaScript Document

// NAVIGATION
const hamb = document.querySelector(".hamb");
const navMenu = document.querySelector(".nav_list");

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamb.classList.toggle("active");
	navMenu.classList.toggle("active");
}

// SLIDESHOWS
let slideIndex = [1, 1, 1, 1];
let slideId = ["slides1", "slides2", "slides3", "slides4"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
	showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
	let i;
	let x = document.getElementsByClassName(slideId[no]);
	if (n > x.length) {
		slideIndex[no] = 1;
	}
	if (n < 1) {
		slideIndex[no] = x.length
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex[no]-1].style.display = "block";
}

// UPDATE COPYRIGHT
document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
