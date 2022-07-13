import React from "react";
import {
  LoadingBackground,
  LoadingLogo,
  LoadingLogoWrapper,
  LoadingText,
  TextWrapper,
} from "./LoadingElements";
import { motion } from "framer-motion";
import intro from "../../music/nathanintro.mp3";
import logo from "../../svgs/Logo.svg";
const Loading = ({ preloader, preloader2 }) => {
  return (
    <>
      <LoadingBackground timer={preloader} none={preloader2}>
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
      </LoadingBackground>
    </>
  );
};

export default Loading;
