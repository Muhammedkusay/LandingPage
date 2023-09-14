let body = document.querySelector("body");

// dark and light mode
let screenMode = document.querySelector(".screen-mode");
let screenModeCover = document.querySelector(".screen-mode .cover");
let headerLinks = document.querySelectorAll("header ul li a");
let inputs = document.querySelectorAll(".contact .inputs");
let footer = document.querySelector(".footer");

screenMode.addEventListener("click", function () {
  screenModeCover.classList.toggle("dark");

  if (screenModeCover.classList.contains("dark")) {
    body.style.cssText = "background-color: #333; color: #fff;";

    headerLinks.forEach(function (link) {
      link.style.cssText = "color: #fff;";
    });

    inputs.forEach(function (input) {
      input.style.cssText = "background-color: #555; color: #fff;";
    });

    footer.style.color = "#333";
  } else {
    body.style.cssText = "background-color: #fff; color: #000;";

    headerLinks.forEach(function (link) {
      link.style.cssText = "color: #000;";
    });

    inputs.forEach(function (input) {
      input.style.cssText = "background-color: #fff; color: #000;";
    });

    footer.style.color = "#fff";
  }
});

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
