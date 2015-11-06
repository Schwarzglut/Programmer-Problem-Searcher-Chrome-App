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
    document.querySelector("#enter-text").addEventListener("click",
        function(){
            var inputText = document.querySelector("#input-text");
            var displayText = document.querySelector("#display-text");
            var inputURL = document.querySelector("#google-search");
            inputURL.src = "https://www." + inputText.value + ".com/";
    });
};

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.stackexchange.com/js/2.0/all.js', true);
xhr.responseType = 'blob';
xhr.onload = function(e){
    var stackExchangeAPI = document.createElement('script');
    stackExchangeAPI.src = window.URL.createObjectURL(this.response);
    document.body.appendChild(stackExchangeAPI);
}
xhr.send();