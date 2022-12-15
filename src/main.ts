/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import './style/style.scss';
// TODO

// För godkänt:
// validering av kontaktformulär
// knapp i sidan som skickar en till toppen

// För att det är kul:
// - RUBRIKER -> ska tonasin när de kommer i bild. Kanske en fräck animation i header-texten
// -POP-UP -> pop-up ruta som frågar om man vill signa upp på nyhetsbrev
// SPRÅK -> knapp för att byta språk?
// Animation i slidern
// animation i hamburgaren

// import { events } from './src/events.js';

// lägga detta i annan fil men det funkade inte.
// hur löser jag att raden är för lång i objektet?
// eslint-disable-next-line import/prefer-default-export
const events = [
  {
    id: 1,
    name: 'Explorative Self Leadership',
    year: 2023,
    month: 2,
    date: 13,
    location: 'Yogarummet majorna',
    startTime: '11:00',
    finishTime: '14:00',
    shortDescription: 'A workshop where we explore our biological intuition.',
    longDescription: '<p>Welcome to an afternoon of exploratory self-leadership, in the sign'
    + 'of movement and yoga. </p> <p> In our fast-moving world, we make thousands of decisions'
    + 'every day, the brain spins faster than ever and is often involved in most of the decisions'
    + 'you make. But sometimes you get a gnawing feeling in your stomach that might mean something'
    + 'isnt right. Do you recognize yourself?</p><p>The brain, heart and stomach are connected by complex'
    + 'nervous systems and are constantly working together, but often the heart and stomach are silenced'
    + 'and the brain takes command.</p><p>In this workshop you will have the opportunity to dive deeper'
    + 'into the body to explore your other two "brains", the heart and the stomach. With the help of meditation,'
    + 'free movement exploration, yoga and reflection, you get the chance to refine your ability to listen to'
    + 'the bodys signals, which are always there and want to be heard.</p><p>During our hours together we will'
    + 'meditate, move, relax and reflect. After the session, there will be tea, snacks and the opportunity to'
    + 'socialize, or hang out as we say in Gothenburg.</p>',
    img: 'explorative.png',
  },
  {
    id: 2,
    name: 'The elastic body',
    year: 2023,
    month: 4,
    date: 20,
    location: 'Yogarummet majorna',
    startTime: '12:00',
    finishTime: '17:00',
    shortDescription: 'A workshop where we explore our fascia',
    longDescription: '<p>Welcome to an afternoon of exploratory self-leadership, in the sign'
    + 'of movement and yoga. </p> <p> In our fast-moving world, we make thousands of decisions'
    + 'every day, the brain spins faster than ever and is often involved in most of the decisions'
    + 'you make. But sometimes you get a gnawing feeling in your stomach that might mean something'
    + 'isnt right. Do you recognize yourself?</p><p>The brain, heart and stomach are connected by complex'
    + 'nervous systems and are constantly working together, but often the heart and stomach are silenced'
    + 'and the brain takes command.</p><p>In this workshop you will have the opportunity to dive deeper'
    + 'into the body to explore your other two "brains", the heart and the stomach. With the help of meditation,'
    + 'free movement exploration, yoga and reflection, you get the chance to refine your ability to listen to'
    + 'the bodys signals, which are always there and want to be heard.</p><p>During our hours together we will'
    + 'meditate, move, relax and reflect. After the session, there will be tea, snacks and the opportunity to'
    + 'socialize, or hang out as we say in Gothenburg.</p>',
    img: 'fascia.png',
  },
  {
    id: 3,
    name: 'Embodied flow classes',
    year: 2023,
    month: 5,
    date: 1,
    location: 'Fysiken Yoga',
    startTime: '19:00',
    finishTime: '20:30',
    shortDescription: 'A workshop where we explore our fascia',
    longDescription: '<p>Welcome to an afternoon of exploratory self-leadership, in the sign'
    + 'of movement and yoga. </p> <p> In our fast-moving world, we make thousands of decisions'
    + 'every day, the brain spins faster than ever and is often involved in most of the decisions'
    + 'you make. But sometimes you get a gnawing feeling in your stomach that might mean something'
    + 'isnt right. Do you recognize yourself?</p><p>The brain, heart and stomach are connected by complex'
    + 'nervous systems and are constantly working together, but often the heart and stomach are silenced'
    + 'and the brain takes command.</p><p>In this workshop you will have the opportunity to dive deeper'
    + 'into the body to explore your other two "brains", the heart and the stomach. With the help of meditation,'
    + 'free movement exploration, yoga and reflection, you get the chance to refine your ability to listen to'
    + 'the bodys signals, which are always there and want to be heard.</p><p>During our hours together we will'
    + 'meditate, move, relax and reflect. After the session, there will be tea, snacks and the opportunity to'
    + 'socialize, or hang out as we say in Gothenburg.</p>',
    img: 'embodied_flow.png',
  },
];

