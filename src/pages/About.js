import React from "react";
import AboutSection from "../containers/AboutSection";
import { HeroData } from "../containers/AboutSection/data";

const About = () => {
  return (
    <>
      <div>
        <AboutSection {...HeroData} />
      </div>
    </>
  );
};

export default About;
