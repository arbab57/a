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

const projectContainer = document.querySelector("#project-container");
const prevBtn = document.querySelector("#prev-btn");
const btn1 = document.querySelector("#one-btn");
const btn2 = document.querySelector("#two-btn");
const btn3 = document.querySelector("#three-btn");
const nextBtn = document.querySelector("#next-btn");

let pageNum = 1;
totalPages = Math.ceil(projects.length / 6);
let startingProject = 0;
let endingProject = 6;
let newArary;

window.addEventListener("DOMContentLoaded", (event) => {
  newArary = projects.slice(startingProject, endingProject);
  pageIndicator();
  renderProjects(newArary);
});

const renderProjects = (array) => {
  projectContainer.innerHTML = array
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

nextBtn.addEventListener("click", () => {
  pageNum++;
  pageNum = pageNum > totalPages ? totalPages : pageNum;

  startingProject = pageNum * 6 - 6;
  endingProject = pageNum * 6;
  endingProject =
    endingProject > projects.length ? projects.length : endingProject;

  pageIndicator();
  newArary = projects.slice(startingProject, endingProject);
  renderProjects(newArary);
});
prevBtn.addEventListener("click", function () {
  pageNum--;
  pageNum = pageNum === 0 ? 1 : pageNum;

  startingProject = pageNum * 6 - 6;
  endingProject = pageNum * 6;

  pageIndicator();
  newArary = projects.slice(startingProject, endingProject);
  renderProjects(newArary);
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
  pageNum = input;
  startingProject = (input - 1) * 6;
  endingProject = input * 6;

  endingProject =
    endingProject > projects.length + 1 ? projects.length : endingProject;

  newArary = projects.slice(startingProject, endingProject);
  renderProjects(newArary);
  pageIndicator();

  window.scrollTo(0, 10);
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

window.onscroll = function progressFunction() {
  const imgSlide01 = document.querySelector("#imgSlide01");
  const imgSlide02 = document.querySelector("#imgSlide02");
  const imgSlide03 = document.querySelector("#imgSlide03");
  const imgSlide04 = document.querySelector("#imgSlide04");
  const imgSlide05 = document.querySelector("#imgSlide05");
  const imgSlide06 = document.querySelector("#imgSlide06");

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
    newArary.forEach((item, index) => {
      document.querySelector(`#imgSlide0${index + 1}`).style.transform =
        "translateY(" +
        getSSS(document.querySelector(`#imgSlide0${index + 1}`), 1600) +
        "%)";
    });
  } else {
    newArary.forEach((item, index) => {
      document.querySelector(`#imgSlide0${index + 1}`).style.transform =
        "translateY(0%)";
    });
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