const testimonials = [
  {
    id: 1,
    testimonial: 'Vel sequi quis id praesentium nihil At recusandae eligendi'
    + 'et ipsam ratione. Vel minus harum quo veritatis praesentium quo rerum rerum ut'
    + 'eligendi dolorem ut arum autem id totam enim non odit repellat.',
    name: 'Participant from fysiken',
  },
  {
    id: 2,
    testimonial: 'Vel sequi quis id praesentium nihil At recusandae eligendi'
    + 'et ipsam ratione. Vel minus harum quo veritatis praesentium quo rerum rerum'
    + 'ut eligendi dolorem ut arum autem id totam enim non odit repellat.',
    name: 'Participant from Hagabadet',
  },
  {
    id: 3,
    testimonial: 'Vel sequi quis id praesentium nihil At recusandae eligendi'
    + 'et ipsam ratione. Vel minus harum quo veritatis praesentium quo rerum rerum'
    + 'ut eligendi dolorem ut arum autem id totam enim non odit repellat.',
    name: 'Massage client',
  },
  {
    id: 4,
    testimonial: 'Vel sequi quis id praesentium nihil At recusandae eligendi'
    + 'et ipsam ratione. Vel minus harum quo veritatis praesentium quo rerum rerum'
    + 'ut eligendi dolorem ut arum autem id totam enim non odit repellat.',
    name: 'Massage client',
  },
];
const eventsHolder = document.querySelector('#events-holder') as HTMLHtmlElement;
let eventsHtml = '';
const testimonialsHolder = document.querySelector('#testimonials-holder') as HTMLHtmlElement;
let testimonialsHtml = '';
let testimonialsSlidePosition = 0;
const testimonialsLength = testimonials.length;
const servicesLink = document.querySelector('#services-btn');
const dropdown = document.querySelector('#drop-down') as HTMLHtmlElement;
const burgerBtn = document.querySelector('#burger') as HTMLHtmlElement;
const mobileMenu = document.querySelector('#mobile-menu') as HTMLHtmlElement;
const deskNavItems = document.querySelector('#desktop-nav-items');
const deskNavLinks = deskNavItems?.getElementsByClassName('desk-nav-btn') as HTMLCollection;

// meny, hover och aktiv länk
function showDropdown() {
  dropdown.style.display = 'flex';
}

function hideDropdown() {
  dropdown.style.display = 'none';
}

servicesLink?.addEventListener('click', showDropdown);
dropdown.addEventListener('mouseleave', hideDropdown);

// Visa aktiv menyknapp

function addActive(this: HTMLElement) {
  const current = document.getElementsByClassName('active');
  console.log(current);
  if (current.length > 0) {
    current[0].className = current[0].className.replace('active', '');
  }
  this.className += ' active';
}

for (let i = 0; i < deskNavLinks.length; i++) {
  deskNavLinks[i].addEventListener('click', addActive);
}

// mobilmenu öppna/stäng

function hideMenu() {
  mobileMenu.style.display = 'none';
}

burgerBtn.addEventListener('click', () => {
  if (mobileMenu.style.display === 'block') {
    gsap.to('.mobile-menu', { duration: 0.5, left: '1000px', onComplete: hideMenu });
  } else {
    mobileMenu.style.display = 'block';
    gsap.to('.mobile-menu', { duration: 0.5, left: '0' });
  }
});

