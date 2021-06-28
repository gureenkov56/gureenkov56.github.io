const text = "WEB-DEVELOPER";

const textArr = text.split("");
const spanText = $(".cursor");

function textAnimate(txtArr) {
  let i = 0;
  let timer = setInterval(() => {
    if (i + 1 >= txtArr.length) {
      clearInterval(timer);
    }
    spanText.before(txtArr[i]);
    i++;
  }, 30);
}

$(document).ready(function () {
  textAnimate(textArr);
});