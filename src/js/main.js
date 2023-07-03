//Hamburger and Responsive navigation menu toggle
const btnHam = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const btnClose = document.querySelector('.close-btn');

btnHam.addEventListener('click', () => {
  btnHam.classList.toggle('open');
  nav.classList.toggle('active');
});

//navigation bar effects on scroll
window.addEventListener('scroll', () => {
  document
    .querySelector('header')
    .classList.toggle('sticky', window.scrollY > 0);
});
