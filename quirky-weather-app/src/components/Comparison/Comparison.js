import React from 'react';
import { Box, Typography } from '@mui/material';
import './Comparison.css'; // Custom CSS for animation

const Comparison = ({ todayWeather, comparisonWeather }) => {
    if (!todayWeather || !comparisonWeather) return null;

    const todayCity = `${todayWeather.city}, ${todayWeather.sys.country}`;
    const comparisonCity = `${comparisonWeather.city}, ${comparisonWeather.sys.country}`;

    return (
        <Box
            className="weather-box comparison-animation"
            sx={{
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundColor: '#f0f0f0',
                background:
                    'linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%',
                borderRadius: '8px',
                boxShadow:
                    'rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                transition: 'box-shadow 0.5s ease-in-out',
                '&:hover': {
                    boxShadow: '0 0 15px 5px rgba(128, 128, 128, 0.5)',
                },
                padding: '8px',
                width: '60%',
                marginTop: '8px',
            }}
        >
            <Typography
                variant="h6"
                component="div"
                sx={{ color: 'rgba(0, 0, 0, 0.87)', marginBottom: '4px', fontFamily: 'Poppins' }}
            >
                Weather Summary
            </Typography>
            <Typography
                variant="body2"
                component="p"
                sx={{ color: 'rgba(0, 0, 0, 0.87)', fontFamily: 'Poppins' }}
            >
                The weather today in {todayCity}: {todayWeather.main.temp}°C compared to {comparisonCity}, where the weather is {comparisonWeather.main.temp}°C.
            </Typography>
        </Box>
    );
};

export default Comparison;
