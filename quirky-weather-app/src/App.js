import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import ThemeSwitcher from './components/ThemeSwitcher';
import CitySelector from './components/CitySelector';
import WeatherDisplay from './components/WeatherDisplay';
import QuirkyComparison from './components/QuirkyComparison';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import './styles.css';

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [selectedCities, setSelectedCities] = useState({
    Rwanda: '',
    Sweden: ''
  });
  const { theme, toggleTheme } = useContext(ThemeContext);

  const cities = {
    Rwanda: ['Kigali', 'Butare'],
    Sweden: ['Stockholm', 'Gothenburg']
  };

  const fetchWeather = async (country, city) => {
    try {
      const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeatherData((prevData) => ({
        ...prevData,
        [country]: response.data
      }));
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleCitySelect = (country, city) => {
    setSelectedCities((prevCities) => ({
      ...prevCities,
      [country]: city
    }));
    fetchWeather(country, city);
  };

  return (
    <div className="app-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)` }}>
      <ThemeSwitcher theme={theme} onSwitch={toggleTheme} />
      <div className="content-container">
        <div className="row selectors">
          <div className="col-md-6">
            <CitySelector country="Rwanda" cities={cities.Rwanda} onCitySelect={handleCitySelect} />
          </div>
          <div className="col-md-6">
            <CitySelector country="Sweden" cities={cities.Sweden} onCitySelect={handleCitySelect} />
          </div>
        </div>

        <div className="row weather-displays mt-4">
          <div className="col-md-6">
            <WeatherDisplay weather={weatherData.Rwanda} />
          </div>
          <div className="col-md-6">
            <WeatherDisplay weather={weatherData.Sweden} />
          </div>
        </div>

        <QuirkyComparison cityAWeather={weatherData.Rwanda} cityBWeather={weatherData.Sweden} />
      </div>
    </div>
  );
};

const ThemedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default ThemedApp;
