import React, { useRef } from "react";
import Lottie from "lottie-react";
import gsap from "gsap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {
  PlansContainer,
  PlansHeader,
  PlansContent,
  PlansColumn,
  PlansCard1,
  PlansTitle,
  PlansSub,
  SubPrice,
  SubPriceAmount,
  LilSubPrice,
  Line,
  PlansReminder,
  PlansCard2,
  PlansTitle2,
  PlansSub2,
  SubPrice2,
  SubPriceAmount2,
  LilSubPrice2,
  Line2,
  PlansCard3,
  PlansCheck,
  PlansCheck2,
  PlansCheckContainer,
  PlansTop,
  PlansCheckWrapper,
  PlansCheckLottie,
  GoldIcon,
  GoldText,
  GoldLabel,
  ButtonWrapper,
  PlansVat,
  PlansMobileHeader,
  PlansMobileContent,
} from "./PlansElements";

import {
  StartButton,
  ButtonText,
  ButtonIcon,
  ButtonImg,
} from "../../../components/ButtonElements";

import Right from "../../../svg/rightbig.svg";
import Star from "../../../svg/whitestar.svg";
import Check from "../../../lotties/Lottie Checkmark.json";

import { Blob2 } from "../../../components/BlobElements";
import Blob from "../../../lotties/BlobLeft.json";

