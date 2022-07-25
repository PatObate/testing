import styled from "styled-components";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const MenuContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: relative;
  background: #182436;
  padding: 5.6vw 12.29vw 5.6vw 7.29vw;
  @media screen and (max-width: 690px) {
    padding: 85px 30px;
    overflow: hidden;
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
    align-self: center;
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
    height: 10%;
  }
`;

export const MenuContent = styled(motion.div)`
  height: 100%;
`;

export const ArrowRight = styled(Lottie)`
  z-index: 1;
  height: auto;
  width: 7.42vw;
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

export const LinkWrapperWhole = styled(motion.div)`
  position: fixed;
  left: 0vw;
  top: 0vw;
  cursor: pointer;
  @media screen and (max-width: 690px) {
    bottom: 10px;
    top: auto;
  }
`;

export const LinkWrapper2 = styled(Link)`
  height: 100vh;
  width: auto;
  /* width: 200px; */
  cursor: pointer;
  opacity: 1;
  display: flex;
  top: 0;
  transform: rotate(180deg);
  transition: 2s all ease;
  z-index: 2;
  opacity: ${({ opac }) => (opac ? "0" : "1")};
  display: ${({ none }) => (none ? "none" : "flex")};
  @media screen and (max-width: 690px) {
    height: auto;
  }
`;

export const ArrowDiv = styled(motion.div)``;
