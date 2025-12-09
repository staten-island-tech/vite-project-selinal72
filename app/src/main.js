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

/* document.querySelector("#app").innerHTML = `
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
    <div class="container"></div>
  </div>
`; */

const DOMSelectors = {
  title: document.getElementById("title"),
  artists: document.getElementById("artists"),
  album: document.getElementById("album"),
  genres: document.getElementById("genres"),
  url: document.getElementById("url"),
  display: document.getElementById("container"),
};

function inject(song) {
  /* const container = document.querySelector(".container"); */
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-title=${song.title}>
      <img class="card-img" src="${song.url}" alt="oops!"/>
      <h2 class="card-header">${song.title} by ${song.artists}</h2>
      <h4 class="card-album">${song.album}</h4>
      <h4 class="card-genres">${song.genres}</h4>
      <form action="/action_page.php">
        <label for="cars">Choose a car:</label>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <input type="submit" value="Submit">
      </form>
      <span onclick="this.parentElement.style.display = 'none';" class="remove">remove</span>
    </div>`
  );
}

function place(playlist) {
  document.querySelector(".other-container").insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-title=${playlist.playtitle}>
      <img class="card-img" src="${playlist.playurl}" alt="oops!"/>
      <h2 class="card-header">${playlist.playtitle}</h2>
      <span onclick="this.parentElement.style.display = 'none';" class="remove">remove</span>
    </div>`
  );
}

songs.forEach((song) => inject(song));

function clearFields() {
  const inputs = document.querySelectorAll(".input");
  inputs.forEach((input) => (input.value = "")); // prob not correct
}

document.getElementById("songform").addEventListener("submit", function (e) {
  e.preventDefault(); // stops page from refreshing
  let song = {
    title: document.getElementById("title").value,
    artists: document.getElementById("artists").value,
    album: document.getElementById("album").value,
    genres: document.getElementById("genres").value,
    url: document.getElementById("url").value,
  };
  inject(song); // add to the page
  clearFields(); // reset form inputs
});

document
  .getElementById("playlistform")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // stops page from refreshing
    let playlist = {
      playtitle: document.getElementById("playtitle").value,
      playurl: document.getElementById("playurl").value,
    };
    place(playlist); // add to the page
    clearFields(); // reset form inputs
  });

/* setupCounter(document.querySelector("#counter")); */

const list = [];

function getSongs(event) {
  //not needed unless we want filter etc.
  cart.push({
    name: event.closest(".card").getAttribute("data-title"),
    price: event.closest(".card").getAttribute("data-price"),
    quantity: 0,
  });
  document.querySelector(".list-container").innerHTML = "";
  cart.forEach((product) => logCart(product));
  pricing();
}

function attachListeners() {
  const buttons = document.querySelectorAll(".playlist-button");
  const btnArr = Array.from(buttons);
  btnArr.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      getCards(event.target);
    })
  );
}

document
  .getElementById("playlist-button")
  .addEventListener("click", makePlaylist);
