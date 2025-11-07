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
    this.startTime = new Date();
    this.stopTime = 0;
    this.buttonId = buttonId;
    this.buttonNumber = buttonNumber;
    this.intervalId;
    this.timeDiff = 0;
  }

 // starts the stop watch 
  startStopWatch() {
    document.getElementById(this.buttonId).style.display = 'none'; // Hide start-button
    document.getElementById('stop-button' + this.buttonNumber).style.display = 'block'; // Show stop-button
    
    this.intervalId = setInterval(() => {
      this.timeDiff = this.stopTime + Math.floor((new Date() - this.startTime) / 1000);
      document.getElementById('timerText' + this.buttonNumber).innerText = this.timeDiff;
    }, 1000);
   }
// stops the stopwatch 
  stopStopWatch() {
    document.getElementById(this.buttonId).style.display = 'none'; // Hide stop-button
    document.getElementById('start-button' + this.buttonNumber).style.display = 'block'; // Show start-button
    clearInterval(this.intervalId);
    
    this.stopTime = this.timeDiff;
  }

}
