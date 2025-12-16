import "./style.css";
/* import { setupCounter } from "./counter.js"; */

let songs = [
  {
    title: "Mr. Incorrect",
    artists: "Malcolm Todd",
    album: "Sweetboy",
    genres: "Alternative",
    url: "https://m.media-amazon.com/images/I/814aISls55L._UF1000,1000_QL80_.jpg",
  },
  {
    title: "Magic Johnson",
    artists: "ian",
    album: "Valedictorian",
    genres: "Rap",
    url: "https://i.scdn.co/image/ab67616d0000b273f624d169356e083678be21f2",
  },
  {
    title: "Bags",
    artists: "Clairo",
    album: "Immunity",
    genres: "Alternative",
    url: "https://i.scdn.co/image/ab67616d0000b27333ccb60f9b2785ef691b2fbc",
  },
  {
    title: "Bleed (feat. Omar Apollo)",
    artists: "Malcolm Todd",
    album: "Malcolm Todd",
    genres: "Alternative",
    url: "https://upload.wikimedia.org/wikipedia/en/b/b3/Malcolm_Todd_cover.png",
  },
];

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
    `<div class="card" data-title="${song.title}" data-artists="${song.artists}">
      <img class="card-img" src="${song.url}" alt="oops!"/>
      <h2 class="card-header">${song.title} by ${song.artists}</h2>
      <h4 class="card-album">${song.album}</h4>
      <h4 class="card-genres">${song.genres}</h4>
      <label for="playlists">Choose a playlist:</label>
      <select name="playlists" class="playlists" id="playlists">
        <option value="none">None</option>
      </select>
      <span onclick="this.parentElement.style.display = 'none';" class="remove">remove</span>
    </div>`
  );
}

function place(playlist) {
  document.querySelector(".other-container").insertAdjacentHTML(
    "beforeend",
    `<div class="card" data-title="${playlist.playtitle}">
      <img class="card-img" src="${playlist.playurl}" alt="oops!"/>
      <h2 class="card-header">${playlist.playtitle}</h2>
      <div class="list-container" id="${playlist.playtitle}"></div>
      <span onclick="this.parentElement.style.display = 'none';" class="remove">remove</span>
    </div>`
  );
}

const playlistNames = [];

let genres = [
  "All",
  "Alternative",
  "Country",
  "Indie",
  "Jazz",
  "Pop",
  "Rap",
  "Rock",
];

function injectFilter(array) {
  document.querySelector(".header").insertAdjacentHTML(
    "beforeend",
    `<select class="genres" id="genres">
        </select>`
  );
  array.forEach((genre) => {
    document
      .querySelector(".genres")
      .insertAdjacentHTML(
        "beforeend",
        `<option value="${genre}">${genre}</option>`
      );
  });
}

injectFilter(genres);

songs.forEach((song) => inject(song));


function clearFields() {
  const inputs = document.querySelectorAll(".input");
  inputs.forEach((input) => (input.value = ""));
}

document.getElementById("songform").addEventListener("submit", function (e) {
  e.preventDefault(); // stops page from refreshing
  songs.push({
    title: document.getElementById("title").value,
    artists: document.getElementById("artists").value,
    album: document.getElementById("album").value,
    genres: document.getElementById("genres").value,
    url: document.getElementById("url").value,
  });
  document.querySelector(".container").innerHTML = "";
  songs.forEach((song) => inject(song)); // add to the page
  restoreOptions();
  attachListeners();
  clearFields(); // reset form inputs
});

function addOption(playlist) {
  /* // create option using DOM
  const newOption = document.createElement('option');
  const optionText = document.createTextNode('Option Text');
  // set option text
  newOption.appendChild(optionText);
  // and option value
  newOption.setAttribute('value','Option Value'); */
  let newOption = {
    text: playlist,
    value: playlist,
  };
  const selects = document.querySelectorAll(".playlists");
  /* const selectArr = Array.from(selects); */
  selects.forEach((select) => {
    /* console.log(select) */
    const newopp = document.createElement("option");
    newopp.text = newOption.text;
    newopp.value = newOption.value;
    select.appendChild(newopp);
    /* select.add(newOption,undefined)); */
  });
  /* selects.forEach((select) => select.value = "<option value=${playlist}>${playlist}</option>") */
}

/* .insertAdjacentHTML("afterbegin", `<option value="${playlist}">${playlist}</option>`)) */

/* setupCounter(document.querySelector("#counter")); */

const playlists = {};

function logPlaylist(event, playlistName) {
  if (!playlists[playlistName]) {
    playlists[playlistName] = [];
  }
  playlists[playlistName].push({
    title: event.closest(".card").getAttribute("data-title"),
    artist: event.closest(".card").getAttribute("data-artists"),
  });
  const playlistContainer = document.getElementById(playlistName);
  playlistContainer.innerHTML = "";
  playlists[playlistName].forEach((song) => {
    playlistContainer.insertAdjacentHTML(
      "afterbegin",
      `<li>${song.title} by ${song.artist}</li>`
    );
  });
}

function sort() {
  const select = document.querySelector(".genres");
  select.addEventListener("change", function (e) {
    e.preventDefault;
    const selection = select.value;
    document.querySelector(".container").innerHTML = "";
    if (selection === "All") {
      songs.forEach((song) => inject(song));
    } else {
      songs
        .filter((song) => song.genres === selection)
        .forEach((song) => inject(song));
    }
    restoreOptions();
    attachListeners();
  });
}

function attachListeners() {
  /* const selectors = document.querySelectorAll('.playlists');
  const selectArr = Array.from(selectors);
  selectArr.forEach((selector) =>
    selector.addEventListener("submit", function (e) {
      e.preventDefault(); // stops page from refreshing
      const selectedValue = e.target.value
      logPlaylist(e.target, selectedValue);
    })
  ); */
  const playlistSelector = document.querySelectorAll(".playlists");
  playlistSelector.forEach((playlist) =>
    playlist.addEventListener("change", function (e) {
      logPlaylist(e.target, e.target.value);
    })
  );
}

function restoreOptions() {
  playlistNames.forEach((name) => addOption(name));
}


attachListeners();
sort();

document
  .getElementById("playlistform")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // stops page from refreshing
    let playlist = {
      playtitle: document.getElementById("playtitle").value,
      playurl: document.getElementById("playurl").value,
    };
    place(playlist); // add to the page
    playlistNames.push(playlist.playtitle);
    clearFields(); // reset form inputs
    addOption(playlist.playtitle);
  });

/* document
  .getElementById("playlist-button")
  .addEventListener("click", makePlaylist); */
