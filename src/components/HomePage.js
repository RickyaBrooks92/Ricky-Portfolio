import React from 'react';
import ResponsiveAppBar from './NavBar';
import Bio from './Bio';
function HomePage() {
  return (
    <div>
      <div>
        <ResponsiveAppBar />
      </div>
      <div>
        <Bio />
      </div>
    </div>
  );
}

export default HomePage;
