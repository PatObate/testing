import React from "react";
import {
  ClientContainer,
  ClientHeader,
  GoogleCardContainer,
  GoogleCardPicture,
  GoogleCardWrapper,
  GoogleColumn1,
  GoogleColumn2,
  GoogleDiv,
  GoogleLogoPic,
  GoogleName,
  GoogleNumReviews,
  GoogleRed,
  GoogleReview,
  GoogleReviewBot,
  GoogleReviews,
  GoogleStar,
  GoogleStar2,
  GoogleStars,
  GoogleWrapper,
} from "./ClientElements";
import { Cards } from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import googlebig from "../../../images/googlebig.png";
import googlesmall from "../../../images/googlesmall.png";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  slidesToScroll: 1,
};

const ClientSection = () => {
  return (
    <>
      <ClientContainer id="client">
        <ClientHeader>Our Happy Clients</ClientHeader>
        <GoogleWrapper>
          <GoogleColumn1>
            <GoogleLogoPic src={googlebig} alt="picture" />
            <GoogleReviews>Google Reviews</GoogleReviews>
            <GoogleRed>4.9</GoogleRed>
            <GoogleStars>
              <GoogleStar2 />
              <GoogleStar2 />
              <GoogleStar2 />
              <GoogleStar2 />
              <GoogleStar2 />
            </GoogleStars>
            <GoogleReviewBot>209 reviews</GoogleReviewBot>
          </GoogleColumn1>
          <GoogleColumn2>
            <Slider {...settings}>
              {Cards.map((values, index) => {
                const { pic, name, numreviews, review } = values;
                return (
                  <>
                    <GoogleCardWrapper>
                      <GoogleCardContainer key={index}>
                        <GoogleDiv>
                          <GoogleCardPicture src={pic} alt="picture" />
                          <GoogleName>{name}</GoogleName>
                        </GoogleDiv>
                        <GoogleNumReviews>{numreviews}</GoogleNumReviews>
                        <GoogleStars>
                          <GoogleStar />
                          <GoogleStar />
                          <GoogleStar />
                          <GoogleStar />
                          <GoogleStar />
                        </GoogleStars>
                        <GoogleReview>{review}</GoogleReview>
                      </GoogleCardContainer>
                    </GoogleCardWrapper>
                  </>
                );
              })}
            </Slider>
          </GoogleColumn2>
        </GoogleWrapper>
      </ClientContainer>
    </>
  );
};

export default ClientSection;

import styled from "styled-components";
import { Link } from "react-scroll";
import { AiFillStar } from "react-icons/ai";

export const ClientContainer = styled.div`
  background: #f8f8f3;
  /* 0px  */
  padding: 7vw 16.61vw;
  overflow: hidden;
  transition: 0.7s all ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 980px) {
    padding: 0px 50px 60px 50px;
  }
  @media screen and (max-width: 690px) {
    padding: 0px 24px;
    height: auto;
    position: relative;
    overflow: hidden;
  }
`;

export const ClientHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  margin-bottom: 0vw;
  color: black;
  font-size: 2.6vw;
  /* font-size: 50px; */
  padding-bottom: 2.6vw;
  /* padding-bottom: 50px; */
  text-align: center;

  @media screen and (max-width: 980px) {
    font-size: 25px;
    padding-bottom: 15px;
    line-height: 30px;
  }

  @media screen and (max-width: 690px) {
    font-size: 25px;
  }
`;

export const GoogleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22vw;
  width: 61vw;
  border-radius: 1.3vw;
  @media screen and (max-width: 690px) {
    height: 600px;
    width: 100%;
    flex-direction: column;
  }
`;

export const GoogleColumn1 = styled.div`
  border-radius: 1.3vw 0vw 0vw 1.3vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 22vw;
  width: 60vw;
  background: white;
  padding: 2vw;
  @media screen and (max-width: 690px) {
    height: 300px;
    width: 100%;
    padding: 24px;
  }
`;

