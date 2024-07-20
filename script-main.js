const scrolly = document.querySelector("#scrolly");
const slide = document.querySelectorAll(".slide");

let uy = 0;
let progres = 0;

let projects = [
  {
    href: "https://arbab57.github.io/architecturesite/index.html",
    src: "assets/projects/project-architecture.png",
    sub: "CSS3 & Frameworks",
    main: "Constructing Excellence: Architecture Firm",
    desc: "Responsive design for a seamless user experience across devices. Interactive project gallery. Integrated blog for sharing industry insights and news Optimized performance for fast loading times",
    view: "View Project",
  },

  {
    href: "https://arbab57.github.io/travel/",
    src: "assets/projects/697-890.png",
    sub: "CSS3 & Frameworks",
    main: "TravelTech: AI-Powered Travel",
    desc: "Integrating data from various sources, such as flight APIs, hotel booking engines, and activity providers.Ensuring a seamless user experience across various devices and screen sizes.",
    view: "View Project",
  },

  {
    href: "https://arbab57.github.io/imagesearch/",
    src: "assets/projects/imagesearch.png",
    sub: "JavaScript (ES6+)",
    main: "SnapSearch: A Powerful Image Search App",
    desc: "SnapSearch is an image search application designed to provide users with a seamless and efficient way to find images across the web. Utilizing the Unsplash API, SnapSearch analyzes image content and delivers precise search results based on user queries.",
    view: "view Project",
  },

  {
    href: "https://reactjobsvite.netlify.app/#/",
    src: "assets/projects/reactjobs.png",
    sub: "React.JS",
    main: "ReactJobs: A React JS Job Search Application",
    desc: "A fully functional job search website built using React JS, providing a seamless user experience for job seekers and employers alike. Built using the popular React library for efficient and scalable development",
    view: "View Project",
  },
  {
    href: "https://arbab57.github.io/flexStart/",
    src: "assets/projects/flexstart.png",
    sub: "CSS3 & Frameworks",
    main: "Digital Doorway: Animated Bootstrap Landing Page",
    desc: "This project demonstrates my ability to create effective landing pages that drive results. Whether you need a landing page for a product launch, campaign, or business promotion, I've got you covered!",
    view: "view Project",
  },
  {
    href: "https://arbab57.github.io/ludo/",
    src: "assets/projects/ludo.png",
    sub: "JavaScript (ES6+)",
    main: "LudoFever: A Game Development Project",
    desc: "LudoFever is an innovative project aimed at bringing the classic board game Ludo into the digital realm. This project was chosen to help develop technical skills in game design, programming, and user experience.",
    view: "view Project",
  },
];
projects.reverse();

window.onload = () => {
  render(projects);
};

const render = (array) => {
  document.getElementById("con-projects").innerHTML = array
    .map((project, index) => {
      if (index % 2 === 0) {
        return `
        <div class="row justify-content-center gap-lg-5  p-lg-4  text-sm-start">\
                  <div id="imgSlide0${
                    index + 1
                  }" class="col-xxl-4 col-lg-5 col-md-5 con-project-img slide imgSlide03"><a
                            class="link-p1" href="${
                              project.href
                            }" target="_blank"><img
                                loading="lazy" id="img-p1" class="project-img"
                                src="${project.src}" alt=""></a>
                  </div>
                  <div
                        class="col-xl-6 col-md-6 d-flex flex-column justify-content-center p-sm-5 p-4 my-4 my-sm-0">
                        <h3 id="sub-p1" class="fs-6 text-muted-3 mb-3">${
                          project.sub
                        }</h3>
                        <h3 class="fs-2 mb-4 fw-normal"><a id="main-p1" class="text-white link-p1"
                                href="${project.href}" target="_blank">${
          project.main
        }</a></h3>
                        <p id="desc-p1" class="fs-5 text-muted-3 mb-4">${
                          project.desc
                        }</p>
                        <a id="view-p1" class="text-blue-1 fs-5 link-p1" href="${
                          project.href
                        }"
                            target="_blank">View
                            Project</a>
                  </div>
        </div>
        `;
      } else if (index % 2 !== 0 || index === 0) {
        return `
      <div class="row justify-content-center flex-row-reverse gap-lg-4 p-lg-5 text-sm-start">
                    <div  id="imgSlide0${
                      index + 1
                    }" class="col-xxl-4 col-lg-5 col-md-5 con-project-img slide "><a
                            class="link-p2" href="${
                              project.href
                            }" target="_blank"><img
                                loading="lazy" id="img-p2" class="project-img"
                                src="${project.src}" alt=""></a>
                    </div>
                    <div
                        class="col-xl-6 col-md-6 d-flex flex-column justify-content-center p-sm-5 p-4 my-4 my-sm-0">
                        <h3 id="sub-p2" class="fs-6 text-muted-3 mb-3">${
                          project.sub
                        }</h3>
                        <h3 class="fs-2 mb-4 fw-normal"><a id="main-p2" class="text-white link-p2"
                                href="${project.href}" target="_blank">${
          project.main
        }</a></h3>
                        <p id="desc-p2" class="fs-5 text-muted-3 mb-4">${
                          project.desc
                        }</p>
                        <a id="view-p2" class="text-blue-1 fs-5 link-p2" href="${
                          project.href
                        }"
                            target="_blank">View
                            Project</a>
                    </div>
                </div>
      `;
      }
    })
    .join("");
};

