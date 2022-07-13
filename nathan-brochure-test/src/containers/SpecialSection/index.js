import React from "react";
import {
  SpecialCardContainer,
  SpecialContainer,
  SpecialDiv,
  SpecialHeader,
  SpecialRight,
  SpecialSpan,
  SpecialSub,
  SpecialImg,
  SpecialWrapper,
  SpecialTag,
  SpecialLight,
  ArrowRight,
  LinkWrapper2,
  SpecialContent,
  ArrowDiv,
  SpecialImg2,
  SpecialImgMob,
} from "./SpecialElements";

import img from "../../images/ksa.jpg";
import img2 from "../../images/ksa_license_eng.png";
import arrow from "../../lotties/arrow.json";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const SpecialSection = () => {
  return (
    <>
      <SpecialContainer>
        <ArrowDiv
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <LinkWrapper2 to="/support">
            <ArrowRight animationData={arrow} />
          </LinkWrapper2>
        </ArrowDiv>

        <SpecialContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <SpecialContent>
            <SpecialWrapper>
              <SpecialHeader>
                NATHAN & NATHAN HOLDS
                <SpecialSpan> SPECIAL </SpecialSpan>
                LICENSING IN KSA
              </SpecialHeader>
              <SpecialRight>
                <SpecialSub>Corporate And Support Delivery Centres</SpecialSub>
                <SpecialCardContainer>
                  <SpecialDiv>
                    <SpecialImgMob
                      style={{
                        background: `  linear-gradient(89deg, #14161a 0%, #0e264cc7 100%), url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <SpecialTag>Riyadh</SpecialTag>
                      <SpecialLight>KSA</SpecialLight>
                    </SpecialImgMob>
                  </SpecialDiv>
                  <SpecialImg src={img} />
                  <SpecialImg2 src={img2} />
                </SpecialCardContainer>
              </SpecialRight>
              <SpecialDiv />
            </SpecialWrapper>
          </SpecialContent>
        </SpecialContent>
      </SpecialContainer>
    </>
  );
};

export default SpecialSection;
