'use strict';

const smoothScrolling = () => {
  const scrollLinks = document.querySelectorAll('li>a');
  
   for (const scrollLink of scrollLinks) {
     scrollLink.addEventListener('click', event => {
       event.preventDefault();
       const id = scrollLink.getAttribute('href');
       document.querySelector(id).scrollIntoView({
         behavior: 'smooth',
         block: 'start',
         });
     });
    }

  const arrowUp = document.querySelector('.up');
  const clientHeight = document.documentElement.clientHeight;
  arrowUp.style.display = 'none';
  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > clientHeight || document.documentElement.scrollTop > clientHeight) {
      arrowUp.style.display = 'block';
    } else {
      arrowUp.style.display = 'none';
    } 
  });

  arrowUp.addEventListener('click', () => {
    window.scrollTo(0, 0);
    
  });
  
};

export default smoothScrolling;