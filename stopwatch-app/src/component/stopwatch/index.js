// src/components/Stopwatch.js

import React, { useState, useEffect } from "react";
import "./stopwatch.scss";
import { ReactComponent as Logo } from "../../logo.svg"; // Import SVG as a React component

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [finalTime, setFinalTime] = useState(null);
  const [laps, setLaps] = useState([]);
  /**** 
 Counter use effect for setting time

 ****/
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  /**** 
Function for start and pause button 
 ****/

  const handleStartPause = () => {
    setIsActive(!isActive);
    setFinalTime(null); // Clear final time when starting/resuming
  };
  /**** 
Function for stop button 
 ****/
  const handleStop = () => {
    setIsActive(false);
    setFinalTime(time);
    handleLap(); // Capture the final time when stopping
    setTimeout(() => {
      setTime(0);
      setFinalTime(0);
    }, 10); // Reset time to zero after a brief delay
  };
  /**** 
Function for reset button 
 ****/
  const handleReset = () => {
    setTime(0);
    setIsActive(false);
    setFinalTime(null);
    setLaps([]);
  };
  /**** 
Function for Lap lists 
 ****/
  const handleLap = () => {
    setLaps([...laps, time]);
  };

  /**** 
Function for formatting counter time 
 ****/

  const formatTime = (time) => {
    const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    return (
      <div className="counter">
        <div className="timer_counter">{minutes}</div>:
        <div className="timer_counter">{seconds} </div>:
        <div className="timer_counter">{milliseconds}</div>
      </div>
    );
  };
  /**** 
Function for formatting laps time 
 ****/
  const formatTimeLaps = (time) => {
    const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);

    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="stopwatch">
      <div className="icon_wrapper">
        <div className="App-logo">
          <Logo className="App-logo1" />
        </div>
      </div>
      <div className="stopwatch_wrapper">
        <div className="counter_wrapper">
          {" "}
          <div className="stopwatch__time">
            {finalTime !== null ? formatTime(finalTime) : formatTime(time)}
          </div>
          <div className="stopwatch__buttons">
            <button onClick={handleStartPause} className="stopwatch__button">
              {isActive ? "Pause" : "Start"}
            </button>
            <button onClick={handleStop} className="stopwatch__button">
              Stop
            </button>
            <button onClick={handleReset} className="stopwatch__button">
              Reset
            </button>
          </div>
        </div>
        <div className="laps_wrapper">
          <div className="laps">
            <h2>LAPS</h2>
            {laps.length === 0 ? (
              <p>No laps recorded</p>
            ) : (
              <ul>
                {laps.map((lap, index) => (
                  <li key={index} className="laps_div">
                    Lap {index + 1}: {formatTimeLaps(lap)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
