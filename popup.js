function browsingdata() {
    chrome.browsingData.remove({
      "originTypes": {
        "protectedWeb": false, 
        "unprotectedWeb":true,
        "extension":false    
      }
    }, 
    {
      "appcache": true, 
      "cache": false, 
      "cookies": false,
      "downloads": true,
      "fileSystems": true, 
      "formData": false, 
      "history": true, 
      "indexedDB": true, 
      "localStorage": true, 
      "pluginData": true, 
      "passwords": false, 
      "webSQL": true 
    }); 
}
let clearHistory = document.getElementById('clear_history');
clearHistory.onclick = browsingdata;