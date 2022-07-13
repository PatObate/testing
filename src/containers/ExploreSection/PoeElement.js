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
  background-repeat: no-repeat;
  padding: 2.6vw 7.29vw;
  @media screen and (max-width: 690px) {
    padding: 10px 30px;
  }
`;

export const PoeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

export const LinkWrapper2 = styled(Link)`
  position: absolute;
  left: 0vw;
  height: 98%;
  width: 7.42vw;
  /* width: 200px; */
  cursor: pointer;
  opacity: 1;
  display: flex;
  top: 0;
  transition: 2s all ease;
  transform: rotate(180deg);
`;

export const ArrowDiv = styled(motion.div)``;

export const CardContainer = styled.div`
  height: 35.99vw;
  width: 45.57vw;
  background: #313a4c;
  border-radius: 3.28vw;
  padding: 4.17vw 3.13vw;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 690px) {
    width: 100%;
    height: 550px;
    padding: 20px 15px;
  }
`;

export const CardWrapper = styled.div`
  display: ${({ hide }) => (hide ? "block" : "none")};
`;

export const CardHeader = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.41vw;
  color: white;
  font-weight: 600;
  padding-bottom: 1.41vw;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const CardData = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 0.83vw;
  color: white;
  font-weight: 100;
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
  background: #313a4c;
  border-radius: 3.28vw;
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

export const CardWrapperMob2 = styled.div`
  display: ${({ mobnone }) => (mobnone ? "none" : "block")} !important;
`;

export const CardWrapperMob3 = styled.div`
  display: ${({ mobnone }) => (mobnone ? "none" : "block")} !important;
`;

export const CardRow2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardImg2Mob = styled.div`
  height: 100px;
  width: 200px;
  border-radius: 25px;
  padding: 20px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  &:before {
    content: "";
    top: 0;
    width: 200px;
    border-radius: 25px;
    height: 100px;
    position: absolute;
    filter: ${({ highlight }) => (highlight ? "hue-rotate(3deg)" : "")};
    background: ${({ highlight }) => (highlight ? "#0037ffcc" : "#425893ba")};
    z-index: 2;
    /* top: 70px; */
    transition: 0.7s all ease;
  }
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
  &:before {
    content: "";
    width: 10.63vw;
    border-radius: 2.6vw;
    height: 12.76vw;
    position: absolute;
    filter: ${({ highlight }) => (highlight ? "hue-rotate(3deg)" : "")};
    background: ${({ highlight }) => (highlight ? "#0037ffcc" : "#425893ba")};
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
  z-index: 2;
`;
