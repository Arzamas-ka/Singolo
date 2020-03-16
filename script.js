const navList = document.querySelector('.navigation__list');

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
