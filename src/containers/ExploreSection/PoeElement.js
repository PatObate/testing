import styled from "styled-components";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../../images/about-uscopy.png";

export const PoeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(89deg, #14161a 0%, #0e264cc7 100%),
    url(${img});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  padding: 5.6vw 7.29vw;
  @media screen and (max-width: 690px) {
    padding: 10px 30px;
    height: 100vh;
    display: block;
  }
`;

export const PoeWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 690px) {
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const PoeContent = styled(motion.div)`
  @media screen and (max-width: 690px) {
    height: 100%;
  }
`;

export const PoeHeader = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2.6vw;
  /* font-size: 60px; */
  color: white;
  font-weight: 600;
  /* width: 675px; */
  padding-bottom: 0.73vw;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const PoeHeaderMob = styled.h1`
  display: none;
  @media screen and (max-width: 690px) {
    display: block;
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    /* font-size: 60px; */
    color: white;
    font-weight: 600;
    /* width: 675px; */
    align-self: flex-start;
  }
`;

export const PoeSub = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.25vw;
  /* font-size: 60px; */
  color: white;
  font-weight: 100;
  /* width: 675px; */
  padding-bottom: 3.39vw;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const ArrowRight = styled(Lottie)`
  z-index: 1;
  height: auto;
  width: 8.42vw;
  /* width: 200px; */
  @media screen and (max-width: 690px) {
    width: 70px;
  }
`;

export const LinkWrapper2 = styled(Link)`
  position: fixed;
  left: 0vw;
  height: 100vh;
  width: auto;
  /* width: 200px; */
  cursor: pointer;
  opacity: 1;
  display: flex;
  top: 0;
  transition: 2s all ease;
  transform: rotate(180deg);
  z-index: 2;
`;

export const ArrowDiv = styled(motion.div)``;

export const CardContainer = styled.div`
  height: 35.99vw;
  width: 52.57vw;
  background: white;
  border-radius: 1.28vw 0vw 0vw 1.28vw;
  padding: 4.17vw 3.13vw;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;
export const CardContainerMob = styled.div`
  width: 100%;
  height: auto;
  background: white;
  border-radius: 0px 0px 25px 25px;
  padding: 20px 15px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
`;

export const CardWrapper = styled.div`
  display: ${({ hide }) => (hide ? "block" : "none")};
`;

export const CardHeader = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.41vw;
  color: #08111b;
  font-weight: 600;
  padding-bottom: 1.41vw;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const CardData = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 0.83vw;
  color: #111830;
  font-weight: 300;
  line-height: 2;
  text-align: left;
  @media screen and (max-width: 690px) {
    font-size: 13px;
  }
`;

export const CardImg = styled.img`
  display: ${({ vid }) => (vid ? "none" : "block")};
  border-radius: 27px;
  object-fit: cover;
  width: 14.48vw;
  height: 9.27vw;
  margin-bottom: 36px;
  @media screen and (max-width: 690px) {
    border-radius: 25px;
    height: 200px;
    width: 100%;
    margin-bottom: 15px;
  }
`;

export const CardVideo = styled.div`
  display: ${({ vid }) => (vid ? "block" : "none")};
  width: 14.48vw;
  height: 9.27vw;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 36px;

  @media screen and (max-width: 690px) {
    border-radius: 25px;
    height: 200px;
    width: 100%;
    margin-bottom: 15px;
  }
`;

export const CardVid = styled.video`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;

export const CardSource = styled.source``;

export const CardContainer2 = styled.div`
  height: 35.99vw;
  width: 35.42vw;
  background: #171b236e;
  border-radius: 0vw 1.28vw 1.28vw 0vw;
  padding: ${({ triplewidth }) =>
    triplewidth ? " 3.96vw 0.79vw" : " 3.96vw 4.79vw"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const CardContainer2Mob = styled.div`
  @media screen and (min-width: 691px) {
    display: none;
  }
  @media screen and (max-width: 690px) {
    width: 100%;
  }
`;

export const CardWrapperMob = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardRow2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardMobWrapper = styled.div`
  display: flex;
`;

export const CardBox2 = styled.div`
  display: ${({ noextra }) => (noextra ? "none" : "flex")};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 10.63vw;
  height: 12.76vw;
  background: #75829a;
  border-radius: 2.6vw;
  transition: 0.7s all ease;
  align-items: center;
  justify-content: center;
  background-blend-mode: color-dodge;
  z-index: 2;
  &:before {
    content: "";
    width: 10.63vw;
    border-radius: 2.6vw;
    height: 12.76vw;
    position: absolute;
    filter: ${({ highlight }) => (highlight ? "hue-rotate(3deg)" : "")};
    background: ${({ highlight }) => (highlight ? "#0037ffcc" : "#425893ba")};
    mix-blend-mode: ${({ highlight }) => (highlight ? "hard-light" : "color")};
    z-index: 1;
    /* top: 70px; */
    transition: 0.7s all ease;
  }
`;

export const CardText2 = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.04vw;
  color: white;
  font-weight: 600;
  text-align: center;
  z-index: 3;
  @media screen and (max-width: 690px) {
    font-size: 15px;
    color: white;
    font-weight: 600;
    margin: auto;
    z-index: 3;
  }
`;

export const CardMobOption1 = styled.div`
  width: 100%;
  border-radius: 25px 25px 0px 0px;
  height: 50px;
  transition: 0.7s all ease;
  position: relative;
  z-index: 2;
  background-blend-mode: color-dodge;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    z-index: 1;
    content: "";
    width: 100%;
    border-radius: 25px 25px 0px 0px;
    height: 50px;
    position: absolute;
    filter: ${({ highlight }) => (highlight ? "hue-rotate(3deg)" : "")};
    background: ${({ highlight }) => (highlight ? "#0037ffcc" : "#425893ba")};
    mix-blend-mode: ${({ highlight }) => (highlight ? "hard-light" : "color")};
    z-index: 1;
    transition: 0.7s all ease;
  }
`;
export const CardMobOption2 = styled.div`
  width: 100%;
  height: 50px;
  transition: 0.7s all ease;
  position: relative;
  align-items: center;
  justify-content: center;
  display: ${({ noextra }) => (noextra ? "none" : "flex")};
  z-index: 2;
  &:before {
    z-index: 1;
    content: "";
    width: 100%;
    height: 50px;
    position: absolute;
    filter: ${({ highlight }) => (highlight ? "hue-rotate(3deg)" : "")};
    background: ${({ highlight }) => (highlight ? "#0037ffcc" : "#425893ba")};
    mix-blend-mode: ${({ highlight }) => (highlight ? "hard-light" : "color")};
    z-index: 1;
    transition: 0.7s all ease;
  }
`;
export const CardMobOption3 = styled.div`
  width: 100%;
  height: 50px;
  transition: 0.7s all ease;
  display: ${({ fourfivextra }) => (fourfivextra ? "none" : "flex")};
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 2;
  &:before {
    z-index: 1;
    content: "";
    width: 100%;
    height: 50px;
    position: absolute;
    filter: ${({ highlight }) => (highlight ? "hue-rotate(3deg)" : "")};
    background: ${({ highlight }) => (highlight ? "#0037ffcc" : "#425893ba")};
    mix-blend-mode: ${({ highlight }) => (highlight ? "hard-light" : "color")};
    z-index: 1;
    transition: 0.7s all ease;
  }
`;
export const CardMobOption4 = styled.div`
  width: 100%;
  height: 50px;
  transition: 0.7s all ease;
  position: relative;
  display: ${({ fiveextra }) => (fiveextra ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  z-index: 2;
  &:before {
    z-index: 1;
    content: "";
    width: 100%;
    height: 50px;
    position: absolute;
    filter: ${({ highlight }) => (highlight ? "hue-rotate(3deg)" : "")};
    background: ${({ highlight }) => (highlight ? "#0037ffcc" : "#425893ba")};
    mix-blend-mode: ${({ highlight }) => (highlight ? "hard-light" : "color")};
    z-index: 1;
    transition: 0.7s all ease;
  }
`;
export const CardMobOption5 = styled.div`
  width: 100%;
  height: 50px;
  transition: 0.7s all ease;
  position: relative;
  display: ${({ sixextra }) => (sixextra ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  z-index: 2;
  &:before {
    z-index: 1;
    content: "";
    width: 100%;
    height: 50px;
    position: absolute;
    filter: ${({ highlight }) => (highlight ? "hue-rotate(3deg)" : "")};
    background: ${({ highlight }) => (highlight ? "#0037ffcc" : "#425893ba")};
    mix-blend-mode: ${({ highlight }) => (highlight ? "hard-light" : "color")};
    z-index: 1;
    transition: 0.7s all ease;
  }
`;
