const songs = [
  {
    name: "Punjabi Song",
    title: "Patakha Guddi",
    artist: "Nooran Sisters"
  },
  {
    name: "song2.mp3",
    title: "Relax Vibes",
    artist: "LoFi Music"
  }
];

let isPlaying = false;
let songIndex = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = `audio.mp3`;
}

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "▶️";
  } else {
    audio.play();
    playBtn.textContent = "⏸️";
  }
  isPlaying = !isPlaying;
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  audio.play();
  playBtn.textContent = "⏸️";
  isPlaying = true;
}

function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  audio.play();
  playBtn.textContent = "⏸️";
  isPlaying = true;
}

audio.addEventListener("timeupdate", () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.value = progressPercent;
});

function changeProgress() {
  audio.currentTime = (progress.value * audio.duration) / 100;
}

function changeVolume() {
  audio.volume = document.getElementById("volume").value;
}

loadSong(songs[songIndex]);
