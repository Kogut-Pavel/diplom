'use strict';

const togglePopUp = () => {
  
   const modalContent = document.querySelector('.modal-callback'),
      modalOverlay = document.querySelector('.modal-overlay');
  
    document.addEventListener('click', (event) => {
      let target = event.target;
      if (target.matches('#popupBtn') || target.matches('.button-services') || target.matches('.absolute')) {
        event.preventDefault();
        modalOverlay.style.display = 'block';
        modalContent.style.display = 'block';
      }
    
    });

    document.addEventListener('click', (event) => {
      let target = event.target;
      if (target.parentNode.classList.contains('modal-close') ||
      target.closest('.modal-overlay')) {
        modalContent.style.display = 'none';
        modalOverlay.style.display = 'none';
      }  
    });
};

export default togglePopUp;