const bar = document.querySelector('#bar');
const countClient = document.querySelector('#client-num')
const countProject = document.querySelector('#project-num')
const countReturn = document.querySelector('#return-num')
const subHeading = document.querySelector('#sub-heading')
const mainHeading = document.querySelector('#main-heading')
const elemCon = document.querySelector('#container-change')
const hiddenElements = document.querySelectorAll('.hidden')
const hiddenElements2 = document.querySelectorAll('.hidden-multiple')
const imgSlide = document.querySelector('#img-slide')
const imgSlide01 = document.querySelector('#imgSlide01')
const imgSlide02 = document.querySelector('#imgSlide02')
const imgSlide03 = document.querySelector('#imgSlide03')
const imgSlide04 = document.querySelector('#imgSlide04')
const imgSlide05 = document.querySelector('#imgSlide05')
const imgSlide06 = document.querySelector('#imgSlide06')
const scrolly = document.querySelector('#scrolly')
const slide = document.querySelectorAll('.slide')
const menuButton = document.querySelector('#dropdownMenu')
const menu = document.querySelector('#menu')
const cross = document.querySelector('#crossButton')
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


let totalHeight = document.body.scrollHeight - window.innerHeight;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let uy = 0;
let progres = 0;

cross.onclick = menuCross;
menuButton.onclick = menuFnction;

function menuCross() {
    menu.style.display = "none"
}

function menuFnction() {
menu.style.display = "block"
}

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


const checker = document.querySelector('#checker')

window.onscroll = function progressFunction() {


progres = (window.scrollY / totalHeight) * 100;
progres = Math.round(progres)
bar.style.width = progres + "%";

var style = window.getComputedStyle(checker, null).getPropertyValue('font-size');

if (style === "16px") {
    
imgSlide.style.transform = "translateY(" + getSSS2(imgSlide, 1600) + "%)"
imgSlide01.style.transform = "translateY(" + getSSS(imgSlide01, 1600) + "%)"
imgSlide02.style.transform = "translateY(" + getSSS(imgSlide02, 1600) + "%)"
imgSlide03.style.transform = "translateY(" + getSSS(imgSlide03, 1600) + "%)"
imgSlide04.style.transform = "translateY(" + getSSS(imgSlide04, 1600) + "%)"
imgSlide05.style.transform = "translateY(" + getSSS(imgSlide05, 1600) + "%)"
imgSlide06.style.transform = "translateY(" + getSSS(imgSlide06, 1600) + "%)"

}else {
    imgSlide.style.transform = "translateY(0%)"
    imgSlide01.style.transform = "translateY(0%)"
imgSlide02.style.transform = "translateY(0%)"
imgSlide03.style.transform = "translateY(0%)"
imgSlide04.style.transform = "translateY(0%)"
imgSlide05.style.transform = "translateY(0%)"
imgSlide06.style.transform = "translateY(0%)"
}

return progres;
}

function getSSS2(element, y) {
    let value = element.offsetTop;
    let zzz2 = window.scrollY - value;
    let sss2 = -(zzz2 / y) * 100;
    if (sss2 > 30) {
        sss2 = 30;
    }
    if (sss2 < -30) {
        sss2 = -30;
    }
    
    return sss2;
}

function getSSS(element, y) {
    let value = element.offsetTop - 100;
    let zzz = window.scrollY - value;
    let sss = -(zzz / y) * 100;
    if (sss > 45) {
        sss = 45;
    }
    if (sss < -30) {
        sss = -30;
    }
    return sss;
}


let skillCount = setInterval(skillFunction, 30)


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



let counts = setInterval(count, 22)

function count(){

    if (window.scrollY > 5800) {
    countUpClient()
    if (count2 > 819) {
        clearInterval(counts)
    }
}
}


function countUpClient(){
    count1++;
    countClient.textContent = count1;
if (count1 > 420) {
    count1 = 420;
}


count2++;
countProject.textContent = count2;
if (count2 > 819){
    count2 = 819;
    
}

count3++;
countReturn.textContent = count3;
if (count3 > 379){
    count3 = 379;
}

return count2;

}



let change = setInterval(changer, 5000)
let changerCount = 1;

function changer (){
    elemCon.style.opacity = 0;
    if (changerCount > 0) {
    changerCount = 0;
    setTimeout(showText, 180)
}else {
   
    changerCount = 1;
    setTimeout(showText2, 180)
}
}

function showText () {
    elemCon.style.opacity = 1;
    subHeading.textContent = "I'M FROM PAKISTAN"
    mainHeading.textContent = "A WEB DEVELOPER"
}
function showText2 () {
    elemCon.style.opacity = 1;
    subHeading.textContent = "HELLO! I'M"
    mainHeading.textContent = "ARBAB BASHIR"
}










    
    
