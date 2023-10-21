/* initialization of different variables */
let clearTime;
let seconds = 0,
  minutes = 0,
  hours = 0;
let secs, mins, gethours;


// updates the clock interface
function updateClock() {
    /* check if seconds is equal to 60 and add a +1 
    to minutes, and set seconds to 0 */
    if (seconds === 60) {
        seconds = 0;
        minutes = minutes + 1;
    }

    // if minutes less than 10 add a "0(minutes):" to mins;
    // example: 04:   
    mins = minutes < 10 ? "0" + minutes + ": " : minutes + ": ";

    /* check if minutes is equal to 60 and add a +1 
    to hours set minutes to 0 */
    if (minutes === 60) {
        minutes = 0;
        hours = hours + 1;
    }
    
    gethours = hours < 10 ? "0" + hours + " : " : hours + " : ";
    secs = seconds < 10 ? "0" + seconds : seconds;

    /* display the timer */
    let x = document.getElementById("timer");
    x.innerHTML = gethours + mins + secs;

    /* call the seconds counter after displaying the timer 
    and increment seconds by +1 to keep it counting */
    seconds++;

    /* call the setTimeout( ) to keep the Count-Up alive ! */
    clearTime = setTimeout(updateClock, 1000);
}



//create a function to start the Timer and hide the 
function startTimer() {
  /* check if seconds, minutes, and hours are equal to zero 
    and start the Count-Up */
  if (seconds === 0 && minutes === 0 && hours === 0) {

    // hide the start button AFTER start
    let showStart = document.getElementById("start");
    showStart.style.display = "none";

    // update the clock whenenver startTimer is called
    updateClock();
  }
}

// adding event lister to START button
let start = document.getElementById("start");
start.addEventListener("click", startTimer);



/*create a function to stop the time */
function stopTime() {
  /* check if seconds, minutes and hours are not equal to 0 */
  if (seconds !== 0 || minutes !== 0 || hours !== 0) {

    // display total time 
    let fulltime = document.getElementById("fulltime");
    fulltime.style.display = "block";
    fulltime.style.color = "#ff4500";
    let time = gethours + mins + secs;
    fulltime.innerHTML = "Time Recorded is " + time;

    // reset the Clock
    seconds = 0;
    minutes = 0;
    hours = 0;
    secs = "0" + seconds;
    mins = "0" + minutes + ": ";
    gethours = "0" + hours + ": ";

    /* display the Count-Up Timer after it's been stopped */
    let x = document.getElementById("timer");
    let stopTime = gethours + mins + secs;
    x.innerHTML = stopTime;

    /* display all Count-Up control buttons */
    let showStart = document.getElementById("start");
    showStart.style.display = "inline-block";
    let showStop = document.getElementById("stop");
    showStop.style.display = "inline-block";

    /* clear the Count-Up using the setTimeout( ) 
        return value 'clearTime' as ID */
    clearTimeout(clearTime);
  }
}

function checkTime(){
  
}

let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stopTime);



window.addEventListener("load", function() {
  var stop = document.getElementById("stop");
  stop.addEventListener("click", stopTime);
});
/*********** End of Stop Button Operations *********/
