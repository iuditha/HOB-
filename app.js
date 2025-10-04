const songs = {
  "song1.json": {
    "title": "Amazing Grace",
    "lyrics": "Amazing grace! How sweet the sound\nThat saved a wretch like me...",
    "chords": "G       C   G\nAmazing grace! How sweet the sound\nG       C   G\nThat saved a wretch like me...",
    "sheet": "sheet1.pdf"
  }
  // Add more songs here if needed
};

function loadSong() {
  const select = document.getElementById('songSelect');
  const songKey = select.value;
  const song = songs[songKey];

  document.getElementById('title').textContent = song.title;
  document.getElementById('lyrics').textContent = song.lyrics;
  document.getElementById('chords').textContent = song.chords;
  document.getElementById('sheetContainer').innerHTML = '';
}

function loadSheet() {
  const select = document.getElementById('songSelect');
  const songKey = select.value;
  const song = songs[songKey];

  const container = document.getElementById('sheetContainer');
  container.innerHTML = `<a href="${song.sheet}" target="_blank">Open Sheet Music</a>`;
}

window.onload = loadSong();
