let setIntervalId; let parado = true; let
  contador = 0;

function getTimer() {
  $.ajax({
    async: false,
    url: 'timer.php',
    type: 'post',
    success(result) {
      if (result) {
        const array = result.split('\n');
        const tiempo_cabra_file = new Date(new Date(array[0]).toUTCString());
        const tiempo_timer_file = parseFloat(array[1]);
        const tiempo_cliente = new Date(new Date().toUTCString());
        return (tiempo_cliente - tiempo_cabra_file) + tiempo_timer_file;
      }
      return null;
    },
  });
}

function millisToMinutesAndSeconds() {
  const tiempo_timer = parseFloat(getTimer()) + contador;
  let minutes = Math.floor(tiempo_timer / 60000);
  let seconds = ((tiempo_timer % 60000) / 1000).toFixed(0);
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function showTimer() {
  const tiempo_timer = millisToMinutesAndSeconds(getTimer(), contador);
  document.getElementById('timer').innerHTML = millisToMinutesAndSeconds(tiempo_timer);
}

function iniciarTimer() {
  showTimer();
  contador += 1000;
}

function timer() {
  if (parado) {
    const tiempo_inicial = getTimer();
    if (tiempo_inicial) {
      parado = false;
      setIntervalId = setInterval(iniciarTimer, 1000);
    }
  } else {
    clearInterval(setIntervalId);
    parado = true;
    contador = 0;
    document.getElementById('timer').innerHTML = 'Timer';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('timer-btn').addEventListener('click', timer, false);
});
