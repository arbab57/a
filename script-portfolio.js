// changing projects without refreshing

let projects = [
  {
    href: "https://arbab57.github.io/portfolio/",
    src: "assets/projects/project-portfolio-1.png",
    sub: "CSS3 & HTML",
    main: "Design Portfolio: WhereArt Meets Code",
    desc: " I built a stunning design portfolio website to showcase my creative journey and highlight my expertise in web development. This project was a labor of love, allowing me to combine my passion for design and coding to create a truly unique and interactive experience.",
    view: "View Project",
  },

  {
    href: "https://arbab57.github.io/onlineCourses/",
    src: "assets/projects/project- courses.png",
    sub: "JavaScript (ES6+)",
    main: "MindMax: Maximizing Potential through Online Learning",
    desc: "I'm thrilled to have created an impactful learning experience that has already seen significant student engagement and success. It was a pleasure collaborating with the team to bring their vision to life!",
    view: "View Project",
  },

  {
    href: "https://arbab57.github.io/architecturesite/index.html",
    src: "assets/projects/project-architecture.png",
    sub: "BOOTSTRAP 5",
    main: "Constructing Excellence: Architecture Firm",
    desc: "Responsive design for a seamless user experience across devices. Interactive project gallery. Integrated blog for sharing industry insights and news Optimized performance for fast loading times",
    view: "View Project",
  },

  {
    href: "https://arbab57.github.io/bookstore/",
    src: "assets/projects/project-ourtracks.png",
    sub: "E-commerce",
    main: "The Book Haven: E-commerce Solution",
    desc: "Integrating the payment gateway and book catalog APIs. Optimizing the site for performance and scalability. Ensuring security and data privacy.",
    view: "View Project",
  },

  {
    href: "https://arbab57.github.io/travel/",
    src: "assets/projects/697-890.png",
    sub: "FrameWroks",
    main: "TravelTech: AI-Powered Travel",
    desc: "Integrating data from various sources, such as flight APIs, hotel booking engines, and activity providers.Ensuring a seamless user experience across various devices and screen sizes.",
    view: "View Project",
  },

  {
    href: "https://arbab57.github.io/portfolio2/",
    src: "assets/projects/portfolio-practice.png",
    sub: "Portfolios",
    main: "Empowering Innovaters: Portfolio",
    desc: "Clean, modern, and responsive design. High-quality images and graphics. Interactive elements, such as hover effects and animations. Easy navigation and clear information architecture. Mobile-friendly and accessible design.",
    view: "View Project",
  },

  {
    href: "https://arbab57.github.io/calculator/",
    src: "assets/projects/calculator.png",
    sub: "JavaScript (ES6+)",
    main: "CalcMaster: A Responsive Calculator App",
    desc: "Experience a user-friendly calculator design project aimed at providing a seamless and intuitive calculation experience, with easy-to-use buttons, clear display, and customizable settings.",
    view: "view Project",
  },
  {
    href: "https://arbab57.github.io/stopwatch/",
    src: "assets/projects/stopwatch.png",
    sub: "JavaScript (ES6+)",
    main: "ClockIt: A Simple and Intuitive Stopwatch",
    desc: "Built with HTML, CSS, and JavaScript, CLockIt is a responsive and user-friendly stopwatch app designed for athletes, fitness enthusiasts, and anyone needing precise timing. feel free to adapt it for your projects.",
    view: "view Project",
  },
  {
    href: "https://arbab57.github.io/flexStart/",
    src: "assets/projects/flexstart.png",
    sub: "Bootstrap 5",
    main: "Digital Doorway: Animated Bootstrap Landing Page",
    desc: "This project demonstrates my ability to create effective landing pages that drive results. Whether you need a landing page for a product launch, campaign, or business promotion, I've got you covered!",
    view: "view Project",
  },
  {
    href: "https://arbab57.github.io/portfolioreact/",
    src: "assets/projects/portfolioreact.png",
    sub: "React.JS",
    main: "ComponentCraft: A React.js Portfolio",
    desc: "Built using React.js, this portfolio demonstrates my proficiency in developing scalable, efficient, and interactive applications. The project features a curated selection of components and applications.",
    view: "view Project",
  },
  {
    href: "https://arbab57.github.io/todolist/",
    src: "assets/projects/todolist.png",
    sub: "React.JS & JavaScript (ES6+)",
    main: "TaskTracker: A Responsive Todo List Application",
    desc: "This TodoList App is a sleek and efficient task management tool built with React.js, designed to help users stay organized and productive. This project showcases the powerful capabilities of React in building dynamic and responsive user interfaces.",
    view: "view Project",
  },
  {
    href: "https://arbab57.github.io/imagesearch/",
    src: "assets/projects/imagesearch.png",
    sub: "JavaScript (ES6+) & API",
    main: "SnapSearch: A Powerful Image Search App",
    desc: "SnapSearch is an image search application designed to provide users with a seamless and efficient way to find images across the web. Utilizing the Unsplash API, SnapSearch analyzes image content and delivers precise search results based on user queries.",
    view: "view Project",
  },
  {
    href: "https://arbab57.github.io/ecommerce/",
    src: "assets/projects/ecommerce.png",
    sub: "React.js & APIS",
    main: "ReactStore: A Customizable Ecommerce Solution with API Integration",
    desc: "ReactStore combines the power of React.js with the flexibility of API integrations to create a powerful e-commerce solution tailored to meet the diverse needs of online businesses.",
    view: "View Project",
  },
  {
    href: "https://arbab57.github.io/avon-login-form/",
    src: "assets/projects/avon.png",
    sub: "JavaScript (ES6+)",
    main: "AvonAuth: Secure Login and Signup Form with Validation",
    desc: "AvonAuth is a robust form with built in validation system designed to provide a user-friendly login and signup experience. Built with a focus on security and ease of use, AvonAuth ensures that user data is protected while offering a seamless Validation experience.",
    view: "View Project",
  },
];
const conP1 = document.querySelector("#con-p1");
const linkP1 = document.querySelectorAll(".link-p1");
const imgP1 = document.querySelector("#img-p1");
const subP1 = document.querySelector("#sub-p1");
const mainP1 = document.querySelector("#main-p1");
const descP1 = document.querySelector("#desc-p1");
const viewP1 = document.querySelector("#view-p1");

