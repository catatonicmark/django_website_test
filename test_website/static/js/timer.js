// list of all timers
const timers = {};

// listens for button pushes, creates new timer if one does not exist, otherwise starts/stops the stopwatch 
const buttonListener = document.getElementById('tracker');
buttonListener.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    buttonId = event.target.id;
    if (event.target.className === 'start-button') {
      buttonNumber = buttonId.slice(12);
      if (!timers[buttonNumber]) {
        timers[buttonNumber] = new Timer(buttonId, buttonNumber);
      }

      timers[buttonNumber].startStopWatch();
    }

    if (event.target.className === 'stop-button') {
      buttonNumber = buttonId.slice(11);
      timers[buttonNumber].stopStopWatch();
    }
    
  }
});


// timer definition
class Timer{
  constructor(buttonId, buttonNumber) {
    this.startTime = null;
    this.buttonId = buttonId;
    this.buttonNumber = buttonNumber;
    this.intervalId = null;
    this.elapsedTime = 0;
    this.timerText = "00:00:000"
  }

 // starts the stop watch 
  startStopWatch() {
    document.getElementById(this.buttonId).style.display = 'none'; // Hide start-button
    document.getElementById('stop-button' + this.buttonNumber).style.display = 'block'; // Show stop-button

    this.startTime = new Date() - this.elapsedTime;

    // set stopStopWatch text to continuosly update until stop button pushed
    this.intervalId = setInterval(() => {
      this.elapsedTime = (new Date() - this.startTime);
      document.getElementById('timerText' + this.buttonNumber).innerText = this.parseTimeToText();
    }, 17);
   }
// stops the stopwatch 
  stopStopWatch() {
    document.getElementById(this.buttonId).style.display = 'none'; // Hide stop-button
    document.getElementById('start-button' + this.buttonNumber).style.display = 'block'; // Show start-button
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  
// timer parsing
  parseTimeToText () {
    // initiliaze all variables
    var milliseconds = this.elapsedTime;
    var seconds = Math.floor(this.elapsedTime / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = hours / 24;
    var weeks = days / 7;

    // put into array so they can be iterated over
    const increments = [
      seconds,
      minutes,
      hours,
      days,
      weeks
    ]

    // make sure that the numbers move from one section to the next on the timer
    milliseconds = milliseconds - seconds * 1000;
    seconds = seconds - minutes * 60;
    minutes = minutes - hours * 60;
    hours = hours - days * 24;

    // prepend a 0 if the number is below 10 to maintain consistent display
    increments.forEach((number) => {
      if (number < 10) {
        number = "0" + number;
      }
    }); 

    return hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
  }
}
