import Swiper from 'swiper';

export default function MainPage() {
  const HeroSection = document.querySelector('.hero');
  if(HeroSection){
    console.log('hi');
    
    const HeroSlider = new Swiper('.hero__slider', {
      slidesPerView: 1
    })
  }
}