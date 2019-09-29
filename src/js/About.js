import Swiper from 'swiper';

export default function About(){
  const Init = document.querySelector('.about');
  if(Init){
    if(window.innerWidth > 900){
      const AboutWIPSlider = new Swiper(
        '.about-wip__slider--init',
        {
          slidesPerView: 2,
          spaceBetween: 30,
          navigation: {
            prevEl: '.about-wip__slider--prev',
            nextEl: '.about-wip__slider--next'
          }
        }
      );
      const FeedsSlider = new Swiper('.feeds__slider--init', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          prevEl: '.feeds__slider--prev',
          nextEl: '.feeds__slider--next'
        }
      });
    } else {
      const AboutWIPSliderM = new Swiper(
        '.about-wip__slider--init',
        {
          slidesPerView: 1,
          spaceBetween: 30,
          navigation: {
            prevEl: '.about-wip__slider--prev',
            nextEl: '.about-wip__slider--next'
          }
        }
      );
      const FeedsSliderM = new Swiper('.feeds__slider--init', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          prevEl: '.feeds__slider--prev',
          nextEl: '.feeds__slider--next'
        }
      });
    }

  }
}