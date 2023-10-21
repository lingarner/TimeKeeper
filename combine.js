let startTime = 0;
let endTime = "";
let checkTime = "";
let times = []

// deals with information of when user clocks in or out
function mainTimeHandler() {
    // everytime clock-in is clicked set the startTime Variable
    let start = document.querySelector(".start");
    start.addEventListener("click", () => {
        startTime = noteTime();
        startTimer();
        console.log(startTime)
    });
    
    // get time everytime the extension is opened
    if(startTime != 0){
    console.log('window alert')
    document.addEventListener("DOMContentLoaded", () => {
        checkTime = noteTime(); // Set the checkTime variable
        let diff = checkTime - startTime; //get time difference in milliseconds
        let timeDiff = runCheckedTime(diff); //change time from milliseconds to hours, minutes, and seconds (return in a array)
        checkTimer(timeDiff)
        });
    }   
    // Set endTime when the document is clicked (for testing)
    let stop = document.querySelector(".stop");
    stop.addEventListener("click", () => {
        endTime = noteTime();
        times.push([startTime, endTime])
        console.log(endTime)
        let diff = endTime - startTime;
        runCheckedTime(diff);
        stopTime();
    });
}

// set any variable to the current time
function noteTime() {
    const fullTime = new Date();
    const currentTime = fullTime.getTime()
    // const currentTime = fullTime.toLocaleTimeString('it-IT');
    return currentTime; // Return the current time
}

function runCheckedTime(time) {
    // convert miliseconds to regular time
    seconds = Math.floor((time / 1000) % 60),
    minutes = Math.floor((time / (1000 * 60)) % 60),
    hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    console.log(`${hours}:${minutes}:${seconds}`);
    return [hours, minutes, seconds]
}

mainTimeHandler()




/*
*
*
* CLOCK DISPLAY FUNCTIONS
*
*
*/



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
    mins = minutes < 10 ? "0" + minutes + ":" : minutes + ":";

    /* check if minutes is equal to 60 and add a +1 
    to hours set minutes to 0 */
    if (minutes === 60) {
        minutes = 0;
        hours = hours + 1;
    }
    
    gethours = hours < 10 ? "0" + hours + ":" : hours + ":";
    secs = seconds < 10 ? "0" + seconds : seconds;

    /* display the timer */
    let x = document.querySelector(".timer");
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
    let showStart = document.querySelector(".start");
    showStart.style.display = "none";

    // update the clock whenenver startTimer is called
    updateClock();
  }
}



/*create a function to stop the time */
function stopTime() {
  /* check if seconds, minutes and hours are not equal to 0 */
  if (seconds !== 0 || minutes !== 0 || hours !== 0) {

    // display total time 
    let fulltime = document.querySelector(".fulltime");
    fulltime.style.display = "block";
    fulltime.style.color = "#ff4500";
    let time = gethours + mins + secs;
    fulltime.innerHTML = "Time Recorded is " + time;

    // reset the Clock
    seconds = 0;
    minutes = 0;
    hours = 0;
    secs = "0" + seconds;
    mins = "0" + minutes + ":";
    gethours = "0" + hours + ":";

    /* display the Count-Up Timer after it's been stopped */
    let x = document.querySelector(".timer");
    let stopTime = gethours + mins + secs;
    x.innerHTML = stopTime;

    /* display all Count-Up control buttons */
    let showStart = document.querySelector(".start");
    showStart.style.display = "inline-block";
    let showStop = document.querySelector(".stop");
    showStop.style.display = "inline-block";

    /* clear the Count-Up using the setTimeout( ) 
        return value 'clearTime' as ID */
    clearTimeout(clearTime);
  }
}

function checkTimer(timeDiff){
    console.log(timeDiff)
    // set the Clock to difference from first start to last checked
    seconds = timeDiff[2];
    minutes = timeDiff[1];
    hours = timeDiff[3];

    if(seconds < 0){
        secs = "0" + seconds + ":";
    }
    if(minutes < 0){
        mins = "0" + minutes + ":";
    }
    if(hours < 0){
        gethours = "0" + hours + ":";
    }
    

    /* display the Count-Up Timer after it's been stopped */
    let x = document.querySelector(".timer");
    let updateTime = gethours + mins + secs;
    x.innerHTML = updateTime;

    updateClock()

}

/*********** End of Stop Button Operations *********/


function createStopWatchSection(projName) {
    // Create the main section
    const stopWatchSection = document.createElement('section');
    stopWatchSection.setAttribute('id', projName);

    // Create the heading
    const heading = document.createElement('h1');
    // heading.textContent = 'Timer';

    // Create the timer display
    const timerDisplay = document.createElement('p');
    timerDisplay.setAttribute('id', 'timer');
    timerDisplay.textContent = '00:00:00';

    // Create the Clock-In button
    const clockInButton = document.createElement('button');
    clockInButton.setAttribute('id', 'start');
    clockInButton.textContent = 'Clock-In';

    // Create the Stop button
    const stopButton = document.createElement('button');
    stopButton.setAttribute('id', 'stop');
    stopButton.textContent = 'Stop';

    // Create the fulltime display
    const fulltimeDisplay = document.createElement('p');
    fulltimeDisplay.setAttribute('id', 'fulltime');
    fulltimeDisplay.classList.add('fulltime');

    // Append the elements to the section
    stopWatchSection.appendChild(heading);
    stopWatchSection.appendChild(timerDisplay);
    stopWatchSection.appendChild(clockInButton);
    stopWatchSection.appendChild(stopButton);

    return stopWatchSection;
}

/*
*
*LOCAL STORAGE
*
*
*/


