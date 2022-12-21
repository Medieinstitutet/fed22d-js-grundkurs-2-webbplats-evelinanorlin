/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-bitwise */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import './style/style.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let gsap: any;
// TODO

// - RUBRIKER -> ska tonasin när de kommer i bild. Kanske en fräck animation i header-texten
// animation i hamburgaren

// saker som är fel:
// tillgänglighet på "services knappen", går ej att fokusera

// import { events } from './src/events.js';

// lägga detta i annan fil men det funkade inte.
// hur löser jag att raden är för lång i objektet?
// eslint-disable-next-line import/prefer-default-export
const events = [
  {
    id: 1,
    name: 'Self Leadership',
    year: 2023,
    month: 'February',
    date: 13,
    location: 'Yogarummet',
    startTime: '11:00',
    finishTime: '14:00',
    shortDescription: 'Vel sequi quis id praesentium nihil At recusandae eligendiet ipsam'
    + 'ratione. Vel minus harum quo veritatis praesentium quo rerum rerum uteligendi dolorem'
    + 'ut arum autem id totam enim non odit repellat.',
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
    month: 'April',
    date: 20,
    location: 'Yogarummet',
    startTime: '12:00',
    finishTime: '17:00',
    shortDescription: 'Vel sequi quis id praesentium nihil At recusandae eligendiet ipsam'
    + 'ratione. Vel minus harum quo veritatis praesentium quo rerum rerum uteligendi dolorem'
    + 'ut arum autem id totam enim non odit repellat.',
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
    month: 'May',
    date: 1,
    location: 'Fysiken Yoga',
    startTime: '19:00',
    finishTime: '20:30',
    shortDescription: 'Vel sequi quis id praesentium nihil At recusandae eligendiet ipsam'
    + 'ratione. Vel minus harum quo veritatis praesentium quo rerum rerum uteligendi dolorem'
    + 'ut arum autem id totam enim non odit repellat.',
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
    testimonial: 'Vel sequi quis id praesentium nihil At recusandae eligendi'
    + 'et ipsam ratione. Vel minus harum quo veritatis praesentium quo rerum rerum ut'
    + 'eligendi dolorem ut arum autem id totam enim non odit repellat.',
    name: 'Participant from fysiken',
  },
  {
    testimonial: 'Vel sequi quis id praesentium nihil At recusandae eligendi'
    + 'et ipsam ratione. Vel minus harum quo veritatis praesentium quo rerum rerum'
    + 'ut eligendi dolorem ut arum autem id totam enim non odit repellat.',
    name: 'Participant from Hagabadet',
  },
  {
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
const formBtn = document.querySelector('#form-btn');
const messageSent = document.querySelector('#message-sent') as HTMLHtmlElement;
const mobNavLink = document.querySelectorAll('.mob-nav-link');

// Nav

// kod för dropdown i desktop-menyn, dyker upp när man klickar på Services och försvinner när
// man för musen utanför
function showDropdown() {
  dropdown.style.display = 'flex';
}

function hideDropdown() {
  dropdown.style.display = 'none';
}

servicesLink?.addEventListener('click', showDropdown);
dropdown.addEventListener('mouseleave', hideDropdown);

// Kod för att visuellt visa vilken länk i menyn som är aktiv.

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

// Kod för att öppna och stänga mobilmeny, med animation

function hideMenu() {
  mobileMenu.style.display = 'none';
}

function menuToggle() {
  if (mobileMenu.style.display === 'block') {
    gsap.to('.mobile-menu', { duration: 0.5, left: '1000px', onComplete: hideMenu });
  } else {
    mobileMenu.style.display = 'block';
    gsap.to('.mobile-menu', { duration: 0.5, left: '0' });
  }
}

function linkFunction(link: Node) {
  link.addEventListener('click', menuToggle);
}

burgerBtn.addEventListener('click', menuToggle);
mobNavLink.forEach(linkFunction);

// Nedan skapas en karusell för att bläddra i omdömen
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

    gsap.set(testimonialsSlides[i], { autoAlpha: 0 });
  }
}

