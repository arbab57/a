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


const menuSticky = document.querySelector('#menuSticky')
const scrollIcon = document.querySelector('#scrollIcon')


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



window.onscroll = function progressFunction() {


progres = (window.scrollY / totalHeight) * 100;
progres = Math.round(progres)
if (progres > 97.5) {
    progres = 100;
}
bar.style.width = progres + "%";

var style = window.getComputedStyle(checker, null).getPropertyValue('font-size');

if (style === "16px") {
imgSlide01.style.transform = "translateY(" + getSSS(imgSlide01, 1600) + "%)"
imgSlide02.style.transform = "translateY(" + getSSS(imgSlide02, 1600) + "%)"
imgSlide03.style.transform = "translateY(" + getSSS(imgSlide03, 1600) + "%)"
imgSlide04.style.transform = "translateY(" + getSSS(imgSlide04, 1600) + "%)"
imgSlide05.style.transform = "translateY(" + getSSS(imgSlide05, 1600) + "%)"
imgSlide06.style.transform = "translateY(" + getSSS(imgSlide06, 1600) + "%)"

}else {
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
