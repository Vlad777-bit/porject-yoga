export default class Tabs {
  constructor(infoEl, tabsEl, tabContentEl) {
    this.info = infoEl;
    this.tabs = tabsEl;
    this.tabContent = tabContentEl;
  }

  init() {
    this.hideTabContent();
    this.handleClickTab();
  }

  /**
   * Метод скрывающий весь контент блока info кроме указанного в параметре метода
   * @param {number} a пробрасываем кол-во контента для показа 
   */
  hideTabContent(a = 1) {
    for (let i = a; i < this.tabContent.length; i++) {
      this.tabContent[i].classList.remove('show');
      this.tabContent[i].classList.add('hide');
    }
  }

  /**
   * Метод показывающий определённый контент блока info
   * @param {number} b пробрасываем номер контента по которому произошёл клик
   */
  showTabContent(b) {
    if (this.tabContent[b].classList.contains('hide')) {
      this.tabContent[b].classList.remove('hide');
      this.tabContent[b].classList.add('show');
    }
  }

  handleClickTab() {
    this.info.addEventListener('click', event => {
      const target = event.target;

      if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < this.tabs.length; i++) {
          if (target === this.tabs[i]) {
            this.hideTabContent(0);
            this.showTabContent(i);
            return;
          }
        }
      }
    });
  }
}