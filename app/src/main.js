import "./style.css";
/* import { setupCounter } from "./counter.js"; */

let songs = [
  {
    title: "Mr. Incorrect",
    artists: ["Malcolm Todd"],
    album: "Sweetboy",
    genres: ["Alternative", "Indie", "R&B"],
    url: "https://m.media-amazon.com/images/I/814aISls55L._UF1000,1000_QL80_.jpg",
  },
  {
    title: "Magic Johnson",
    artists: ["ian"],
    album: "Valedictorian",
    genres: ["Hip Hop", "Rap"],
    url: "https://i.scdn.co/image/ab67616d0000b273f624d169356e083678be21f2",
  },
  {
    title: "Bags",
    artists: ["Clairo"],
    album: "Immunity",
    genres: ["Alternative", "Bedroom", "Indie"],
    url: "https://i.scdn.co/image/ab67616d0000b27333ccb60f9b2785ef691b2fbc",
  },
  {
    title: "Bleed (feat. Omar Apollo)",
    artists: ["Malcolm Todd", "Omar Apollo"],
    album: "Malcolm Todd",
    genres: ["Alternative", "Bedroom", "Indie"],
    url: "https://upload.wikimedia.org/wikipedia/en/b/b3/Malcolm_Todd_cover.png",
  },
];

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://open.spotify.com/playlist/7lURg77utY7QX9xasBrUMs?si=flNQ_9c6RGmG705Rlp32Zg" target="_blank">
      <img src="spotify.png" class="logo" alt="Vite logo" />
    </a>
    <h1>Selina's Super Cool Playlist Builder!</h1>
    <p class="read-the-docs">
        Click on the Spotify logo to view a playlist reccomendation
      </p>
    <div class="header">
      <form>
        <div class="songform">
          <label for="title">Song Title: </label>
          <input type="text" name="title" id="title" required />
          <label for="artists">Main Artist: </label>
          <input type="text" name="artists" id="artists" required />
          <label for="album">Album Name: </label>
          <input type="text" name="album" id="album" required />
          <label for="genres">Genres: </label>
          <input type="text" name="genres" id="genres" required />
          <label for="img">Album Cover URL: </label>
          <input type="text" name="url" id="url" required />
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
  artists: document.getElementById("artists"),
  album: document.getElementById("album"),
  genres: document.getElementById("genres"),
  url: document.getElementById("url"),
};

function inject(song) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-title=${song.title}>
      <img class="card-img" src="${song.url}" alt="oops!"/>
      <h2 class="card-header">${song.title} by ${song.artists}</h2>
      <h4 class="card-album">${song.album}</h4>
      <h4 class="card-genres">${song.genres}</h4>
      <button type="button" class="remove-button">remove song</button>
    </div>`
  );
}

songs.forEach((song) => inject(song));

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // stops page from refreshing
  let song = {
    title: document.getElementById("title").value,
    artists: document.getElementById("artists").value,
    album: document.getElementById("album").value,
    genres: document.getElementById("genres"),
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
