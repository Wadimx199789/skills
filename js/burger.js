const burgerButton = document.querySelector(".header .head .burger");
const menu = document.querySelector(".header .head .menu");
const menuLinks = document.querySelectorAll(".header .head .menu ul li a");
const overlayBlock = document.querySelector(".header .head .menu .overlay");

function toggleMenu(){
    burgerButton.classList.toggle("active");
    if(burgerButton.classList.contains("active")){
        burgerButton.classList.remove("close")
    }
    else {
        burgerButton.classList.add("close");
    }
    menu.classList.toggle("active");
    if(menu.classList.contains("active")){
        menu.classList.remove("close")
    }
    else {
        menu.classList.add("close");
    }
}
burgerButton.addEventListener("click",toggleMenu);
overlayBlock.addEventListener("click",toggleMenu);
menuLinks.forEach((menuLink)=>{
    menuLink.addEventListener("click",toggleMenu);
})