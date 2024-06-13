// src/components/QuirkyComparison.js
import React from 'react';

const QuirkyComparison = ({ cityAWeather, cityBWeather }) => {
  if (!cityAWeather || !cityBWeather) {
    return <div>Select two cities to compare their weather.</div>;
  }

  const tempDifference = Math.abs(cityAWeather.main.temp - cityBWeather.main.temp).toFixed(1);

  return (
    <div className="quirky-comparison">
      <h2>Quirky Comparison</h2>
      <p>The temperature difference between {cityAWeather.name} and {cityBWeather.name} is {tempDifference} °C!</p>
    </div>
  );
};

export default QuirkyComparison;
