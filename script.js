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

function displayProjectNames(data){
    const parsedData = data ? JSON.parse(data): {projects:[]};
    const projectNames = parsedData.projects.map(project => project.name)
    const container = document.getElementById("output");
    projectNames.forEach(name => {
        const p = document.createElement("p");
        p.textContent = name;
        container.appendChild(p);
    })
console.log(projectNames[0])
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
    let allData = localStorage.getItem("allData");
    const parsedData = allData ? JSON.parse(allData) : {projects: []};
    console.log(parsedData);
    const newProject = {
        ["name"]: projectName
    }
    parsedData.projects.push(newProject);
    const updatedDataString = JSON.stringify(parsedData);
    localStorage.setItem("allData", updatedDataString)
    allData = localStorage.getItem("allData");
    clearProjectNames();
    displayProjectNames(allData);
    
}

  