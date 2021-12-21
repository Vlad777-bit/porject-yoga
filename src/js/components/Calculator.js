export default class Calculator {
  constructor(peopleEl, daysEl, centerEl, totalEl) {
    this.people = peopleEl;
    this.days = daysEl;
    this.center = centerEl;
    this.totalValue = totalEl;

    this.countPersons = 0;
    this.countDays = 0;
    this.total = 0;

    this.startPrice = 4000;
  }

  init() {
    this._handleInputChange(this.people);
    this._handleInputChange(this.days);
    this._handleSelectChange();
  }

  _resetTotal() {
    this.total = 0;
    this.totalValue.innerText = this.total;
  }

  _resetSelect(select) {
    select.options.selectedIndex = 0;
  }

  _calcTotal(days, people, price) {
    if (!(days && people && price)) {
      this._resetTotal();
    } else {
      this.total = (+days + +people) * price;
    }
  }

  _handleInputChange(inputEl) {
    inputEl.addEventListener('input', ev => {
      const currentEl = ev.target;

      if (this.people.value === '' && this.days.value === '') {
        this._resetTotal();
        return;
      }

      if (currentEl.id === 'people') {
        this.countPersons = +currentEl.value;
      }

      if (currentEl.id === 'days') {
        this.countDays = +currentEl.value;
      }

      this._calcTotal(this.countDays, this.countPersons, this.startPrice);
      this.totalValue.innerText = this.total;

      this._resetSelect(this.center);
    })
  }

  _handleSelectChange() {
    this.center.addEventListener('change', event => {
      if (this.people.value === '' || this.days.value === '') {
        this._resetTotal();
        return;
      } 

      const _total = this.total;
      const selectedEl = event.target;
      const seletedIndex = event.target.selectedIndex;

      this.totalValue.innerText = _total * selectedEl.options[seletedIndex].value;
    })
  }
}