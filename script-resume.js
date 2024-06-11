// menu

const menuButton = document.querySelector('#dropdownMenu')
const menu = document.querySelector('#menu')
const cross = document.querySelector('#crossButton')

cross.onclick = menuCross;
menuButton.onclick = menuFnction;

function menuCross() {
    menu.style.display = "none"
}

function menuFnction() {
menu.style.display = "block"
}

// menusticky on mobil devices

const menuSticky = document.querySelector('#menuSticky')
const scrollIcon = document.querySelector('#scrollIcon')
const checker = document.querySelector('#checker')

let style2 = window.getComputedStyle(checker, null).getPropertyValue('font-size');
let menU = setInterval(menuFU, 500);

function menuFU() {
    if (style2 === "16px") {
        menuSticky.classList.remove('sticky')
}
if (style2 === "8px") {
    
    if (window.scrollY > menuSticky.offsetTop) {
        menuSticky.classList.add('sticky')
    }else {
        menuSticky.classList.remove('sticky')
      
    }
}

}

// intersection oberserver

const hiddenElements = document.querySelectorAll('.hidden')
const hiddenElements2 = document.querySelectorAll('.hidden-multiple')
const observer = new IntersectionObserver((entries) => {
        
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add('show');
}
});
    
}, {
    threshold: 0
})
hiddenElements.forEach((el) => observer.observe(el));


// skills counting up
const skillBar = document.querySelector('#skillBar')
const skillNum = document.querySelector('#skillNum')
const skillBar2 = document.querySelector('#skillBar2')
const skillNum2 = document.querySelector('#skillNum2')
const skillBar3 = document.querySelector('#skillBar3')
const skillNum3 = document.querySelector('#skillNum3')
const skillBar4 = document.querySelector('#skillBar4')
const skillNum4 = document.querySelector('#skillNum4')
const skillBar5 = document.querySelector('#skillBar5')
const skillNum5 = document.querySelector('#skillNum5')

let skillCount = setInterval(skillFunction, 45)


function skillFunction() {
    let changer;    
    
    if (progres > 70) {
        countUpSkill() 
    }
    
}

let skill1 = 0;

function countUpSkill() {
skill1++;
let NUM = skill1;
skillBar.style.width = NUM + "%"
skillNum.textContent = NUM + "%"
if (NUM > 99) {
    NUM = 100
    clearInterval(skillCount)
}

let NUM2 = skill1;
if(NUM2 > 98) {
    NUM2 = 98;
}
skillBar2.style.width = NUM2 + "%"
skillNum2.textContent = NUM2 + "%"

let NUM3 = skill1;
if(NUM3 > 95) {
    NUM3 = 95;
}
skillBar3.style.width = NUM3 + "%"
skillNum3.textContent = NUM3 + "%"

let NUM4 = skill1;
if(NUM4 > 90) {
    NUM4 = 90;
}
skillBar4.style.width = NUM4 + "%"
skillNum4.textContent = NUM4 + "%"

let NUM5 = skill1;
if(NUM5 > 94) {
    NUM5 = 94;
}
skillBar5.style.width = NUM5 + "%"
skillNum5.textContent = NUM5 + "%"

return NUM;
}

//progress bar
let progres = 0;
const bar = document.querySelector('#bar');

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function progressFunction() {

progres = (window.scrollY / totalHeight) * 100;
progres = Math.round(progres)
bar.style.width = progres + "%";
 
var style = window.getComputedStyle(checker, null).getPropertyValue('font-size');



return progres;
}
