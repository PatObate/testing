import React, { useState, useRef, useEffect } from "react";
import {
  ClientCard1,
  ClientCard2,
  ClientCard3,
  ClientCard4,
  ClientRow,
  ClientCardName,
  ClientCardOcc,
  ClientCardRate,
  ClientStar,
  ClientImg,
  ClientStarContainer,
  ClientColumn2,
} from "../../../components/ClientCards/CardsElements";

import gsap from "gsap";

import {
  ClientContainer,
  ClientContent,
  ClientHeader,
  ClientButton,
  ClientColumn,
  MClientContainer,
  MClientContent,
  CardWrapper,
  ClientDiv,
  GooglePic,
} from "./ClientElements";

import {
  MCardHeader,
  MCardImg,
  MCardP,
  MCardName,
  MCardJob,
  MCardStarContainer,
  MCardStar,
} from "../../../components/MClientElements";

import img from "../../../images/younggirlsmall.png";

import { AiFillStar } from "react-icons/ai";
import HorizontalCard2 from "../../../components/ClientCards/HorizontalCard2";
import VerticalCard3 from "../../../components/ClientCards/VercialCard3";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Card";
import google from "../../../images/googlesmall.png";
import HorizontalCard3 from "../../../components/ClientCards/HorizontalCard2/index copy";
import VerticalCard4 from "../../../components/ClientCards/VercialCard3/index2";

// SlideOne Section
import Play from "../../../svg/yellowplaybutton.svg";
import {
  ButtonIcon,
  ButtonText,
  StartButton,
  ButtonImg,
  ButtonImg2,
} from "../../../components/Button/ButtonElements";

import {
  CardColumn,
  CardColumnPic,
  CardContainer,
  CardImg,
  CardImg2,
  CardItem,
  CardList,
  CardMenu,
  CardMobWrapper,
  CardNav,
  ContainerDiv,
  ItemContainer,
  Platform1Container,
  Platform1Container980,
  PlatformHeader,
} from "./PlatformElements";
import DigitalClientImg from "../../../images/client1.png";
import DigitalClientImg2 from "../../../images/client2.png";

// to remove
import Right from "../../../svg/rightsmall.svg";
import passport from "../../../images/passport.png";
import greyblob from "../../../images/greyblob.png";
import mathstuff from "../../../images/mathstuff.png";
import laptop from "../../../images/laptop.png";
import ScrollTrigger from "gsap/ScrollTrigger";

