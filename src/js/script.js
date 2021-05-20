window.addEventListener('DOMContentLoaded', () => {

  'use strict';

  const info = document.querySelector('.info-header'),
    tab = document.querySelectorAll('.info-header-tab'),
    tabContent = document.querySelectorAll('.info-tabcontent');

    /**
     * Функция скрывающая весь контент блока info кроме первого
     * @param {number} a пробрасываем кол-во контента для показа 
     */
    function hideTabContent(a) {
      for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
      }
    }

    hideTabContent(1);

    /**
     * Функция показывающая определённый контент блока info
     * @param {number} b пробрасываем номер контента по которому произошёл клик
     */
    function showTabContent(b) {
      if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
      }
    }

    info.addEventListener('click', event => {
      const target = event.target;

      if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < tab.length; i++) {
          if (target === tab[i]) {
            hideTabContent(0);
            showTabContent(i);
            break;
          }
        }
      }
    })
})