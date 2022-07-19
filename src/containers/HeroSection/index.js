import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDiv,
  ArrowRight,
  BackgroundHeroVideo,
  HeroContainer,
  HeroData,
  HeroHeader,
  HeroLogo,
  HeroNumber,
  HeroSource,
  HeroTag,
  HeroVideo,
  HeroVideoWrapper,
  HeroVideoWrapperBig,
  LinkWrapper,
  VidContainer,
} from "./HeroElements";
import Num from "./num";
import arrow from "../../lotties/arrow.json";
import logo from "../../svgs/Logo.svg";

const HeroSection = ({ background, intro, header }) => {
  const [data] = useState(Num);
  const [videoAnim, setVideoAnim] = useState(true);
  const [videoAnim2, setVideoAnim2] = useState(true);
  const [arrowAnim, SetArrowAnim] = useState(true);
  const [arrowAnim2, SetArrowAnim2] = useState(true);

  useEffect(() => {
    setVideoAnim(true);
    setTimeout(() => {
      setVideoAnim(false);
    }, 9000);
  }, []);

  useEffect(() => {
    setVideoAnim2(true);
    setTimeout(() => {
      setVideoAnim2(false);
    }, 11000);
  }, []);

  useEffect(() => {
    SetArrowAnim(true);
    setTimeout(() => {
      SetArrowAnim(false);
    }, 15000);
  }, []);

  useEffect(() => {
    SetArrowAnim2(true);
    setTimeout(() => {
      SetArrowAnim2(false);
    }, 16000);
  }, []);

  useEffect(() => {
    setVideoAnim(true);
    setTimeout(() => {
      setVideoAnim(false);
    }, 9000);
  }, []);

  useEffect(() => {
    setVideoAnim2(true);
    setTimeout(() => {
      setVideoAnim2(false);
    }, 11000);
  }, []);

  useEffect(() => {
    setTimeout(function () {
      document.getElementById("videoPause").play();
    }, 6000);
  }, []);
  useEffect(() => {
    setTimeout(function () {
      document.getElementById("videoPause2").play();
    }, 6000);
  }, []);
  useEffect(() => {
    setTimeout(function () {
      document.getElementById("videoPause3").play();
    }, 6000);
  }, []);

  const containerVariants = {
    exit: {
      background: "#131820",
      transition: { duration: 0.5 },
    },
    exit2: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <VidContainer variants={containerVariants} exit="exit">
        <BackgroundHeroVideo id="videoPause" muted loop>
          <HeroSource src={background} />
        </BackgroundHeroVideo>
      </VidContainer>
      <HeroContainer variants={containerVariants} exit="exit">
        <HeroVideoWrapperBig big={videoAnim} none={videoAnim2}>
          <HeroVideo id="videoPause2" muted playsInline>
            <HeroSource src={intro} type="video/mp4" />
          </HeroVideo>
        </HeroVideoWrapperBig>

        <div>
          {" "}
          <HeroLogo
            src={logo}
            as={motion.img}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 2, delay: 11.7 }}
            exit="exit2"
            variants={containerVariants}
            alt="Logo"
          />
          <HeroHeader
            as={motion.h1}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 2, delay: 12.7 }}
            exit="exit2"
            variants={containerVariants}
          >
            {header}
          </HeroHeader>
        </div>

        <HeroData>
          {data.map((values) => {
            const { id, number, tag } = values;
            return (
              <>
                <motion.div
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 2, delay: 13.7 }}
                  key={id}
                  exit="exit2"
                  variants={containerVariants}
                >
                  <HeroNumber>{number}</HeroNumber>
                  <HeroTag>{tag}</HeroTag>
                </motion.div>
              </>
            );
          })}
        </HeroData>
        <HeroVideoWrapper
          as={motion.div}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2, delay: 10 }}
          exit="exit2"
          variants={containerVariants}
        >
          <HeroVideo id="videoPause3" controls playsInline>
            <HeroSource src={intro} type="video/mp4" />
          </HeroVideo>
        </HeroVideoWrapper>
        <ArrowDiv exit="exit2" variants={containerVariants}>
          <LinkWrapper to="/support" none={arrowAnim} opac={arrowAnim2}>
            <ArrowRight animationData={arrow} />
          </LinkWrapper>
        </ArrowDiv>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
