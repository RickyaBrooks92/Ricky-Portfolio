import React from 'react';
import ResponsiveAppBar from './NavBar';
import Intro from './Intro';
import AboutMe from './AboutMe';
import AboutMeImage from './AboutMeImage';
import InputWizard from './InputWizard';
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
        <div>
          <AboutMe />
        </div>
        <div>
          <AboutMeImage />
        </div>
      </div>
      <div>
        <InputWizard />
      </div>
    </div>
  );
}

export default HomePage;
