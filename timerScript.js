let timerElement = document.getElementById("timer");
let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let intervalId;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startButton.addEventListener("click", function () {
  intervalId = setInterval(updateTime, 1000); // Update time every second (1000 milliseconds)
});

stopButton.addEventListener("click", function () {
  clearInterval(intervalId); // Stop the timer
});

// resetButton.addEventListener("click", function () {
//   clearInterval(intervalId); // Stop the timer
//   seconds = 0;
//   minutes = 0;
//   hours = 0;
//   timerElement.textContent = "00:00:00"; // Reset the time display
// });
