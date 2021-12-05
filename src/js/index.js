import Tabs from './components/Tabs.js';
import Timer from './components/Timer.js';
import Modal from './components/Modal.js';
import Form from './components/Form.js';
import Slider from './components/Slider.js';

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

  // FromModal

  const formModal = document.querySelector('.main-form'),
    inputModal = formModal.querySelectorAll('input');

  const formModuleModal = new Form(formModal, inputModal);
  formModuleModal.init();

  // Form

  const formEl = document.querySelector('#form'),
    inputFormEl = formEl.querySelectorAll('input');

  const formModule = new Form(formEl, inputFormEl);
  formModule.init();

  // Slider

  const slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

  const sliderModule = new Slider(slides, prev, next, dotsWrap, dots);
  sliderModule.init();
})