import Tabs from './components/Tabs.js';
import Timer from './components/Timer.js';
import Modal from './components/Modal.js';

window.addEventListener('DOMContentLoaded', () => {

  // Tabs

  const info = document.querySelector('.info-header'),
    tabs = document.querySelectorAll('.info-header-tab'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  const tabModule = new Tabs(info, tabs, tabContent);
  tabModule.init();

  // Timer

  const timer = document.querySelector('#timer'),
    hours = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minutes'),
    seconds = timer.querySelector('.seconds');

  const timerModule = new Timer(timer, hours, minutes, seconds);
  timerModule.init();

  // Modal

  const more = document.querySelector('.more'),
    descrBtnMore = document.querySelectorAll('.description-btn'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  const modalModule = new Modal(more, descrBtnMore, overlay, close);
  modalModule.init();
})