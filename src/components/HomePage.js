import React, { useEffect } from 'react';
import ResponsiveAppBar from './NavBar';
import Intro from './Intro';
import AboutMe from './AboutMe';
import AboutMeImage from './AboutMeImage';
import FooterNav from './FooterNav';
function HomePage() {
  useEffect(() => {
    document.onkeydown = function (e) {
      console.log(e);
    };
  });

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
      </div>
      <footer>
        <FooterNav />
      </footer>
    </div>
  );
}

export default HomePage;
