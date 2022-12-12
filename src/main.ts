/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import './style/style.scss';
// TODO

// - RUBRIKER -> ska tonasin när de kommer i bild. Kanske en fräck animation i header-texten
// -UPP-KNAPP -> knapp som åker med ner som går att trycka på för att åka upp
// -POP-UP -> pop-up ruta som frågar om man vill signa upp på nyhetsbrev
// -EVENTS -> lägga in dessa som objekt i en array. med en läs mer-knapp som öppnar
// en pop-up med mer info om event. se till att event inte redan har varit
// OMDÖMEN -> En slider med omdömen som går att bläddra i son går i en "cirkel"
// SPRÅK -> knapp för att byta språk?
// KONTAKT -> lägga in regex, ska synas vilka fält som är obligatoriska.
// Går det att göra formuläret fungerande?

// funktion för skroll-effekt på menyn

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
    longDescription: '<p>Welcome to an afternoon of exploratory self-leadership, in the sign of movement and yoga. </p> <p> In our fast-moving world, we make thousands of decisions every day, the brain spins faster than ever and is often involved in most of the decisions you make. But sometimes you get a gnawing feeling in your stomach that might mean something isnt right. Do you recognize yourself?</p><p>The brain, heart and stomach are connected by complex nervous systems and are constantly working together, but often the heart and stomach are silenced and the brain takes command.</p><p>In this workshop you will have the opportunity to dive deeper into the body to explore your other two "brains", the heart and the stomach. With the help of meditation, free movement exploration, yoga and reflection, you get the chance to refine your ability to listen to the bodys signals, which are always there and want to be heard.</p><p>During our hours together we will meditate, move, relax and reflect. After the session, there will be tea, snacks and the opportunity to socialize, or hang out as we say in Gothenburg.</p>',
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
    longDescription: '<p>Welcome to an afternoon of exploratory self-leadership, in the sign of movement and yoga. </p> <p> In our fast-moving world, we make thousands of decisions every day, the brain spins faster than ever and is often involved in most of the decisions you make. But sometimes you get a gnawing feeling in your stomach that might mean something isnt right. Do you recognize yourself?</p><p>The brain, heart and stomach are connected by complex nervous systems and are constantly working together, but often the heart and stomach are silenced and the brain takes command.</p><p>In this workshop you will have the opportunity to dive deeper into the body to explore your other two "brains", the heart and the stomach. With the help of meditation, free movement exploration, yoga and reflection, you get the chance to refine your ability to listen to the bodys signals, which are always there and want to be heard.</p><p>During our hours together we will meditate, move, relax and reflect. After the session, there will be tea, snacks and the opportunity to socialize, or hang out as we say in Gothenburg.</p>',
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
    longDescription: '<p>Welcome to an afternoon of exploratory self-leadership, in the sign of movement and yoga. </p> <p>In our fast-moving world, we make thousands of decisions every day, the brain spins faster than ever and is often involved in most of the decisions you make. But sometimes you get a gnawing feeling in your stomach that might mean something isnt right. Do you recognize yourself?</p><p>The brain, heart and stomach are connected by complex nervous systems and are constantly working together, but often the heart and stomach are silenced and the brain takes command.</p><p>In this workshop you will have the opportunity to dive deeper into the body to explore your other two "brains", the heart and the stomach. With the help of meditation, free movement exploration, yoga and reflection, you get the chance to refine your ability to listen to the bodys signals, which are always there and want to be heard.</p><p>During our hours together we will meditate, move, relax and reflect. After the session, there will be tea, snacks and the opportunity to socialize, or hang out as we say in Gothenburg.</p>',
    img: 'embodied_flow.png',
  },
];

// Kod för menyn, fadear in och ut vid scroll

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (lastScrollY < window.scrollY) {
    gsap.to('nav', { duration: 1, autoAlpha: 0 });
  } else {
    gsap.to('nav', { duration: 1, autoAlpha: 1 });
  }

  lastScrollY = window.scrollY;
});

// Skapa event-cards

const eventsHolder = document.querySelector('#events-holder') as HTMLHtmlElement;
let eventsHtml = '';

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
            <button class="close-btn" id="${event.id}">X</button>
            <h2>${event.name}</h2>
            <img src='./public/images/${event.img}'>
            <h3>${event.date}-${event.month}-${event.year}, ${event.startTime}-${event.finishTime}  ||  
            ${event.location} </h3>
            <p>${event.longDescription}</p>
            <button>Sign up</button>
          </div>
       </div>
     </div>`;
});

eventsHolder.innerHTML = eventsHtml;

// const closeBtn = eventsHolder.querySelector('#close-btn') as HTMLElement;
// const eventPopup = eventsHolder.querySelector('#event-popup') as HTMLElement;
// console.log(eventPopup)

// visar en lång beskrivning av eventet vid klick på knappen
eventsHolder.addEventListener('click', (e) => {
  const currentEventPopup = document.getElementById(e.target.id).parentElement.lastElementChild as HTMLElement;
  currentEventPopup.style.display = 'block';
});

// // stänger den långa beskrivningen när man trycker på X
// closeBtn.addEventListener('click', (e) => {
//   eventPopup.style.display = 'none';
// });
