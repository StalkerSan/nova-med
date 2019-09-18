import Swiper from 'swiper';

export default function MainPage() {
  const HeroSection = document.querySelector('.hero');
  if(HeroSection){
    
    const HeroSlider = new Swiper('.hero__slider', {
      slidesPerView: 1
    })

    const FeedsSider = new Swiper('.feeds__slider--init', {
      slidesPerView: 3,
      navigation: {
        prevEl: '.feeds__slider--prev',
        nextEl: '.feeds__slider--next'
      }
    })
  }
}