/* ========================================= * 
                HEADER SCROLL UP AND DOWN

 * ========================================= */

let prevScrollPos = window.pageYOffset;
let scrolling = false;

window.addEventListener("scroll", () => {
  scrolling = true;
});

setInterval(() => {
  if (scrolling) {
    scrolling = false;
    const currentScrollPos = window.pageYOffset;
    const header = document.querySelector(".header-container");
    const navbar = document.querySelector(".navbar");
    if (prevScrollPos > currentScrollPos) {
      header.style.top = "0";
      navbar.style.top = "0%";
      navbar.style.position = "fixed";
      // navbar.style.transform = "translate(-50%, -50%)";
      if (toggle.checked) {
        // document.querySelector("#toggle:checked ~ navbar").style.top = "50%";
        // document.querySelector("#toggle:checked ~ nav ul").style.top = "100%";
        // document.querySelector(".navbar").style.top = "50%";
      }
    } else {
      header.style.top = "-1000px"; // Adjust this value as needed
      navbar.style.top = "-1000px"; // Adjust this value as needed
    }
    prevScrollPos = currentScrollPos;
  }
}, 250); // You can adjust the interval duration as needed

/* ========================================= * 
                TOP TO DOWN AND DOWN TO TOP

 * ========================================= */

// const scrollTopButton = document.getElementById("scroll-top-button");
// const scrollBottomButton = document.getElementById("scroll-bottom-button");
// const progressBarContainer = document.getElementsByClassName("scroll-button");

// window.addEventListener("scroll", () => {
//   const scrollHeight = document.documentElement.scrollHeight;
//   const scrollTop = window.pageYOffset;
//   const clientHeight = document.documentElement.clientHeight;
//   const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

//   if (scrollTop > 100) {
//     scrollTopButton.style.display = "block";
//     scrollBottomButton.style.display = "none";
//     progressBarContainer.style.display = "block";
//     progressBarContainer.style.transform = `rotate(${
//       scrollPercentage * 2.7
//     }deg)`; // Adjust the multiplier as needed
//   } else {
//     scrollTopButton.style.display = "none";
//     scrollBottomButton.style.display = "block";
//     progressBarContainer.style.display = "none";
//   }
// });

// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }

// function scrollToBottom() {
//   const scrollHeight = document.documentElement.scrollHeight;
//   window.scrollTo({
//     top: scrollHeight,
//     behavior: "smooth",
//   });
// }

const scrollTopButton = document.getElementById("scroll-top-button");
const scrollBottomButton = document.getElementById("scroll-bottom-button");
const progressBarContainer = document.getElementById("progress-bar-container");

window.addEventListener("scroll", () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset;
  const clientHeight = document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

  if (scrollTop > 100) {
    scrollTopButton.style.display = "block";
    scrollBottomButton.style.display = "none";
    progressBarContainer.style.display = "block";
    progressBarContainer.style.width = `${scrollPercentage}%`;
  } else {
    scrollTopButton.style.display = "none";
    scrollBottomButton.style.display = "block";
    progressBarContainer.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function scrollToBottom() {
  const scrollHeight = document.documentElement.scrollHeight;
  window.scrollTo({
    top: scrollHeight,
    behavior: "smooth",
  });
}