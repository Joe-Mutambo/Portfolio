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
