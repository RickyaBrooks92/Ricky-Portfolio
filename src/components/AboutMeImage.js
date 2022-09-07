import React from 'react';
import Ricky from '../ImageFolder/CroppedMe.jpeg';

const AboutMeImage = () => {
  return (
    <img
      src={Ricky}
      alt='Ricky Brooks'
      style={{
        borderRadius: '50%',
        height: '10rem',
        width: '10rem',
        border: '1px solid black',
      }}
    />
  );
};

export default AboutMeImage;
