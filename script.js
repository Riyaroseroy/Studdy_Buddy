// Get references to the HTML elements we need to interact with
const chatWindow = document.getElementById('chat-window');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

// This gets your secret API key from the config.js file
const apiKey = API_KEY; 

// This is the specific URL for the Gemini API model we are using
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

/**
 * Creates a new message element and adds it to the chat window.
 * @param {string} message - The text content of the message.
 * @param {string} sender - The sender of the message ('user' or 'bot').
 */
function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to the latest message
}

/**
 * Sends a prompt to the Gemini API and displays the response.
 * @param {string} prompt - The user's message to send to the AI.
 */
async function getGeminiResponse(prompt) {
    try {
        // Send the request to the API using fetch()
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // The data is formatted as the API expects
                contents: [{ parts: [{ text: prompt }] }],
            }),
        });
        
        // If the server responds with an error, throw an error to be caught below
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        // Extract the AI's text response from the complex data object
        const botMessage = data.candidates[0].content.parts[0].text;
        
        addMessage(botMessage, 'bot');

    } catch (error) {
        // If anything goes wrong, log the error and show a message in the chat
        console.error('Error:', error);
        addMessage('Sorry, I ran into a problem. Please check your API key and connection.', 'bot');
    }
}

// Listen for when the user submits the form (by clicking send or pressing Enter)
messageForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the webpage from reloading
    const userMessage = messageInput.value.trim(); // Get the message from the input box

    if (userMessage) {
        addMessage(userMessage, 'user'); // Display the user's message
        messageInput.value = ''; // Clear the input box
        getGeminiResponse(userMessage); // Send the message to the AI for a response
    }
});

// Display an initial greeting from the bot when the page loads
addMessage("Hello! I'm your Study Buddy. How can I help you today?", 'bot');