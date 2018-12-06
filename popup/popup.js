(function () {
    'use strict' ;

    var backgroundpage = chrome.extension.getBackgroundPage();


    document.addEventListener("DOMContentLoaded", function(event) {
        //place all your code here
        document.querySelector("button").addEventListener('click' , function () {
            backgroundpage.handleButtonClick();
        });

    });

    }());








// (function () {
//     'use strict' ;
//
//     var backgroundpage = chrome.extension.getBackgroundPage();
//
//     document.querySelector("button").addEventListener('click' , function () {
//         backgroundpage.handleButtonClick();
//     });
//
//
// }());

