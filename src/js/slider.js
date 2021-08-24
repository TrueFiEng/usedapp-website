const slider = document.querySelector('.windows');
const slides = document.querySelectorAll('.window');
const btns = document.querySelectorAll('.slider__btns');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let init = 0;
let initMax = 3;

btnRight.addEventListener('click', function (e) {
  if (init < initMax - 1) {
    init++;
    slider.style.transform = `translateX(-${(100 / initMax) * init}%)`;
    btnLeft.classList.add('slider__btn--active');
  } else {
    btnLeft.classList.remove('slider__btn--active');
    btnRight.classList.add('slider__btn--active');
    slider.style.transform = 'translateX(' + 0 + '%)';
    init = 0;
  }
  if (init === initMax - 1) btnRight.classList.remove('slider__btn--active');
});

btnLeft.addEventListener('click', function (e) {
  if (init > 0) {
    init--;
    slider.style.transform = `translateX(-${(100 / initMax) * init}%)`;
  }
  if (init <= 0) {
    btnLeft.classList.remove('slider__btn--active');
    btnRight.classList.add('slider__btn--active');
    slider.style.transform = 'translateX(' + 0 + '%)';
    init = 0;
  }
});

console.log(slider.offsetWidth);

const setSlideWidth = slide => (slide.style.width = slider.offsetWidth);

window.addEventListener('resize', () => {
  console.log(slider.offsetWidth);
  slides.forEach(slide => setSlideWidth(slide));
});
