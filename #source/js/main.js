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
  }, 40);
}

$(window).on("load", () => setTimeout(textAnimate(textArr), 5000));