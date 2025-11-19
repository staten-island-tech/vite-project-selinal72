import "./style.css";
import { setupCounter } from "./counter.js";

let songs = [
  {
    title: "Mr. Incorrect",
    artists: ["Malcolm Todd"],
    genres: ["Alternative", "Indie", "R&B"],
    cover: "sweetboy.jpg",
  },
  {
    title: "Magic Johnson",
    artists: ["ian"],
    genres: ["Hip Hop", "Rap"],
    cover: "valedictorian.jpg",
  },
  {
    title: "Bags",
    artists: ["Clairo"],
    genres: ["Alternative", "Bedroom", "Indie"],
    cover: "immunity.jpg",
  },
  {
    title: "Bleed (feat. Omar Apollo)",
    artists: ["Malcolm Todd", "Omar Apollo"],
    genres: ["Alternative", "Bedroom", "Indie"],
    cover: "malcolmtodd.jpg",
  },
  {
    title: "Tomioka",
    artists: ["Jay Eazy"],
    genres: ["Hip Hop", "Rap"],
    cover: "tomioka.jpg",
  },
];

const DOMSelectors = {
  title: document.getElementById("title"),
  artists: document.getElementById("artists"),
  genres: document.getElementById("genres"),
  cover: document.getElementById("cover"),
};

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://open.spotify.com/playlist/7lURg77utY7QX9xasBrUMs?si=flNQ_9c6RGmG705Rlp32Zg" target="_blank">
      <img src="spotify.png" class="logo" alt="Vite logo" />
    </a>
    <h1>Selina's Super Cool Playlist Builder!</h1>
    <div class="cards-container"></div>
    <p class="read-the-docs">
      Click on the Spotify logo to view a playlist reccomendation
    </p>
  </div>
`;

function inject(song) {
  const container = document.querySelector(".cart-container");
  container.insertAdjacentHTML("afterbegin");
}

/* songs.forEach((song) => {}); */

setupCounter(document.querySelector("#counter"));
