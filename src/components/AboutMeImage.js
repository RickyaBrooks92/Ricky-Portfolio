import React from 'react';
import Box from '@mui/material/Box';
import Ricky from '../ImageFolder/ricky.jpeg';

const AboutMeImage = () => {
  return (
    <Box sx={{ pt: 20 }}>
      <img
        src={Ricky}
        alt='Ricky Brooks'
        style={{ borderRadius: '75%', width: '75%', height: 'auto' }}
      />
    </Box>
  );
};

export default AboutMeImage;