// check for allData array and return it
function checkForArray(){
    // Check if the item with the key "allData" exists in localStorage
    let allData = localStorage.getItem("allData");

    // If it doesn't exist, initialize it with an empty "projects" array
    if (allData === null) {
    const initialData = { projects: [] };
    allData = JSON.stringify(initialData);
    localStorage.setItem("allData", allData);
    }

    // Now, you can safely parse the data
    const parsedData = JSON.parse(allData);

    return parsedData

}
// this function returns and prints all project names in the array 
function getProjectNames(){
    const parsedData = checkForArray();
    const projectNames = parsedData.projects.map(project => project.name)
    const container = document.getElementById("output");
    projectNames.forEach(name => {
        const p = document.createElement("p");
        p.setAttribute('class', 'projectName');
        p.textContent = name;
        container.appendChild(p);
        // create and display timer connected to this project
        const stopwatchSection = createStopWatchSection(name);
        container.appendChild(stopwatchSection);

        mainTimeHandler()
    })
}

// this function added the new project name to the array and displays it immediately 
function getProjectName(){
    const parsedData = checkForArray();
    const projectNames = parsedData.projects.map(project => project.name)
    const container = document.getElementById("output");
    const p = document.createElement("p");
    const name = projectNames[projectNames.length - 1];
    p.textContent = name;
    container.appendChild(p);
    const stopwatchSection = createStopWatchSection(name);
    container.appendChild(stopwatchSection);
    mainTimeHandler()
}

// add project Names to AllData
function addDataToProject() {
    const projectName = document.getElementById("projectName").value;  
    
    let parsedData = checkForArray();

    const newProject = {
        name: projectName,
        startTime: null,
        endTime: null,
        times: null,
        total: null,
        goalColor: null,
        progressColor: null
    }
    parsedData.projects.push(newProject);
    const updatedDataString = JSON.stringify(parsedData);
    localStorage.setItem("allData", updatedDataString)
    allData = localStorage.getItem("allData");
    getProjectName()
    
}


window.load = getProjectNames();
// Get the button element by its ID
const addProjectButton = document.getElementById("addProjectButton");
// Add an event listener for the click event
addProjectButton.addEventListener("click", () => {
    addDataToProject();
    document.getElementById('projectName').value = "";
    document.getElementById('goalTime').value = "";
    // Reset the select element to its default option
    document.querySelector('.choose_color').selectedIndex = 0;
    document.querySelector(".formContainer").style.display = "none";

});


// To add data to storage
function addDataToStorage() {
    // initalize the key to our hash map
    localStorage.setItem("allData", JSON.stringify({ projects: [] }))

    // get new project name from user
    const projectName = document.getElementById("projectName").value;  

    // Retrieve the existing data or initialize it as an empty array
    const parsedData = checkForArray();
    console.log(parsedData);
    const newProject = {
        name: projectName,
        startTime: null,
        endTime: null,
        times: null,
        total: null,
        goalColor: null,
        progressColor: null
    }
    parsedData.projects.push(newProject);
    const updatedDataString = JSON.stringify(parsedData);
    localStorage.setItem("allData", updatedDataString)
    // displayProjectNames();
    
}

function deleteData() {

}

const add = document.getElementById('add');
const formContainer = document.querySelector(".formContainer");
add.addEventListener("click", function (){
    if (formContainer.style.display === "block") {
        formContainer.style.display = "none"; // Hide the form
    } else {
        formContainer.style.display = "block"; // Show the form
        // If you want to focus on an input field within the form
        const textInput = formContainer.querySelector("input");
        if (textInput) {
        textInput.focus();
        }
        
    }
});


// Update the project title on the form page
// set fields from elements in html
var inputField = document.getElementById("projectName");
var outputText = document.getElementById("projectTitle")

// check for changes
inputField.addEventListener("input", function() {
    // Get the value from the input field
    var inputValue = inputField.value;

    // Set the value of the h1 element to the input value
    outputText.textContent = inputValue;
});

// Update the color of the progress bar

let mySelect = document.querySelector('.choose_color'); // You can change the value of 'condition' to switch between cases

// create bar parts in js
let goalBox = document.getElementById("goalBox");
let progressBox = document.getElementById("progressBox");

// add listener to check if the select color has been adjusted        
mySelect.addEventListener("change",function(){
    // set swiitch condition
    let condition = mySelect.value;
    
    switch (condition) {
        case "blue":
        progressBox.style.backgroundColor = "#1d6a9e";
        goalBox.style.backgroundColor = "#57a0d1";
        console.log("blue");
        break;
        case "red":
            progressBox.style.backgroundColor = "#F24F31";
            goalBox.style.backgroundColor = "#FCC3B9";
            console.log("REd");
            break;
        case "orange":
            progressBox.style.backgroundColor = "#F08837";
            goalBox.style.backgroundColor = "#EABF9D";
            break;
        case "yellow":
            progressBox.style.backgroundColor = "#F7F571";
            goalBox.style.backgroundColor = "#EAEABA";
            break;
                                
        case "green":
            progressBox.style.backgroundColor = "#479C30";
            goalBox.style.backgroundColor = "#A1CF94";
            break;
        case "purple":
            progressBox.style.backgroundColor = "#4428A5";
            goalBox.style.backgroundColor = "#988CC2";
            break;
        case "black":
            progressBox.style.backgroundColor = "#000000";
            goalBox.style.backgroundColor = "#818181"; // Default color if condition doesn't match any case  
            break;                  
        default:
            progressBox.style.backgroundColor = "#000000";
            goalBox.style.backgroundColor = "#818181"; // Default color if condition doesn't match any case
    }
});


