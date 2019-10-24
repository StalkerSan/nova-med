import fancybox from "@fancyapps/fancybox";
import { CountUp } from "./lib/countUp";
import MainPage from "./MainPage";
import ExpertSingle from "./ExpertSingle";
import About from "./About";
import Questions from "./Questions";

const brg = document.querySelector(".header__brg");
const nav = document.querySelector(".header__nav");
let isOpen = false;
brg.addEventListener("click", () => {
  if (!isOpen) {
    nav.classList.add("is-active");
    isOpen = true;
  } else {
    nav.classList.remove("is-active");
    isOpen = false;
  }
});

const wipTrigger = document.querySelectorAll(".wip__trigger");
const wipModal = document.querySelector(".wip__modal--video iframe");
wipTrigger.forEach(it => {
  it.addEventListener("click", () => {
    const src = it.getAttribute("data-video-url");
    console.log("🐞: src", src);
    wipModal.setAttribute("src", src);
    $.fancybox.open({
      src: "#wip__modal--video",
      type: "inline"
    });
  });
});

window.openCityModal = () => {
  $.fancybox.open({
    src: "#citiesModal",
    type: "inline"
  });
};
$(document).ready(() => {
  let turned = false;
  $(window).scroll(() => {
    const st = $(window).scrollTop();
    if (st >= 800 && !turned) {
      const coutup1 = new CountUp("countup1", 320000).start();
      const coutup2 = new CountUp("countup2", 150000).start();
      turned = true;
    }
  });
});

MainPage();
ExpertSingle();
About();
Questions();