// testimonial carousel
// skapar html för omdömen
testimonials.forEach((custTestimonial) => {
  testimonialsHtml += `
  <div class="testimonial-card">
      <p>"${custTestimonial.testimonial}"</p>
      <p>- ${custTestimonial.name}</p>
  </div>`;
});

const testimonialsSlides = document.getElementsByClassName('testimonial-card');

// lägger till knappar längst ner i html-koden
testimonialsHtml += `
 <div id="carousel-actions">
    <button class="prev-btn" id="prev-btn" aria-label="previous testimonial">
        <i class="fa-solid fa-chevron-left"></i>
    </button>
    <button class="next-btn" id="next-btn"  aria-label="next testimonial">
        <i class="fa-solid fa-chevron-right"></i>
    </button>
 </div>`;

testimonialsHolder.innerHTML = testimonialsHtml;

testimonialsHolder.firstElementChild?.classList.add('item-visible');

// Hämtar knapparna för nästa och föregående
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

// function för att dölja slides
function hideAllSlides() {
  for (let i = 0; i < testimonialsLength; i++) {
    testimonialsSlides[i].classList.remove('item-visible');
    testimonialsSlides[i].classList.add('item-hidden');
  }
}

// funktioner för att bläddra vid klick
prevBtn?.addEventListener('click', () => {
  hideAllSlides();
  if (testimonialsSlidePosition === 0) {
    testimonialsSlidePosition = testimonialsLength - 1;
  } else {
    testimonialsSlidePosition -= 1;
  }
  testimonialsSlides[testimonialsSlidePosition].classList.add('item-visible');
});

nextBtn?.addEventListener('click', () => {
  hideAllSlides();
  if (testimonialsSlidePosition === testimonialsLength - 1) {
    testimonialsSlidePosition = 0;
  } else {
    testimonialsSlidePosition += 1;
  }
  testimonialsSlides[testimonialsSlidePosition].classList.add('item-visible');
});

// Skapa events
// kolla på constructors, kanske går att använda här?

events.forEach((event) => {
  eventsHtml += `
     <div class="event-card">    
       <img src='./public/images/${event.img}'>
       <div class="event-description">
          <h3>${event.name}</h3>
          <p><span>When?</span><br> ${event.date}-${event.month}-${event.year}</p>
          <p><span>Where?</span><br> ${event.location}</p>
          <p>${event.shortDescription}</p>
       </div>
       <button id="${event.id}">Read more</button>
       <div class="event-popup" id="event-popup">
          <div class="event-long-description">
            <button class="close-btn" id="${event.id}" onclick="window.location.href='#events';">X</button>
            <h2>${event.name}</h2>
            <img src='./public/images/${event.img}'>
            <h3>${event.date}-${event.month}-${event.year}, ${event.startTime}-${event.finishTime}  ||  
            ${event.location} </h3>
            <p>${event.longDescription}</p>
            <button id ="${event.id}" onclick="window.location.href='#contact';">Sign up</button>
          </div>
       </div>
     </div>`;
});

eventsHolder.innerHTML = eventsHtml;

// visar en lång beskrivning av eventet vid klick på knappen och stänger när man trycker på "X"
eventsHolder.addEventListener('click', (e) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const currentEventPopup = document.getElementById(e?.target?.id)?.parentElement?.lastElementChild as HTMLElement;

  if (currentEventPopup.style.display === 'block') {
    setTimeout(() => { currentEventPopup.style.display = 'none'; }, 500);
    gsap.to('.event-popup', { duration: 0.4, autoAlpha: 0 });
  } else {
    currentEventPopup.style.display = 'block';
    gsap.to('.event-popup', { duration: 0.4, autoAlpha: 1 });
  }
});

// Kod för menyn, fadear in och ut vid scroll

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (mobileMenu.style.display !== 'block') {
    if (lastScrollY < window.scrollY) {
      gsap.to('nav', { duration: 0.3, autoAlpha: 0 });
    } else {
      gsap.to('nav', { duration: 0.3, autoAlpha: 1 });
    }
  }
  lastScrollY = window.scrollY;
});
