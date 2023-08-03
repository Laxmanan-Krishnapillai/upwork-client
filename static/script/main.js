const smoothSpeed = 0.6;
const smoothEase = "expo";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
let smoother = ScrollSmoother.create({
  smooth: smoothSpeed,
  wrapper: ".page",
  content: "main",
  preventDefault: true,
  ease: smoothEase,
  effects: true,
  smoothTouch: false,
});

const percentCount = document.querySelector("[percent]");
let currentValue = 0;

function updateValues() {
  const docHeight = document.documentElement.scrollHeight,
    viewportHeight = window.innerHeight,
    scrollTop = window.scrollY,
    percentScrolled = (scrollTop / (docHeight - viewportHeight)) * 100;

  // Animate the counting with GSAP
  gsap.to(percentCount, {
    innerText: Math.round(percentScrolled) + "%",
    roundProps: "innerText",
    duration: smoothSpeed,
    ease: smoothEase,
  });
}

updateValues();
window.addEventListener("scroll", updateValues);
window.addEventListener("resize", updateValues);

// Store the element with attribute "time" as a variable
var clockElement = document.querySelector(".clock [time]");
var stateElement = document.querySelector(".clock [state]");
var statusElement = document.querySelector(".clock [status]");

function showCopenhagenTime() {
  var currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes().toString().padStart(2, "0");
  var copenhagenTime = hours + ":" + minutes;
  clockElement.textContent = copenhagenTime;

  var dayOfWeek = currentDate.getDay();
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 10 && hours < 16) {
    stateElement.classList.add("open");
    stateElement.classList.remove("closed"); // Remove the "closed" class if previously added
    statusElement.textContent = "Open";
  } else {
    stateElement.classList.remove("open");
    stateElement.classList.add("closed"); // Add the "closed" class
    statusElement.textContent = "Closed";
  }
}
setInterval(showCopenhagenTime, 100);

var currentPageURL = window.location.href;
var allLinks = document.getElementsByTagName("a");
for (var i = 0; i < allLinks.length; i++) {
  var link = allLinks[i];
  var linkURL = link.href;
  if (linkURL === currentPageURL) {
    link.classList.add("current");
  }
}

// Themes
var toggle = document.querySelector("[theme]"),
  storedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

storedTheme && document.documentElement.setAttribute("data-theme", storedTheme);
updateToggleText(storedTheme);

toggle.onclick = function () {
  var targetTheme = "light";
  if ("light" === document.documentElement.getAttribute("data-theme")) {
    targetTheme = "dark";
  }
  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
  updateToggleText(targetTheme);
};
function updateToggleText(theme) {
  toggle.innerHTML = theme === "dark" ? "Light mode" : "Dark mode";
}
