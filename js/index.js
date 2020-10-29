const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// NAVBAR
const navBar = document.querySelectorAll('a');

navBar[0].textContent = siteContent['nav']['nav-item-1'];
navBar[1].textContent = siteContent['nav']['nav-item-2'];
navBar[2].textContent = siteContent['nav']['nav-item-3'];
navBar[3].textContent = siteContent['nav']['nav-item-4'];
navBar[4].textContent = siteContent['nav']['nav-item-5'];
navBar[4].textContent = siteContent['nav']['nav-item-6'];

// CTA
const h1 = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1'];

const button = document.querySelector('.cta-text button');
button.textContent = siteContent['cta']['button'];

const img = document.querySelector('#cta-img');
img.src = siteContent['cta']['img-src'];

// MAIN-CONTENT
const firstTitle = document.querySelectorAll('.top-content .text-content h4');
firstTitle[0].textContent = siteContent['main-content']['features-h4'];
firstTitle[1].textContent = siteContent['main-content']['about-h4'];

const topParagraph = document.querySelectorAll('.top-content .text-content p');
topParagraph[0].textContent = siteContent['main-content']['features-content'];
topParagraph[1].textContent = siteContent['main-content']['about-content'];

const middleImage = document.querySelector('.middle-img');
middleImage.src = siteContent['main-content']['middle-img-src'];

const bottomContent = document.querySelectorAll('.bottom-content .text-content h4');
bottomContent[0].textContent = siteContent['main-content']['services-h4'];
bottomContent[1].textContent = siteContent['main-content']['product-h4'];
bottomContent[2].textContent = siteContent['main-content']['vision-h4'];

const bottomParagraph = document.querySelectorAll('.bottom-content .text-content p');
bottomParagraph[0].textContent = siteContent['main-content']['services-content'];
bottomParagraph[1].textContent = siteContent['main-content']['product-content'];
bottomParagraph[2].textContent = siteContent['main-content']['vision-content'];

const centerHeadline = document.querySelector('.contact h4');
centerHeadline.textContent = siteContent['contact']['contact-h4'];

const centerInfo = document.querySelectorAll('.contact p');
centerInfo[0].textContent = siteContent['contact']['address'];
centerInfo[1].textContent = siteContent['contact']['phone'];
centerInfo[2].textContent = siteContent['contact']['email'];
// FOOTER
const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

//GREEN NAV BAR
const navGreen = document.querySelectorAll('nav a');
navGreen.forEach(element => {
  element.style.color = 'green';
});
