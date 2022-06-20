import styled from "styled-components";
import play from "../../../svg/playbutton.svg";
import { Link } from "react-scroll";

export const HeroContainer = styled.div`
  background: #f8f8f3;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 0px  */
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 10;
  /* 0px 319px */

  @media screen and (max-width: 980px) {
    height: 70vh;
  }

  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const MHeroContainer = styled.div`
  @media screen and (min-width: 691px) {
    display: none;
  }
  @media screen and (max-width: 690px) {
    height: 120vh;
    width: 100%;
    overflow: hidden;
    z-index: 10;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }
`;

export const MHeroSection = styled.div`
  height: 60%;
  background: #f8f8f3;
  padding: 10px 24px;
  width: 100%;
  position: relative;
`;

export const MRatingSection = styled.div`
  height: 40%;
  width: 100%;
  background: white;
  padding: 50px 24px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const WordsContainer = styled.div`
  width: 50%;
  height: 65%;
  z-index: 2;
  padding: 0vw 0vw 0vw 16.61vw;

  @media screen and (max-width: 980px) {
    padding: 0px 0px 0px 50px;
  }

  @media screen and (max-width: 690px) {
    padding: 0px 0px 0px 20px;
    width: 100%;
  }
`;

export const Heading = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: black;
  padding-bottom: 0.82vw;
  /* padding-bottom: 15.75px; */
  font-size: 3.65vw;
  /* 70px */
  width: 34.64vw;
  /* width: 665px; */
  line-height: 4.32vw;
  /* 83px */
  margin-bottom: 0px;
  @media screen and (max-width: 980px) {
    font-size: 40px;
    width: auto;
    padding-bottom: 20px;
    line-height: 48px;
  }

  @media screen and (max-width: 690px) {
    font-size: 31px;
    width: auto;
    line-height: 35px;
    text-align: center;
    width: 306px;
    margin: auto;
    display: block;
    padding-top: 100px;
  }
`;

export const HeadingBold = styled.span`
  font-weight: 600;
`;

export const SubHeading = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 300;
  color: black;
  margin-bottom: 0px;
  font-size: 0.94vw;
  /* original is 18px */
  padding-bottom: 4.34vw;
  /* padding-bottom: 45px; */
  width: 33.96vw;
  //652px
  line-height: 1.09vw;
  @media screen and (max-width: 980px) {
    font-size: 15px;
    width: auto;
    padding-bottom: 10px;
    line-height: 17px;
  }
`;

export const RatingContainer = styled.div`
  width: 17.15vw;
  // 310px
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  @media screen and (max-width: 980px) {
    width: 290px;
  }
  @media screen and (max-width: 690px) {
    width: 100%;
  }
`;

export const StarIcon = styled.div`
  font-size: 0.78vw;
  /* original font size 15px */
  color: #f7263d;
  @media screen and (max-width: 980px) {
    font-size: 13px;
  }
  @media screen and (max-width: 690px) {
    width: auto;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RatingTwo = styled.div``;

export const GoogleRating = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ExcellRating = styled.span`
  font-size: 0.78vw;
  /* original font size 15px */
  color: black;
  font-family: "Inter", sans-serif;
  font-weight: 700;

  @media screen and (max-width: 980px) {
    font-size: 14px;
  }
  @media screen and (max-width: 690px) {
    font-size: 13px;
  }
`;

export const NumberRating = styled.p`
  font-size: 0.78vw;
  /* original font size 15px */
  color: black;
  font-family: "Inter", sans-serif;
  margin-bottom: 0px;
  font-weight: 400;
  padding-left: 0.26vw;
  //5px
  line-height: 0.99vw;
  margin-bottom: 0px;
  //19px

  @media screen and (max-width: 980px) {
    font-size: 13px;
    padding-left: 5px;
    line-height: 15px;
  }
  @media screen and (max-width: 690px) {
    padding-left: 3px;
  }
`;

export const ContentContainer = styled.div`
  width: 50%;
  /* original is 500px */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 980px) {
    height: 500px;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const ContentPhoto = styled.div`
  position: absolute;
  right: -4vw;
  /* right: -372px; */
  top: 3vw;
  /* top: -69px; */
  z-index: 3;
  height: 43.23vw;
  width: 44.27vw;
  @media screen and (max-width: 690px) {
    width: 700px;
    height: auto;
    right: auto;
    top: auto;
    bottom: 120px;
    left: -150px;
  }
`;
export const ContentPlayButton = styled.div`
  position: absolute;
  background-image: url(${play});
  background-repeat: no-repeat;
  background-position: center;
  right: -3vw;
  /* right: -372px; */
  top: 0vw;
  /* top: -69px; */
  z-index: 5;
  height: 43.23vw;
  width: 44.27vw;
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover {
    background-size: 300px 100px;
    transition: 0.3s all ease;
  }
`;

export const ContentPhoto2 = styled.img`
  z-index: 0;
  opacity: 0;
`;

export const ContentBlob = styled.img`
  position: absolute;
  z-index: 1;
  height: 41.85vw;
  width: 42.6vw;
  right: -1vw;
  /* right: -372px; */
  top: 4vw;
  @media screen and (max-width: 690px) {
    width: 700px;
    height: auto;
    right: auto;
    top: auto;
    bottom: 125px;
    left: -150px;
  }
`;

export const RatingSign = styled.div`
  padding: 1.56vw 2.34vw;
  /* padding: 30px 45px; */
  position: absolute;
  right: 24vw;
  top: 28vw;
  width: 17.03vw;
  /* width: 327px; */
  background: white;
  z-index: 4;
  border-radius: 1.67vw;
  box-shadow: 0vw 0.21vw 1.56vw #77777729;
  /* box-shadow: 0px 4px 30px #77777729; */
  /* border-radius: 32px; */
  @media screen and (max-width: 980px) {
    padding: 17px 17px;
    background-position: top center;
    border-radius: 32px;
    width: 280px;
    right: 30px;
    top: 160px;
  }
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start !important;
  padding-bottom: 0.63vw;
  /* padding-bottom: 12px; */
  @media screen and (max-width: 980px) {
    padding-bottom: 10px;
  }
`;

export const Star = styled.div`
  font-size: 1.04vw;
  /* font-size: 20px; */
  color: #14cc7e;
  @media screen and (max-width: 980px) {
    font-size: 15px;
  }
`;

export const RatingWords = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 300;
  color: black;
  font-size: 0.83vw;
  margin-bottom: 0px;
  /* font-size: 16px; */
  padding-bottom: 0.63vw;
  text-align: start;
  /* padding-bottom: 12px; */
  @media screen and (max-width: 980px) {
    font-size: 15px;
    padding-bottom: 20px;
    line-height: 16px;
  }
`;

export const RatingName = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  margin-bottom: 0px;
  color: black;
  font-size: 0.78vw;
  /* font-size: 15px; */
  @media screen and (max-width: 980px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const MouseDown = styled(Link)`
  width: 3.17vw;
  position: absolute;
  z-index: 10;
  cursor: pointer;
  display: flex;
  right: 3.65vw;
  /* right: 70px; */
  top: 90vh;
  @media screen and (max-width: 980px) {
    display: none;
  }
`;
