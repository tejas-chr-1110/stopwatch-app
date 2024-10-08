# stopwatch-app

Stopwatch Component
Overview
The Stopwatch component is a simple and functional stopwatch built with React. It allows users to start, pause, stop, and reset a timer, as well as record laps. The stopwatch displays time in minutes, seconds, and milliseconds and can show recorded laps in a list.

Features
Start/Pause: Toggle between starting and pausing the stopwatch.
Stop: Stop the stopwatch and capture the final time.
Reset: Reset the stopwatch to zero and clear all laps.
Lap Recording: Record multiple laps with timestamps.
Time Formatting: Display time in a MM:SS:MS format.
Installation
Clone the Repository

bash
Copy code
git clone 'https://github.com/tejas-chr-1110/stopwatch-app.git'
Navigate to the Project Directory

bash
Copy code
cd stopwatch-app
Install Dependencies

Make sure you have Node.js and npm installed. Run the following command to install the required dependencies:

bash
Copy code
npm install
Usage
Import the Component

In your React project, import the Stopwatch component:

javascript
Copy code
import Stopwatch from './path/to/Stopwatch';
Include the Component in Your JSX

Add the Stopwatch component to your JSX code:

javascript
Copy code
function App() {
return (
<div className="App">
<Stopwatch />
</div>
);
}

export default App;
Add Styles

Ensure that you have the stopwatch.scss file in the same directory as the Stopwatch component or update the import path accordingly. You may also need to include the necessary styles in your main stylesheet.

Component Code
The Stopwatch component code can be found in src/components/Stopwatch.js. Here’s a brief overview of its functionality:

State Management: Uses React's useState to manage time, isActive, finalTime, and laps.
Effect Hook: Utilizes useEffect to manage the timer interval based on the isActive state.
Event Handlers:
handleStartPause(): Toggles the stopwatch between active and paused states.
handleStop(): Stops the stopwatch and records the final time.
handleReset(): Resets the stopwatch and clears laps.
handleLap(): Adds the current time to the laps list.
Time Formatting: Functions formatTime() and formatTimeLaps() format the time and laps for display.
Styles
The stopwatch.scss file contains styles for the stopwatch component. Make sure the styles are appropriately included in your project.

Contributing
If you'd like to contribute to the development of this component, please fork the repository and submit a pull request with your changes.

License
This project is licensed under the MIT License.
