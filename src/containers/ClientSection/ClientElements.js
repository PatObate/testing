import styled from "styled-components";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const LandingContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  padding: 5.6vw 7.29vw;
  /* padding: 90px 190px; */
  background: linear-gradient(89deg, #14161a 0%, #0e264c 100%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  z-index: 2;
  @media screen and (max-width: 690px) {
    padding: 50px 30px;
  }
`;

export const LandingHolder = styled.div`
  width: 57.55vw;
  @media screen and (max-width: 690px) {
    width: 100%;
  }
`;

export const LandingPictures = styled.div`
  margin: auto;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  @media screen and (max-width: 690px) {
    align-items: flex-end;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const LandingPicSmall = styled.img`
  width: 10%;
  height: auto;
  border-radius: 0.5vw;
  margin: 0.5vw;
  transition: all 0.3s ease-in-out;

  :hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-0.52vw);
  }
  @media screen and (max-width: 690px) {
    margin: 5px;
    border-radius: 5px;
    width: 10%;
  }
`;
export const LandingPicMedium = styled.img`
  width: 14%;
  height: auto;
  border-radius: 0.5vw;
  margin: 0.5vw;
  transition: all 0.3s ease-in-out;

  :hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-0.52vw);
  }
  @media screen and (max-width: 690px) {
    margin: 5px;
    border-radius: 5px;
    width: 20%;
  }
`;
export const LandingPicLarge = styled.img`
  width: 21%;
  height: auto;
  border-radius: 0.5vw;
  margin: 0.5vw;
  transition: all 0.3s ease-in-out;

  :hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-0.52vw);
  }
  @media screen and (max-width: 690px) {
    margin: 5px;
    border-radius: 5px;
    width: 30%;
  }
`;

export const LandingPicXLarge = styled.img`
  width: 25%;
  height: auto;
  border-radius: 0.5vw;
  margin: 0.5vw;
  transition: all 0.3s ease-in-out;
  
  :hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-0.52vw);
  }

  @media screen and (max-width: 690px) {
    margin: 5px;
    border-radius: 5px;
    width: 40%;
  }
`;

export const LandingHeader = styled.h1`
  font-family: "Poppins", sans-serif;
  line-height: 1.8;
  font-size: 1.92vw;

  /* font-size: 65px; */
  color: white;
  font-weight: 300;
  /* padding-bottom: 88px; */
  text-align: start;
  @media screen and (max-width: 690px) {
    font-size: 25px;
    width: auto;
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
`;

export const LandingSpan = styled.span`
  font-weight: 600;

  background: #1840aa;
  padding: 0.21vw 0.63vw;
  @media screen and (max-width: 690px) {
    font-size: 25px;
    width: auto;
    padding: 4px 12px;
  }
`;

export const ArrowRight = styled(Lottie)`
  z-index: 1;
  height: auto;
  width: 7.42vw;
  /* width: 200px; */
  @media screen and (max-width: 690px) {
    width: 70px;
  }
`;

export const LinkWrapper = styled(Link)`
  position: fixed;
  right: 0vw;
  height: 100vh;
  width: auto;
  /* width: 200px; */
  cursor: pointer;
  opacity: 1;
  display: flex;
  top: 0;
  transition: 2s all ease;
  z-index: 2;
  opacity: ${({ opac }) => (opac ? "0" : "1")};
  display: ${({ none }) => (none ? "none" : "flex")};
`;
