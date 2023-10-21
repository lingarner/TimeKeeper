
// Initialize storage when the extension is installed or updated
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({ myVariable: 'initialValue' });
  });
  
  // Example: Set a value in storage
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'setMyVariable') {
      chrome.storage.local.set({ myVariable: request.value }, function() {
        sendResponse({ message: 'Value saved to storage' });
      });
    } else if (request.action === 'getMyVariable') {
      chrome.storage.local.get(['myVariable'], function(result) {
        sendResponse({ value: result.myVariable });
      });
    }
  });
  