import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import WeatherProject from './WeatherProject';

const Experience = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        margin: '10rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        wordWrap: 'break-word',
      }}
    >
      <Card
        id='experience'
        sx={{
          width: '25%',
          display: 'flex',
          justifyContent: 'center',
          border: 1,
        }}
      >
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Experience & Projects!
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Short Bio Here About how amazing Ricky is at whatever Ricky Does
            goes here!!
          </Typography>
        </CardContent>
      </Card>
      <WeatherProject />
    </Box>
  );
};

export default Experience;
