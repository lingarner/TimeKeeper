// Project Names are keys in local storage for our projects. Make a list to keep track of them and pull them when the page loads.
project = []
window.onload = function pullProjects(){
    // Check if key with all data exists. If it doesn't, create it. 
    try{
    const allData = localStorage.getItem("allData");
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
    } catch(errors){
        console.log(errors)
    }

    // const entries = Object.entries(localStorage.getItem("allData"))
    // console.log(entries)
}

// Get the button element by its ID
const addProjectButton = document.getElementById("addProjectButton");

// Add an event listener for the click event
addProjectButton.addEventListener("click", addDataToStorage);
// To add data to storage
// function addDataToStorage() {
//     const projectName = document.getElementById("projectName").value;  
//     // Display the JSON string
//     document.getElementById("output").textContent = projectName;

//     // Retrieve the existing data or initialize it as an empty array
//     const allData = localStorage.getItem("allData");
//     const parsedData = allData ? JSON.parse(allData) : {projects: []};
//     console.log(parsedData);
//     const newProject = {
//         [projectName]: projectName
//     }
//     parsedData.projects.push(newProject);
//     const updatedDataString = JSON.stringify(parsedData);
//     localStorage.setItem("allData", updatedDataString)
//     console.log(updatedDataString)
// }
function addDataToStorage() {
    const projectName = document.getElementById("projectName").value;  
    // Display the JSON string
    document.getElementById("output").textContent = projectName;
  
    // Retrieve the existing data or initialize it as an empty object
    const allData = localStorage.getItem("allData");
    const parsedData = allData ? JSON.parse(allData) : { projects: {} };
  
    // Create a new project object
    const newProject = {
      name: projectName
    };
  
    // Add the new project object to the "projects" object using the project name as the key
    parsedData.projects[projectName] = newProject;
  
    const updatedDataString = JSON.stringify(parsedData);
  
    // Set the updated data back to "allData" key
    localStorage.setItem("allData", updatedDataString);
  
    console.log(updatedDataString);
  }
// function addDataToStorage() {
//     const projectName = document.getElementById("projectName").value;
    
//     // Display the JSON string
//     document.getElementById("output").textContent = projectName;
  
//     // Retrieve the existing data or initialize it as an empty object
//     const allData = localStorage.getItem("allData");
//     const parsedData = allData ? JSON.parse(allData) : { projects: {} };
  
//     // Create a new project object
//     const newProject = {
//       name: projectName
//     };
  
//     // Add the new project object to the "projects" object
//     parsedData.projects[projectName] = newProject;
  
//     const updatedDataString = JSON.stringify(parsedData);
  
//     // Set the updated data back to "allData" key
//     localStorage.setItem("allData", updatedDataString);
  
//     console.log(updatedDataString); // Log the updated data string
//   }

    // Store the JSON object directly in sync storage
    // localStorage.setItem( projectName, projectName )
    // projectNames.push(projectName)
    // console.log(projectNames)
    // , function() {
    //   if (chrome.runtime.lastError) {
    //     console.error(chrome.runtime.lastError);
    //   } else {
    //     console.log("Data saved successfully.");
    //   }
    // });
  