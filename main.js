// data and state
let isLeftSideOpen = false;

let currentRevuewIdx = 0;
let review = [
  {
    text: "Спасибо за выполненную работу и вклад в развитие нашего бизнеса.",
    author: "Виктор",
    company: "K&C GROUP",
    avatar: "./images/review1.png",
  },
  {
    text: "Качественно выполнена работа! Очень ответственный подход. Работы выполнена быстро и очень здорово!",
    author: "Сергей",
    company: 'ООО "СтройПром" ',
    avatar: "./images/review2.png",
  },
  {
    text: "Очень понравилась работа Никиты. Точно понял задание, выполнил все быстро и качественно. Спасибо за свежие идеи!",
    author: "Ксения",
    company: "RecStudio",
    avatar: "./images/review3.png",
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


// events

window.addEventListener("scroll", windowScroll);

//functions
function openLeftSide() {
  if (isLeftSideOpen) {
    console.log("asd");
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

function scrollWindowTo(section) {
  let scrollLength = document.querySelector(`#${section}`).offsetTop;

  window.scrollBy({
    top: scrollLength,
    behavior: "smooth",
  });
}

function changeReview(direction) {
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

function changeReviewWithAnimation() {
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
  }, 1000);
}
