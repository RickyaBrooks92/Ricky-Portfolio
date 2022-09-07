import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const WeatherProject = () => {
  return (
    <Card
      sx={{
        margin: '4rem',
        display: 'flex',
        border: 2,
        wordWrap: 'break-word',
        backgroundColor: '#5f9ea0',
      }}
    >
      <Typography
        component='div'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          wordWrap: 'break-word',
          p: 2,
        }}
      >
        <Typography component='p'>Rickys StackAThon Projects </Typography>
        <Typography component='p'>Time: 2 days</Typography>
        <Typography component='p'>
          Stack: React, React Context, Express, Node.js, Material UI, Javascript
        </Typography>
      </Typography>
    </Card>
  );
};

export default WeatherProject;
