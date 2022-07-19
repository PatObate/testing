import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

export const IntroBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: #182436;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 690px) {
    padding: 10px 30px;
  }
`;

export const IntroCard = styled(motion.div)`
  width: 15.63vw;
  /* width: 300px; */
  height: 5.21vw;
  /* height: 100px; */
  border-radius: 1.56vw;
  /* border-radius: 30px; */
  background: #2e3747;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 690px) {
    width: 180px;
    height: 60px;
    padding: 15px;
    border-radius: 30px;
  }
`;

export const IntroSub = styled(motion.h2)`
  font-family: "Poppins", sans-serif;
  font-size: 1.7vw;
  /* font-size: 60px; */
  color: white;
  font-weight: 100;
  text-align: center;
  padding-bottom: 20px;
  @media screen and (max-width: 690px) {
    font-size: 17px;
  }
`;

export const IntroHeader = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 3.13vw;
  /* font-size: 60px; */
  color: white;
  font-weight: 100;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Volume = styled(Lottie)`
  z-index: 1;
  height: auto;
  width: 3.13vw;
  display: block;
  /* width: 60px; */
  @media screen and (max-width: 690px) {
    width: 30px;
  }
`;

export const IntroOption = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-size: 2.13vw;
  /* font-size: 30px; */
  color: white;
  font-weight: 200;
  text-decoration: none;
  @media screen and (max-width: 690px) {
    font-size: 15px;
  }
`;
