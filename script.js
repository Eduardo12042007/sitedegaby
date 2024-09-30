document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "gabylinda" && password === "gabydn1910") {
        document.querySelector(".login-container").classList.add("hidden");
        document.querySelector(".gallery-container").classList.remove("hidden");
        document.querySelector(".message-container").classList.remove("hidden");
        window.scrollTo(0, 0); // Garantir que o site vá para o topo ao exibir a galeria
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos.";
        errorMessage.style.display = "block";
    }
});

function createHearts() {
    const heartContainer = document.getElementById("hearts-container");

    for (let i = 0; i < 30; i++) { // Aumentei para 30 corações
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heartContainer.appendChild(heart);
    }
}

createHearts();
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const seekBar = document.getElementById('seek-bar');
const currentTimeSpan = document.getElementById('current-time');
const durationSpan = document.getElementById('duration');

playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = '💗 Pause';
  } else {
    audio.pause();
    playPauseButton.textContent = '💗 Play';
  }
});

audio.addEventListener('timeupdate', () => {
  const currentTime = Math.floor(audio.currentTime);
  const duration = Math.floor(audio.duration);

  seekBar.value = (currentTime / duration) * 100;
  currentTimeSpan.textContent = formatTime(currentTime);
  durationSpan.textContent = formatTime(duration);
});

seekBar.addEventListener('input', () => {
  const duration = Math.floor(audio.duration);
  audio.currentTime = (seekBar.value / 100) * duration;
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}



