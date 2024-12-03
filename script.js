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

const buttons = document.querySelectorAll(".about-btn button");
const contents = document.querySelectorAll(".content");

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        contents.forEach(content => content.style.display = 'none');
        contents[index].style.display = 'block';
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});


// portfolio fillter

var mixer = mixitup('.portfolio-galeria',{
    selectors: {
        target: '.portfolio-box'
    },
    animation: {
        duration: 500
    }
});


// side progress bar

let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeigth = document.documentElement.scrollHeight - document.documentElement.clientHeigth;
    let scrollValue = Math.round((pos * 100)/calcHeigth);

    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else {
        scrollProgress.style.display = "none"
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#e6006d ${scrollValue}%)`;
    
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


//active menu

let menuLi = document.querySelectorAll("header ul li a")
let section = document.querySelectorAll("section")

function activeMenu(){
    let len = section.length
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();

window.addEventListener("scroll", activeMenu);

//////////// open and close navbar

let navlist = document.querySelector(".navlist");
