"use strict";
document.createElement("main");
var toggleSwitch = document.querySelector(
  '.theme-toggle input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

var currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (typeof currentTheme == "undefined") {
  console.log("theme not stored");

  if (matchMedia("(prefers-color-scheme: dark)").matches) {
    console.log("prefer dark");
    document.documentElement.setAttribute("data-theme", "dark");
    toggleSwitch.checked = true;
  } else if (matchMedia("(prefers-color-scheme: light)").matches) {
    console.log("prefers light");
    document.documentElement.setAttribute("data-theme", "light");
    toggleSwitch.checked = false;
  }
}

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

toggleSwitch.addEventListener("change", switchTheme, false); //get header height and add some distance to main

var header = document.querySelector("header");
var main = document.querySelector("header");

function space() {
  var headerHeight = header.clientHeight + "px";
  document.querySelector("main").style.marginTop = headerHeight;
  console.log(headerHeight);
}

window.addEventListener("load", space);
window.addEventListener("resize", space);

//# sourceMappingURL=scripts-min.js.map
