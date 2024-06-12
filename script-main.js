const scrolly = document.querySelector('#scrolly')
const slide = document.querySelectorAll('.slide')

let uy = 0;
let progres = 0;


const suu =document.querySelector('#suu');

let siu = setTimeout(suuF, 1500);

function suuF() {
    suu.style.display = "block"
    setTimeout(suuF2, 500)
}

function suuF2() {
    suu.style.display = "none";
}




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
    if (window.scrollY > 200) {
        scrollIcon.classList.remove("scrollIcon")
     }
    if (window.scrollY > menuSticky.offsetTop) {
        menuSticky.classList.add('sticky')
    }else {
        menuSticky.classList.remove('sticky')
      
    }
}

}

// scroll icon appeareing

let timeOur = setTimeout(scrollFun, 2000)
let counterScroll = 5;

function scrollFun() {
    if (style2 === "8px") {
        if (window.scrollY < 50) {
   scrollIcon.classList.add("scrollIcon")
}
}
}

// images sliding up and down and progress bar
const bar = document.querySelector('#bar');

const imgSlide = document.querySelector('#img-slide')
const imgSlide01 = document.querySelector('#imgSlide01')
const imgSlide02 = document.querySelector('#imgSlide02')
const imgSlide03 = document.querySelector('#imgSlide03')
const imgSlide04 = document.querySelector('#imgSlide04')
const imgSlide05 = document.querySelector('#imgSlide05')
const imgSlide06 = document.querySelector('#imgSlide06')
let totalHeight = document.body.scrollHeight - window.innerHeight;

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


if (window.scrollY > 200) {
   scrollIcon.classList.remove("scrollIcon")
}

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


// count up client numbers

const countClient = document.querySelector('#client-num')
const countProject = document.querySelector('#project-num')
const countReturn = document.querySelector('#return-num')

let count1 = 0;
let count2 = 0;
let count3 = 0;

let counts = setInterval(count, 22)

function count(){

    if (window.scrollY > 5500) {
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


// title screen changing

const subHeading = document.querySelector('#sub-heading')
const mainHeading = document.querySelector('#main-heading')
const elemCon = document.querySelector('#container-change')

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










    
    
