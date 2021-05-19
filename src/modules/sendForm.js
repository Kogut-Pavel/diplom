'use strict';

const sendForm = () => {
      
    const postData = body => fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
      
      const checkInputs = (event) => {
        const target = event.target;
        if (target.matches('.tel')) {
          target.value = target.value.replace(/[^\+\d]/g, '');
        }
  
        if (target.name === 'fio') {
          target.value = target.value.replace(/[^а-яё]/gi, '');
        }
      };
  
    const processingForm = idForm => {
      const form = document.getElementById(idForm);
      const statusMessage = document.createElement('div');
      const popup = document.querySelector('.modal-callback');
      const overlay = document.querySelector('.modal-overlay');

      const showStatus = status => {
        const img = document.createElement('img');
        const statusList = {
          load: {
            message: ' Загрузка...',
            img: './images/message/waiting.gif'
          },
          error: {
            message: ' Что-то пошло не так...',
            img: './images/message/Err.png'
          },
          success: {
            message: ' Спасибо! Мы скоро с вами свяжемся!',
            img: './images/message/OK.png'
          }
        };
      
      statusMessage.textContent = statusList[status].message;
      img.src = statusList[status].img;
      img.height = 50;
      statusMessage.insertBefore(img, statusMessage.firstChild);
      };
  
      statusMessage.style.cssText = 'font-size: 2rem; color: red';
  
      function deleteMessage() {
        statusMessage.parentNode.removeChild(statusMessage);
      }
      function closeModal() { 
        popup.style.display = 'none';
        overlay.style.display = 'none';
      }

      form.addEventListener('submit', event => {
        
        event.preventDefault();
        showStatus('load');
        form.appendChild(statusMessage);
        postData(Object.fromEntries(new FormData(form)))
          .then(response => {
            if (response.status !== 200) {
              throw new Error(`Status network ${response.status}`);
            }
            showStatus('success');
            setTimeout(closeModal, 3000);
            setTimeout(deleteMessage, 3000);
          })
          .catch(error => {
            showStatus('error');
            setTimeout(deleteMessage, 3000);
            console.error(error);
          });
      });
   
      
      form.addEventListener('input', checkInputs);
      
    };
  
    processingForm('form-callback');
   
  };
  
  export default sendForm;