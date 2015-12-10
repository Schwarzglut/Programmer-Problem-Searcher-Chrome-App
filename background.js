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

/*$( document ).ready(function() {
    $("#jQ-button-test").click(function(){
        alert("ALERT TEST");
        $.ajax({url: "http://www.google.com", 
                success: function(result){
            $("#google-search").src(result);
        },
               error: function(XMLHttpRequest, textStatus, errorThrown){
                   alert("ERROR: " + textStatus + " (" + errorThrown + ")");
               }});
    });
});*/

_createObjectURL = function(blob){
    var objURL = URL.createObjectURL(blob);
    this.objectURLs = this.objectURLs || [];
    this.objectURLs.push(objURL);
    return objURL;
}
_clearObjectURL = function(){
    if(this.objectURLs){
        this.objectURLs.forEach(function(objURL){
           URL.revokeObjectURL(objURL); 
        });
        this.objectURLs = null;
    }
}
_requestRemoteImageAndAppend = function(imageUrl, element) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', imageUrl);
  xhr.responseType = 'blob';
  xhr.onload = function() {
    var img = document.createElement('img');
    img.setAttribute('data-src', imageUrl);
    img.className = 'icon';
    var objURL = this._createObjectURL(xhr.response);
    img.setAttribute('src', objURL);
    element.appendChild(img);
  }.bind(this);
  xhr.send();
};
_parseForImageURLs = function () {
  // remove old blobs to avoid memory leak:
  this._clearObjectURL();
  var links = this.document.querySelectorAll('a[data-src]:not(.thumbnail)');
  var re = /\.(png|jpg|jpeg|svg|gif)$/;
  for (var i = 0; i<links.length; i++) {
    var url = links[i].getAttribute('data-src');
    if (re.test(url)) {
      links[i].classList.add('thumbnail');
      this._requestRemoteImageAndAppend(url, links[i]);
    }
  }
};

$(document).ready(function(){
    $("#jQ-button-test").click(function(){
        alert("ALeart");
        _parseForImageURLs;
    });
});