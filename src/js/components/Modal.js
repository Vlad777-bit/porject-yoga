export default class Modal {
  constructor(moreEl, descrBtnMoreEl, overlayEl, closeEl) {
    this.more = moreEl;
    this.descrBtnMore = descrBtnMoreEl;
    this.overlay = overlayEl;
    this.close = closeEl;
  }

  init() {
    // Tabs 
    this.descrBtnMore.forEach((el) => {
      this.showModal(el);
      this.hiddenModal(el);
    });

    this.showModal(this.more);
    this.hiddenModal(this.more);
  }

  showModal(el) {
    el.addEventListener('click', () => {
      this.overlay.style.display = 'block';
      el.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });
  }

  hiddenModal(el) {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      el.classList.remove('more-splash');
      document.body.style.overflow = '';
    });
  }
}
