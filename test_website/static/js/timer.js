running = false;
let startTime = 0;
let intervalId;

function startTimer(start) {
  if (!running) {
    return timer(start);
    const startTime = Date.now();
    console.log("Starting timer...");
  
  intervalId = setInterval(() => {
      const diff = Date.now()
    })
  }
}

function timer(start) {
  diff = Date.now() - start;
  display = Math.floor(ms / 1000);
  document.getElementById('timeDisplay').innerHTML = display;
}