const conP2 = document.querySelector("#con-p2");
const linkP2 = document.querySelectorAll(".link-p2");
const imgP2 = document.querySelector("#img-p2");
const subP2 = document.querySelector("#sub-p2");
const mainP2 = document.querySelector("#main-p2");
const descP2 = document.querySelector("#desc-p2");
const viewP2 = document.querySelector("#view-p2");

const conP3 = document.querySelector("#con-p3");
const linkP3 = document.querySelectorAll(".link-p3");
const imgP3 = document.querySelector("#img-p3");
const subP3 = document.querySelector("#sub-p3");
const mainP3 = document.querySelector("#main-p3");
const descP3 = document.querySelector("#desc-p3");
const viewP3 = document.querySelector("#view-p3");

const conP4 = document.querySelector("#con-p4");
const linkP4 = document.querySelectorAll(".link-p4");
const imgP4 = document.querySelector("#img-p4");
const subP4 = document.querySelector("#sub-p4");
const mainP4 = document.querySelector("#main-p4");
const descP4 = document.querySelector("#desc-p4");
const viewP4 = document.querySelector("#view-p4");

const conP5 = document.querySelector("#con-p5");
const linkP5 = document.querySelectorAll(".link-p5");
const imgP5 = document.querySelector("#img-p5");
const subP5 = document.querySelector("#sub-p5");
const mainP5 = document.querySelector("#main-p5");
const descP5 = document.querySelector("#desc-p5");
const viewP5 = document.querySelector("#view-p5");

const conP6 = document.querySelector("#con-p6");
const linkP6 = document.querySelectorAll(".link-p6");
const imgP6 = document.querySelector("#img-p6");
const subP6 = document.querySelector("#sub-p6");
const mainP6 = document.querySelector("#main-p6");
const descP6 = document.querySelector("#desc-p6");
const viewP6 = document.querySelector("#view-p6");

const prevBtn = document.querySelector("#prev-btn");
const btn1 = document.querySelector("#one-btn");
const btn2 = document.querySelector("#two-btn");
const btn3 = document.querySelector("#three-btn");
const nextBtn = document.querySelector("#next-btn");

let p0 = 0;
let p1 = 1;
let p2 = 2;
let p3 = 3;
let p4 = 4;
let p5 = 5;
let pageNum = 1;
totalPages = 3;

