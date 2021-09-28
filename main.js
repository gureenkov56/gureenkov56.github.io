// state
let isLeftSideOpen = false;

// html element
const leftSide = document.querySelector("#leftSide");
const rightSide = document.querySelector("#rightSide");
const body = document.querySelector("body");
const buttonOpenSide = document.querySelector("#buttonOpenSide");

//functions
function openLeftSide() {
  if (isLeftSideOpen) {
    console.log('asd');
    isLeftSideOpen = false;
    leftSide.style.cssText = "left: -280px;";
    buttonOpenSide.style.cssText = "transform: rotate(0deg);";
    rightSide.style.cssText = "left: 20px;";
    setTimeout(() => {
      body.style.cssText = "overflow-x: auto;";
    }, 1000);
  } else {
    isLeftSideOpen = true;
    leftSide.style.cssText = "left: 0;";
    rightSide.style.cssText = "left: 300px;";
    body.style.cssText = "overflow-x: hidden;";
    buttonOpenSide.style.cssText = "transform: rotate(180deg);";
  }
}
