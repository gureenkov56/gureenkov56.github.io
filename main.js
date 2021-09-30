// data
let isLeftSideOpen = false;

let currentRevuewIdx = 0;
let review = [
  {
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, cum!",
    author: "John Stare",
    company: "Google",
    avatar: "./images/google.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisicing elit.",
    author: "Robert Bosch",
    company: "Bosch",
    avatar: "./images/bosch.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Corporis, cum! Corporis, cum!",
    author: "Henry Ford",
    company: "Ford",
    avatar: "./images/ford.png",
  },
];

// html element
const leftSide = document.querySelector("#leftSide");
const rightSide = document.querySelector("#rightSide");
const html = document.querySelector("html");
const body = document.querySelector("body");
const buttonOpenSide = document.querySelector("#buttonOpenSide");
const reviewTextP = document.querySelector(".review__text > p");
const clientName = document.querySelector(".client__name");
const clientCompany = document.querySelector(".client__company");
const clientAvatar = document.querySelector(".client__avatar > img");



//functions
function openLeftSide() {
  if (isLeftSideOpen) {
    console.log('asd');
    isLeftSideOpen = false;
    leftSide.style.cssText = "left: -270px;";
    buttonOpenSide.style.cssText = "transform: rotate(0deg);";
    rightSide.style.cssText = "left: 30px;";
    setTimeout(() => {
      body.style.cssText = "overflow-x: auto;";
      html.style.cssText = "overflow-x: auto;";
    }, 1000);
  } else {
    isLeftSideOpen = true;
    leftSide.style.cssText = "left: 0;";
    rightSide.style.cssText = "left: 300px;";
    html.style.cssText = "overflow-x: hidden;";
    body.style.cssText = "overflow-x: hidden;";
    buttonOpenSide.style.cssText = "transform: rotate(180deg);";
  }
}

function scrollWindowTo(section){
  let scrollLength = document.querySelector(`#${section}`).offsetTop;
  console.dir(scrollLength);

  window.scrollBy({
    top: scrollLength,
    behavior: "smooth",
  });
}

function changeReview(direction){
  changeReviewIdx(direction);
  changeReviewWithAnimation();
}

function changeReviewIdx(direction) {
  if (direction == "next") {
    if (currentRevuewIdx + 1 > review.length - 1) {
      currentRevuewIdx = 0;
    } else {
      currentRevuewIdx++;
    }
  } else {
    if (currentRevuewIdx - 1 < 0) {
      currentRevuewIdx = review.length - 1;
    } else {
      currentRevuewIdx--;
    }
  }
}

function changeReviewWithAnimation(){
  reviewTextP.style.cssText = "opacity: 0;";
  clientName.style.cssText = "opacity: 0;";
  clientCompany.style.cssText = "opacity: 0;";
  clientAvatar.style.cssText = "opacity: 0;";

  setTimeout(() => {
    reviewTextP.innerHTML = review[currentRevuewIdx].text;
    clientName.innerHTML = review[currentRevuewIdx].author;
    clientCompany.innerHTML = review[currentRevuewIdx].company;
    clientAvatar.setAttribute("src", review[currentRevuewIdx].avatar);

    reviewTextP.style.cssText = "opacity: 1;";
    clientName.style.cssText = "opacity: 1;";
    clientCompany.style.cssText = "opacity: 1;";
    clientAvatar.style.cssText = "opacity: 1;";

  }, 1000)
  

}