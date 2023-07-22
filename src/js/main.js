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

//Observer - hero
const heroItems = document.querySelectorAll('.load-item');
const serviceTitle = document.querySelector('.services-left-col h3');
const serviceDivider = document.querySelector('.services-left-col .divider');
const serviceBtn = document.querySelector('.services-left-col .btn-primary');
const serviceCard = document.querySelectorAll('.service-card');
const missionsTitle = document.querySelector('.missions-right-col h3');
const missionsDivider = document.querySelector('.missions-right-col .divider');
const missionsText = document.querySelector('.missions-right-col p');
const missionsBtn = document.querySelector('.missions-right-col .btn-primary');
const missionsPic = document.querySelector('.mission-picture img');
const statsTitle = document.querySelector('.statistics-right-col h3');
const statsDivider = document.querySelector('.statistics-right-col .divider');
const statsText = document.querySelector('.statistics-right-col p');

const observerHero = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('animate', entry.isIntersecting);
      if (entry.isIntersecting) observerHero.unobserve(entry.target);
    });
  },
  {
    rootMargin: '0px 0px -110px 0px',
  }
);

const observerImg = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('animateImg', entry.isIntersecting);
  });
});

heroItems.forEach(
  (item) => {
    observerHero.observe(item);
  },
  {
    rootMargin: '0px 0 -500px 0px',
    threshold: 1,
  }
);

serviceCard.forEach((item) => {
  observerHero.observe(item);
});

observerHero.observe(serviceTitle);
observerHero.observe(serviceDivider);
observerHero.observe(serviceBtn);
observerHero.observe(missionsTitle);
observerHero.observe(missionsDivider);
observerHero.observe(missionsText);
observerHero.observe(missionsBtn);
observerHero.observe(statsTitle);
observerHero.observe(statsDivider);
observerHero.observe(statsText);
observerImg.observe(missionsPic);

/* Slider */
const contents = document.querySelectorAll('.content');
const buttons = document.querySelectorAll('.nav-btn');

const sliderNav = function (i) {
  contents.forEach((content) => {
    content.classList.remove('active');
  });

  buttons.forEach((button) => {
    button.classList.remove('active');
  });

  contents[i].classList.add('active');
  buttons[i].classList.add('active');
};

buttons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    sliderNav(i);
  });
});

/* Modal services */
const btnLearn = document.querySelectorAll('.learn-more');
const servicesMod = document.querySelectorAll('.service-modal');
const modalClose = document.querySelectorAll('.modal-close-btn');

const portfolioService = function (i) {
  servicesMod[i].classList.add('active');
  document.body.style.overflow = 'hidden';
};

btnLearn.forEach((learn, i) => {
  learn.addEventListener('click', () => {
    portfolioService(i);
  });
});

modalClose.forEach((btn) => {
  btn.addEventListener('click', () => {
    servicesMod.forEach((modal) => {
      modal.classList.remove('active');
      document.body.style.overflow = 'visible';
    });
  });
});

// Counter
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;
const statsInner = document.querySelector('.statistics-inner');

const observerStats = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    countUp();
  });
});

observerStats.observe(statsInner);

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');

      const c = +counter.innerText;

      const increment = target / 30;
      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}
