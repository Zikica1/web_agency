async function load() {
  const page = await import('./main.js');

  page.render();
}
load();

//Observer-services
const serviceImg = document.querySelector('.what-we-do-img');
const whatWeDoImg = document.querySelector('.what-we-do-left img');
const whatWeDoPa = document.querySelector('.what-we-do-left p');
const offerTitle = document.querySelector('.offer-text h3');
const offerImg = document.querySelector('.offer-text img');
const offerCards = document.querySelectorAll('.card');
const teamTitle = document.querySelector('#team-title');
const teamImg = document.querySelector('#team-img');
const teamText = document.querySelector('#team-text');
const teamCards = document.querySelectorAll('.team-card');
const serviceCard = document.querySelectorAll('.card');

const observerSer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('animation', entry.isIntersecting);
      if (entry.isIntersecting) observerSer.unobserve(entry.target);
    });
  },
  {
    rootMargin: '0px 0px -50px 0px',
  }
);

observerSer.observe(serviceImg);
observerSer.observe(whatWeDoImg);
observerSer.observe(whatWeDoPa);
observerSer.observe(offerTitle);
observerSer.observe(offerImg);
observerSer.observe(teamTitle);
observerSer.observe(teamImg);
observerSer.observe(teamText);

offerCards.forEach((card) => {
  observerSer.observe(card);
});

teamCards.forEach((card) => {
  observerSer.observe(card);
});

serviceCard.forEach((card) => {
  observerSer.observe(card);
});

//typewriter
const serviceTitle = document.querySelector('#what-we-do-title');

const serviceObserver2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      typewriter();
      serviceObserver2.unobserve(entry.target);
    });
  },
  {
    rootMargin: '0px 0px -100px 0px',
  }
);

serviceObserver2.observe(serviceTitle);

let i = 0;
const text = 'Who we are &  what we do';
const speed = 50;

function typewriter() {
  if (i < text.length) {
    document.querySelector('#what-we-do-title').innerHTML += text.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}

//card flipped
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  });
});
