import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Ricky from '../ImageFolder/ricky.jpeg';
const AboutMe = () => {
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
          <Typography gutterBottom variant='h5' component='h2'>
            About Me
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='div'
            sx={{ display: 'flex' }}
          >
            Hello! I'm kind of stumped on what to write because there really
            isn't much context here so I will try: My name is Ricky Brooks, My
            favorite color is blue, I enjoy coding, I play pokemon go in my free
            time with friends, I've broken a total of two bones in my life (both
            happened at the same time), and I'm really excited about this job
            opportunity with Publicis RE:Sources! But in all seriousness, I am
            looking for a job as an engineer. I'm incredibly passionate about it
            and I enjoy working side by side with people. I worked as a
            gymnastics coach prior so I know how to have fun and be productive
            and I've been able to transition that skill to my development
            abilities. I'm excited to hear back about this position and if you
            need anything from my end please feel free to let me know! Thanks!
            Ricky Brooks
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AboutMe;
