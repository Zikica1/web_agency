async function load() {
  const page = await import('./main.js');

  page.render();
}

load();

//observer contact
const contactCards = document.querySelectorAll('.contact-card');
const contactTitle = document.querySelector('.contact-form-left h3');
const contactImg = document.querySelector('.contact-form-left img');
const contactP = document.querySelector('.contact-form-left p');
const contactRigTit = document.querySelector('.contact-form-right h3');
const contactForm = document.querySelector('form');

const observerCon = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('animation', entry.isIntersecting);
      if (entry.isIntersecting) observerCon.unobserve(entry.target);
    });
  },
  {
    threshold: 0.25,
    rootMargin: '0px 0px -100px 0px',
  }
);

contactCards.forEach((card) => {
  observerCon.observe(card);
});
observerCon.observe(contactTitle);
observerCon.observe(contactImg);
observerCon.observe(contactP);
observerCon.observe(contactRigTit);
observerCon.observe(contactForm);
