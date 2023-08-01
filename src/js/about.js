async function load() {
  const page = await import('./main.js');
  page.render();
}

load();

//about-observer
const aboutImg = document.querySelector('.about-right-col .img-right-col');

const observerAbout = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('animation', entry.isIntersecting);
    if (entry.isIntersecting) observerAbout.unobserve(entry.target);
  });
});

observerAbout.observe(aboutImg);

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
      observeAbout2.unobserve(subtitleAbout);
    });
  },
  {
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
