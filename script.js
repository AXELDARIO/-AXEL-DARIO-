const boton = document.getElementById('descubriri');
const fraseDiv = document.getElementById('frase');
const listaDiv = document.getElementById( 'lista');
const frases = ["You And I", "Future Lovers", "This Night", "All About You", "A New Dimencion", "What Is Love?", "I Miss You (us)", "I Love You Cat Ft. Enki. Vt", "You Will Never Wrong, IWNW", "Its a Litle Blury (Reary For Another Strom)", "Sometimes I Cry For You",  "I See You Again", "The Last Time", ];
const audios = ["You And I.wav", "Future Lovers.wav", "This Night.wav", "All About You.wav", "anew.wav", "What Is Love.wav", "imissyou.wav",  "I Love You Cat.wav", "You Will Never Wrong.wav", "Its a Litle Blury (Reary For Another Strom).wav", "Sometimes I Cry For You.wav","I See You Again.wav", "The Last Time.wav"];
let indiceFrase = 0; // Índice para recorrer las frases
let currentAudio = null; // Variable para almacenar el audio actual

const FADE_DURATION = 5; // Fade duration in seconds

boton.addEventListener('click', () => {
  if (indiceFrase < frases.length) {
    const frase = frases[indiceFrase];
    const audioSrc = audios[indiceFrase];
    mostrarFrase(frase);
    agregarALista(frase);
    reproducirAudio(audioSrc);
    indiceFrase++;
  } else {
    boton.disabled = true; // Desactivar el botón si no hay más frases
  }
});

function mostrarFrase(frase) {
  fraseDiv.textContent = '';
  let i = 0;
  const intervalo = setInterval(() => {
    fraseDiv.textContent += frase.charAt(i);
    i++;
    if (i === frase.length) {
      clearInterval(intervalo);
    }
  }, 50);
}

function agregarALista(frase) {
  const li = document.createElement('li');
  li.textContent = frase;
  listaDiv.appendChild(li);
}

function reproducirAudio(audioSrc) {
  // Detener el audio anterior si existe
  if (currentAudio) {
    fadeOut(currentAudio, FADE_DURATION);
  }

  const audio = new Audio(audioSrc);
  audio.play();
  currentAudio = audio; // Actualizar la variable de audio actual
  fadeIn(audio, FADE_DURATION);
}

function fadeIn(audio, duration) {
  let fadeValue = 0;
  const interval = setInterval(() => {
    if (fadeValue <= 1) {
      fadeValue += 0.02; // Adjust increment for smoother fade (0.01 - 0.1)
      audio.volume = fadeValue;
    } else {
      clearInterval(interval);
    }
  }, duration * 1000 / 100); // Convert seconds to milliseconds and adjust for interval duration
}

function fadeOut(audio, duration) {
  let fadeValue = 1;
  const interval = setInterval(() => {
    if (fadeValue >= 0) {
      fadeValue -= 0.02; // Adjust decrement for smoother fade (0.01 - 0.1)
      audio.volume = fadeValue;
    } else {
      clearInterval(interval);
      audio.pause();
      audio.currentTime = 0; // Reset audio time
    }
  }, duration * 1000 / 100); // Convert
}


