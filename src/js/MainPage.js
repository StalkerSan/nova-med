/* eslint-disable no-unused-vars */
import Swiper from 'swiper';

export default function MainPage() {
  const HeroSection = document.querySelector('.hero');
  if(HeroSection){
    
    const HeroSlider = new Swiper('.hero__slider', {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
      },
    });

    if(window.innerWidth > 900){
      console.log("🐞: MainPage -> window.innerWidth", window.innerWidth)
      const FeedsSlider = new Swiper('.feeds__slider--init', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          prevEl: '.feeds__slider--prev',
          nextEl: '.feeds__slider--next'
        },
      });
    } else {
      const FeedsSliderM = new Swiper('.feeds__slider--init', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          prevEl: '.feeds__slider--prev',
          nextEl: '.feeds__slider--next'
        },
      });
    }

    if(window.innerWidth > 900){
      const ExpertsSlider = new Swiper('.experts__slider--init', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          prevEl: '.experts__slider--prev',
          nextEl: '.experts__slider--next'
        }
      });
    } else {
      const ExpertsSliderM = new Swiper('.experts__slider--init', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          prevEl: '.experts__slider--prev',
          nextEl: '.experts__slider--next'
        }
      });
    }

    const FAQDropdown = () => {
      const Trigger = document.querySelectorAll('.faq__item--top');
      const Content = document.querySelectorAll('.faq__item');
      Trigger.forEach((it, i) => {
        let isOpen = false;
        it.addEventListener('click', () => {
          if(!isOpen){
            Content[i].classList.add('is-open');
            isOpen = true;
          } else {
            Content[i].classList.remove('is-open');
            isOpen = false;
          }
        })
      });
    }

    FAQDropdown();
  }
}