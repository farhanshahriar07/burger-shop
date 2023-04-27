let menuIcon = document.querySelector("#menu-icon");
let menu = document.querySelector(".menu");
let close = document.querySelector("#close");

menuIcon.addEventListener("click", () => {
	menu.classList.add("active");
	menuIcon.classList.add("active");
});
close.addEventListener("click", () => {
	menu.classList.remove("active");
	menuIcon.classList.remove("active");
});
