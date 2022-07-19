import styled from "styled-components";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const MenuContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: #182436;
  padding: 2.6vw 12.29vw 2.6vw 7.29vw;
  @media screen and (max-width: 690px) {
    padding: 10px 30px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  @media screen and (max-width: 690px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

export const MenuHeader = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 3.13vw;
  /* font-size: 60px; */
  color: white;
  font-weight: 200;
  width: 27.16vw;
  line-height: 3.65vw;
  /* width: 675px; */
  @media screen and (max-width: 690px) {
    text-align: center;
    width: 100%;
    font-size: 28px;
    line-height: 35px;
  }
`;

export const MenuSpan = styled.span`
  font-weight: 700;
`;

export const MenuDiv = styled.div`
  display: none;

  @media screen and (max-width: 690px) {
    display: block;
  }
`;

export const MenuContent = styled(motion.div)`
  height: 100%;
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

export const Volume = styled(Lottie)`
  z-index: 1;
  height: auto;
  width: 3.13vw;
  /* width: 200px; */
`;

export const Volumediv = styled(motion.div)`
  z-index: 1;
  position: absolute;
  top: 2.6vw;
  left: 7.29vw;
  cursor: pointer;
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

  @media screen and (max-width: 690px) {
    width: auto;
    z-index: 2;
    height: 100vh;
  }
`;

export const ArrowDiv = styled(motion.div)``;
