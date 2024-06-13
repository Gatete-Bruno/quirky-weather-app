// src/components/WeatherDisplay.js
import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return <div>Please select a city to see the weather.</div>;
  }

  return (
    <div className="weather-display">
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Weather: {weather.weather[0].description}</p>
      <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="Weather icon" />
    </div>
  );
};

export default WeatherDisplay;
