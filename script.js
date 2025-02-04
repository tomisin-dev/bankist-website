'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML = 'We use cookied for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// Clone the element into two 
// header.append(message.cloneNode(true));

// alternaive
// header.before(message);
// header.after(message);

// Delete
document.querySelector('.btn btn--close-cookie');
document.addEventListener('click', function() {
  message.remove()
  // Optional
  // message.parentElement.removeChild(message);
})

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor)

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo')
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Changing the original alt
logo.alt = 'Beautiful minimalist logo';

console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Koinonia');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');

console.log(link.href);
console.log(link.getAttribute('href'));

// Data
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j')
logo.classList.remove('c', 'j')
logo.classList.toggle('c')
logo.classList.contains('c')

// Dont use 
// logo.className = 'jonas';

// Scrol function
const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log('height/width viewport',
  document.documentElement.clientHeight,
  document.documentElement.clientWidth);


  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

section1.scrollIntoView({ behavior : 'smooth'})
});

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomint(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
// })

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
// })

// document.querySelector('.nav_links').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
// });


// document.querySelectorAll('.nav__link').forEach( function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior : 'smooth'});
//   })
// })


document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();

  // Matching Strategy
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});


// Tabbed Component
const tabs = document.querySelectorAll('.operation__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operation__content');

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard Clause
  if(!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  tabsContainer.forEach(c => c.classList.remove('operation__content--active'));
  
  // Activate tab
  clicked.classList.add('operations__tab--active');
  
  // Active content area
  document.querySelector(`.operation__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// Menu fade animation
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('.img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});

nav.addEventListener('mouseout', function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('.img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
})

//  Optional to make it cleaner
const handleHover = function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('.img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
      logo.style.opacity = this;
    }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));


// Sticky navigation : Intersection Observer Api
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root : null,
  threshold : 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Reaveal Sections

const revealSecions = function(entries, Observer) {
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observe.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSecions, {
  root: null,
  threshold: 0.15,
})

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// lazy load image
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observe) {
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function() {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null, 
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider
const slider = function() {
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots')

let curSlide = 0;
const maxSlide = slides.length;

// const Slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';

const createDots = function() {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML("beforeend",  `<button class="dots__dot" data-slide="${i}"></button>`);
  });
};


const activateDot = function(slide) {
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

  document.querySelector(`.dots__dot[data-slide = "${slide}"]`).classList.add('dots__dot--active')
};

const goToSlide = function(slide) {
  // This was what made it to slide
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
};
// 0%, 100%, 200%, 300%

// Next Slide
const nextSlide = function() {
  if ( curSlide == maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
  };

  const prevSlide = function() {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else{
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function() {
    createDots();
    goToSlide(0);
  };
  init()

  // event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  // using Keyboard keys
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') prevSlide()
    e.key ==='ArrowRight' && nextSlide()
  })

  dotContainer.addEventListener('click', function(e){
    if (e.target.classList.contains('dots__dot')) {
      // OR through destructing
      const {slide} = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
      // or this
      // const slide = e.target.dataset.slide;
    }
  });
};
slider();
  
// Stick notes

// const initialCoords= section1.getBoundingClientRect();

// window.addEventListener('scroll', function() {
// if(window.scrollY > initialCoords.top) 
//   nav.classList.add('sticky')
//  else
//   nav.classList.remove('sticky')
// })

// const h1 = Document.querySelector('h1');

// Going downwars: Child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElement