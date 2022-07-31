import React, { useRef } from "react";

import Lottie from "lottie-react";

import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./index.css";

import {
  Heading,
  HeroContainer,
  StarIcon,
  SubHeading,
  WordsContainer,
  RatingContainer,
  ExcellRating,
  NumberRating,
  ContentContainer,
  GoogleRating,
  Rating,
  RatingTwo,
  ContentPhoto,
  RatingSign,
  StarContainer,
  Star,
  RatingWords,
  RatingName,
  ContentPhoto2,
  ContentPlayButton,
  ContentBlob,
  MouseDown,
  MHeroContainer,
  HeadingBold,
  MRatingSection,
  MHeroSection,
} from "./HeroElements";

import {
  StartButton,
  ButtonText,
  ButtonIcon,
  ButtonImg,
} from "../../../components/Button/ButtonElements";

import { Blob1 } from "../../../components/BlobElements";

import { AiFillStar } from "react-icons/ai";

import {
  PopSaleIcon,
  PopSaleImg,
  PopSaleNotif,
  PopSaleText,
  PopSaleTextBold,
} from "../../../components/PopSaleElements";

import BlobBlue from "../../../svg/blobblue.svg";

import Right from "../../../svg/rightbig.svg";

import GuyBlob from "../../../lotties/Lottie Blob.json";

import Mouse2 from "../../../lotties/mosuedownnew.json";

import Blob from "../../../lotties/BlobRight.json";

import Google from "../../../images/google.png";

import sale from "../../../svg/saleicon.svg";

const HeroSection = ({ toggleModal, toggleModal2 }) => {
  const buttonRef = useRef();

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.29, 1.0],
        type: "seek",
        frames: [0, 120],
      },
    ],
  };

  return (
    <>
      <HeroContainer id="landing">
        <MouseDown
          to="client"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
        >
          <Lottie animationData={Mouse2} loop={true} autoPlay={true} />
        </MouseDown>
        <WordsContainer>
          <PopSaleNotif
            as={motion.div}
            animate={{ x: [-70, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <PopSaleIcon>
              <PopSaleImg src={sale} alt="sale icon" />
            </PopSaleIcon>
            <PopSaleText>
              <PopSaleTextBold>SALE!</PopSaleTextBold> Save up to AED 1,000 on
              signing up today!
            </PopSaleText>
          </PopSaleNotif>
          <Heading
            as={motion.div}
            animate={{ y: [70, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            The Best Freelancing Platform in the UAE
          </Heading>
          <SubHeading
            as={motion.div}
            animate={{ y: [70, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            with over 120+ Freelancing Activities
          </SubHeading>
          <StartButton
            ref={buttonRef}
            onClick={toggleModal}
            as={motion.div}
            animate={{ x: [-70, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ButtonText>Get Started</ButtonText>
            <ButtonIcon>
              <ButtonImg src={Right} alt="right" />
            </ButtonIcon>
          </StartButton>
          <RatingContainer>
            <Rating>
              <StarIcon>
                <AiFillStar style={{ display: "block" }} />
              </StarIcon>
              <NumberRating>
                <ExcellRating>Excellent </ExcellRating>4.9 out of 5
              </NumberRating>
            </Rating>
            <RatingTwo>
              <GoogleRating src={Google} alt="google rating" />
            </RatingTwo>
          </RatingContainer>
        </WordsContainer>
        <ContentContainer>
          <Carousel autoPlay={true} infiniteLoop={true}>
            <div>
              <ContentPlayButton onClick={toggleModal2}>
                <h2>Play Now</h2>
              </ContentPlayButton>
              <ContentPhoto>
                <Lottie animationData={GuyBlob} loop={true} autoPlay={true} />
              </ContentPhoto>
              <ContentPhoto2 src={BlobBlue} alt="blue blob" />
              <RatingSign>
                <StarContainer>
                  <Star>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </Star>
                </StarContainer>
                <RatingWords>
                  “Dynamic Freelancer is a true Professional and master of its
                  craft.”
                </RatingWords>
                <RatingName>Alex Tachov, Fashion Designer.</RatingName>
              </RatingSign>
            </div>
          </Carousel>
          <ContentBlob src={BlobBlue} alt="blue blob" />
        </ContentContainer>
        <Blob1>
          <Lottie
            style={{ width: "45.83vw", height: " 72.92vw" }}
            animationData={Blob}
            interactivity={interactivity}
          />
        </Blob1>
      </HeroContainer>

      {/* phone */}
      <MHeroContainer>
        <ContentPhoto>
          <Lottie animationData={GuyBlob} loop={true} autoPlay={true} />
        </ContentPhoto>
        <ContentBlob src={BlobBlue} alt="blue blob" />
        <MHeroSection>
          <Heading>
            The Best Freelancing <HeadingBold>Platform in the UAE</HeadingBold>
          </Heading>
        </MHeroSection>
        <MRatingSection>
          <RatingContainer>
            <Rating>
              <StarIcon>
                <AiFillStar style={{ display: "block" }} />
              </StarIcon>
              <NumberRating>
                <ExcellRating>Excellent </ExcellRating>4.9 out of 5
              </NumberRating>
            </Rating>
            <RatingTwo>
              <GoogleRating src={Google} alt="google rating" />
            </RatingTwo>
          </RatingContainer>
        </MRatingSection>
      </MHeroContainer>
    </>
  );
};

export default HeroSection;
