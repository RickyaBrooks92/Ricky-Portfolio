import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const Intro = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 20 }}>
      <Card
        sx={{
          width: '25%',
          display: 'flex',
          justifyContent: 'center',
          border: 1,
          backgroundColor: 'blueviolet',
        }}
      >
        <CardContent>
          <Typography sx={{ pb: 1, fontSize: 18, color: 'white' }}>
            Hi, my name is
          </Typography>
          <Typography sx={{ fontSize: 26 }}>
            Ricky Brooks.
            <br />
            <Typography
              sx={{ fontSize: 26 }}
              color='textSecondary'
              component='p'
            >
              I build things for the web
            </Typography>
          </Typography>
          <Typography component='p'>
            Hello! I am looking for a job as an engineer. I'm incredibly
            passionate about it and I enjoy working side by side with people. I
            worked as a gymnastics coach prior so I know how to have fun and be
            productive and I've been able to transition that skill to my
            development abilities.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Intro;
