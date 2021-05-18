'use strict';

const slider = () => {

  const slide = document.querySelectorAll(".item");
  const bigs = document.querySelectorAll('.big');
  let currentSlide = 0;
  let currentBig = 0;

  const autoPlaySlide = () => { 
    slide[currentSlide].classList.remove("item-active");
    
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    slide[currentSlide].classList.add("item-active");
  };

  const startSlide = () => {
    setInterval(autoPlaySlide, 3000);
  };

  startSlide();

};

export default slider;