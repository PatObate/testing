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
  HeroWrappper,
  LinkWrapper,
  LinkWrapper2,
  VidContainer,
} from "./HeroElements";
import Num from "./num";
import arrow from "../../lotties/arrow.json";
import logo from "../../svgs/Logo.svg";

const AboutSection = ({ background, intro, header, poster }) => {
  const [data] = useState(Num);
  const [videoAnim, setVideoAnim] = useState(true);
  const [videoAnim2, setVideoAnim2] = useState(true);

  useEffect(() => {
    setVideoAnim(true);
    setTimeout(() => {
      setVideoAnim(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setVideoAnim2(true);
    setTimeout(() => {
      setVideoAnim2(false);
    }, 5000);
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
        <BackgroundHeroVideo id="videoPause" autoPlay muted loop playsInline>
          <HeroSource src={background} type="video/mp4" />
        </BackgroundHeroVideo>
      </VidContainer>
      <HeroContainer variants={containerVariants} exit="exit">
        <HeroWrappper>
          <HeroVideoWrapperBig big={videoAnim} none={videoAnim2}>
            <HeroVideo id="videoPause2" muted playsInline autoPlay>
              <HeroSource src={intro} type="video/mp4" />
            </HeroVideo>
          </HeroVideoWrapperBig>

          <div>
            {" "}
            <HeroLogo
              src={logo}
              as={motion.img}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 6 }}
              exit="exit2"
              variants={containerVariants}
              alt="Logo"
            />
            <HeroHeader
              as={motion.h1}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 7 }}
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
                    transition={{ duration: 0.5, delay: 8 }}
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
            transition={{ duration: 0.5, delay: 5 }}
            exit="exit2"
            variants={containerVariants}
          >
            <HeroVideo
              id="videoPause3"
              controls
              playsInline
              autoPlay
              poster={poster}
            >
              <HeroSource src={intro} type="video/mp4" />
            </HeroVideo>
          </HeroVideoWrapper>
        </HeroWrappper>
        <ArrowDiv exit="exit2" variants={containerVariants}>
          <LinkWrapper to="/support">
            <ArrowRight animationData={arrow} />
          </LinkWrapper>
          <LinkWrapper2 to="/client">
            <ArrowRight animationData={arrow} />
          </LinkWrapper2>
        </ArrowDiv>
      </HeroContainer>
    </>
  );
};

export default AboutSection;
