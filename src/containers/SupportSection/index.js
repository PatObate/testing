import React, { useState } from "react";
import {
  SupportCardContainer,
  SupportContainer,
  SupportHeader,
  SupportImg,
  SupportImgWrapper,
  SupportLight,
  SupportLine,
  SupportSpan,
  SupportSub,
  SupportTag,
  SupportTiny,
  SupportWrapper,
  LinkWrapper,
  ArrowRight,
  LinkWrapper2,
  SupportContent,
  ArrowLeft,
  LinkWrapperImg,
  SupportRow,
  SupportContent2,
  SupportImg2,
  ArrowDiv,
  SupportImg3,
  SupportRow2,
  SupportRow3,
  SupportImgMob,
  LinkWrapperImg2,
} from "./SupportElements";
import Cards from "./cards";
import img1 from "../../images/ksa_license.png";
import img2 from "../../images/uae_labour_logo.png";
import arrow from "../../lotties/arrow.json";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "2.60vw",
  },
  visible: {
    opacity: 1,
    y: "0vw",
    transition: { delay: 0.5, duration: 0.5 },
  },
  hidden2: {
    borderRadius: "3.28vw",
    scale: 0.5,
    padding: "5.21vw 7.29vw",
  },
  visible2: {
    opacity: 1,
    y: 0,
    padding: 0,
    scale: 1,
    transition: { delay: 1, duration: 0.5 },
  },
  hidden3: {
    background: "linear-gradient(358deg, #000b1e 0%, #002549c9 100%)",
  },
  visible3: {
    transition: { delay: 1, duration: 0.5 },
  },
  hidden4: {
    opacity: 0,
  },
  visible4: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
  exit2: {
    background: "#131820",
    transition: { duration: 0.5 },
  },
};

const SupportSection = () => {
  const [data] = useState(Cards);
  return (
    <>
      <SupportContainer
        variants={containerVariants}
        initial="hidden3"
        animate="visible3"
      >
        <ArrowDiv
          variants={containerVariants}
          initial="hidden4"
          animate="visible4"
          exit="exit"
        >
          <LinkWrapper2 to="/client">
            <ArrowLeft animationData={arrow} />
          </LinkWrapper2>
        </ArrowDiv>

        <SupportContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <SupportContent2
            variants={containerVariants}
            initial="hidden2"
            animate="visible2"
            exit="exit"
          >
            <SupportWrapper>
              <SupportRow>
                <SupportHeader>
                  LICENSED TO SUPPORT YOU ACROSS THE
                  <SupportSpan> MIDDLE EAST</SupportSpan>
                </SupportHeader>
                <SupportLine />
              </SupportRow>
              <SupportRow>
                <SupportSub>Corporate And Support Delivery Centres</SupportSub>
                <SupportCardContainer>
                  {data.map((values) => {
                    const { id, img, Bold, Light } = values;
                    return (
                      <>
                        <div key={id}>
                          <LinkWrapperImg2 to="/special">
                            <SupportImgMob
                              style={{
                                background: `linear-gradient(89deg,#14161aab 0%,#0e264cb5 100%), url(${img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                              }}
                            >
                              <SupportTag>{Bold}</SupportTag>
                              <SupportLight>{Light}</SupportLight>
                            </SupportImgMob>
                          </LinkWrapperImg2>
                          <LinkWrapperImg to="/special">
                            <SupportImg src={img} />
                            <SupportTag>{Bold}</SupportTag>
                            <SupportLight>{Light}</SupportLight>
                          </LinkWrapperImg>
                        </div>
                      </>
                    );
                  })}
                </SupportCardContainer>
                <SupportRow2>
                  <SupportTiny>
                    License by the Ministry of Labour in UAE & KSA
                  </SupportTiny>
                  <SupportImgWrapper>
                    <SupportImg2 src={img1} />
                    <SupportImg3 src={img2} />
                  </SupportImgWrapper>
                </SupportRow2>
              </SupportRow>
              <SupportRow3>
                <SupportTiny>
                  License by the Ministry of Labour in UAE & KSA
                </SupportTiny>
                <SupportImgWrapper>
                  <SupportImg2 src={img1} />
                  <SupportImg3 src={img2} />
                </SupportImgWrapper>
              </SupportRow3>
            </SupportWrapper>
          </SupportContent2>
        </SupportContent>
        <ArrowDiv
          variants={containerVariants}
          initial="hidden4"
          animate="visible4"
          exit="exit"
        >
          <LinkWrapper to="/menu">
            <ArrowRight animationData={arrow} />
          </LinkWrapper>
        </ArrowDiv>
      </SupportContainer>
    </>
  );
};

export default SupportSection;
