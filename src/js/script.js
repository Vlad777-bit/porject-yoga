window.addEventListener('DOMContentLoaded', () => {

  'use strict';

  // Tabs

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
    });

    // Timer

    const deadLine = '2021-12-27';

    /**
     * Получем оставшиеся время
     * @param {string} endTime 
     * @returns Объект значений
     */
    function getRemaingTime(endTime) {
      const currentTime = new Date(),
        total = Date.parse(endTime) - Date.parse(currentTime),
        seconds = Math.floor((total / 1000) % 60),
        minutes = Math.floor((total / 1000 / 60) % 60),
        hours = Math.floor(total / (1000 * 60 * 60));

      return {
        total: total,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      }
    }

    /**
     * Получает элементы со страницы
     * @param {string} idEl id элемента страницы
     * @param {string} endTime 
     */
    function setClock(idEl, endTime) {
      const timer = document.getElementById(idEl),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateTimer, 1000);

      /**
       * Обновляет значение таймера
       */
      function updateTimer() {
        const t = getRemaingTime(endTime);
          hours.innerText = t.hours < 10 ? `0${t.hours}` : t.hours;
          minutes.innerText = t.minutes < 10 ? `0${t.minutes}` : t.minutes;
          seconds.innerText = t.seconds < 10 ? `0${t.seconds}` : t.seconds;

        if (t.total <= 0) {
          clearInterval(timeInterval);
          hours.innerText = '00';
          minutes.innerText = '00';
          seconds.innerText = '00';
        }
      }
    }

    setClock('timer', deadLine);
})