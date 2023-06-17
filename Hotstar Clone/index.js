let movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "The Falcon and the Winter Soldier is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on Marvel Comics featuring the characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.",
    image: "images/slider 2.png"
  },
  {
    name: "Loki",
    des:
      "Loki became the first Disney+ show from Marvel Studios to be officially confirmed for a Season 2 in its sixth episode’s post-credits scene, although details are scarce beyond that news. It’s been confirmed that the entire cast will return for the continuation of Loki’s Disney+ story after the Multiverse began falling apart to close out Season 1 in July 2021.",
    image: "images/slider 1.png"
  },
  {
    name: "Wanda Vission",
    des:
      "Wanda basically has a mental breakdown that results in the death of her husband Vision, Hawkeye and a bunch of other people. In the famous House of M storyline on which this show is very loosely based, Wanda creates an alternate reality where Vision and the twins are alive, and they all live together.",
    image: "images/slider 3.png"
  },
  {
    name: "raya and the last night",
    des:
      "Raya and the Last Dragon is a fantasy film set in the fictional land of Kumandra, but that world is inspired by the beautiful cultures of Southeast Asia. Writer Adele Lim emphasized that Kumandra is a fictional land, and that Southeast Asia served as its inspiration.",
    image: "images/slider 4.png"
  },
  {
    name: "luca",
    des:
      "The movie follows Luca Alberto and Giulias story of friendship and adventure in the Italian Riviera Recently Enrico Casarosa director of Luca revealed how his childhood inspired the movie On Disney's official Twitter account Enrico Casarosa shared how his story helped create Luca's story.",
    image: "images/slider 5.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // Create DOM Elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

// video cards
const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

// card sliders

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

let cardContainers = [...document.querySelectorAll('.card-container')];
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth= containerDimensions.width;

  nxtBtns[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth - 200;
  })
  preBtns[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth + 200;
  })
}