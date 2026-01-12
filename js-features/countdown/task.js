function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    let hoursStr = hours.toString().padStart(2, '0');
    let minutesStr = minutes.toString().padStart(2, '0');
    let secsStr = secs.toString().padStart(2, '0');
    return `${hoursStr}:${minutesStr}:${secsStr}`;
}
 
 let timerElement = document.getElementById('timer');

  let timeLeft = parseInt(timerElement.innerText); 

  timerElement.innerText = formatTime(timeLeft);

  let timerId = setInterval(function() {

    timeLeft = timeLeft -1;


    if (timeLeft < 0) {
      clearInterval(timerId);
      timerElement.innerText = "00:00:00";
      setTimeout(function() {
        alert('Вы победили в конкурсе!');
      },100);
      return;
    }
    timerElement.innerText = formatTime(timeLeft);

  }, 1000); 
