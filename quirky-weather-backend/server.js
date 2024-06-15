const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();  // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

// Fetch weather data from external API
const fetchWeatherData = async (latitude, longitude) => {
    const API_KEY = process.env.OPENWEATHERMAP_API_KEY;  // Use API key from .env file
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    const weatherResponse = await axios.get(weatherUrl);
    const forecastResponse = await axios.get(forecastUrl);

    return [weatherResponse.data, forecastResponse.data];
};

// Define the route to get weather data
app.get('/weather', async (req, res) => {
    const { latitude, longitude } = req.query;

    try {
        const [weatherData, forecastData] = await fetchWeatherData(latitude, longitude);
        res.json({ weatherData, forecastData });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
