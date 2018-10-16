var navList = document.querySelector('.navigation-list');
var navToggle = document.querySelector('.navigation-list__btn');

navList.classList.remove('navigation-list--nojs');

navToggle.addEventListener('click', function() {
  if (navList.classList.contains('navigation-list--closed')) {
    navList.classList.remove('navigation-list--closed');
    navList.classList.add('navigation-list--opened');
  } else {
    navList.classList.add('navigation-list--closed');
    navList.classList.remove('navigation-list--opened');
  }
});
