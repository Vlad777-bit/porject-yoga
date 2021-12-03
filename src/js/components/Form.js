export default class Form {
  constructor(formEl, inputEl) {
    this.form = formEl;
    this.input = inputEl;

    this.message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Мы скоро свяжемся с Вами',
      failure: 'Что-то пошло не так...',
    }
  }

  init() {
    this.handelForm();
  }

  createElStatusMessage() {
    const messageEl = document.createElement('div');
    messageEl.classList.add('status');

    return messageEl;
  }

  handelForm() {
    this.form.addEventListener('submit', event => {
      event.preventDefault()

      const statusMessage = this.createElStatusMessage();
      this.form.append(statusMessage);

      const json = this.convertToJSON();

      this.sendToServer(json)
        .then(() => statusMessage.innerText = this.message.loading)
        .then(() => statusMessage.innerText = this.message.success)
        .catch(() => statusMessage.innerText = this.message.failure)
        .finally(() => this.input.forEach(el => el.value = ''))
    });
  }

  convertToJSON() {
    const formData = new FormData(this.form);

    return JSON.stringify(Object.fromEntries(formData));
  }

  sendToServer(data) {

    return new Promise((res, rej) => {
      const request = new XMLHttpRequest();

      request.open('POST', 'server.php');
      request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

      request.addEventListener('readystatechange', () => {
        if (!request.readyState) {
          rej();
        }

        if (request.readyState === 4 && request.status === 200) {
          res();
        }

        if (request.readyState < 4) {
          res();
        }
      })

      request.send(data);
    })
  }
}