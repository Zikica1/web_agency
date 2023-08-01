export function render() {
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

  //ScrollToTop
  const scrollToTopBtn = document.querySelector('.scroll-to-top');

  window.addEventListener('scroll', () => {
    scrollToTopBtn.classList.toggle('active', window.scrollY > 500);
  });

  scrollToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  //Dark theme
  const themeBtn = document.querySelector('.theme-btn');

  themeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
    themeBtn.classList.toggle('sun');

    localStorage.setItem('save-theme', getCurrentTheme());
    localStorage.setItem('save-icon', getCurrentIcon());
  });

  const getCurrentTheme = () => {
    return document.documentElement.classList.contains('dark-theme')
      ? 'dark'
      : 'light';
  };

  const getCurrentIcon = () => {
    return themeBtn.classList.contains('sun') ? 'sun' : 'moon';
  };

  const savedTheme = localStorage.getItem('save-theme');
  const savedIcon = localStorage.getItem('save-icon');

  if (savedTheme) {
    document.documentElement.classList[
      savedTheme === 'dark' ? 'add' : 'remove'
    ]('dark-theme');
    themeBtn.classList[savedIcon === 'sun' ? 'add' : 'remove']('sun');
  }
}

// const themeBtn = document.querySelector('.theme-btn');

// const applyDarkTheme = () => {
//   document.documentElement.classList.add('dark-theme');
//   themeBtn.classList.add('sun');
// };

// const applyLightTheme = () => {
//   document.documentElement.classList.remove('dark-theme');
//   themeBtn.classList.remove('sun');
// };

// themeBtn.addEventListener('click', () => {
//   document.documentElement.classList.toggle('dark-theme');
//   themeBtn.classList.toggle('sun');

//   const currentTheme = getCurrentTheme();
//   localStorage.setItem('save-theme', currentTheme);
//   localStorage.setItem('save-icon', getCurrentIcon(currentTheme));
// });

// const getCurrentTheme = () => {
//   return document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light';
// };

// const getCurrentIcon = (theme) => {
//   return theme === 'dark' ? 'sun' : 'moon';
// };

// const savedTheme = localStorage.getItem('save-theme');
// const savedIcon = localStorage.getItem('save-icon');

// if (savedTheme) {
//   if (savedTheme === 'dark') {
//     applyDarkTheme();
//   } else {
//     applyLightTheme();
//   }
// }
