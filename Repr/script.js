const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const soundTitle = document.getElementById('song-title');
const videoGif = document.getElementById('fuegosArtificiales');


soundTitle.textContent = '🍻🍻🎉🎉'
// Reproducir musica
playBtn.addEventListener('click', () => {
    audio.play();
    videoGif.classList.remove('hidden'); // Mostrar GIF
});

// Pausar music
pauseBtn.addEventListener('click', () => {
    audio.pause();
    videoGif.classList.add('hidden'); // Mostrar GIF
});

// parar musica
stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0; // sirve para restablecer la cancion al principio
    videoGif.classList.add('hidden'); // Mostrar GIF
});
audio.addEventListener('timeupdate', () => {
    const progressPercentage = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercentage;
});

progress.addEventListener('input', () => {
    const newTime = (progress.value / 100) * audio.duration;
    audio.currentTime = newTime;
});

