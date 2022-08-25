import React from 'react';
import Box from '@mui/material/Box';
import Ricky from '../ImageFolder/CroppedMe.jpeg';

const AboutMeImage = () => {
  return (
    <Box sx={{ pt: 20 }}>
      <img
        src={Ricky}
        alt='Ricky Brooks'
        style={{ borderRadius: '20%', height: '20rem', weight: '20rem' }}
      />
    </Box>
  );
};

export default AboutMeImage;
