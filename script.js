const navList = document.querySelector('.navigation__list');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const verticalPhone = document.querySelector('.banner__vertical_1');
const horizontalPhone = document.querySelector('.banner__horizontal_1');
const portfolioMenuList = document.querySelector('.portfolio-list');
const galleryImages = document.querySelector('.portfolio-gallery');
const btnForm = document.querySelector('.quote__button');
const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('.popup-btn');
const form = document.querySelector('.quote__form');
const formBtn = document.querySelector('.quote__button');
const phoneBtnVert = document.querySelector('.banner__home-vertical');
const phoneBtnHorzt = document.querySelector('.banner__home-horizontal');
const phoneBtnSldTwo = document.querySelector('.banner__home-phones_2');
const screenBlackVert = document.querySelector('.banner__vertical-black');
const screenBlackHorzt = document.querySelector('.banner__horizontal-black');;
const screenBlackPhoneTwo = document.querySelector('.banner__phones_2-black');
const burgerBtn = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const logo = document.querySelector('#logo');
const banner = document.querySelector('.banner');

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
      banner.classList.add('banner--blue');
      currentSlide.classList.remove('banner__slider--show');
      currentSlide = slides[slides.length - 1];
      currentSlide.classList.add('banner__slider--show');
      index = slides.length - 1;

      return;
    }

    index -= 1;
    banner.classList.remove('banner--blue');
    currentSlide.classList.remove('banner__slider--show');
    currentSlide = slides[index];
    currentSlide.classList.add('banner__slider--show');
  });

  arrowRight.addEventListener('click', () => {
    if (index === 0) {
      // banner.style.backgroundColor = '#648bf0';
      banner.classList.add('banner--blue');
      currentSlide.classList.remove('banner__slider--show');
      currentSlide = slides[slides.length - 1];
      currentSlide.classList.add('banner__slider--show');
      index = slides.length - 1;

      return;
    }

    index -= 1;
    banner.classList.remove('banner--blue');
    currentSlide.classList.remove('banner__slider--show');
    currentSlide = slides[index];
    currentSlide.classList.add('banner__slider--show');
  });
};
slider();

const activePortfolioMenu = () => {
  portfolioMenuList.addEventListener('click', event => {
    portfolioMenuList.querySelectorAll('.portfolio-item').forEach(elem => {
      if (event.target.classList.contains('portfolio-list')) {
        event.target.style.border = 'none';
        return;
      }

      elem.classList.remove('portfolio-item--active');
      event.target.classList.add('portfolio-item--active');

      if (event.target.classList.contains('portfolio-item--active')) {
        let setPictures = [
          ...galleryImages.querySelectorAll('.portfolio-picture')
        ];
        setPictures.unshift(setPictures.pop());
        setPictures.forEach(picture => galleryImages.append(picture));
      }
    });
  });

  return;
};
activePortfolioMenu();

const getActivePicture = () => {
  galleryImages.addEventListener('click', event => {
    galleryImages.querySelectorAll('.portfolio-picture').forEach(elem => {
      if (event.target.classList.contains('portfolio-gallery')) {
        elem.classList.remove('portfolio-picture--border');
        return;
      }

      elem.classList.remove('portfolio-picture--border');
      event.target.classList.add('portfolio-picture--border');
    });
  });
};
getActivePicture();

const sendForm = () => {
  form.addEventListener('submit', event => {
    event.preventDefault();

    popup.classList.remove('popup--hidden');
    popup.classList.add('popup--show');

    document.querySelector('.popup-theme').textContent = document.querySelector(
      '[placeholder="Subject"]'
    ).value;
    document.querySelector(
      '.popup-description'
    ).textContent = document.querySelector(
      '[placeholder="Describe your project in detail..."]'
    ).value;

    document.querySelector('[placeholder="Name (Required)"]').value = '';
    document.querySelector('[placeholder="Email (Required)"]').value = '';
    document.querySelector('[placeholder="Subject"]').value = '';
    document.querySelector(
      '[placeholder="Describe your project in detail..."]'
    ).value = '';
  });
};
sendForm();

const closePopup = () => {
  popupBtn.addEventListener('click', () => {
    popup.classList.add('popup--hidden');
    popup.classList.remove('popup--show');
  });
};
closePopup();

const toggleBlackScreenPhone = () => {
  phoneBtnVert.addEventListener('click', () => {
    verticalPhone.classList.toggle('black-hidden');
    screenBlackVert.classList.toggle('black-show');
  });

  phoneBtnHorzt.addEventListener('click', () => {
    horizontalPhone.classList.toggle('black-hidden');
    screenBlackHorzt.classList.toggle('black-show');
  });

  // phoneBtnSldTwo.addEventListener('click', () => {
  //   screenBlackPhoneTwo.classList.toggle('black-show');
  // });
};
toggleBlackScreenPhone();

const getMenuMobile = () => {
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--transform');
    navigation.classList.toggle('navigation--show');
    logo.classList.toggle('logo-absolute');
  })
}
getMenuMobile();
