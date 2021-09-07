// DOM Elements
const container = document.querySelector(".container");
const profilePic = document.querySelector("#profile-pic");
const customerName = document.querySelector("#customer-name");
const customerTxt = document.querySelector("#customer-text");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

// Testimony Aray
const customers = [
  { img: './profile2.jpg', name: 'John', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  { img: './profile3.jpg', name: 'Greg', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam debitis, commodi laboriosam nostrum odio? Facilis.'},
  { img: './profile4.jpg', name: 'Jesse', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius natus mollitia, quis ratione labore numquam dicta vitae earum esse harum maiores, aspernatur odio porro. Consectetur.'},
  { img: './profile1.jpg', name: 'Sasha', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa porro dolor earum ab quia eligendi eaque explicabo aspernatur tempora veritatis adipisci, eveniet soluta facilis nostrum aliquid dignissimos praesentium facere?'}
]

// Event Listeners

// Loads initial testimony
window.addEventListener('load', () => {
    init();
});

// Goes to next testimony
nextBtn.addEventListener('click', e => {
  nextTestimony(e);
});

// goes to previous testimony
prevBtn.addEventListener('click', e => {
  prevTestimony(e);
});

let current = 0;

const init = () => {
  profilePic.src = customers[current].img;
  customerName.innerHTML = customers[current].name
  customerTxt.innerHTML = customers[current].text
}

const nextTestimony = () => {
  current++;
  if (current > 3 ) {
    current = 0;
  }
  init();
}

const prevTestimony = () => {
  current--;
  if (current < 0 ) {
    current = 3;
  }
  init();
}
