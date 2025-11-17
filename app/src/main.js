import "./style.css";
import { setupCounter } from "./counter.js";

let songs = [
  {
    title: "Mr. Incorrect",
    artists: "Malcolm Todd",
    genres: ["Alternative", "Indie", "R&B"],
    cover: "sweetboy.jpg",
  },
  {
    title: "Magic Johnson",
    artists: "ian",
    genres: ["Hip Hop", "Rap"],
    cover: "valedictorian.jpg",
  },
  {
    title: "Bags",
    artists: "Clairo",
    genres: ["Alternative", "Indie", "Bedroom"],
    cover: "immunity.jpg",
  },
  {
    title: "Bleed (feat. Omar Apollo)",
    artists: "Malcolm Todd",
    genres: ["Alternative", "Indie", "Bedroom"],
    cover: "immunity.jpg",
  },
];

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://open.spotify.com/playlist/7lURg77utY7QX9xasBrUMs?si=flNQ_9c6RGmG705Rlp32Zg" target="_blank">
      <img src="spotify.png" class="logo" alt="Vite logo" />
    </a>
    
    <h1>Selina's Super Cool Playlist Builder!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Spotify logo to view a playlist reccomendation
    </p>
  </div>
`;

songs.forEach((song) =>
)

setupCounter(document.querySelector("#counter"));
