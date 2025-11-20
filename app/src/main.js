import "./style.css";
import { setupCounter } from "./counter.js";

/* let songs = [
  {
    title: "Mr. Incorrect",
    artists: ["Malcolm Todd"],
    genres: ["Alternative", "Indie", "R&B"],
    cover: "sweetboy.jpg",
    alt: "sweetboy album",
  },
  {
    title: "Magic Johnson",
    artists: ["ian"],
    genres: ["Hip Hop", "Rap"],
    cover: "valedictorian.jpg",
    alt: "valedictorian album",
  },
  {
    title: "Bags",
    artists: ["Clairo"],
    genres: ["Alternative", "Bedroom", "Indie"],
    cover: "immunity.jpg",
    alt: "immunity album",
  },
  {
    title: "Bleed (feat. Omar Apollo)",
    artists: ["Malcolm Todd", "Omar Apollo"],
    genres: ["Alternative", "Bedroom", "Indie"],
    cover: "malcolmtodd.jpg",
    alt: "malcolm todd album",
  },
  {
    title: "Tomioka",
    artists: ["Jay Eazy"],
    genres: ["Hip Hop", "Rap"],
    cover: "tomioka.jpg",
    alt: "tomioka album",
  },
]; */

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

const DOMSelectors = {
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  album: document.getElementById("album"),
  url: document.getElementById("url"),
};

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // stops page from refreshing
  let song = {
    title: document.getElementById("title").value,
    artist: document.getElementById("artist").value,
    album: document.getElementById("album").value,
    url: document.getElementById("url").value,
  };
  inject(song); // add to the page
  clearFields(); // reset form inputs
});

function inject(song) {
  const container = document.querySelector(".cart-container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-title=${song.title}>
      <img class="card-img" src="${song.cover}" alt="oops!"/>
      <h2 class="card-header">${song.title}</h2>
      <h3 class="card-seller">${song.album}</h3>
      <h3 class="card-region">${item.region}</h3>
      <h4 class="card-price">${item.price} mora</h4>
      <button type="button" class="buy-button">add to cart</button>
    </div>`
  );
}

/* songs.forEach((song) => {}); */

setupCounter(document.querySelector("#counter"));
