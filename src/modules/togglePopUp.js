'use strict';

const togglePopUp = () => {
  const btn = document.querySelector('#popupBtn'),
    modalContent = document.querySelector('.modal-callback'),
    modalOverlay = document.querySelector('.modal-overlay');

    btn.addEventListener('click', () => {
      
      modalOverlay.style.display = 'block';
      modalContent.style.display = 'block';
    });

    document.addEventListener('click', (event) => {
      let target = event.target;
      if (target.parentNode.classList.contains('modal-close') ||
      target.closest('.modal-overlay')) {
        modalContent.style.display = 'none';
        modalOverlay.style.display = 'none';
      }  
      console.log(target);
      
     
    });
};

togglePopUp();

export default togglePopUp;