const menuButton = document.querySelector('#dropdownMenu')
const menu = document.querySelector('#menu')
const cross = document.querySelector('#crossButton')
const hiddenElements = document.querySelectorAll('.hidden')
const hiddenElements2 = document.querySelectorAll('.hidden-multiple')

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

// menu sticky on mobile devices

    const menuSticky = document.querySelector('#menuSticky')
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
    