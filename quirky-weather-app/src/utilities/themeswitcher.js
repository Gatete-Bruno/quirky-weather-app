import React from 'react';
import { Grid, Card, CardActionArea, CardMedia } from '@mui/material';
import defaultImage from '../assets/colorkit.png';
import natureImage from '../assets/rwanda-Kittl.svg';
import cityImage from '../assets/stocklom.svg';
import ErrorBox from '../components/Reusable/ErrorBox';

const ThemeSwitcher = ({ setTheme }) => {
    const themes = [
        {
            value: 'default',
            name: 'Default',
            image: defaultImage,
        },
        {
            value: 'nature',
            name: 'Nature',
            image: natureImage,
        },
        {
            value: 'city',
            name: 'City',
            image: cityImage,
        },
    ];

    const noThemesProvided = themes.length === 0;

    let content = (
        <div style={{ width: '100%' }}>
            <ErrorBox type="error" />
        </div>
    );

    if (!noThemesProvided) {
        content = (
            <Grid
                container
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                gap="1rem"
            >
                {themes.map((theme) => (
                    <Card
                        key={theme.value}
                        sx={{
                            margin: '0 1rem',
                            padding: '0.5rem',
                            background: 'linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%)',
                            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                            borderRadius: '8px',
                            transition: 'box-shadow 0.3s ease-in-out',
                            '&:hover': {
                                boxShadow: '0 0 15px 5px rgba(128, 128, 128, 0.5)',
                            },
                        }}
                    >
                        <CardActionArea onClick={() => setTheme(theme.value)}>
                            <CardMedia component="img" height="140" image={theme.image} alt={`${theme.name} Theme`} />
                        </CardActionArea>
                    </Card>
                ))}
            </Grid>
        );
    }

    return content;
};

export default ThemeSwitcher;
