(function (window){
    'use strict';
    
    function Controller(){
        this.$clickMe = $$('#popup-text');
        
    }
    Controller.prototype.buttonClick = function(){
        this.$clickMe.innerHTML =  "I've been clicked";  
    }
        