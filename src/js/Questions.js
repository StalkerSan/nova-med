export default function Questions(){
  const QuestionsInit = document.querySelector('.faq__inner-page');
  if(QuestionsInit){
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