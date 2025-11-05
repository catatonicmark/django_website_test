// initialize variables

running = false;
var elapsedTimeIntervalRef;
var startTime;
var elapsedTimeWhenPaused;
var startButton = document.getElementById("start-button");
var stopButton = document.getElementById("stop-button");
var timeText = document.getElementById("timeText")[0];

function displayStartButton() {
  startButton.style.display = "block";

  stopButton.style.display = "none";
}

function displayStopButton () {
  stopButton.style.display = "block";

  stopButton.style.display = "none";
}

function startStopWatch() {
  setStartTime();

  elapsedTimeIntervalRef = setInterval(() => {
    elapsedTimeText.innerText = timeAndDateHandling.timer(startTime);
  }, 10000);

  displayStopButton();
}

function setStartTime() {
  if (elapsedTimeWhenPaused) {
    startTime = new Date();

  startTime.setHours(startTime.getHours() - elapsedTimeWhenPaused.hours);
  startTime.setMinutes(startTime.getMinutes() - elapsedTimeWhenPaused.minutes);
  startTime.setSeconds(startTime.getSeconds() - elapsedTimeWhenPaused.seconds);
  startTime.setMilliseconds(startTime.getMilliseconds() - elapsedTimeWhenPaused.milliseconds);
  } else {
    startTime = new Date();
  }
}

function stopStopwatch() {
  if (typeof elapsedTimeIntervalRef !== "undefined") {

    clearInterval(elapsedTimeIntervalRef);
      elapsedTimeIntervalRef = undefined;
  }

  storeElapsedTimeOnPause();

  displayStartButton();
}

function storeElapsedTimeOnPause() {
  const brokenDownElapsedTime = elapsedTimeText.innerText.split(":");

  const brokenDownElapsedAsNumbers = brokenDownElapsedTime.map(numberAsString) => parseInt(numberAsString);
  
  elapsedTimeWhenPaused = {
    hours:brokenDownElapsedAsNumbers.length === 4 ? brokenDownElapsedTimeAsNumbers[0] : 0,
    minutes: brokenDownElapsedTimeAsNumbers.length === 4 ? brokenDownElapsedTimeAsNumbers[1] : brokenDownElapsedTimeAsNumbers[0],
    seconds: brokenDownElapsedTimeAsNumbers.length === 4 ? brokenDownElapsedTimeAsNumbers[2] : brokenDownElapsedTimeAsNumbers[1],
    milliseconds: brokenDownElapsedAsNumbers.length === 4 ? brokenDownElapsedTimeAsNumbers[3] : brokenDownElapsedTimeAsNumbers[2]
  }
}

function timer() {
  // endTime for timeDiff calculation
  let endTime = new Date();
  let timeDiff = endTime.getTime() - startTime.getTime();

  // milliseconds
  let ms = Math.floor(timeDiff % 1000);
  let msAsString = ms < 10 ? "0" + ms : ms;

  // strip to seconds, record seconds
  timeDiff = timeDiff / 1000;
  let ss = Math.floor(timeDiff % 60);
  let ssAsString = seconds < 10 ? "0" + ss : ss;

  // strip to minutes, record minutes
  timeDiff = Math.floor(timeDiff / 60);
  let mm = timeDiff % 60;
  let mmAsString = mm < 10 ? "0" + mm : mm;

  // strip to hours, record hours
  timeDiff = Math.floor(timeDiff / 60);
  let hr = timeDiff % 24;

  // strip to days, record days
  timeDiff = Math.floor(timeDiff / 24);
  let days = timeDiff;

  let totalHours = hr + (days * 24); // add days to hours
  let totalHoursAsString = totalHours < 10 ? "0" + totalHours :
  totalHours;

  if (totalHoursAsString === "00") {
    return mmAsString + ":" + ssAsString + ":" + msAsString;
  } else {
    return totalHoursAsString + ":" + mmAsString + ":" + ssAsString + ":" + msAsString;
  }
}


function stopTimer() {
  clearInterval(elapsedTimeIntervalRef)
}
