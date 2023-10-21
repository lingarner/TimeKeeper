let startTime = "";
let endTime = "";
let checkTime = "";
let times = []



function main() {
    // everytime clock-in is clicked set the startTime Variable
    let start = document.getElementById("start");
    start.addEventListener("click", () => {
        startTime = noteTime();
        start.disabled = true;
        console.log(startTime)
    });
    
    // get time everytime the extension is opened
    document.addEventListener("DOMContentLoaded", () => {
        checkTime = noteTime(); // Set the checkTime variable
    });
    
    // Set endTime when the document is clicked (for testing)
    let stop = document.getElementById("stop");
    stop.addEventListener("click", () => {
        endTime = noteTime();
        times.push([startTime, endTime])
        console.log(endTime)
        runCheckedTime(startTime, endTime);
    });
}

// set any variable to the current time
function noteTime() {
    const fullTime = new Date();
    const currentTime = fullTime.toLocaleTimeString('it-IT');
    return currentTime; // Return the current time
}

function runCheckedTime(startTime, endTime) {
    console.log(startTime + " " + endTime)

    // split the times into lists to use each hour, minute and second
    let splitted1 = startTime.split(":");
    let splitted2 = endTime.split(":");

    console.log(splitted1)
    console.log(splitted2)
  
    // Convert hours and minutes to integers
    let startHour = parseInt(splitted1[0]);
    let startMin = parseInt(splitted1[1]);
    let startSec = parseInt(splitted1[2]);


    let endHour = parseInt(splitted2[0]);
    let endMin = parseInt(splitted2[1]);
    let endSec = parseInt(splitted2[2]);
  
    let hours = Math.abs(endHour - startHour);
    if(hours < 10){
        hours = '0' + hours;
    } else if (hours > 12){ //account for military time
        hours -= 12;
    }

    let minutes = Math.abs(endMin - startMin); //no negative numbers
    if(minutes < 10){
        minutes = '0' + minutes;
    }

    let seconds = Math.abs(endSec - startSec);
    if(seconds < 0){
        seconds = '0' + seconds;
    }
    console.log(hours + ":" + minutes + ":" + seconds )

}

main()
