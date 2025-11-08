// list of all timers
const timers = {};

// listens for button pushes, creates new timer if one does not exist, otherwise starts/stops the stopwatch 
const buttonListener = document.getElementById('tracker');
buttonListener.addEventListener('click', function(event) {
  buttonId = event.target.id;

  if (event.target.className === 'start-button') { 
    buttonNumber = buttonId.slice(12);

    if (!timers[buttonNumber]) {
      timers[buttonNumber] = new Timer(buttonNumber);
    }
    timers[buttonNumber].startStopWatch();
  }

  if (event.target.className === 'stop-button') {
    buttonNumber = buttonId.slice(11);
    timers[buttonNumber].stopStopWatch();
  }  
});


// timer definition
class Timer{
  constructor(buttonNumber) {
    this.startTime = null;
    this.startButtonId = 'start-button' + buttonNumber;
    this.stopButtonId = 'stop-button' + buttonNumber;
    this.buttonNumber = buttonNumber;
    this.intervalId = null;
    this.elapsedTime = 0;
    this.timerText = null;
  }

 // starts the StopWatch  
  startStopWatch() {
    document.getElementById(this.startButtonId).style.display = 'none'; // Hide start-button
    document.getElementById(this.stopButtonId).style.display = 'block'; // Show stop-button
    this.startTime = new Date() - this.elapsedTime;

    // set StopWatch text to continuosly update until stop button pushed
    this.intervalId = setInterval(() => {
      this.elapsedTime = (new Date() - this.startTime);
      this.parseTimeToText();
      document.getElementById('timerText' + this.buttonNumber).innerText = this.timerText;
    }, 17);
   }
// stops the stopwatch
  stopStopWatch() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    document.getElementById(this.stopButtonId).style.display = 'none'; // Hide stop-button
    document.getElementById(this.startButtonId).style.display = 'block'; // Show start-button
  }
  
// timer parsing
  parseTimeToText() {
    // initiliaze all time variables
    let milliseconds = this.elapsedTime % 1000;
    let seconds = Math.floor(this.elapsedTime / 1000) % 60;
    let minutes = Math.floor(this.elapsedTime / (1000 * 60)) % 60;
    let hours = Math.floor(this.elapsedTime / (1000 * 60 * 60)) % 24;
    let days = Math.floor(this.elapsedTime / (1000 * 60 * 60 * 24)) % 7;
    let weeks = Math.floor(this.elapsedTime / (1000 * 60 * 60 * 24 * 7)) % 4;

    // prepend a 0 if the number is below 10 to maintain consistent display
    // this is a ternary operator is javascript, which is basically shorthand if-else statement
    // can be read as if num < 10 return "0" + num else return num
    function timeToTextHelper(num) {
      return num < 10 ? "0" + num : num;
    }
    
    // format time so that their is a consistent display
    if (hours > 1) {
      this.timerText = `${timeToTextHelper(hours)}:${timeToTextHelper(minutes)}:${timeToTextHelper(seconds)}`;
    } else {
      this.timerText = `${timeToTextHelper(minutes)}:${timeToTextHelper(seconds)}:${timeToTextHelper(milliseconds)}`;
    }
    
  }
}
