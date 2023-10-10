import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiWind } from "react-icons/bi";
import { FaTemperatureHalf } from "react-icons/fa6";
import humidity from '../Images/Humidity.svg'

function getCurrentDateTime() {
  const now = new Date();

  const month = now.getMonth() + 1;
  const day = now.getDate();
  const year = now.getFullYear();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours < 10 ? `0${hours}` : `${hours}`;
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const currentDate = `${month}-${day}-${year}`;
  const currentTime = `${hours}:${minutes} ${ampm}`;
  return { date: currentDate, time: currentTime };
}

const { date, time } = getCurrentDateTime();

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [icon, setIcon] = useState("");
  const [wind, setWind] = useState("");
  const [isError, setIsError] = useState("");
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=kanchrapara&units=metric&appid=526ee7554b7e8a2bbff7441a0276a8ed`
        );
        setWeatherData(response.data.main);
        setIcon(response.data.weather[0]);
        setWind(response.data.wind)
      } catch (error) {
        setIsError(error);
      }
    };
    fetchApi();
  }, []);
  const weatherIcon = `https://openweathermap.org/img/wn/${icon.icon}@2x.png`;
  return (
    <>
      <div className="weather">
        <div className="time-section">
          <h1>{date}</h1>
          <h1>{time}</h1>
        </div>
        {isError ? (
            <div className="weather-section">
          <p className="fathing-error">Failed to fetch weather data</p>
          </div>
        ) : (
          <div className="weather-section">
            <div className="current-weather">
             {icon.icon?<img src={weatherIcon} alt="rain" />:'<p>Loading</p>'} 
             {icon.main? <h4>{icon.main}</h4>:"<p>Loading</p>"}
            </div>
            <div className="vl"></div>
            <div className="current-temp">
              <h1>{weatherData.temp}&deg;C</h1>
              <div className="pressure">
                <FaTemperatureHalf className="pressure-icon" />
                <p>{weatherData.pressure} mbar pressure</p>
              </div>
            </div>
            <div className="vl"></div>

            <div className="current-wind">
              <div className="wind-speed">
                <BiWind className="wind" />
                <p>{wind.speed} km/h Wind</p>
              </div>
              <div className="humidity">
               <img src={humidity} alt="humidity" />
              <p>{weatherData.humidity}% Humidity</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
// import React from 'react'

// const Weather = () => {
//   return (
//     <div>Weather</div>
//   )
// }

// export default Weather