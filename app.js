
 
const currentLocation = location.href;
const menuItem = document.querySelectorAll("a");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
	if (menuItem[i].href === currentLocation) {
		menuItem[i].className = "active";
	} else {
		menuItem[i].className = "";
	}
}

function focusFunc() {
	let parent = this.parentNode;
	parent.classList.add("focus");
}
function blurFunc() {
	let parent = this.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}

const inputs = document.querySelectorAll(".input");

inputs.forEach((input) => {
	input.addEventListener("focus", focusFunc);
	input.addEventListener("blur", blurFunc);
});
/*
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n){
	showSlides(slideIndex += n);
}
function currentSlide(n){
	showSlides(slideIndex = n);
}
 function showSlides(n){
	 var i;
	 var slides = document.getElementsByClassName("mySlides");
	 var dots = document.getElementsByClassName("dot");
	 if(n > slides.length){slideIndex = }
	 if(n < 1){slideIndex = slides.length}
	 for(i = 0; i < slides.length; i++){
		 slides[i].style.display = "none";
	 }
	 for(i = 0; i < slides.length; i++){
		 dots[i].className = dots[i].className.replace("active", "")
	 }
	 showSlides[slideIndex - 1].style.display = "block";
	 dots[slideIndex - 1].className += "active";
 }*/
