async function load() {
  const page = await import('./main.js');
  page.render();
}

load();

//about-observer
const aboutImg = document.querySelector('.about-right-col .img-right-col');
const aboutDiv = document.querySelector('.about-left-col .about-divider');
const aboutTex = document.querySelector('.about-text');
const aboutBtn = document.querySelector('.btn-about-pri');
const visionTitle = document.querySelector('.vision-title');
const visionDiv = document.querySelector('.vision-divider');
const visionCard = document.querySelectorAll('.our-vision-card');

const observerAbout = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('animation', entry.isIntersecting);
      if (entry.isIntersecting) observerAbout.unobserve(entry.target);
    });
  },
  {
    rootMargin: '0px 0px -50px 0px',
  }
);

observerAbout.observe(aboutImg);
observerAbout.observe(aboutDiv);
observerAbout.observe(aboutTex);
observerAbout.observe(aboutBtn);
observerAbout.observe(visionTitle);
observerAbout.observe(visionDiv);

visionCard.forEach((card) => {
  observerAbout.observe(card);
});

//Typewriter
let i = 0;
const text = 'Inspired Web Solutions: Learn About Our';
const speed = 50;
const subtitleAbout = document.querySelector('#about-subtitle');

const observeAbout2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      typewriter();
      observeAbout2.unobserve(entry.target);
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  }
);

observeAbout2.observe(subtitleAbout);

function typewriter() {
  if (i < text.length) {
    document.querySelector('#about-subtitle').innerHTML += text.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}
