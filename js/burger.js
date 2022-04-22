const burgerButton = document.querySelector(".header .head .burger");
const menu = document.querySelector(".header .head .menu");
const menuLinks = document.querySelectorAll(".header .head .menu ul li a");
const overlayBlock = document.querySelector(".header .head .menu .overlay");

function toggleMenu(){
    burgerButton.classList.toggle("active");
    menu.classList.toggle("active");
}
burgerButton.addEventListener("click",toggleMenu);
overlayBlock.addEventListener("click",toggleMenu);
menuLinks.forEach((menuLink)=>{
    menuLink.addEventListener("click",toggleMenu);
})