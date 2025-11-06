# Studdy_Buddy
# Study Buddy Chatbot 👩🏻‍🏫

A simple, beginner-friendly chatbot built with HTML, CSS, and JavaScript. This project serves as an introduction to front-end development and API integration, themed as a helpful (and slightly strict) study companion.



---

## ✨ Features

* Clean, "notebook paper" themed UI.
* Responsive chat window with message bubbles.
* Chat history with automatic scrolling.
* Connects to the **Google Gemini 1.5 Flash** API for intelligent, real-time responses.
* A pre-defined "strict mentor" personality set via a system prompt.

---

## 🛠️ Technology Used

* **HTML:** For the core structure of the chat window.
* **CSS:** For all styling, including the notebook theme and message bubbles.
* **JavaScript:** For all client-side logic, DOM manipulation, and API calls using `fetch`.

---

## 🚀 Getting Started

To run this project locally, follow these steps.

### Prerequisites

* A modern web browser (Chrome, Firefox, Safari).
* A code editor (like [VS Code](https://code.visualstudio.com/)).
* The **Live Server** extension for VS Code (or a similar tool) is recommended.

### Installation & Setup

1.  **Clone (or Download) the Repository**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/study-buddy.git](https://github.com/YOUR_USERNAME/study-buddy.git)
    ```

2.  **Navigate to the Project**
    ```bash
    cd study-buddy
    ```

3.  **Get Your API Key**
    * This project requires a **Google Gemini API key**.
    * Go to **[Google AI Studio](https://aistudio.google.com/)**.
    * Sign in and select **"Get API key"** > **"Create API key in new project"**.
    * Copy the key.

4.  **Add the API Key to Your Code**
    * Open the `script.js` file.
    * Find the line: `const API_KEY = 'YOUR_API_KEY_HERE';`
    * Replace `'YOUR_API_KEY_HERE'` with the key you just copied.

5.  **Run the Project**
    * Open the `study-buddy` folder in VS Code.
    * Right-click the `index.html` file.
    * Select **"Open with Live Server"**.
    * Your browser will open, and the chatbot will be ready to use.

---

## 🚨 **IMPORTANT SECURITY WARNING** 🚨

**Do not** make this repository public or deploy this code to a live website (like Netlify, Vercel, or GitHub Pages) with your API key inside the `script.js` file.

Your API key is a **secret**. If it's in a public JavaScript file, anyone can steal it and use your free credits or send you a large bill. For a real-world application, the key must be hidden on a secure backend server.

**This project is intended for local learning and testing only.**

---

## 🔮 Future Improvements

* [ ] Add a "Quiz Me" button.
* [ ] Implement voice-to-text and text-to-speech.
* [ ] Allow the user to change the bot's personality (e.g., "Fun," "Strict," "Sarcastic").