export const GoogleColumn2 = styled.div`
  border-radius: 0vw 1.3vw 1.3vw 0vw;
  width: 41vw;
  height: 22vw;
  background: white;
  @media screen and (max-width: 690px) {
    height: 300px;
    width: 100%;
    padding: 30px;
  }
`;

export const GoogleCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

export const GoogleCardContainer = styled.a`
  text-decoration: none;
  width: 40vw;
  height: 20vw;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 1vw;
  background: white;
  border-radius: 1.3vw;
  @media screen and (max-width: 690px) {
    height: 300px;
    width: 100%;
  }
`;

export const GoogleCardPicture = styled.img`
  height: auto;
  width: auto;
  display: block;
  margin-right: 0.5vw;
`;
export const GoogleLogoPic = styled.img`
  height: auto;
  width: 30%;
  display: block;
`;

export const GoogleStars = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.2vw;
`;
export const GoogleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5vw;
`;

export const GoogleReviews = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.3vw;
  color: #9aa0a6;
  margin-bottom: 0px;
  @media screen and (max-width: 690px) {
    font-size: 20px;
  }
`;
export const GoogleReviewBot = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.9vw;
  color: black;
  margin-bottom: 0px;
  @media screen and (max-width: 690px) {
    font-size: 13px;
  }
`;
export const GoogleRed = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 4vw;
  color: #ff4b26;
  margin-bottom: 0px;
`;
export const GoogleName = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.83vw;
  color: black;
  margin-bottom: 0px;
`;
export const GoogleNumReviews = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.73vw;
  color: #9aa0a6;
  margin-bottom: 0.2vw;
`;
export const GoogleReview = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.73vw;
  color: black;
  margin-bottom: 0px;
`;
export const GoogleStar = styled(AiFillStar)`
  font-size: 1vw;
  color: #f7b704;
`;
export const GoogleStar2 = styled(AiFillStar)`
  font-size: 1.5vw;
  color: #f7b704;
`;

export const Cards = [
    {
      pic: require("../../../images/google1.png"),
      name: "Matthias Maurer",
      numreviews: "1 review",
      review:
        "Thought the recommendation of a friend of mine, I decided to do my freelancer visa with Dynamic Freelancer. Natasha Harrison was my point of contact.  The whole process was absolutely smooth and without any headache.  Natasha was always reachable for questions and input delivering a superb communication. Well done and as long as Natasha is in the company, I always will come back. She is amazing and a great asset for Dynamic Freelancer.  Thanks again.",
    },
    {
      pic: require("../../../images/google1.png"),
      name: "Lidwin Hartono",
      numreviews: "4 reviews",
      review:
        "Dynamic Freelancer team is professional and reliable; every touchpoint was delivered efficiently. Rochel has been very helpful and prompt to update on the progress to hassle-free the whole experience. I am glad that I have chosen Dynamic Freelancer and definitely highly recommend their service.",
    },
    {
      pic: require("../../../images/google1.png"),
      name: "Luis Antonio Canettoli Ordoñez",
      numreviews: "1 review",
      review:
        "The process with this company has been overall smooth and painless. This service is totally legit and quick: Shirin and Mary have been incredibly helpful since day 1. I will share here some of my experience for freelancers willing to relocate to Dubai. First of all I'd suggest to get a temporary stay for at least 6 weeks. I arrived Feb 11, got my med test on Feb 16. Next week fingerprinting, the following week passport dropoff and retrieval, eventually ID released only on March 9. After your ID is released you'll have to apply for a bank account and get a chequebook to rent an apartment (it's not happening without it): banks here take 5-6 working days for your account approval and on top of that 3-4 working days to deliver your chequebook! That took me by surprise, and had to relocate from my temporary stay, this was an unplanned expense. Eventually I managed to sign a rental contract in Mar 21 and get in the apartment on Mar 24. Make sure your temporary stay is available for this long! Hopefully this is useful for other freelancers.",
    },
  ];
  