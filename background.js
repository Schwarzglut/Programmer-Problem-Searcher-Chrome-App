chrome.app.runtime.onLaunched.addListener(function(){
    // Tell your app what to launch and how.
    chrome.app.window.create('window.html', {
        'id': 'Programmer Problem Search App',
        'outerBounds': {
            'width': 1600,
            'height' : 800
        },
    });
});

chrome.runtime.onInstalled.addListener(function(){
    // This is called when app has first been installed or updated.
});

chrome.runtime.onSuspend.addListener(function(){
   // Do some simple clean up tasks. 
});

window.onload = function(){
    var inputText = document.querySelector("#input-text");
    var inputURL = document.querySelector("#google-search");
    
    inputText.addEventListener("keypress",
        function(){
            if(event.keyCode == 13){
                inputURL.src = "https://www." + inputText.value + ".com/";
            }
    });
};