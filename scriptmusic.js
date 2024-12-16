
const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPauseButton');

playPauseButton.addEventListener('click', function() {
  audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
  playPauseButton.textContent = audioPlayer.paused ? 'Reproducir música' : 'Detener música';
});
