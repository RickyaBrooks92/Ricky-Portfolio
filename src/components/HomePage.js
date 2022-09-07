import React from 'react';
import ResponsiveAppBar from './NavBar';
import Intro from './Intro';
import AboutMe from './AboutMe';

import FooterNav from './FooterNav';
function HomePage() {
  return (
    <div style={{ backgroundColor: '#0c95e4' }}>
      <div>
        <ResponsiveAppBar />
      </div>
      <div>
        <Intro />
      </div>
      <div
        id='contactUs'
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'flex-start',
          alignItems: 'center',
          alignContent: 'left',
        }}
      >
        <AboutMe />
      </div>
      <footer>
        <FooterNav />
      </footer>
    </div>
  );
}

export default HomePage;
