// initialize variables

let startTime;


function startStopWatch(startTime) {
  document.getElementById('start-button').style.display = 'none'; // Hide start-button
  document.getElementById('stop-button').style.display = 'block'; // Show stop-button
  
  startTime = new Day();

  timeDiff = new Day() - startTime;

  document.getElementById('timerText').innerText = timeDiff;
}

function stopStopWatch() {
  document.getElementById('start-button').style.display = 'block'; // Hide start-button
  document.getElementById('stop-button').style.display = 'none'; // Show stop-button
}