// funktioner för att bläddra i karusellen vid klick

// varför funkar inte animationen i första klicket?
function nextSlide() {
  hideAllSlides();
  if (testimonialsSlidePosition === 0) {
    testimonialsSlidePosition = testimonialsLength - 1;
  } else {
    testimonialsSlidePosition -= 1;
  }
  testimonialsSlides[testimonialsSlidePosition].classList.add('item-visible');

  gsap.to(testimonialsSlides[testimonialsSlidePosition], { duration: 2, autoAlpha: 1 });
}

function prevSlide() {
  hideAllSlides();
  if (testimonialsSlidePosition === testimonialsLength - 1) {
    testimonialsSlidePosition = 0;
  } else {
    testimonialsSlidePosition += 1;
  }

  testimonialsSlides[testimonialsSlidePosition].classList.add('item-visible');

  gsap.to(testimonialsSlides[testimonialsSlidePosition], { duration: 2, autoAlpha: 1 });
}

nextBtn?.addEventListener('click', prevSlide);
prevBtn?.addEventListener('click', nextSlide);

// Kod för att visa events på hemidan

events.forEach((event) => {
  eventsHtml += `
     <div class="event-card">    
       <img src=' /public/images/${event.img}'>
       <div class="event-description">
          <h3>${event.name}</h3>
          <div class="event-flex">
            <p class="event-info"><span>When?</span><br>${event.month} ${event.date}, ${event.year}</p>
            <p class="event-info"><span>Where?</span><br> ${event.location}</p>
          </div>
          <p>${event.shortDescription}</p>
       </div>
       <button id="${event.id}">Read more</button>
       <div class="event-popup" id="event-popup">
        <div class="popup-content">
          <div class="event-long-description">
            <button class="close-btn" id="${event.id}" onclick="window.location.href='#events';">X</button>
            <h2>${event.name}</h2>
            <img src='./public/images/${event.img}'>
            <h3>${event.month} ${event.date}, ${event.startTime}-${event.finishTime}, at  
            ${event.location} </h3>
            <p>${event.longDescription}</p>
            <button id ="${event.id}" onclick="window.location.href='#contact';">Sign up now</button>
          </div>
        </div>
       </div>
     </div>`;
});

eventsHolder.innerHTML = eventsHtml;

// visar en lång beskrivning av eventet vid klick på knappen och stänger när man trycker på "X"

function openEvent(e: MouseEvent) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, max-len
  const currentEventPopup = document.getElementById((<HTMLElement>e.target).id)?.parentElement?.lastElementChild as HTMLElement;

  if (currentEventPopup.style.display === 'block') {
    setTimeout(() => { currentEventPopup.style.display = 'none'; }, 500);
    gsap.to('.event-popup', { duration: 0.4, autoAlpha: 0 });
  } else {
    currentEventPopup.style.display = 'block';
    gsap.to('.event-popup', { duration: 0.4, autoAlpha: 1 });
  }
}

eventsHolder.addEventListener('click', openEvent);

// Formulär
const firstNameInput = document.querySelector('#firstName') as HTMLInputElement;
const lastNameInput = document.querySelector('#lastName') as HTMLInputElement;
const emailInput = document.querySelector('#email') as HTMLInputElement;
const subjectInput = document.querySelector('#subject') as HTMLInputElement;
const messageInput = document.querySelector('#message') as HTMLInputElement;

// kollar att värdet inte är inget eller blanksteg
function isNotEmpty(value: string) {
  if (value === null || typeof value === 'undefined') {
    return false;
  }
  return (value.length > 0);
}

