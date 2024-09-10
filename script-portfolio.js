// changing projects without refreshing

let projects = [
  {
    href: "https://arbab57.github.io/stopwatch/",
    src: "assets/projects/stopwatch.png",
    sub: "JavaScript (ES6+)",
    main: "ClockIt: A Simple and Intuitive Stopwatch",
    desc: "Built with HTML, CSS, and JavaScript, CLockIt is a responsive and user-friendly stopwatch app designed for athletes, fitness enthusiasts, and anyone needing precise timing. feel free to adapt it for your projects.",
    view: "view Project",
  },

  {
    href: "https://arbab57.github.io/todolist/",
    src: "assets/projects/todolist.png",
    sub: "React.JS",
    main: "TaskTracker: A Responsive Todo List Application",
    desc: "This TodoList App is a sleek and efficient task management tool built with React.js, designed to help users stay organized and productive. This project showcases the powerful capabilities of React in building dynamic and responsive user interfaces.",
    view: "view Project",
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
    href: "https://arbab57.github.io/PalindromeChecker/",
    src: "assets/projects/palindrome.png",
    sub: "JavaScript (ES6+)",
    main: "Word Wizard: Palindrome Verification",
    desc: "A web-based application that checks whether a given string is a palindrome or not. A palindrome is a word, phrase, or sequence that reads the same backward as forward.",
    view: "view Project",
  },
  {
    href: "https://arbab57.github.io/ecommerce/",
    src: "assets/projects/ecommerce.png",
    sub: "React.JS",
    main: "ReactStore: A Customizable Ecommerce Solution with API Integration",
    desc: "ReactStore combines the power of React.js with the flexibility of API integrations to create a powerful e-commerce solution tailored to meet the diverse needs of online businesses.",
    view: "View Project",
  },
  {
    href: "https://arbab57.github.io/portfolio2/",
    src: "assets/projects/portfolio-practice.png",
    sub: "CSS3 & Frameworks",
    main: "Empowering Innovaters: Portfolio",
    desc: "Clean, modern, and responsive design. High-quality images and graphics. Interactive elements, such as hover effects and animations. Easy navigation and clear information architecture. Mobile-friendly and accessible design.",
    view: "View Project",
  },

  {
    href: "https://arbab57.github.io/onlineCourses/",
    src: "assets/projects/project- courses.png",
    sub: "CSS3 & Frameworks",
    main: "MindMax: Maximizing Potential through Online Learning",
    desc: "I'm thrilled to have created an impactful learning experience that has already seen significant student engagement and success. It was a pleasure collaborating with the team to bring their vision to life!",
    view: "View Project",
  },

  {
    href: "https://arbab57.github.io/bookstore/",
    src: "assets/projects/project-ourtracks.png",
    sub: "CSS3 & Frameworks",
    main: "The Book Haven: E-commerce Solution",
    desc: "Integrating the payment gateway and book catalog APIs. Optimizing the site for performance and scalability. Ensuring security and data privacy.",
    view: "View Project",
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
    href: "https://arbab57.github.io/apod/",
    src: "assets/projects/apod.png",
    sub: "React.JS",
    main: "Cosmic Explorer: APOD App in React JS",
    desc: "Built using React JS, this application interfaces with NASA's Astronomy Picture of the Day (APOD) API to deliver breathtaking images and educational content about our cosmos.",
    view: "view Project",
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
    href: "https://arbab57.github.io/avon-login-form/",
    src: "assets/projects/avon.png",
    sub: "JavaScript (ES6+)",
    main: "AvonAuth: Secure Login and Signup Form with Validation",
    desc: "AvonAuth is a robust form with built in validation system designed to provide a user-friendly login and signup experience. Built with a focus on security and ease of use, AvonAuth ensures that user data is protected while offering a seamless Validation experience.",
    view: "View Project",
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
    href: "https://github.com/arbab57/timetrackerbackend",
    src: "assets/projects/timetrackerbackend.png",
    sub: "Node.js",
    main: "ClockIt Backend: Time Tracking & Project Management API",
    desc: "Developed using Node.js and Express, the ClockIt backend handles all time tracking and project management functionalities for the ClockIt app. This robust backend supports user authentication, project management, and time logging, with endpoints designed to interact seamlessly with the app's front end.",
    view: "view Project",
  },
  
  {
    href: "https://arbab57.github.io/portfolio/",
    src: "assets/projects/project-portfolio-1.png",
    sub: "CSS3 & Frameworks",
    main: "Design Portfolio: WhereArt Meets Code",
    desc: " I built a stunning design portfolio website to showcase my creative journey and highlight my expertise in web development. This project was a labor of love, allowing me to combine my passion for design and coding to create a truly unique and interactive experience.",
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
    href: "https://github.com/arbab57/E-Learn-Backend",
    src: "assets/projects/elearnbackend.png",
    sub: "Node.js",
    main: "E-Learn: E-Learning Platform Backend",
    desc: "Built with the MERN stack, managing everything from user authentication to course management. This backend supports user registrations, purchases, course enrollment, and reviews, with secure JWT authentication and efficient database handling using MongoDB. The system is fully functional.",
    view: "View Project",
  }, 
  {
    href: "https://elearnfronentdemo.netlify.app/",
    src: "assets/projects/elearnfrontend.png",
    sub: "React.JS",
    main: "E-Learn: Frontend for E-Learning Platform",
    desc: "The E-Learn frontend is a visually engaging and interactive user interface built with React.js. This static version of the e-learning platform showcases key features such as course browsing, user profiles, and interactive elements, using static data to demonstrate the app's functionality and design.",
    view: "View Project",
  },
  {
    href: "https://linkuplandingpage.netlify.app/",
    src: "assets/projects/linkupfrontend.png",
    sub: "React.JS",
    main: "LinkUp: Connect and Share",
    desc: "LinkUp is a social media platform designed for seamless connection. This landing page provides a preview of the app's modern interface, showcasing user profiles, posts, and interactions.The backend supports real-time updates, secure authentication, and content sharing. Discover how LinkUp can connect people with a clean, responsive UI and engaging social features.",
    view: "View Project",
  },
 
  {
    href: "https://github.com/arbab57/link-up",
    src: "assets/projects/linkupbackend.png",
    sub: "Node.js",
    main: "Link-Up: Social Media App Backend",
    desc: "Developed using Node.js and Express, the Link-Up backend powers a dynamic social media platform. Features such as user authentication, profile management, posting, commenting, and real-time interactions. With JWT-based authentication and a MongoDB database, The API is designed to handle large volumes of user-generated content efficiently and integrates seamlessly with the frontend.",
    view: "View Project",
  }, 
  {
    href: "https://arbab57.github.io/architecturesite/index.html",
    src: "assets/projects/project-architecture.png",
    sub: "CSS3 & Frameworks",
    main: "Constructing Excellence: Architecture Firm",
    desc: "Responsive design for a seamless user experience across devices. Interactive project gallery. Integrated blog for sharing industry insights and news Optimized performance for fast loading times",
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
  {
    href: "https://clockittimetracker.netlify.app/",
    src: "assets/projects/clockit.png",
    sub: "React.JS",
    main: "ClockIt: Time Tracking & Project Management",
    desc: "Built with the MERN stack, ClockIt is a comprehensive productivity and project management app designed to streamline your workflow. While the backend features are fully implemented, this showcase version uses local storage for demonstration purposes. Track time, manage projects, and boost productivity—all with a sleek and intuitive interface.",
    view: "view Project",
  },
  {
    href: "https://adminpanaldemo.netlify.app/",
    src: "assets/projects/elearnadmin.png",
    sub: "React.JS",
    main: "E-Learn Admin Panel: Manage Your E-Learning Platform",
    desc: "The E-Learn Admin Panel is a powerful tool built with React.js for comprehensive management of courses, mentors, reviews, and more. Featuring intuitive dashboards with charts and analytics, this panel provides an easy way to oversee and optimize your e-learning platform’s operations.",
    view: "View Project",
  }
  
];
projects.reverse();

const projectContainer = document.querySelector("#project-container");
const prevBtn = document.querySelector("#prev-btn");
const btn1 = document.querySelector("#one-btn");
const btn2 = document.querySelector("#two-btn");
const btn3 = document.querySelector("#three-btn");
const btn4 = document.querySelector("#four-btn");
const nextBtn = document.querySelector("#next-btn");
const filters = document.getElementById("filters");
const order = document.getElementById("oldtonew");

let pageNum = 1;
totalPages = Math.ceil(projects.length / 6);
let startingProject = 0;
let endingProject = 6;
let newArary = [...projects];
let setProjects = [...projects];

filters.addEventListener("change", () => {
  switch (filters.value) {
    case "js":
      setProjects = [...projects];
      renderProjects(newArary.filter((pro) => pro.sub === "JavaScript (ES6+)"));
      break;
    case "react":
      setProjects = [...projects];
      renderProjects(newArary.filter((pro) => pro.sub === "React.JS"));
      break;
      case "node":
        setProjects = [...projects];
        renderProjects(newArary.filter((pro) => pro.sub === "Node.js"));
        break;
    case "frameworks":
      setProjects = [...projects];
      renderProjects(newArary.filter((pro) => pro.sub === "CSS3 & Frameworks"));
      break;
    case "all":
      setProjects = [...projects];
      renderProjects(newArary);
      break;

    case "new":
      newArary = [...projects];
      setProjects = [...newArary];
      renderProjects(newArary.slice(startingProject, endingProject));
      break;

    case "old":
      newArary = [...projects].reverse();

      setProjects = [...newArary];
      renderProjects(newArary.slice(startingProject, endingProject));
      break;
  }
});

window.addEventListener("DOMContentLoaded", (event) => {
  renderProjects(projects.slice(startingProject, endingProject));
  pageIndicator();
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
                        class="col-xl-6 col-md-6 d-flex flex-column justify-content-center p-sm-5 px-4 my-2 my-sm-0">
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
                        class="col-xl-6 col-md-6 d-flex flex-column justify-content-center p-sm-5 px-4 my-2 my-sm-0">
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
  pageNum = pageNum > totalPages ? 1 : pageNum;
  startingProject = pageNum * 6 - 6;
  endingProject = pageNum * 6;
  endingProject =
    endingProject > projects.length ? projects.length : endingProject;

  pageIndicator();
  renderProjects(setProjects.slice(startingProject, endingProject));
});
prevBtn.addEventListener("click", function () {
  pageNum--;
  pageNum = pageNum === 0 ? totalPages : pageNum;

  startingProject = pageNum * 6 - 6;
  endingProject = pageNum * 6;

  pageIndicator();
  renderProjects(setProjects.slice(startingProject, endingProject));
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
btn4.addEventListener("click", function () {
  pageFunction(4);
});

function pageFunction(input) {
  pageNum = input;
  startingProject = (input - 1) * 6;
  endingProject = input * 6;

  endingProject =
    endingProject > projects.length + 1 ? projects.length : endingProject;

  renderProjects(setProjects.slice(startingProject, endingProject));
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
  if (pageNum === 4) {
    btn4.style.backgroundColor = "#2f89fc";
  } else {
    btn4.style.backgroundColor = "#1e1e1e";
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
