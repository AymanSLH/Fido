(function () {
    'use strict' ;

    // var backgroundpage = chrome.extension.getBackgroundPage();
    
    document.addEventListener("DOMContentLoaded", function(event) {
        //place all your code here
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
            var url = tabs[0].url;
            document.getElementById("theURL").innerText = url  ;
        });
    });
}());




//
//
//
// (function () {
//     'use strict' ;
//
//     var backgroundpage = chrome.extension.getBackgroundPage();
//
//     document.addEventListener("DOMContentLoaded", function(event) {
//         //place all your code here
//         document.querySelector("button").addEventListener('click' , function () {
//             backgroundpage.handleButtonClick();
//
//         });
//
//     });
//
// }());
//
