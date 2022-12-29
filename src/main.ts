/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-bitwise */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

// TODO
// bullets under omdömen som visar vilket som är aktivt
// varför händer animationen bakom rubrik och event-bilder??

import './style/style.scss';
import events from './events';
import testimonials from './testimonials';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let gsap: any;

// variabler för menyn
const servicesLink = document.querySelector('#services-btn');
const dropdown = document.querySelector('#drop-down') as HTMLHtmlElement;
const burgerBtn = document.querySelector('#burger') as HTMLHtmlElement;
const mobileMenu = document.querySelector('#mobile-menu') as HTMLHtmlElement;
const deskNavItems = document.querySelector('#desktop-nav-items');
const deskNavLinks = deskNavItems?.getElementsByClassName('desk-nav-btn') as HTMLCollection;
const mobNavLink = document.querySelectorAll('.mob-nav-link');
let menuOpen = false;

// variabler för events
const eventsHolder = document.querySelector('#events-holder') as HTMLHtmlElement;
let eventsHtml = '';

// variabler för omdömen
const testimonialsHolder = document.querySelector('#testimonials-holder') as HTMLHtmlElement;
const testimonialsLength = testimonials.length;
const testimonialsSlides = document.getElementsByClassName('testimonial-card');
const bulletHolder = document.querySelector('#bullet-holder') as HTMLDivElement;
const bulletArray: string[] = [];
let testimonialsHtml = '';
let testimonialsSlidePosition = 0;

// variabler för formulär
const formBtn = document.querySelector('#form-btn');
const messageSent = document.querySelector('#message-sent') as HTMLHtmlElement;
const firstNameInput = document.querySelector('#firstName') as HTMLInputElement;
const lastNameInput = document.querySelector('#lastName') as HTMLInputElement;
const emailInput = document.querySelector('#email') as HTMLInputElement;
const subjectInput = document.querySelector('#subject') as HTMLInputElement;
const messageInput = document.querySelector('#message') as HTMLInputElement;

// Navigation

// kod för dropdown i desktop-menyn, dyker upp när man klickar på Services och försvinner när
// man för musen utanför
function showDropdown() {
  dropdown.style.display = 'flex';
}

function hideDropdown() {
  dropdown.style.display = 'none';
}

servicesLink?.addEventListener('click', showDropdown);
servicesLink?.addEventListener('keypress', showDropdown);
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
  if (!menuOpen) {
    mobileMenu.style.display = 'block';
    burgerBtn.classList.add('open');
    gsap.to('.mobile-menu', { duration: 0.5, left: '0' });
    menuOpen = true;
  } else {
    gsap.to('.mobile-menu', { duration: 0.5, left: '1000px', onComplete: hideMenu });
    burgerBtn.classList.remove('open');
    menuOpen = false;
  }
}

function linkFunction(link: Node) {
  link.addEventListener('click', menuToggle);
}

burgerBtn.addEventListener('click', menuToggle);
mobNavLink.forEach(linkFunction);

// Karusell med omdömen

// skapar html för omdömen
testimonials.forEach((custTestimonial) => {
  testimonialsHtml += `
  <div class="testimonial-card">
      <p>"${custTestimonial.testimonial}"</p>
      <p>- ${custTestimonial.name}</p>
  </div>`;
});

// lägger till knappar för bläddring längst ner i html-koden
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

// Skapa array med lika många bullets som det finns omdömen.
for (let i = 0; i < testimonials.length; i++) {
  bulletArray.push(`<div id="bullet-${i}" class="bullet">•</div>`);
}

// rendera bullets i HTML-koden
for (let i = 0; i < bulletArray.length; i++) {
  bulletHolder.innerHTML += bulletArray[i];
}

// Ger första "bulleten" en klass som visar att den är aktiv
document.getElementById('bullet-0')?.classList.add('active-bullet');

// hämta knappar för att kunna bläddra
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

// function för att dölja slides
function hideAllSlides() {
  for (let i = 0; i < testimonialsLength; i++) {
    testimonialsSlides[i].classList.remove('item-visible');
    testimonialsSlides[i].classList.add('item-hidden');
    document.getElementById(`bullet-${i}`)?.classList.remove('active-bullet');

    gsap.set(testimonialsSlides[i], { autoAlpha: 0 });
  }
}

// funktioner för att bläddra i karusellen vid klick, lägger till klass både på
// omdömet och den aktuella "bulleten"
function nextSlide() {
  hideAllSlides();
  if (testimonialsSlidePosition === 0) {
    testimonialsSlidePosition = testimonialsLength - 1;
  } else {
    testimonialsSlidePosition -= 1;
  }
  testimonialsSlides[testimonialsSlidePosition].classList.add('item-visible');
  document.getElementById(`bullet-${testimonialsSlidePosition}`)?.classList.add('active-bullet');

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
  document.getElementById(`bullet-${testimonialsSlidePosition}`)?.classList.add('active-bullet');

  gsap.to(testimonialsSlides[testimonialsSlidePosition], { duration: 2, autoAlpha: 1 });
}

nextBtn?.addEventListener('click', prevSlide);
prevBtn?.addEventListener('click', nextSlide);

// Kod för att visa events på hemidan, dessa events lagras i events.ts

events.forEach((event) => {
  eventsHtml += `
     <div class="event-card">    
       <img src="./images/${event.img}" alt="${event.alt}" loading= "lazy">
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
            <h3>${event.month} ${event.date}, ${event.startTime}-${event.finishTime}, at  
            ${event.location} </h3>
            <img src="./images/${event.img}">
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
    field.placeholder = 'Please fill in this field';
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
