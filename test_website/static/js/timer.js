running = false;

function startTimer() {
  running = true;
  const start = Date.now();
  console.log("starting timer...");

  setTimeout(() => {
    const ms = Date.now() - start;
    display = Math.floor(ms / 1000)

    document.getElementById('timeDisplay').innerHTML = display;
  }, 2000);
}
