let content1 = document.getElementById("centent1");
let content2 = document.getElementById("centent2");
let content3 = document.getElementById("centent3");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");


function openHome () {
    content1.style.transform = "translateY(0)";
    content2.style.transform = "translateX(200%)";
    content3.style.transform = "translateY(200%)";

    content1.style.transitionDelay = ".5s";
    content2.style.transitionDelay = "0s";
    content3.style.transitionDelay = "0s";

    btn1.style.color = "#1AA7EC";
    btn2.style.color = "black";
    btn3.style.color = "black";
};


function openServices () {
    content1.style.transform = "translateY(-200%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateY(200%)";

    content1.style.transitionDelay = "0s";
    content2.style.transitionDelay = ".5s";
    content3.style.transitionDelay = "0s";
    
    btn1.style.color = "black";
    btn2.style.color = "#1AA7EC";
    btn3.style.color = "black";
};


function openProducts () {
    content1.style.transform = "translateY(-200%)";
    content2.style.transform = "translateX(200%)";
    content3.style.transform = "translateY(0)";

    content1.style.transitionDelay = "0";
    content2.style.transitionDelay = "0s";
    content3.style.transitionDelay = ".5s";

    btn1.style.color = "black";
    btn2.style.color = "black";
    btn3.style.color = "#1AA7EC";
};


let magic = document.getElementById("magic");
let main = document.querySelector("main");


magic.onclick = function () {
    main.classList.toggle("hide");
    magic.classList.toggle("change");
    magic.style.transition = ".5s"
    main.style.transition = ".5s"
};