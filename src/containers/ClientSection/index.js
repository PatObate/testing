import React from "react";
import {
  ArrowRight,
  LandingContainer,
  LandingHeader,
  LandingHolder,
  LandingPicLarge,
  LandingPicMedium,
  LandingPicSmall,
  LandingPictures,
  LandingPicXLarge,
  LandingSpan,
  LinkWrapper,
  LinkWrapper2,
  LinkWrapperWhole,
  LinkWrapperWhole2,
} from "./ClientElements";
import adq from "../../images/clients/adq.png";
import adcb from "../../images/clients/adcb.png";
import dhl from "../../images/clients/dhl.png";
import tiktok from "../../images/clients/tiktok.png";
import careem from "../../images/clients/careem.png";
import zoom from "../../images/clients/zoom.png";
import dubaicares from "../../images/clients/dubaicares.png";
import porsche from "../../images/clients/porsche.png";
import siemens from "../../images/clients/siemens.png";
import ikea from "../../images/clients/ikea.png";
import arrow from "../../lotties/arrow.json";

const containerVariants = {
  hiddenarrow: {
    opacity: 0,
  },
  hidden: {
    opacity: 0,
    x: "-2.60vw",
  },
  hidden2: {
    opacity: 0,
    y: "2.60vw",
  },
  visible: {
    opacity: 1,
    x: "0vw",
    transition: { delay: 1, duration: 0.5 },
  },
  visible2: {
    opacity: 1,
    y: "0vw",
    transition: { delay: 1.5, duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const ClientSection = () => {
  return (
    <>
      <LandingContainer>
        <LandingHolder>
          <LandingHeader
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            Trusted by over <LandingSpan>2,000+ Business</LandingSpan> and
            <br />
            <LandingSpan>30+ Government</LandingSpan> 3 Entities across the UAE
          </LandingHeader>
        </LandingHolder>
        <LandingHolder
          variants={containerVariants}
          initial="hidden2"
          animate="visible2"
          exit="exit"
        >
          <LandingPictures>
            <LandingPicSmall src={adq} />
            <LandingPicMedium src={adcb} />
            <LandingPicLarge src={dhl} />
            <LandingPicMedium src={tiktok} />
          </LandingPictures>
          <LandingPictures>
            <LandingPicXLarge src={careem} />
            <LandingPicMedium src={zoom} />
            <LandingPicXLarge src={dubaicares} />
          </LandingPictures>
          <LandingPictures>
            <LandingPicMedium src={porsche} />
            <LandingPicLarge src={siemens} />
            <LandingPicLarge src={ikea} />
          </LandingPictures>
        </LandingHolder>
        <LinkWrapperWhole
          variants={containerVariants}
          initial="hiddenarrow"
          animate="visible"
          exit="exit"
        >
          <LinkWrapper to="/support">
            <ArrowRight animationData={arrow} />
          </LinkWrapper>
        </LinkWrapperWhole>
        <LinkWrapperWhole2
          variants={containerVariants}
          initial="hiddenarrow"
          animate="visible"
          exit="exit"
        >
          <LinkWrapper2 to="/landing">
            <ArrowRight animationData={arrow} />
          </LinkWrapper2>
        </LinkWrapperWhole2>
      </LandingContainer>
    </>
  );
};

export default ClientSection;
