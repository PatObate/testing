import styled from "styled-components";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const PoeContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  padding: 2.6vw 12.29vw 2.6vw 7.29vw;
  @media screen and (max-width: 690px) {
    padding: 10px 30px;
    height: 120vh;
  }
`;

export const PoeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const PoeRow = styled.div``;

export const PoeHeader = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2.6vw;
  /* font-size: 60px; */
  color: white;
  font-weight: 600;
  /* width: 675px; */
  padding-bottom: 2.19vw;
  @media screen and (max-width: 690px) {
    font-size: 17px;
    width: 100%;
  }
`;

export const PoeContent = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 690px) {
    justify-content: center;
  }
`;

export const PoeContentNone = styled(motion.div)``;

export const ArrowRight = styled(Lottie)`
  z-index: 1;
  height: auto;
  width: 7.42vw;
  /* width: 200px; */
  @media screen and (max-width: 690px) {
    width: 70px;
  }
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

  
  @media screen and (max-width: 690px) {
    width: auto;
  }
`;

export const CardContainer = styled.div`
  height: 38.78vw;
  width: 27.5vw;
  background: #313a4c;
  border-radius: 3.28vw;
  padding: 2.34vw 2.08vw;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 690px) {
    width: 100%;
    height: 600px;
    padding: 20px 15px;
  }
`;

export const CardWrapper = styled.div``;

export const CardHeader = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.41vw;
  color: white;
  font-weight: 600;
  padding-bottom: 0.83vw;
  @media screen and (max-width: 690px) {
    padding-bottom: 15px;
    font-size: 15px;
  }
`;

export const CardVideoWrapper = styled.div`
  width: 100%;
  height: 14.27vw;
  margin-bottom: 0.83vw;
  border-radius: 1.56vw;
  overflow: hidden;
  @media screen and (max-width: 690px) {
    border-radius: 25px;
    height: 200px;
    margin-bottom: 15px;
  }
`;
export const CardVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const CardSource = styled.source``;

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

export const MenuNavWrapper = styled.div`
  display: block;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const CardButton = styled(Link)`
  width: 6.93vw;
  height: 2.14vw;
  padding: 0vw 0.68vw;
  background: #1840aa;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 1.09vw;
  cursor: pointer;
  text-decoration: none;
  transition: 0.5s all ease-in-out;
  :hover {
    transition: 0.5s all ease-in-out;
    width: 8.39vw;
    background: #834924;
  }
  @media screen and (max-width: 690px) {
    width: 90px;
    height: 30px;
    border-radius: 30px;
    padding: 0px 10px;

    :hover {
      transition: 0.5s all ease-in-out;
      width: 120px;
      background: #834924;
    }
  }
`;

export const ButtonText = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 0.83vw;
  color: white;
  font-weight: 100;
  text-align: left;
  @media screen and (max-width: 690px) {
    font-size: 10px;
  }
`;
