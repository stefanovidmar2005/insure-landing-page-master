"use strict";
// variable declarations
const hamburgerBtn = document.querySelector(".hamburger");
const body = document.querySelector("body");
const menu = document.querySelector(".mobile__navigation");
const overlay = document.querySelector(".overlay");
let host = window.location.host;
// close the modal window
const closeModal = function () {
  menu.classList.toggle("hidden");
  body.classList.toggle("no-scroll");
  hamburgerBtn.src = "../images/icon-hamburger.svg";
};
hamburgerBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  body.classList.toggle("no-scroll");
  // changes the image source
  if (hamburgerBtn.src === `https://${host}/images/icon-hamburger.svg`) {
    hamburgerBtn.src = "../images/icon-close.svg";
  } else {
    hamburgerBtn.src = "../images/icon-hamburger.svg";
  }
});
// escape key or delete on press closes the mobile navigator
body.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.key === "Delete") {
    closeModal();
  }
});