// annoucement
const conNews = document.querySelector("#con-news");

let anounce = setTimeout(banner, 1100);

function banner() {
  conNews.classList.add("show-news");
  scrollIcon.style.top = "130%";
  setTimeout(clearNews, 7500);
}

function clearNews() {
  conNews.classList.remove("show-news");
  scrollIcon.style.top = "150%";
}

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
    if (window.scrollY > 200) {
      scrollIcon.classList.remove("scrollIcon");
    }
    if (window.scrollY > menuSticky.offsetTop) {
      menuSticky.classList.add("sticky");
    } else {
      menuSticky.classList.remove("sticky");
    }
  }
}

// scroll icon appeareing

let timeOur = setTimeout(scrollFun, 2000);
let counterScroll = 5;

function scrollFun() {
  if (style2 === "8px") {
    if (window.scrollY < 50) {
      scrollIcon.classList.add("scrollIcon");
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
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function progressFunction() {
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
    projects.forEach((item, index) => {
      document.querySelector(`#imgSlide0${index + 1}`).style.transform =
        "translateY(" +
        getSSS(document.querySelector(`#imgSlide0${index + 1}`), 1600) +
        "%)";
    });
  } else {
    projects.forEach((item, index) => {
      document.querySelector(`#imgSlide0${index + 1}`).style.transform =
        "translateY(0%)";
    });

    if (window.scrollY > 200) {
      scrollIcon.classList.remove("scrollIcon");
    }
  }

  return progres;
};

function getSSS2(element, y) {
  let value = element.offsetTop - 150;
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
  let value = element.offsetTop;
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

const countClient = document.querySelector("#client-num");
const countProject = document.querySelector("#project-num");
const countReturn = document.querySelector("#return-num");

let count1 = 0;
let count2 = 0;
let count3 = 0;

let counts = setInterval(count, 10);

function count() {
  if (window.scrollY > 5500) {
    countUpClient();
    if (count2 > 819) {
      clearInterval(counts);
    }
  }
}

function countUpClient() {
  count1++;
  countClient.textContent = count1;
  if (count1 > 420) {
    count1 = 420;
  }

  count2++;
  countProject.textContent = count2;
  if (count2 > 819) {
    count2 = 819;
  }

  count3++;
  countReturn.textContent = count3;
  if (count3 > 379) {
    count3 = 379;
  }

  return count2;
}

// intersection oberserver

// const countElement = document.querySelectorAll('#client-num')

// const observer3 = new IntersectionObserver((entries) => {
// let called = false;
// entries.forEach((entry) => {
// if (entry.isIntersecting) {
//   if (called !== true) {
//     counterUp(countClient, 420)
//     counterUp(countProject, 876)
//     counterUp(countReturn, 389)
//     called = true
//   }else {
//         null
//   }

// }
// });

// }, {
//     threshold: 0.5
// })
// countElement.forEach((el) => observer3.observe(el));

// function counterUp(item, num) {
//     let startingNum = 0;
//     let animationSpeed = 30;
//     let animationGrowNumber = num / 100;
//     let interval = setInterval(() => {
//         if (startingNum >= num) {
//             clearInterval(interval)
//         }else {
//             startingNum += animationGrowNumber
//             item.innerText = Math.round(startingNum);
//         }
//     }, 50)
// }

// title screen changing

const subHeading = document.querySelector("#sub-heading");
const mainHeading = document.querySelector("#main-heading");
const elemCon = document.querySelector("#container-change");

let change = setInterval(changer, 5000);
let changerCount = 1;

function changer() {
  elemCon.style.opacity = 0;
  if (changerCount > 0) {
    changerCount = 0;
    setTimeout(showText, 180);
  } else {
    changerCount = 1;
    setTimeout(showText2, 180);
  }
}

function showText() {
  elemCon.style.opacity = 1;
  subHeading.textContent = "I'M FROM PAKISTAN";
  mainHeading.textContent = "A WEB DEVELOPER";
}
function showText2() {
  elemCon.style.opacity = 1;
  subHeading.textContent = "HELLO! I'M";
  mainHeading.textContent = "ARBAB BASHIR";
}
