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
  CardWrapper,
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
  PlansMobileHeader,
  PlansMobileContent,
  ButtWRapper,
} from "./PlansElements";

import {
  StartButton,
  ButtonText,
  ButtonIcon,
  ButtonImg,
} from "../../../components/Button/ButtonElements";

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

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 1,
    dots: true,
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
      <PlansContainer secondary="true" id="plans">
        <PlansTop>
          <PlansHeader>
            Choose the right plan to kickstart your freelance career
          </PlansHeader>
          <ButtonWrapper></ButtonWrapper>
        </PlansTop>
        <PlansMobileHeader>Choose a Right Plan</PlansMobileHeader>

        <PlansMobileContent>
          <ButtWRapper>
            <StartButton low="true" ref={buttonRef} onClick={toggleModal}>
              <ButtonText>Get Started</ButtonText>
              <ButtonIcon>
                <ButtonImg src={Right} alt="right" />
              </ButtonIcon>
            </StartButton>
          </ButtWRapper>
          <Slider {...settings}>
            <CardWrapper>
              <PlansCard1 onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <PlansTitle>Freelance Permit Package</PlansTitle>
                <PlansSub>
                  Suitable for dependents, sponsored, Golden Visa Holders
                </PlansSub>
                <SubPrice>
                  AED<SubPriceAmount> 7,500</SubPriceAmount> 1st Year
                </SubPrice>

                <Line ref={lineRef} />
                <PlansCheckContainer>
                  <PlansCheckWrapper>
                    <PlansCheckLottie>
                      <Lottie
                        animationData={Check}
                        loop={true}
                        autoPlay={true}
                      />
                    </PlansCheckLottie>
                    <PlansCheck> Invoicing Support*</PlansCheck>
                  </PlansCheckWrapper>
                  <PlansCheckWrapper>
                    <PlansCheckLottie>
                      <Lottie
                        animationData={Check}
                        loop={true}
                        autoPlay={true}
                      />
                    </PlansCheckLottie>
                    <PlansCheck> Freelance Work Permit</PlansCheck>
                  </PlansCheckWrapper>
                  <PlansCheckWrapper>
                    <PlansCheckLottie>
                      <Lottie
                        animationData={Check}
                        loop={true}
                        autoPlay={true}
                      />
                    </PlansCheckLottie>
                    <PlansCheck>FreelancerHub</PlansCheck>
                  </PlansCheckWrapper>
                </PlansCheckContainer>
                <PlansReminder>Residence Visa Not Included</PlansReminder>
              </PlansCard1>
            </CardWrapper>
            <CardWrapper>
              <PlansCard2 onMouseEnter={onEnter2} onMouseLeave={onLeave2}>
                <GoldLabel>
                  <GoldIcon src={Star} alt="star" />
                  <GoldText>Most Popular</GoldText>
                </GoldLabel>
                <PlansTitle2>The Residence Package</PlansTitle2>
                <PlansSub2>
                  Everything you need to start freelancing legally in the UAE
                </PlansSub2>
                <SubPrice2>
                  AED<SubPriceAmount2> 11,500</SubPriceAmount2> 1st Year
                </SubPrice2>
                <LilSubPrice2>Renewal Price: AED 9,500</LilSubPrice2>
                <Line2 ref={lineRef2} />
                <PlansCheckContainer>
                  <PlansCheckWrapper>
                    <PlansCheckLottie>
                      <Lottie
                        animationData={Check}
                        loop={true}
                        autoPlay={true}
                      />
                    </PlansCheckLottie>
                    <PlansCheck2> Residence Visa</PlansCheck2>
                  </PlansCheckWrapper>
                  <PlansCheckWrapper>
                    <PlansCheckLottie>
                      <Lottie
                        animationData={Check}
                        loop={true}
                        autoPlay={true}
                      />
                    </PlansCheckLottie>
                    <PlansCheck2> Invoicing Support*</PlansCheck2>
                  </PlansCheckWrapper>
                  <PlansCheckWrapper>
                    <PlansCheckLottie>
                      <Lottie
                        animationData={Check}
                        loop={true}
                        autoPlay={true}
                      />
                    </PlansCheckLottie>
                    <PlansCheck2> Freelance Work Permit</PlansCheck2>
                  </PlansCheckWrapper>
                  <PlansCheckWrapper>
                    <PlansCheckLottie>
                      <Lottie
                        animationData={Check}
                        loop={true}
                        autoPlay={true}
                      />
                    </PlansCheckLottie>
                    <PlansCheck2> Medical Insurance</PlansCheck2>
                  </PlansCheckWrapper>
                  <PlansCheckWrapper>
                    <PlansCheckLottie>
                      <Lottie
                        animationData={Check}
                        loop={true}
                        autoPlay={true}
                      />
                    </PlansCheckLottie>
                    <PlansCheck2>FreelancerHub</PlansCheck2>
                  </PlansCheckWrapper>
                </PlansCheckContainer>
              </PlansCard2>
            </CardWrapper>
            <CardWrapper>
              <PlansCard3 onMouseEnter={onEnter3} onMouseLeave={onLeave3}>
                <PlansTitle>2 Year Package</PlansTitle>
                <PlansSub>
                  Start freelancing with a two year package option
                </PlansSub>
                <SubPrice>
                  AED<SubPriceAmount> 18,500</SubPriceAmount> 2 Year
                </SubPrice>
                <Line ref={lineRef3} />
                <PlansCheckContainer>
                  <PlansCheckWrapper>
                    <PlansCheckLottie>
                      <Lottie
                        animationData={Check}
                        loop={true}
                        autoPlay={true}
                      />
                    </PlansCheckLottie>
                    <PlansCheck>Residence Visa</PlansCheck>
                  </PlansCheckWrapper>
                  <PlansCheckWrapper>
                    <PlansCheckLottie>
                      <Lottie
                        animationData={Check}
                        loop={true}
                        autoPlay={true}
                      />
                    </PlansCheckLottie>
                    <PlansCheck>Invoicing Support*</PlansCheck>
                  </PlansCheckWrapper>
                  <PlansCheckWrapper>
                    <PlansCheckLottie>
                      <Lottie
                        animationData={Check}
                        loop={true}
                        autoPlay={true}
                      />
                    </PlansCheckLottie>
                    <PlansCheck>Freelance Work Permit</PlansCheck>
                  </PlansCheckWrapper>
                  <PlansCheckWrapper>
                    <PlansCheckLottie>
                      <Lottie
                        animationData={Check}
                        loop={true}
                        autoPlay={true}
                      />
                    </PlansCheckLottie>
                    <PlansCheck>Medical Insurance</PlansCheck>
                  </PlansCheckWrapper>
                  <PlansCheckWrapper>
                    <PlansCheckLottie>
                      <Lottie
                        animationData={Check}
                        loop={true}
                        autoPlay={true}
                      />
                    </PlansCheckLottie>
                    <PlansCheck>FreelancerHub</PlansCheck>
                  </PlansCheckWrapper>
                </PlansCheckContainer>
              </PlansCard3>
            </CardWrapper>
          </Slider>
        </PlansMobileContent>
        <PlansContent>
          <PlansColumn>
            <PlansCard1 onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <PlansTitle>Freelance Permit Package</PlansTitle>
              <PlansSub>
                Suitable for dependents, sponsored, Golden Visa Holders
              </PlansSub>
              <SubPrice>
                AED<SubPriceAmount> 7,500</SubPriceAmount> 1st Year
              </SubPrice>
              <LilSubPrice>Renewal Price : AED 6,500</LilSubPrice>
              <Line ref={lineRef} />
              <PlansCheckContainer>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck> Invoicing Support*</PlansCheck>
                </PlansCheckWrapper>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck> Freelance Work Permit</PlansCheck>
                </PlansCheckWrapper>
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck>FreelancerHub</PlansCheck>
                </PlansCheckWrapper>
              </PlansCheckContainer>
              <PlansReminder>Residence Visa Not Included</PlansReminder>
              <ButtWRapper>
                <StartButton low="true" ref={buttonRef} onClick={toggleModal}>
                  <ButtonText>Get Started</ButtonText>
                  <ButtonIcon>
                    <ButtonImg src={Right} alt="right" />
                  </ButtonIcon>
                </StartButton>
              </ButtWRapper>
            </PlansCard1>
          </PlansColumn>
          <PlansColumn>
            <PlansCard2 onMouseEnter={onEnter2} onMouseLeave={onLeave2}>
              <GoldLabel>
                <GoldIcon src={Star} alt="star" />
                <GoldText>Most Popular</GoldText>
              </GoldLabel>
              <PlansTitle2>The Residence Package</PlansTitle2>
              <PlansSub2>
                Everything you need to start freelancing legally in the UAE
              </PlansSub2>
              <SubPrice2>
                AED<SubPriceAmount2> 11,500</SubPriceAmount2> 1st Year
              </SubPrice2>
              <LilSubPrice2>Renewal Price: AED 9,500</LilSubPrice2>
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
                  <PlansCheck2> Invoicing Suppor*t</PlansCheck2>
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
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck2> FreelancerHub </PlansCheck2>
                </PlansCheckWrapper>
              </PlansCheckContainer>
              <ButtWRapper>
                <StartButton low="true" ref={buttonRef} onClick={toggleModal}>
                  <ButtonText>Get Started</ButtonText>
                  <ButtonIcon>
                    <ButtonImg src={Right} alt="right" />
                  </ButtonIcon>
                </StartButton>
              </ButtWRapper>
            </PlansCard2>
          </PlansColumn>
          <PlansColumn>
            <PlansCard3 onMouseEnter={onEnter3} onMouseLeave={onLeave3}>
              <PlansTitle>2 Year Package</PlansTitle>
              <PlansSub>
                Start freelancing with a two year package option
              </PlansSub>
              <SubPrice>
                AED<SubPriceAmount> 18,500</SubPriceAmount> 2 Year
              </SubPrice>

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
                  <PlansCheck>Invoicing Support*</PlansCheck>
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
                <PlansCheckWrapper>
                  <PlansCheckLottie>
                    <Lottie animationData={Check} loop={true} autoPlay={true} />
                  </PlansCheckLottie>
                  <PlansCheck>FreelancerHub</PlansCheck>
                </PlansCheckWrapper>
              </PlansCheckContainer>
              <ButtWRapper>
                <StartButton low="true" ref={buttonRef} onClick={toggleModal}>
                  <ButtonText>Get Started</ButtonText>
                  <ButtonIcon>
                    <ButtonImg src={Right} alt="right" />
                  </ButtonIcon>
                </StartButton>
              </ButtWRapper>
            </PlansCard3>
          </PlansColumn>
        </PlansContent>
        <Blob2>
          <Lottie animationData={Blob} interactivity={interactivity} />
        </Blob2>
      </PlansContainer>
    </>
  );
};

export default PlansSection2;