// validerar email
function isEmail(email: string) {
  // eslint-disable-next-line max-len
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

// kollar att fältet är validerat. Annars läggs det till en klass som gör det rött
function fieldValidation(field: HTMLInputElement, validationFunction: (value: string) => boolean) {
  const isFieldValid = validationFunction(field.value);
  if (!isFieldValid) {
    field.className = 'not-valid-field';
  } else {
    field.className = '';
  }
  return isFieldValid;
}

// kör validerings-check på alla fälten
function isValid() {
  const firstNameVal = fieldValidation(firstNameInput, isNotEmpty);
  const lastNameVal = fieldValidation(lastNameInput, isNotEmpty);
  const emailVal = fieldValidation(emailInput, isEmail);
  const subjectVal = fieldValidation(subjectInput, isNotEmpty);
  const messageVal = fieldValidation(messageInput, isNotEmpty);

  if (firstNameVal && lastNameVal && emailVal && subjectVal && messageVal) {
    return true;
  }
  return false;
}

// Kanske eventuellt kan lagra uppgifter såhär om det senare ska skickas iväg i riktigt mejl?
class User {
  firstName: string;

  lastName: string;

  email: string;

  subject: string;

  message: string;

  constructor(firstName: string, lastName: string, email: string, subject: string, message: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.subject = subject;
    this.message = message;
  }
}

function sendContact() {
  if (isValid()) {
    const usr = new User(
      firstNameInput.value,
      lastNameInput.value,
      emailInput.value,
      subjectInput.value,
      messageInput.value,
    );
    messageSent.classList.add('show-message');
    console.log(usr);
  }
}

// document.addEventListener('DOMContentLoaded', loadField);

formBtn?.addEventListener('click', sendContact);

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

// // kod för kalender med öppna klasser, denna kalender är interaktiv, användare
// // lägger in events. Men tänker att den på en "riktig" hemsida kanske
// // bara kan redigeras av administratör?

// let nav = 0; // Håller koll på vilken månad det är
// let clicked = null; // dagen man klickar på
// // Hämtar data från local storage, byt ut detta till hårdkodat när klar
// let openClasses = localStorage.getItem('openClasses') ? JSON.parse(localStorage.getItem('openClasses')) : [];
// const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// const calendar = document.querySelector('#calendar') as HTMLElement;;
// const monthContainer = document.querySelector('#month') as HTMLElement;
// const calendarNextBtn = document.querySelector('#calendar-next-btn');
// const calendarPrevBtn = document.querySelector('#calendar-prev-btn');

// // laddar in kalendern när man går in på sidan, beror ju på dagens datum
// function loadCalendar() {
//   const date = new Date();
//   if (nav !== 0) {
//     date.setMonth(new Date().getMonth() + nav);
//   }

//   const day = date.toLocaleDateString('en-gb', { weekday: 'long' }).toLowerCase(); /* veckodag som string */
//   const month = date.getMonth();
//   const year = date.getFullYear();

//   const firstDayOfMonth = new Date(year, month, 1);
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   const dateString = firstDayOfMonth.toLocaleDateString('en-gb', {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric',
//   }); /* Skapar första dagen i månaden, i rätt format (en-gb) och skriver ut dagen
// (ex torsdag istället för 4) */

// const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);/* för att skapa "tomma" dagar i början av månaden */

//   /* Visar aktuell månad över kalendern */
//   monthContainer.innerHTML = `${date.toLocaleDateString('en-gb', { month: 'long' })} ${year}`;

//   function clickedDay() {
//     console.log('clicked');
//   }

//   calendar.innerHTML = ''; /* tar bort kalenderdagar (div:ar) innan for-loopen skapar nya */

//   for (let i = 1; i <= paddingDays + daysInMonth; i++) {
//     const daySquare = document.createElement('div');
//     daySquare.classList.add('day');

//     if (i > paddingDays) { /* För dagar som existerar i månaden */
//       daySquare.innerText = `${i - paddingDays}`;
//     } else { /* För dagar i början på kalendern, ej i månaden */
//       daySquare.classList.add('padding');
//     }

//     calendar?.appendChild(daySquare);
//   }
// }

// function nextMonth() {
//   nav += 1;
//   loadCalendar();
// }

// function prevMonth() {
//   nav -= 1;
//   console.log(nav);
//   loadCalendar();
// }

// calendarNextBtn?.addEventListener('click', nextMonth);
// calendarPrevBtn?.addEventListener('click', prevMonth);

// loadCalendar();
