// src/components/CitySelector.js
import React from 'react';

const CitySelector = ({ country, cities, onCitySelect }) => {
  return (
    <div>
      <h2>Select a city in {country}</h2>
      <select onChange={(e) => onCitySelect(country, e.target.value)}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
