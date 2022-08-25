import React from 'react';
import ResponsiveAppBar from './NavBar';
import Intro from './Intro';
import AboutMe from './AboutMe';
import AboutMeImage from './AboutMeImage';
function HomePage() {
  return (
    <div style={{ backgroundColor: 'blueviolet' }}>
      <div>
        <ResponsiveAppBar />
      </div>
      <div>
        <Intro />
      </div>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'flex-start',
          alignItems: 'center',
          alignContent: 'left',
        }}
      >
        <AboutMe />
        <AboutMeImage />
      </div>
    </div>
  );
}

export default HomePage;

<style></style>;
