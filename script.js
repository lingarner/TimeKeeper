window.onload = function pullProjects(){
    // Check if key with all data exists. If it doesn't, create it. 
    const allData = localStorage.getItem("allData");
    try{
    if(allData===null){
        // Create a projects list that will contain objects. Key of those objects are project names that the user adds as their project.
        const projects = {
            projects: []
          };
          // Convert the object to a JSON string
          const jsonString = JSON.stringify(projects);
          // Set the JSON string as the value of the "allData" key in local storage
          localStorage.setItem("allData", jsonString);
    
        }
        console.log(allData);
        displayProjectNames(allData);
            } catch(errors){
                console.log(errors)
            }
}


// function displayProjectNames(data){
//     const inputElement = document.getElementById("goalTime");
//     // const addProjectButton = document.getElementById("addProjectButton");
//     // Add an event listener to the button to get the input value
//     // addProjectButton.addEventListener("click", function() {
//     // const inputValue = 
    
//     // });
//     const parsedData = data ? JSON.parse(data): {projects:[]};
//     const projectNames = parsedData.projects.map(project => project.name)
//     const project = parsedData.projects
//     const container = document.getElementById("output");
//     const div = document.createElement("div");
//     div.setAttribute('class', 'projects')
//     project.forEach(project => {
//         const p = document.createElement("p");
//         p.textContent = project.name;
//         const time = document.createElement('time');
//         time.setAttribute('class', 'time')
//         // localStorage.setItem('goalTime', inputElement.value)
//         time.textContent = project.goalTime;
//         const startButton = document.createElement("button");
//         startButton.setAttribute('class','start main-btn');
//         startButton.textContent = "Clock In"
//         const stopButton = document.createElement("button")
//         stopButton.textContent = "Clock Out"
//         stopButton.setAttribute('class','stop main-btn')
        
//         div.appendChild(p);
//         div.appendChild(time);
//         div.appendChild(startButton);
//         div.appendChild(stopButton);
//         container.appendChild(div);
//         return div;
//     })

// console.log(projectNames[0])
// }

function createProjectDiv(project) {
    // Create a new div element with the class "projects"
    const div = document.createElement("div");
    div.setAttribute('class', 'projects');
  
    // Create a <p> tag and set its text content to the project name
    const p = document.createElement("p");
    p.textContent = project.name;
  
    // Create a <time> tag, set its class, and text content to the project goalTime
    const time = document.createElement('time');
    time.setAttribute('class', 'time');
    time.textContent = project.goalTime;
  
    // Create a "Clock In" button
    const startButton = document.createElement("button");
    startButton.setAttribute('class', 'start main-btn');
    startButton.textContent = "Clock In";
  
    // Create a "Clock Out" button
    const stopButton = document.createElement("button");
    stopButton.setAttribute('class', 'stop main-btn');
    stopButton.textContent = "Clock Out";
  
    // Append the elements to the div
    div.appendChild(p);
    div.appendChild(time);
    div.appendChild(startButton);
    div.appendChild(stopButton);
  
    return div;
  }
  
  function displayProjectNames(data) {
    const parsedData = data ? JSON.parse(data) : { projects: [] };
    const projectContainer = document.getElementById("output");
  
    parsedData.projects.forEach(project => {
      const projectDiv = createProjectDiv(project);
      projectContainer.appendChild(projectDiv);
    });
  
    // Example of how to add a new project to the container:
    // const newProject = { name: "New Project", goalTime: "00:00:00" };
    // const newProjectDiv = createProjectDiv(newProject);
    // projectContainer.appendChild(newProjectDiv);
  }

function clearProjectNames(){
    const container = document.getElementById('output');
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}

// Get the button element by its ID
const addProjectButton = document.getElementById("addProjectButton");

// Add an event listener for the click event
addProjectButton.addEventListener("click", addDataToStorage);
// To add data to storage
function addDataToStorage() {
    const projectName = document.getElementById("projectName").value;  

    // Retrieve the existing data or initialize it as an empty array
    const inputElement = document.getElementById("goalTime");
    let allData = localStorage.getItem("allData");
    const parsedData = allData ? JSON.parse(allData) : {projects: []};
    const project = parsedData.projects
    console.log(parsedData);
    const newProject = {
            "name": projectName,
            "goalColor": "",
            "progressColor": "",
            "goalTime": inputElement.value,
            "startTime": null,
            "endtime": null,
            "times": []
    
    }
    parsedData.projects.push(newProject);
    const updatedDataString = JSON.stringify(parsedData);
    localStorage.setItem("allData", updatedDataString)
    allData = localStorage.getItem("allData");
    console.log(allData)
    displayProjectNames(allData);
    
}

const addProject = document.querySelector("#add");
const formContainer = document.querySelector(".formContainer");
addProject.addEventListener("click", function (){
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
})
    // create and object
//     let inputValueObj = {
//         "name": inputField.value,
//         "goalColor": goalColor,
//         "progressColor": progressColor,
//         "goalTime": goal,
//         "startTime": 0.00,
//         "endtime": null,
//         "times": []
//     }
// })