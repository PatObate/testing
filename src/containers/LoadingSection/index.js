import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  LinkWrapper,
  LoadingBackground,
  LoadingLogo,
  LoadingLogoWrapper,
  LoadingText,
  TextWrapper,
} from "./LoadingElements";
import { motion } from "framer-motion";
import intro from "../../music/nathanintro.mp3";
import logo from "../../svgs/Logo.svg";
import arrow from "../../lotties/arrow.json";
const LoadingSection = () => {
  const [arrowAnim, SetArrowAnim] = useState(true);
  const [arrowAnim2, SetArrowAnim2] = useState(true);

  useEffect(() => {
    SetArrowAnim(true);
    setTimeout(() => {
      SetArrowAnim(false);
    }, 3000);
  }, []);
  useEffect(() => {
    SetArrowAnim2(true);
    setTimeout(() => {
      SetArrowAnim2(false);
    }, 4000);
  }, []);

  return (
    <>
      <LoadingBackground>
        <LoadingLogoWrapper
          as={motion.div}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <LoadingLogo
            src={logo}
            as={motion.img}
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 1, delay: 5 }}
          />
        </LoadingLogoWrapper>

        <audio autoPlay>
          <source type="audio/mpeg" src={intro} />
        </audio>
        <TextWrapper>
          <LoadingText
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, delay: 0 }}
          >
            أهلا
          </LoadingText>
          <LoadingText
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, delay: 2 }}
          >
            Hello
          </LoadingText>
          <LoadingText
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, delay: 4 }}
          >
            Bonjour
          </LoadingText>
        </TextWrapper>
        <LinkWrapper to="/landing" none={arrowAnim} opac={arrowAnim2}>
          <ArrowRight animationData={arrow} />
        </LinkWrapper>
      </LoadingBackground>
    </>
  );
};

export default LoadingSection;