const PlansSection2 = ({ toggleModal }) => {
  const lineRef = useRef();
  const lineRef2 = useRef();
  const lineRef3 = useRef();

  const buttonRef = useRef();

  const onEnterButt = () => {
    gsap.to(buttonRef.current, {
      width: "13.80vw",
      background: "#14dcb5",
      duration: 0.1,
    });
  };
  const onLeaveButt = () => {
    gsap.to(buttonRef.current, {
      width: "13.02vw",
      background: "#13ceaa",
      duration: 0.1,
    });
  };

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };

  const onEnter = () => {
    gsap.to(lineRef.current, { width: "3.13vw" });
  };
  const onEnter2 = () => {
    gsap.to(lineRef2.current, { width: "3.13vw" });
  };
  const onEnter3 = () => {
    gsap.to(lineRef3.current, { width: "3.13vw" });
  };
  const onLeave = () => {
    gsap.to(lineRef.current, { width: "1.56vw" });
  };
  const onLeave2 = () => {
    gsap.to(lineRef2.current, { width: "1.56vw" });
  };
  const onLeave3 = () => {
    gsap.to(lineRef3.current, { width: "1.56vw" });
  };

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
      <PlansContainer id="plans">
        <PlansTop>
          <PlansHeader>
            Choose a right plan to kickstart your freelance career
          </PlansHeader>
          <ButtonWrapper>
            <StartButton
              low="true"
              ref={buttonRef}
              onMouseEnter={onEnterButt}
              onMouseLeave={onLeaveButt}
              onClick={toggleModal}
            >
              <ButtonText>Get Started</ButtonText>
              <ButtonIcon>
                <ButtonImg src={Right} />
              </ButtonIcon>
            </StartButton>
          </ButtonWrapper>
        </PlansTop>
        <PlansMobileHeader>Choose a Right Plan</PlansMobileHeader>

        <PlansMobileContent>
          <Slider {...settings}>
            <PlansCard1 onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <PlansTitle>Freelance Permit Package</PlansTitle>
              <PlansSub>
                Suitable for De pendents and Sponsored Visa Holders
              </PlansSub>
              <SubPrice>
                AED<SubPriceAmount> 5,500</SubPriceAmount> 1st Year
              </SubPrice>
              <LilSubPrice>Renewal Price : AED 4,500</LilSubPrice>
              <Line ref={lineRef} />
              <PlansCheckContainer>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck> Invoicing Support</PlansCheck>
                </PlansCheckWrapper>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck> Freelance Work Permit</PlansCheck>
                </PlansCheckWrapper>
              </PlansCheckContainer>
              <PlansReminder>Residence Visa Not Included</PlansReminder>
            </PlansCard1>
            <PlansCard2 onMouseEnter={onEnter2} onMouseLeave={onLeave2}>
              <GoldLabel>
                <GoldIcon src={Star} />
                <GoldText>Most Popular</GoldText>
              </GoldLabel>
              <PlansTitle2>The Residence Package</PlansTitle2>
              <PlansSub2>
                Everything you need to start freelancing legally in the UAE
              </PlansSub2>
              <SubPrice2>
                AED<SubPriceAmount2> 10,500</SubPriceAmount2> 1st Year
              </SubPrice2>
              <LilSubPrice2>Renewal Price: AED 7,500</LilSubPrice2>
              <Line2 ref={lineRef2} />
              <PlansCheckContainer>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck2> Residence Visa</PlansCheck2>
                </PlansCheckWrapper>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck2> Invoicing Support</PlansCheck2>
                </PlansCheckWrapper>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck2> Freelance Work Permit</PlansCheck2>
                </PlansCheckWrapper>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck2> Medical Insurance</PlansCheck2>
                </PlansCheckWrapper>
              </PlansCheckContainer>
            </PlansCard2>
            <PlansCard3 onMouseEnter={onEnter3} onMouseLeave={onLeave3}>
              <PlansTitle>2 Years Freelance Package</PlansTitle>
              <PlansSub>
                Start Freelancing with two years freelance package option
              </PlansSub>
              <SubPrice>
                AED<SubPriceAmount> 15,500</SubPriceAmount> 2 Year
              </SubPrice>
              <LilSubPrice>Renewal Price: AED 13,500</LilSubPrice>
              <Line ref={lineRef3} />
              <PlansCheckContainer>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck>Residence Visa</PlansCheck>
                </PlansCheckWrapper>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck>Invoicing Support</PlansCheck>
                </PlansCheckWrapper>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck>Freelance Work Permit</PlansCheck>
                </PlansCheckWrapper>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck>Medical Insurance</PlansCheck>
                </PlansCheckWrapper>
              </PlansCheckContainer>
            </PlansCard3>
          </Slider>
        </PlansMobileContent>
        <PlansContent>
          <PlansColumn>
            <PlansCard1 onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <PlansTitle>Freelance Permit Package</PlansTitle>
              <PlansSub>
                Suitable for De pendents and Sponsored Visa Holders
              </PlansSub>
              <SubPrice>
                AED<SubPriceAmount> 5,500</SubPriceAmount> 1st Year
              </SubPrice>
              <LilSubPrice>Renewal Price : AED 4,500</LilSubPrice>
              <Line ref={lineRef} />
              <PlansCheckContainer>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck> Invoicing Support</PlansCheck>
                </PlansCheckWrapper>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck> Freelance Work Permit</PlansCheck>
                </PlansCheckWrapper>
              </PlansCheckContainer>
              <PlansReminder>Residence Visa Not Included</PlansReminder>
            </PlansCard1>
          </PlansColumn>
          <PlansColumn>
            <PlansCard2 onMouseEnter={onEnter2} onMouseLeave={onLeave2}>
              <GoldLabel>
                <GoldIcon src={Star} />
                <GoldText>Most Popular</GoldText>
              </GoldLabel>
              <PlansTitle2>The Residence Package</PlansTitle2>
              <PlansSub2>
                Everything you need to start freelancing legally in the UAE
              </PlansSub2>
              <SubPrice2>
                AED<SubPriceAmount2> 10,500</SubPriceAmount2> 1st Year
              </SubPrice2>
              <LilSubPrice2>Renewal Price: AED 7,500</LilSubPrice2>
              <Line2 ref={lineRef2} />
              <PlansCheckContainer>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck2> Residence Visa</PlansCheck2>
                </PlansCheckWrapper>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck2> Invoicing Support</PlansCheck2>
                </PlansCheckWrapper>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck2> Freelance Work Permit</PlansCheck2>
                </PlansCheckWrapper>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck2> Medical Insurance</PlansCheck2>
                </PlansCheckWrapper>
              </PlansCheckContainer>
            </PlansCard2>
          </PlansColumn>
          <PlansColumn>
            <PlansCard3 onMouseEnter={onEnter3} onMouseLeave={onLeave3}>
              <PlansTitle>2 Years Freelance Package</PlansTitle>
              <PlansSub>
                Start Freelancing with two years freelance package option
              </PlansSub>
              <SubPrice>
                AED<SubPriceAmount> 15,500</SubPriceAmount> 2 Year
              </SubPrice>
              <LilSubPrice>Renewal Price: AED 13,500</LilSubPrice>
              <Line ref={lineRef3} />
              <PlansCheckContainer>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck>Residence Visa</PlansCheck>
                </PlansCheckWrapper>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck>Invoicing Support</PlansCheck>
                </PlansCheckWrapper>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck>Freelance Work Permit</PlansCheck>
                </PlansCheckWrapper>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck>Medical Insurance</PlansCheck>
                </PlansCheckWrapper>
              </PlansCheckContainer>
            </PlansCard3>
          </PlansColumn>
        </PlansContent>
        <PlansVat>* All prices are inclusive of VAT</PlansVat>
        <Blob2>
          <Lottie animationData={Blob} interactivity={interactivity} />
        </Blob2>
      </PlansContainer>
    </>
  );
};

export default PlansSection2;
