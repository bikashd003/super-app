import React, { useState, useEffect } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import countdown from "../../assets/countdown.mp3";

const renderTime = ({ remainingTime }) => {
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  return (
    <h1 className="timer">
      {formattedHours}:{formattedMinutes}:{formattedSeconds}
    </h1>
  );
};
const Timer = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [duration, setDuration] = useState(0);
  const [start, setStart] = useState(true);
  const [countOver, setCountOver] = useState(false);

  const hoursIncrease = () => {
    let newValue = parseInt(hours, 10) + 1;
    newValue = newValue < 10 ? `0${newValue}` : newValue.toString();
    setHours(newValue);
  };
  const minutesIncrease = () => {
    let newValue = parseInt(minutes, 10) + 1;
    newValue = newValue < 10 ? `0${newValue}` : newValue.toString();
    setMinutes(newValue);
  };
  const secondsIncrease = () => {
    let newValue = parseInt(seconds, 10) + 1;
    newValue = newValue < 10 ? `0${newValue}` : newValue.toString();
    setSeconds(newValue);
  };
  const hoursDecrease = () => {
    let newValue = parseInt(hours, 10) - 1;
    newValue = newValue < 10 ? `0${newValue}` : newValue.toString();
    setHours(newValue);
  };
  const minutesDecrease = () => {
    let newValue = parseInt(minutes, 10) - 1;
    newValue = newValue < 10 ? `0${newValue}` : newValue.toString();
    setMinutes(newValue);
  };
  const secondsDecrease = () => {
    let newValue = parseInt(seconds, 10) - 1;
    newValue = newValue < 10 ? `0${newValue}` : newValue.toString();
    setSeconds(newValue);
  };
  const handleTimer = () => {
    const numHours = Number(hours);
    const numMinutes = Number(minutes);
    const numSeconds = Number(seconds);
    const totalTime = numHours * 3600 + numMinutes * 60 + numSeconds;
    setDuration(totalTime);
    setStart(false);
    if (!start) {
      setDuration(0);
    }
  };
  useEffect(() => {
    if (countOver) {
      const audioElement = new Audio(countdown);
      audioElement.play();
      setStart(true);
    }
  }, [countOver]);
  return (
    <>
      <div className="timer-section">
        <div className="timer-area">
          <div className="timer-wraper">
            <CountdownCircleTimer
              rotation="counterclockwise"
              isPlaying
              trailColor="rgba(255, 255, 255, 0)"
              duration={duration}
              colors={["#FF6A6A"]}
              onComplete={() => {
                setCountOver(true);
                return[{shouldRepeat: false}]
              }}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>

          <div className="timer-customization">
            <div className="set-timer">
              <div className="hours">
                <p>Hours</p>
                <BiSolidUpArrow onClick={hoursIncrease} />
                <h1>{hours}</h1>
                <BiSolidDownArrow onClick={hoursDecrease} />
              </div>
              <h1 className="timer-colon">:</h1>
              <div className="minutes">
                <p>Minutes</p>
                <BiSolidUpArrow onClick={minutesIncrease} />
                <h1>{minutes}</h1>
                <BiSolidDownArrow onClick={minutesDecrease} />
              </div>
              <h1 className="timer-colon">:</h1>

              <div className="seconds">
                <p>Seconds</p>
                <BiSolidUpArrow onClick={secondsIncrease} />
                <h1>{seconds}</h1>
                <BiSolidDownArrow onClick={secondsDecrease} />
              </div>
            </div>
            <button className="start" onClick={handleTimer}>
              {start ? "start" : "stop"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
