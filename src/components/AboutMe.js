import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import AboutMeImage from './AboutMeImage';
const AboutMe = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        pt: 20,
      }}
    >
      <Card
        sx={{
          width: '45%',
          display: 'flex',
          flexWrap: 'row wrap',
          justifyContent: 'center',
          border: 1,
          backgroundColor: '#5f9ea0',
          maxHeight: '20rem',
        }}
      >
        <CardContent sx={{ display: 'flex', flexWrap: 'row wrap' }}>
          <div>
            <Typography
              gutterBottom
              variant='h5'
              component='h2'
              sx={{ display: 'flex', flexWrap: 'row wrap' }}
            >
              About Me
            </Typography>
            <Typography component='div' sx={{ display: 'flex' }}>
              Hello! I'm kind of stumped on what to write because there really
              isn't much context here so I will try: My name is Ricky Brooks, My
              favorite color is blue, I enjoy coding, I play pokemon go in my
              free time with friends, I've broken a total of two bones in my
              life (both happened at the same time), and I'm really excited
              about this job opportunity with Publicis RE:Sources! But in all
              seriousness, I am looking for a job as an engineer. I'm incredibly
              passionate about it and I enjoy working side by side with people.
              I worked as a gymnastics coach prior so I know how to have fun and
              be productive and I've been able to transition that skill to my
              development abilities. I'm excited to hear back about this
              position and if you need anything from my end please feel free to
              let me know! Thanks! Ricky Brooks
            </Typography>
          </div>
          <AboutMeImage />
        </CardContent>
      </Card>
    </Box>
  );
};

export default AboutMe;
