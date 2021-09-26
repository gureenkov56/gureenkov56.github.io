//get elements

const body = document.querySelector("body");
const mobileOpenOpenLeftSide = document.querySelector("#mobileButton");

// variable of state

let isOpenLeftSide = false;

// events

mobileOpenOpenLeftSide.addEventListener("click", openLeftSide);
window.addEventListener("scroll", yScrollForbider);

// functions

function openLeftSide() {
  if (isOpenLeftSide) {
    isOpenLeftSide = false;
    body.style.cssText = "margin-left: -220px;";
    mobileOpenOpenLeftSide.style.cssText = "left: 3px;";
    mobileOpenOpenLeftSide.innerHTML = ">";
  } else {
    isOpenLeftSide = true;
    body.style.cssText = "margin-left: 0px;";
    mobileOpenOpenLeftSide.style.cssText = "left: 220px;";
    mobileOpenOpenLeftSide.innerHTML = "<";
  }
}

function yScrollForbider() {
  window.scroll(0, window.pageYOffset);
}
