var tiempo_timer, setIntervalId, parado = true, contador = 0;

document.addEventListener("DOMContentLoaded",function () {
    document.getElementById ("timer-btn").addEventListener ("click", timer, false);
})


function timer() {
  console.log(parado);
  if (parado) {
    tiempo_inicial = getTimer();
    if (tiempo_inicial) {
      parado = false;
      setIntervalId = setInterval(iniciarTimer, 1000);
    } 
  } else {
    clearInterval(setIntervalId);
    parado = true;
    contador = 0;
    document.getElementById("timer").innerHTML = "Timer";
  }
}

function getTimer() {
  $.ajax({
    async : false,
    url:"timer.php",
    type: "post",
    success:function(result){
      if (result) {
        var array = result.split('\n');
        var tiempo_cabra_file = new Date(new Date(array[0]).toUTCString());
        var tiempo_timer_file = parseFloat(array[1]);
        var tiempo_cliente = new Date(new Date().toUTCString());
        tiempo = (tiempo_cliente-tiempo_cabra_file) + tiempo_timer_file;
      } else {
        tiempo = null;
      }
   }
 });
 return tiempo; 
}

function iniciarTimer() {
  console.log(tiempo_inicial);
  console.log(contador);
  showTimer();
  contador += 1000;
}






function showTimer() {
  var tiempo_timer = millisToMinutesAndSeconds(tiempo, contador);
  document.getElementById("timer").innerHTML = millisToMinutesAndSeconds(tiempo_timer);
}

function millisToMinutesAndSeconds() {
  var tiempo_timer = parseFloat(tiempo) + contador;
  var minutes = Math.floor(tiempo_timer / 60000);
  var seconds = ((tiempo_timer % 60000) / 1000).toFixed(0);
  if (seconds == 60) {
    seconds = 0;
    minutes = minutes + 1;
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  } else {
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
}