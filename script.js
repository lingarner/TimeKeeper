
function saveToJson() {
    // Get the input data
    const projectName = document.getElementById("projectName").value;

    // Create a JSON object
    const jsonData = {
        data: projectName
    };

    // Convert the JSON object to a JSON string
    const jsonString = JSON.stringify(jsonData, null, 2);

    // Display the JSON string
    document.getElementById("output").textContent = jsonString;
    console.log("Project name", jsonString); //test
    console.log("Text Value:", projectName);

};

// Get the button element by its ID
const addProjectButton = document.getElementById("addProjectButton");

// Add an event listener for the click event
addProjectButton.addEventListener("click", addDataToStorage);

// To add data to storage
function addDataToStorage() {
    const projectName = document.getElementById("projectName").value;
  
    // Create a JSON object
    const jsonData = {
      data: projectName
    };
    const jsonString = JSON.stringify(jsonData, null, 2);
  
    // Display the JSON string
    document.getElementById("output").textContent = JSON.stringify(jsonData, null, 2);
  
    // Store the JSON object directly in sync storage
    chrome.storage.sync.set({ name: jsonString }, function() {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        console.log("Data saved successfully.");
      }
    });
  }