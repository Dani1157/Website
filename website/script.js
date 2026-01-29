const menuOpenbutton = document.getElementById("menu-open-button");
const menuClosebutton = document.getElementById("menu-close-button");
const navMenu = document.querySelector(".nav-menu");

// Open menu
menuOpenbutton.addEventListener("click", () => {
 document.body.classList.toggle("show-mobile-menu");
});

// Close menu
menuClosebutton.addEventListener("click", () => menuOpenbutton.click());
