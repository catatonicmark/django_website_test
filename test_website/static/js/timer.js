// initialize variables

let startTime;
let stopTime = 0;
const buttonListener = document.getElementById('tracker');
let buttonId;
let buttonNumber;
let intervalId;
let timeDiff = 0;

buttonListener.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    buttonId = event.target.id;
    if (event.target.className === 'start-button') {
      buttonNumber = buttonId.slice(12);
      console.log('Opposite buttonId is start-button' + buttonNumber);
      startStopWatch(startTime, buttonId, buttonNumber, stopTime);
    }

    if (event.target.className === 'stop-button') {
      buttonNumber = buttonId.slice(11); 
      console.log('Opposite buttonId is start-button' + buttonNumber);
      stopStopWatch(buttonId, buttonNumber, timeDiff);
    }
    console.log('A button inside the container was clicked!');
    console.log('Clicked button ID:', buttonId); // Access the ID
    console.log('Clicked button text:', event.target.textContent); // Access the text
  }
});


function startStopWatch(startTime, buttonId, buttonNumber, stopTime) {
  document.getElementById(buttonId).style.display = 'none'; // Hide start-button
  document.getElementById('stop-button' + buttonNumber).style.display = 'block'; // Show stop-button
  
  startTime = new Date();
  intervalId = setInterval(() => {
    timeDiff = stopTime + Math.floor((new Date() - startTime) / 1000);
    document.getElementById('timerText' + buttonNumber).innerText = timeDiff;
  }, 1000);
 }

function stopStopWatch(buttonId, buttonNumber, timeDiff) {
  document.getElementById('start-button' + buttonNumber).style.display = 'block'; // Show start-button
  document.getElementById(buttonId).style.display = 'none'; // Hide stop-button
  clearInterval(intervalId);
  
  stopTime = timeDiff;
}
