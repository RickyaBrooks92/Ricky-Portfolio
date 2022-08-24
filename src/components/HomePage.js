import React from "react";
import ResponsiveAppBar from "./NavBar";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
function HomePage() {
  return (
    <div>
      <div>
        <ResponsiveAppBar />
      </div>
      <div>
        <Intro />
      </div>
      <div>
        <AboutMe />
      </div>
    </div>
  );
}

export default HomePage;
