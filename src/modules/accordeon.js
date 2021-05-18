'use strict';

const accordeon = () => {

    const titles = document.querySelectorAll('.title');

    const toggleAccord = (event) => {
        let target = event.target.closest('.title');
            for (let i = 0; i < titles.length; i++) {
                titles[i].parentNode.classList.remove('active');  
                titles[i].nextElementSibling.style.display = 'none';
            }
            target.nextElementSibling.style.display = 'block';
            target.parentNode.classList.add('active');
    };

    titles.forEach(item => {item.addEventListener('click', toggleAccord);});

};

export default accordeon;