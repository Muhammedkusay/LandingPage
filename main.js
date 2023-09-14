let body = document.querySelector("body");

// scroll tracker
let scrollTracker = document.querySelector(".scroll-tracker");

window.onscroll = function () {
  if (window.scrollY === 0) {
    scrollTracker.style.width = 0;
  } else {
    let heightPercent =
      ((window.scrollY + window.innerHeight) * 100) / body.scrollHeight;
    scrollTracker.style.width = `${heightPercent}%`;
  }
};

// animate on scroll
let hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach((element) => observer.observe(element));

let content = document.querySelector(".content");
let loadImg = document.querySelector(".loading");

// onload
content.style.display = "none";

window.onload = function () {
  setTimeout(function () {
    loadImg.classList.add("hide");
    content.style.display = "block";
  }, 2500);
};
