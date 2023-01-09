const skipLinks = document.querySelector('#skip-links');
const skipLink = document.querySelectorAll('.skip-link');

const goToContent = (event, link) => {
  const id = document.querySelector(`${link}`);

  if (event.key === 'Enter' || event.key === ' ') {
    id.setAttribute('tabindex', '0');
    id.focus();
    event.preventDefault();
  }

  id.addEventListener('blur', e => {
    e.target.removeAttribute('tabindex');
  });
};

skipLink.forEach(link => {
  const idLink = link.getAttribute('href');

  link.addEventListener('keydown', event => {
    goToContent(event, idLink);
  });
});


let skipNav = document.querySelector('#skipNav');
let skipCont = document.querySelector('#skipCont');
let lpNav = document.querySelector('.lp-nav');
let header = document.querySelector('.header');


document.addEventListener('focus', () => {
  if (document.activeElement === skipNav || document.activeElement === skipCont) {
    lpNav.style.position = 'unset';
    header.style.marginTop = '0px';
  } else {
    lpNav.style.position = 'fixed';
    header.style.marginTop = '70px';
  }

  if (window.innerWidth <= 1024) {
    if (document.activeElement === skipNav || document.activeElement === skipCont) {
      lpNav.style.position = 'unset';
      header.style.marginTop = '0px';
    } else {
      lpNav.style.position = 'fixed';
      header.style.marginTop = '60px';
    }
  }

  if (window.innerWidth <= 767) {
    if (document.activeElement === skipNav || document.activeElement === skipCont) {
      lpNav.style.position = 'unset';
      header.style.marginTop = '0px';
    } else {
      lpNav.style.position = 'fixed';
      header.style.marginTop = '40px';
    }
  }
}, true);

