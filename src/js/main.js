//Hamburger and Responsive navigation menu toggle
const btnHam = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const btnClose = document.querySelector('.btn-close');

btnHam.addEventListener('click', () => {
  btnHam.classList.add('open');
  nav.classList.add('active');
});

btnClose.addEventListener('click', () => {
  nav.classList.remove('active');
  btnHam.classList.remove('open');
});

//active link
const links = document.querySelectorAll('.link');

let activeLink = 0;

links.forEach((link, i) => {
  link.addEventListener('click', () => {
    if (activeLink != i) {
      links[activeLink].classList.remove('active');
      link.classList.add('active');

      activeLink = i;
    }
    nav.classList.remove('active');
    btnHam.classList.remove('open');
  });
});

//navigation bar effects on scroll
window.addEventListener('scroll', () => {
  document
    .querySelector('header')
    .classList.toggle('sticky', window.scrollY > 0);
});
