# The React Quiz

> A fun and interactive quiz application built with React to test your knowledge of the framework.

[![Live Deployment](https://img.shields.io/badge/Live%20Demo-brightgreen)](https://s096-react-quiz.netlify.app/)

---

### About the Project

This project is a single-page application that presents users with a series of multiple-choice questions about React. It's a great way to challenge your React mastery. The app includes a **loading state**, a **timer**, a **progress bar**, and a final score screen that displays your results and high score.

The application is built using modern React principles, with a focus on component-based architecture and state management using the `useReducer` hook.

### Features

- **Interactive Quiz:** Answer multiple-choice questions on React.
- **Progress Tracking:** A progress bar and question counter show you how far you are in the quiz.
- **Scoring System:** Your score is calculated based on the correctness of your answers.
- **High Score:** Your highest score is stored and displayed on the final screen.
- **Timer:** A countdown timer adds a challenge to the quiz.
- **Responsive Design:** The layout adapts to different screen sizes, making it usable on both desktop and mobile devices.

---

### Getting Started

To run this project locally, you'll need Node.js and npm installed.

#### Prerequisites

- Node.js (LTS version recommended)
- npm (or yarn)

#### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/seif-a096/react-quiz)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    ```
4.  **Run the application:**
    ```bash
    npm start
    ```
    The app will open in your default browser at `http://localhost:3000`.

---

### File Structure

A quick overview of the key components and files:
.
├── public/
│ └── logo512.png
├── src/
│ ├── components/
│ │ ├── Error.js
│ │ ├── FinishScreen.js
│ │ ├── Header.js
│ │ ├── Loader.js
│ │ ├── Main.js
│ │ ├── Progress.js
│ │ ├── Question.js
│ │ ├── StartScreen.js
│ │ └── Timer.js
│ ├── App.js
│ ├── index.css
│ └── index.js
├── package.json
└── README.md