const ClientSection = ({ toggleModal2 }) => {
  const [toggleState, setToggleState] = useState(1);
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => setIsOn((prev) => !prev);
  const handleToggle2 = () => setIsOn(false);
  const trigger = useRef();

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const cardRef = useRef();
  const cardRef2 = useRef();
  const cardRef3 = useRef();

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.1,
      scrollTrigger: {
        trigger: cardRef.current,
      },
    });
    gsap.to(cardRef.current, {
      duration: 1,
      opacity: 1,
      delay: 0.1,
      scrollTrigger: {
        trigger: cardRef.current,
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(cardRef2.current, {
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: cardRef2.current,
      },
    });
    gsap.to(cardRef2.current, {
      duration: 1,
      opacity: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: cardRef2.current,
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(cardRef3.current, {
      opacity: 0,
      duration: 1,
      delay: 0.6,
      scrollTrigger: {
        trigger: cardRef3.current,
      },
    });
    gsap.to(cardRef3.current, {
      duration: 1,
      opacity: 1,
      delay: 0.6,
      scrollTrigger: {
        trigger: cardRef3.current,
      },
    });
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: trigger.current,
      start: "top top+=80px",
      onEnter: handleToggle2,
      onLeave: handleToggle2,
      onEnterBack: handleToggle2,
      onLeaveBack: handleToggle2,
    });
  }, []);

  return (
    <>
      <ClientContainer id="client" scrollNav={isOn}>
        <ClientHeader>Our Happy Clients</ClientHeader>
        <ClientContent scrollNav={isOn}>
          <ClientColumn ref={cardRef}>
            <ClientCard1>
              <ClientCardRate>
                "Very professional service and super smooth. Extremely fast and
                helpful. Vanessa was brilliant through and through. Highly
                recommend."
              </ClientCardRate>
              <ClientCardName>Zeena Ismail</ClientCardName>
              <ClientCardOcc>Independent Strategy Consultant</ClientCardOcc>
              <ClientStarContainer>
                <ClientStar>
                  <GooglePic src={google} />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </ClientStar>
              </ClientStarContainer>
            </ClientCard1>
            <VerticalCard3 isOn={isOn} />
          </ClientColumn>
          <ClientColumn ref={cardRef2}>
            <ClientCard3>
              <ClientCardRate>
                Great service. Got the baby visa stamped in no time. Very happy
                to work with Dynamic Freelancer for the 2 years now.
              </ClientCardRate>
              <ClientCardName>Haitham Hassanieh</ClientCardName>
              <ClientCardOcc>Assistant Professor</ClientCardOcc>
              <ClientDiv>
                <ClientStarContainer>
                  <ClientStar>
                    <GooglePic src={google} />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </ClientStar>
                </ClientStarContainer>
              </ClientDiv>
            </ClientCard3>
            <ClientCard4>
              <ClientRow display="true">
                <ClientColumn2>
                  <ClientImg src={img} alt="young girl picture small" />
                </ClientColumn2>
                <ClientColumn2>
                  <ClientCardName>Aurelien </ClientCardName>
                  <ClientCardOcc>Artist, Oxylex</ClientCardOcc>
                  <ClientStarContainer>
                    <ClientStar>
                      <GooglePic src={google} />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </ClientStar>
                  </ClientStarContainer>
                </ClientColumn2>
              </ClientRow>
              <ClientRow>
                <ClientCardRate>
                  “Easy to work with. Process is clear, the team is very
                  supportive and takes time to answer all questions along the
                  way. Highly recommended !”
                </ClientCardRate>
              </ClientRow>
            </ClientCard4>
            <HorizontalCard2 id="card" isOn={isOn} />
            <HorizontalCard3 id="card" isOn={isOn} />
          </ClientColumn>
          <ClientColumn ref={cardRef3}>
            <ClientCard2>
              <ClientCardRate>
                I strongly recommend.. the team is wonderful, very careful, and
                they always do more than what you can expect, at a high
                professional level. everything went super well and the services
                was fast. warm thanks :)
              </ClientCardRate>
              <ClientCardName>Dahou Boudiaf</ClientCardName>
              <ClientCardOcc>Teacher & Consultant</ClientCardOcc>
              <ClientStarContainer>
                <ClientStar>
                  <GooglePic src={google} />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </ClientStar>
              </ClientStarContainer>
            </ClientCard2>
            <VerticalCard4 isOn={isOn} />
          </ClientColumn>
        </ClientContent>
        <ClientButton onClick={handleToggle}>
          {isOn ? "Show Less" : "Show More"}
        </ClientButton>
      </ClientContainer>

      {/* mobile */}
      <MClientContainer>
        <MClientContent>
          <Slider {...settings}>
            {Cards.map((values) => {
              const { id, img, header, p, name, job } = values;
              return (
                <>
                  <CardWrapper key={id}>
                    <MCardHeader>{header}</MCardHeader>
                    <MCardImg src={img} />
                    <MCardP>{p}</MCardP>
                    <MCardName>{name}</MCardName>
                    <MCardJob>{job}</MCardJob>
                    <MCardStarContainer>
                      <MCardStar>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </MCardStar>
                    </MCardStarContainer>
                  </CardWrapper>
                </>
              );
            })}
          </Slider>
        </MClientContent>
        <div className="custom-shape-divider-bottom-1654770189">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </MClientContainer>

      {/* Slider Section */}
      <Platform1Container ref={trigger}>
        <PlatformHeader>Our Freelance Platform Provides</PlatformHeader>
        <CardContainer>
          <CardMenu>
            <CardNav
              onClick={() => toggleTab(1)}
              highlight={toggleState === 1 ? true : false}
            >
              Visa We Offer
            </CardNav>
            <CardNav
              onClick={() => toggleTab(2)}
              highlight={toggleState === 2 ? true : false}
            >
              Invoicing Support
            </CardNav>
            <CardNav
              onClick={() => toggleTab(3)}
              highlight={toggleState === 3 ? true : false}
            >
              Digital Platform
            </CardNav>
          </CardMenu>

          <ContainerDiv hide={toggleState === 1 ? true : false}>
            <CardColumn>
              <CardList>
                <ItemContainer>
                  <CardItem>• 2 year Onshore Employment Visa</CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem>• Emirates ID</CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem>• Work Permit</CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem></CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem></CardItem>
                </ItemContainer>
              </CardList>
              <StartButton secondary="true" low="true" onClick={toggleModal2}>
                <ButtonIcon secondary="true">
                  <ButtonImg2
                    src={DigitalClientImg}
                    medium="true"
                    small="true"
                    alt="client img"
                  />
                  <ButtonImg
                    src={DigitalClientImg2}
                    medium="true"
                    small="true"
                    alt="client img"
                  />
                </ButtonIcon>
                <ButtonText blue="true" medium="true" small="true">
                  Listen To Our Freelancer Story
                </ButtonText>
                <ButtonIcon>
                  <ButtonImg src={Right} secondary="true" alt="client img" />
                </ButtonIcon>
              </StartButton>
            </CardColumn>
            <CardColumnPic>
              <CardImg src={passport} alt="drawing image" />
              <CardImg2 src={greyblob} alt="blob" />
            </CardColumnPic>
          </ContainerDiv>
          <ContainerDiv hide={toggleState === 2 ? true : false}>
            <CardColumn>
              <CardList>
                <ItemContainer>
                  <CardItem>• New Client Registration</CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem>• Raise client invoices in a few steps</CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem>
                    • Monitor and Track payments with our instant notifications
                  </CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem>
                    • Manage your Freelance income with a personalised Dashboard
                  </CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem>• VAT filing & reporting</CardItem>
                </ItemContainer>
              </CardList>
              <StartButton secondary="true" low="true" onClick={toggleModal2}>
                <ButtonIcon secondary="true">
                  <ButtonImg2
                    src={DigitalClientImg}
                    medium="true"
                    small="true"
                    alt="client img"
                  />
                  <ButtonImg
                    src={DigitalClientImg2}
                    medium="true"
                    small="true"
                    alt="client img"
                  />
                </ButtonIcon>
                <ButtonText blue="true" medium="true" small="true">
                  Listen To Our Freelancer Story
                </ButtonText>
                <ButtonIcon>
                  <ButtonImg src={Right} secondary="true" alt="client img" />
                </ButtonIcon>
              </StartButton>
            </CardColumn>
            <CardColumnPic>
              <CardImg src={mathstuff} alt="drawing image" />
              <CardImg2 src={greyblob} alt="blob" />
            </CardColumnPic>
          </ContainerDiv>
          <ContainerDiv hide={toggleState === 3 ? true : false}>
            <CardColumn>
              <CardList>
                <ItemContainer>
                  <CardItem>• Track your Visa application process</CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem>
                    • Request for NOC’s & other letters on the go
                  </CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem>
                    • Stay updated with Email & SMS notifications
                  </CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem>• Create Support tickets</CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem></CardItem>
                </ItemContainer>
              </CardList>
              <StartButton secondary="true" low="true" onClick={toggleModal2}>
                <ButtonIcon secondary="true" none="true">
                  <ButtonImg2
                    src={DigitalClientImg}
                    medium="true"
                    small="true"
                    alt="client img"
                  />
                  <ButtonImg
                    src={DigitalClientImg2}
                    medium="true"
                    small="true"
                    alt="client img"
                  />
                </ButtonIcon>
                <ButtonText blue="true" medium="true" small="true">
                  Get A Sneak Peek Of Our Digital World
                </ButtonText>
                <ButtonIcon>
                  <ButtonImg src={Play} alt="client img" />
                </ButtonIcon>
              </StartButton>
            </CardColumn>
            <CardColumnPic>
              <CardImg src={laptop} alt="drawing image" />
              <CardImg2 src={greyblob} alt="blob" />
            </CardColumnPic>
          </ContainerDiv>
        </CardContainer>
      </Platform1Container>

      <Platform1Container980>
        <PlatformHeader>Our Freelance Platform Provides</PlatformHeader>
        <CardContainer>
          <CardMenu>
            <CardNav
              onClick={() => toggleTab(1)}
              highlight={toggleState === 1 ? true : false}
            >
              Visa
            </CardNav>
            <CardNav
              onClick={() => toggleTab(2)}
              highlight={toggleState === 2 ? true : false}
            >
              Invoicing
            </CardNav>
            <CardNav
              onClick={() => toggleTab(3)}
              highlight={toggleState === 3 ? true : false}
            >
              Platform
            </CardNav>
          </CardMenu>
          <CardMobWrapper hide={toggleState === 1 ? true : false}>
            <CardColumnPic>
              <CardImg src={passport} alt="drawing image" />
              <CardImg2 src={greyblob} alt="blob" />
            </CardColumnPic>
            <CardColumn>
              <ItemContainer>
                <CardItem>• 2 year Onshore Employment Visa</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>• Emirates ID</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>• Work Permit</CardItem>
              </ItemContainer>
            </CardColumn>
            <StartButton secondary="true" low="true" onClick={toggleModal2}>
              <ButtonIcon secondary="true">
                <ButtonImg2
                  src={DigitalClientImg}
                  medium="true"
                  small="true"
                  alt="client img"
                />
                <ButtonImg
                  src={DigitalClientImg2}
                  medium="true"
                  small="true"
                  alt="client img"
                />
              </ButtonIcon>
              <ButtonText blue="true" medium="true" small="true">
                Our Freelancer Story
              </ButtonText>
              <ButtonIcon>
                <ButtonImg src={Right} secondary="true" alt="client img" />
              </ButtonIcon>
            </StartButton>
          </CardMobWrapper>
          <CardMobWrapper hide={toggleState === 2 ? true : false}>
            <CardColumnPic>
              <CardImg src={mathstuff} alt="drawing image" />
              <CardImg2 src={greyblob} alt="blob" />
            </CardColumnPic>
            <CardColumn>
              <ItemContainer>
                <CardItem>• New Client Registration</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>• Raise client invoices in a few steps</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>
                  • Monitor and Track payments with our instant notifications
                </CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>
                  • Manage your Freelance income with a personalised Dashboard
                </CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>• VAT filing & reporting</CardItem>
              </ItemContainer>
            </CardColumn>
            <StartButton secondary="true" low="true" onClick={toggleModal2}>
              <ButtonIcon secondary="true">
                <ButtonImg2
                  src={DigitalClientImg}
                  medium="true"
                  small="true"
                  alt="client img"
                />
                <ButtonImg
                  src={DigitalClientImg2}
                  medium="true"
                  small="true"
                  alt="client img"
                />
              </ButtonIcon>
              <ButtonText blue="true" medium="true" small="true">
                Our Freelancer Story
              </ButtonText>
              <ButtonIcon>
                <ButtonImg src={Right} secondary="true" alt="client img" />
              </ButtonIcon>
            </StartButton>
          </CardMobWrapper>
          <CardMobWrapper hide={toggleState === 3 ? true : false}>
            <CardColumnPic>
              <CardImg src={laptop} alt="drawing image" />
              <CardImg2 src={greyblob} alt="blob" />
            </CardColumnPic>
            <CardColumn>
              <ItemContainer>
                <CardItem>• Track your Visa application process</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>
                  • Request for NOC’s & other letters on the go
                </CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>
                  • Stay updated with Email & SMS notifications
                </CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>• Create Support tickets</CardItem>
              </ItemContainer>
            </CardColumn>
            <StartButton secondary="true" low="true" onClick={toggleModal2}>
              <ButtonIcon secondary="true">
                <ButtonImg2
                  src={DigitalClientImg}
                  medium="true"
                  small="true"
                  alt="client img"
                />
                <ButtonImg
                  src={DigitalClientImg2}
                  medium="true"
                  small="true"
                  alt="client img"
                />
              </ButtonIcon>
              <ButtonText blue="true" medium="true" small="true">
                Our Freelancer Story
              </ButtonText>
              <ButtonIcon>
                <ButtonImg src={Right} secondary="true" alt="client img" />
              </ButtonIcon>
            </StartButton>
          </CardMobWrapper>
        </CardContainer>
      </Platform1Container980>
    </>
  );
};

export default ClientSection;
