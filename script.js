//ACTIVE MENU HAMBURGER

let menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
});

// rotate text js code

let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");

// switch between about buttons

const buttons = document.querySelectorAll(".about-btn buttons");
const contents = document.querySelectorAll(".content");