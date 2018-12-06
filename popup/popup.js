(function () {
    'use strict' ;


    document.addEventListener("DOMContentLoaded", function(event) {
        //i used the above function because in first load , DOM elements are empy
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
            var url = tabs[0].url;
            // the two above lines to get the url of current page
            document.getElementById("theURL").innerText = url  ;
        });
    });
}());