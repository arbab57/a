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
        threshold: 0.1
    })
    
    
    hiddenElements.forEach((el) => observer.observe(el));
