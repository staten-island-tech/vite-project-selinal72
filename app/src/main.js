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
    cover: "malcolmtodd.png",
  },
  {
    title: "Tomioka",
    artists: ["Jay Eazy"],
    genres: ["Hip Hop", "Rap"],
    cover: "tomioka.jpg",
  },
];

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://open.spotify.com/playlist/7lURg77utY7QX9xasBrUMs?si=flNQ_9c6RGmG705Rlp32Zg" target="_blank">
      <img src="spotify.png" class="logo" alt="Vite logo" />
    </a>
    <h1>Selina's Super Cool Playlist Builder!</h1>
    <div class="header">
      <p class="read-the-docs">
        Click on the Spotify logo to view a playlist reccomendation
      </p>
      <form>
        <div class="songform">
          <label for="title">Song Title: </label>
          <input type="text" name="title" id="title" required />
          <label for="artist">Main Artist: </label>
          <input type="text" name="artist" id="artist" required />
          <label for="album">Album Name: </label>
          <input type="text" name="album" id="album" required />
          <label for="img">Album Cover URL: </label>
          <input type="text" name="artist" id="title" required />
        </div>
        <div class="songform">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
    <div class="container">
  </div>
`;

const DOMSelectors = {
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  album: document.getElementById("album"),
  url: document.getElementById("url"),
};

function inject(song) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-title=${song.title}>
      <img class="card-img" src="${song.cover}" alt="oops!"/>
      <h2 class="card-header">${song.title}</h2>
      <h3 class="card-seller">${song.album}</h3>
      <button type="button" class="remove-button">remove song</button>
    </div>`
  );
}

songs.forEach((song) => inject(song));

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

/* function removeAlbum(event) {
  event.target.parentElement.remove();
} */

/* songs.forEach((song) => {}); */

/* setupCounter(document.querySelector("#counter")); */
