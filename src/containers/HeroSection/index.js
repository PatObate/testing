import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDiv,
  ArrowRight,
  BackgroundHeroVideo,
  HeroContainer,
  HeroData,
  HeroDataMob,
  HeroHeader,
  HeroHeaderMob,
  HeroLogo,
  HeroLogoMob,
  HeroNumber,
  HeroSource,
  HeroTag,
  HeroVideo,
  HeroVideoWrapper,
  HeroVideoWrapperBig,
  HeroVideoWrapperMob,
  HeroWrappper,
  LinkWrapper,
  VidContainer,
} from "./HeroElements";
import Num from "./num";
import arrow from "../../lotties/arrow.json";
import logo from "../../svgs/Logo.svg";

const HeroSection = ({ background, intro, header, poster }) => {
  const [data] = useState(Num);
  const [videoAnim, setVideoAnim] = useState(true);
  const [videoAnim2, setVideoAnim2] = useState(true);
  const [arrowAnim, SetArrowAnim] = useState(true);
  const [arrowAnim2, SetArrowAnim2] = useState(true);

  const VidLoader = () => {
    setVideoAnim(true);
    setTimeout(() => {
      setVideoAnim(false);
    }, 9000);

    setVideoAnim2(true);
    setTimeout(() => {
      setVideoAnim2(false);
    }, 11000);

    setTimeout(function () {
      document.getElementById("videoPause2").play();
    }, 6000);

    setTimeout(function () {
      document.getElementById("videoPause3").play();
    }, 6000);

    SetArrowAnim(true);
    setTimeout(() => {
      SetArrowAnim(false);
    }, 15000);

    SetArrowAnim2(true);
    setTimeout(() => {
      SetArrowAnim2(false);
    }, 16000);
  };

  const VidLoaderMob = () => {
    setTimeout(function () {
      document.getElementById("videoPauseMob").play();
    }, 10500);

    SetArrowAnim(true);
    setTimeout(() => {
      SetArrowAnim(false);
    }, 12000);

    SetArrowAnim2(true);
    setTimeout(() => {
      SetArrowAnim2(false);
    }, 13000);
  };

  useEffect(() => {}, []);

  useEffect(() => {}, []);

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

  useEffect(() => {
    if (window.matchMedia("(max-width: 690px)").matches) {
      VidLoaderMob();
    } else {
      VidLoader();
    }
  }, []);

  return (
    <>
      <VidContainer variants={containerVariants} exit="exit">
        <BackgroundHeroVideo id="videoPause" muted loop playsInline>
          <HeroSource src={background} type="video/mp4" />
        </BackgroundHeroVideo>
      </VidContainer>
      <HeroContainer variants={containerVariants} exit="exit">
        <HeroWrappper>
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
            <HeroLogoMob
              src={logo}
              as={motion.img}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 2, delay: 7.5 }}
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
            <HeroHeaderMob
              as={motion.h1}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 2, delay: 8.5 }}
              exit="exit2"
              variants={containerVariants}
            >
              {header}
            </HeroHeaderMob>
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

          <HeroDataMob>
            {data.map((values) => {
              const { id, number, tag } = values;
              return (
                <>
                  <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 2, delay: 9.5 }}
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
          </HeroDataMob>
          <HeroVideoWrapper
            as={motion.div}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 2, delay: 10 }}
            exit="exit2"
            variants={containerVariants}
          >
            <HeroVideo id="videoPause3" controls playsInline poster={poster}>
              <HeroSource src={intro} type="video/mp4" />
            </HeroVideo>
          </HeroVideoWrapper>
          <HeroVideoWrapperMob
            as={motion.div}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 2, delay: 10.5 }}
            exit="exit2"
            variants={containerVariants}
          >
            <HeroVideo id="videoPauseMob" controls playsInline poster={poster}>
              <HeroSource src={intro} type="video/mp4" />
            </HeroVideo>
          </HeroVideoWrapperMob>
        </HeroWrappper>
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
