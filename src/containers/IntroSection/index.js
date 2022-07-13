import React from "react";
import {
  IntroBackground,
  IntroCard,
  IntroOption,
  IntroSub,
  Volume,
} from "./IntroElements";
// import { useNavigate } from "react-router-dom";
import vol from "../../lotties/volume.json";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1 },
  },
};

const IntroSection = () => {
  // useEffect(() => {
  //   document.getElementById("intro").onmousemove = function () {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(function () {
  //       navigate("../landing");
  //     }, 10000);
  //   };
  // }, []);

  return (
    <>
      <IntroBackground id="intro">
        <IntroSub
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Would you like to turn on the sound of digital brochure?
        </IntroSub>
        <IntroCard
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Volume animationData={vol} />
          <IntroOption to="/landing">Yes</IntroOption>
          <IntroOption to="/landing">No</IntroOption>
        </IntroCard>
      </IntroBackground>
    </>
  );
};

export default IntroSection;
