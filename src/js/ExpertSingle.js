import Swiper from 'swiper';

export default function ExpertSingle(){
  const Init = document.querySelector('.experts__inner-s');
  if(Init){

    if(window.innerWidth > 900){
      const ExpertServicesSlider = new Swiper(
        '.services-of-expert__slider--init',
        {
          slidesPerView: 4,
          spaceBetween: 30,
          navigation: {
            prevEl: '.services-of-expert--prev',
            nextEl: '.services-of-expert--next'
          }
        }
      );
    } else {
      const ExpertServicesSliderM = new Swiper(
        '.services-of-expert__slider--init',
        {
          slidesPerView: 1,
          spaceBetween: 30,
          navigation: {
            prevEl: '.services-of-expert--prev',
            nextEl: '.services-of-expert--next'
          }
        }
      );
    }
  }
}