export default class Timer {
  constructor(timerEl, hoursEl, minutesEl, secondsEl) {
    this.deadLine = '2021-12-27';

    this.timer = timerEl;
    this.hours = hoursEl;
    this.minutes = minutesEl;
    this.seconds = secondsEl;
  }

  init() {
    this.setClock();
  }

  /**
   * Получем оставшиеся время
   * @param {string} endTime
   * @returns Объект значений
   */
  getRemaingTime() {
    const currentTime = new Date(),
      total = Date.parse(this.deadLine) - Date.parse(currentTime),
      seconds = Math.floor((total / 1000) % 60),
      minutes = Math.floor((total / 1000 / 60) % 60),
      hours = Math.floor(total / (1000 * 60 * 60));

    return {
      total: total,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  /**
   * Получает элементы со страницы
   */
  setClock() {
    const updateTimer = () => {
      const t = this.getRemaingTime();

      this.hours.innerText = t.hours < 10 
        ? `0${t.hours}` 
        : t.hours;

      this.minutes.innerText = t.minutes < 10 
        ? `0${t.minutes}` 
        : t.minutes;

      this.seconds.innerText = t.seconds < 10 
        ? `0${t.seconds}` 
        : t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);

        this.hours.innerText = '00';
        this.minutes.innerText = '00';
        this.seconds.innerText = '00';
      }
    };

    const timeInterval = setInterval(updateTimer, 1000);
  }
}
