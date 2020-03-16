const navList = document.querySelector('.navigation__list');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

const activeNav = () => {
  navList.addEventListener('click', evt => {
    navList.querySelectorAll('.navigation__link').forEach(elem => {
      elem.classList.remove('navigation__link--active');
      evt.target.classList.add('navigation__link--active');
    });
  });

  return;
};
activeNav();

const slider = () => {
  const slides = Array.from(document.querySelectorAll('.banner__slider'));
  let index = 0;
  let currentSlide = slides[index];

  arrowLeft.addEventListener('click', () => {
    if (index === 0) {
      currentSlide.classList.remove('banner__slider--show');
      currentSlide = slides[slides.length - 1];
      currentSlide.classList.add('banner__slider--show');
      index = slides.length - 1;

      return;
    }

    index -= 1;
    currentSlide.classList.remove('banner__slider--show');
    currentSlide = slides[index];
    currentSlide.classList.add('banner__slider--show');
  });

  arrowRight.addEventListener('click', () => {
    if (index === 0) {
      currentSlide.classList.remove('banner__slider--show');
      currentSlide = slides[slides.length - 1];
      currentSlide.classList.add('banner__slider--show');
      index = slides.length - 1;

      return;
    }

    index -= 1;
    currentSlide.classList.remove('banner__slider--show');
    currentSlide = slides[index];
    currentSlide.classList.add('banner__slider--show');
  });
};
slider();
