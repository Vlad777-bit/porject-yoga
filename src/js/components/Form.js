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

      this.sendToServer(statusMessage);
    });
  }

  convertToJSON() {
    const formData = new FormData(this.form);

    return JSON.stringify(Object.fromEntries(formData));
  }

  sendToServer(statusMessage) {
    const request = new XMLHttpRequest();

    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    
    const json = this.convertToJSON();
    request.send(json);

    request.addEventListener('readystatechange', () => {
      if (!request.readyState) {
        statusMessage.innerText = this.message.failure;
        return;
      }

      if (request.readyState === 4 && request.status === 200) {
        statusMessage.innerText = this.message.success;
        return;
      }

      if (request.readyState < 4) {
        statusMessage.innerText = this.message.loading;
      }

      this.input.forEach(el => el.value = '');
    })
  }
}