export default class Slider {
  constructor(slides, prev, next, dotsWrap, dots) {
    this.slideIndex = 1;

    this.slides = slides;
    this.prev = prev;
    this.next = next;
    this.dotsWrap = dotsWrap;
    this.dots = dots;
  }

  init() {
    this.showSlides(this.slideIndex);
    this.nextSlide();
    this.prevSlide();
    this.handleDots();
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    this.slides.forEach(el => el.style.display = 'none');
    this.dots.forEach(el => el.classList.remove('dot-active'));

    this.slides[this.slideIndex - 1].style.display = 'block';
    this.dots[this.slideIndex - 1].classList.add('dot-active');
  }

  nextSlide() {
    this.next.addEventListener('click', () => this.showSlides(this.slideIndex += 1));
  }

  prevSlide() {
    this.prev.addEventListener('click', () => this.showSlides(this.slideIndex -= 1));
  }

  handleDots() {
    this.dotsWrap.addEventListener('click', event => {
      for (let i = 0; i < this.dots.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target == this.dots[i - 1]) {
          this.showSlides(this.slideIndex = i);
        }
      }
    })
  }
}