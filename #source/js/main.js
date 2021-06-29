let windowHeight = $(window).height(); //для анимации H2 при скроле

$(window).on("load", () =>
  setTimeout(textAnimate("WEB-DEVELOPER", $("h1 > span")), 5000)
);

let wasMyTools = false;
$(window).scroll(() => {
  if (
    $(document).scrollTop() + windowHeight * 0.8 > $(".my-tools").offset().top &&
    wasMyTools === false
  ) {
    textAnimate("MY TOOLS", $(".my-tools > h2 > span"));
    wasMyTools = true;
  }
});

let wasMyProject = false;
$(window).scroll(() => {
  if (
    $(document).scrollTop() + ($(window).height() * 0.8) > $(".projects").offset().top &&
    wasMyProject === false
  ) {
    textAnimate("PROJECTS", $(".projects > h2 > span"));
    wasMyProject = true;
  }
});

function textAnimate(text, htmlEl) {
  let txtArr = text.split("");
  let i = 0;
  let timer = setInterval(() => {
    if (i + 1 >= txtArr.length) {
      clearInterval(timer);
    }
    htmlEl.before(txtArr[i]);
    i++;
  }, 40);
}



$(document).ready(function () {
  $(".hello__image").animate({ opacity: "1" }, 1000);
  $(".hello__text").animate({ opacity: "1" }, 1000);
});