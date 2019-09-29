import MainPage from './MainPage';
import ExpertSingle from './ExpertSingle';
import About from './About';
import Questions from './Questions';

const brg = document.querySelector('.header__brg');
const nav = document.querySelector('.header__nav');
let isOpen = false;
brg.addEventListener('click', ()=>{
  if(!isOpen){
    nav.classList.add('is-active');
    isOpen = true;
  } else {
    nav.classList.remove('is-active');
    isOpen = false;
  }
})

MainPage();
ExpertSingle();
About();
Questions();