window.addEventListener("DOMContentLoaded", (event) => {
  imgP1.src = projects[p0].src;
  subP1.innerText = projects[p0].sub;
  mainP1.innerText = projects[p0].main;
  descP1.innerText = projects[p0].desc;
  viewP1.innerText = projects[p0].view;

  imgP2.src = projects[p1].src;
  subP2.innerText = projects[p1].sub;
  mainP2.innerText = projects[p1].main;
  descP2.innerText = projects[p1].desc;
  viewP2.innerText = projects[p1].view;

  imgP3.src = projects[p2].src;
  subP3.innerText = projects[p2].sub;
  mainP3.innerText = projects[p2].main;
  descP3.innerText = projects[p2].desc;
  viewP3.innerText = projects[p2].view;

  imgP4.src = projects[p3].src;
  subP4.innerText = projects[p3].sub;
  mainP4.innerText = projects[p3].main;
  descP4.innerText = projects[p3].desc;
  viewP4.innerText = projects[p3].view;

  imgP5.src = projects[p4].src;
  subP5.innerText = projects[p4].sub;
  mainP5.innerText = projects[p4].main;
  descP5.innerText = projects[p4].desc;
  viewP5.innerText = projects[p4].view;

  imgP6.src = projects[p5].src;
  subP6.innerText = projects[p5].sub;
  mainP6.innerText = projects[p5].main;
  descP6.innerText = projects[p5].desc;
  viewP6.innerText = projects[p5].view;

  for (let i = 0; i < linkP1.length; i++) {
    linkP1[i].href = projects[p0].href;
    linkP2[i].href = projects[p1].href;
    linkP3[i].href = projects[p2].href;
    linkP4[i].href = projects[p3].href;
    linkP5[i].href = projects[p4].href;
    linkP6[i].href = projects[p5].href;

    pageIndicator();
  }
});

nextBtn.addEventListener("click", () => {
  if (pageNum === 1) {
    pageFunction(2);
  } else if (pageNum === 2) {
    pageFunction(3);
  } else if (pageNum === 3) {
    pageFunction(1);
  }
});
prevBtn.addEventListener("click", function () {
  if (pageNum === 1) {
    pageFunction(3);
  } else if (pageNum === 2) {
    pageFunction(1);
  } else if (pageNum === 3) {
    pageFunction(2);
  }
});
btn1.addEventListener("click", function () {
  pageFunction(1);
});
btn2.addEventListener("click", function () {
  pageFunction(2);
});
btn3.addEventListener("click", function () {
  pageFunction(3);
});

function pageFunction(input) {
  if (input === 1) {
    p0 = 0;
    p1 = 1;
    p2 = 2;
    p3 = 3;
    p4 = 4;
    p5 = 5;
    pageNum = 1;
  }
  if (input === 2) {
    p0 = 6;
    p1 = 7;
    p2 = 8;
    p3 = 9;
    p4 = 10;
    p5 = 11;
    pageNum = 2;
  }
  if (input === 3) {
    p0 = 12;
    p1 = 13;
    p2 = 8;
    p3 = 9;
    p4 = 10;
    p5 = 11;
    pageNum = 3;
  }

  if (pageNum === 3) {
    conP3.classList.add("d-none");
    conP4.classList.add("d-none");
    conP5.classList.add("d-none");
    conP6.classList.add("d-none");
  } else {
    conP3.classList.remove("d-none");
    conP4.classList.remove("d-none");
    conP5.classList.remove("d-none");
    conP6.classList.remove("d-none");
  }
  pageIndicator();

  window.scrollTo(0, 10);

  imgP1.src = projects[p0].src;
  subP1.innerText = projects[p0].sub;
  mainP1.innerText = projects[p0].main;
  descP1.innerText = projects[p0].desc;
  viewP1.innerText = projects[p0].view;

  imgP2.src = projects[p1].src;
  subP2.innerText = projects[p1].sub;
  mainP2.innerText = projects[p1].main;
  descP2.innerText = projects[p1].desc;
  viewP2.innerText = projects[p1].view;

  imgP3.src = projects[p2].src;
  subP3.innerText = projects[p2].sub;
  mainP3.innerText = projects[p2].main;
  descP3.innerText = projects[p2].desc;
  viewP3.innerText = projects[p2].view;

  imgP4.src = projects[p3].src;
  subP4.innerText = projects[p3].sub;
  mainP4.innerText = projects[p3].main;
  descP4.innerText = projects[p3].desc;
  viewP4.innerText = projects[p3].view;

  imgP5.src = projects[p4].src;
  subP5.innerText = projects[p4].sub;
  mainP5.innerText = projects[p4].main;
  descP5.innerText = projects[p4].desc;
  viewP5.innerText = projects[p4].view;

  imgP6.src = projects[p5].src;
  subP6.innerText = projects[p5].sub;
  mainP6.innerText = projects[p5].main;
  descP6.innerText = projects[p5].desc;
  viewP6.innerText = projects[p5].view;

  for (let i = 0; i < linkP1.length; i++) {
    linkP1[i].href = projects[p0].href;
    linkP2[i].href = projects[p1].href;
    linkP3[i].href = projects[p2].href;
    linkP4[i].href = projects[p3].href;
    linkP5[i].href = projects[p4].href;
    linkP6[i].href = projects[p5].href;
  }
}

function pageIndicator() {
  if (pageNum === 1) {
    btn1.style.backgroundColor = "#2f89fc";
  } else {
    btn1.style.backgroundColor = "#1e1e1e";
  }
  if (pageNum === 2) {
    btn2.style.backgroundColor = "#2f89fc";
  } else {
    btn2.style.backgroundColor = "#1e1e1e";
  }
  if (pageNum === 3) {
    btn3.style.backgroundColor = "#2f89fc";
  } else {
    btn3.style.backgroundColor = "#1e1e1e";
  }
}

// intersection oberserver

const hiddenElements = document.querySelectorAll(".hidden");
const hiddenElements2 = document.querySelectorAll(".hidden-multiple");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0,
  }
);
hiddenElements.forEach((el) => observer.observe(el));

// menu

const menuButton = document.querySelector("#dropdownMenu");
const menu = document.querySelector("#menu");
const cross = document.querySelector("#crossButton");

cross.onclick = menuCross;
menuButton.onclick = menuFnction;

function menuCross() {
  menu.style.display = "none";
}

function menuFnction() {
  menu.style.display = "block";
}

// menusticky on mobil devices

const menuSticky = document.querySelector("#menuSticky");
const scrollIcon = document.querySelector("#scrollIcon");
const checker = document.querySelector("#checker");

let style2 = window
  .getComputedStyle(checker, null)
  .getPropertyValue("font-size");

let menU = setInterval(menuFU, 500);

function menuFU() {
  if (style2 === "16px") {
    menuSticky.classList.remove("sticky");
  }
  if (style2 === "8px") {
    if (window.scrollY > menuSticky.offsetTop) {
      menuSticky.classList.add("sticky");
    } else {
      menuSticky.classList.remove("sticky");
    }
  }
}

// images sliding up and down and progress bar
const bar = document.querySelector("#bar");

const imgSlide = document.querySelector("#img-slide");
const imgSlide01 = document.querySelector("#imgSlide01");
const imgSlide02 = document.querySelector("#imgSlide02");
const imgSlide03 = document.querySelector("#imgSlide03");
const imgSlide04 = document.querySelector("#imgSlide04");
const imgSlide05 = document.querySelector("#imgSlide05");
const imgSlide06 = document.querySelector("#imgSlide06");

window.onscroll = function progressFunction() {
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  progres = (window.scrollY / totalHeight) * 100;
  progres = Math.round(progres);
  if (progres > 97.5) {
    progres = 100;
  }

  bar.style.width = progres + "%";

  var style = window
    .getComputedStyle(checker, null)
    .getPropertyValue("font-size");

  if (style === "16px") {
    imgSlide01.style.transform =
      "translateY(" + getSSS(imgSlide01, 1600) + "%)";
    imgSlide02.style.transform =
      "translateY(" + getSSS(imgSlide02, 1600) + "%)";
    imgSlide03.style.transform =
      "translateY(" + getSSS(imgSlide03, 1600) + "%)";
    imgSlide04.style.transform =
      "translateY(" + getSSS(imgSlide04, 1600) + "%)";
    imgSlide05.style.transform =
      "translateY(" + getSSS(imgSlide05, 1600) + "%)";
    imgSlide06.style.transform =
      "translateY(" + getSSS(imgSlide06, 1600) + "%)";
  } else {
    imgSlide01.style.transform = "translateY(0%)";
    imgSlide02.style.transform = "translateY(0%)";
    imgSlide03.style.transform = "translateY(0%)";
    imgSlide04.style.transform = "translateY(0%)";
    imgSlide05.style.transform = "translateY(0%)";
    imgSlide06.style.transform = "translateY(0%)";
  }

  return progres;
};

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
