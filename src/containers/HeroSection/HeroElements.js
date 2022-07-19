import styled from "styled-components";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../../images/backgroundmobile.jpg";

export const VidContainer = styled(motion.div)`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    background: linear-gradient(89deg, #14161a 0%, #0e264cc7 100%);
    height: 100%;
    z-index: 4;
    top: 0;
    left: 0;
    /* top: 70px; */
    transition: 0.7s all ease;
  }
  @media screen and (max-width: 690px) {
    width: 100%;
    height: 100%;
  }
`;

export const HeroContainer = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  padding: 4.69vw 9.9vw;
  /* padding: 90px 190px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: transparent;
  z-index: 2;
  @media screen and (max-width: 690px) {
    background: linear-gradient(89deg, #14161a 0%, #0e264cc7 100%), url(${img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 10px 30px;
    height: 120vh;
  }
`;

export const HeroLogo = styled.img`
  max-width: 100%;
  height: auto;
  padding-bottom: 1.82vw;
  display: block;
  margin: auto;
  /* padding-bottom: 35px; */
`;

export const HeroHeader = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 3.39vw;
  /* font-size: 65px; */
  color: #ffffff70;
  font-weight: 100;
  padding-bottom: 4.58vw;
  /* padding-bottom: 88px; */
  text-align: center;
  @media screen and (max-width: 690px) {
    font-size: 17px;
  }
`;

export const HeroNumber = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 3.13vw;
  /* font-size: 60px; */
  color: #2648ff;
  font-weight: 400;
  text-align: center;
  @media screen and (max-width: 690px) {
    font-size: 30px;
  }
`;

export const HeroTag = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1.04vw;
  /* font-size: 20px; */
  color: #ffffffad;
  font-weight: 300;
  text-align: center;
  @media screen and (max-width: 690px) {
    font-size: 20px;
  }
`;

export const HeroData = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 36.46vw;
  @media screen and (max-width: 690px) {
    width: 100%;
    flex-direction: column;
    height: 248px;
    padding-bottom: 40px;
  }
`;

export const HeroVideoWrapperBig = styled.div`
  overflow: hidden;
  z-index: 2;
  opacity: ${({ big }) => (big ? "1" : "0")};
  display: ${({ none }) => (none ? "flex" : "none")};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  transition: 2s all ease;
  min-width: 100%;
  min-height: 100%;
  @media screen and (max-width: 690px) {
    width: 100%;
    height: 100%;
  }
`;
export const HeroVideoWrapper = styled.div`
  overflow: hidden;
  border-radius: 1.56vw;
  /* border-radius: 19px; */
  z-index: 3;
  width: 16.95vw;
  /* width: 264px; */
  height: 9.66vw;
  /* height: 147px; */
  position: absolute;
  bottom: 2.03vw;
  /* bottom: 39px; */
  right: 2.86vw;
  /* right: 55px; */
  @media screen and (max-width: 690px) {
    width: 100%;
    height: 207px;
    position: relative;
    bottom: auto;
    right: auto;
  }
`;

export const BackgroundHeroVideo = styled.video`
  width: 100%;
  height: 100%;
  -webkit-filter: blur(0.68vw);
  /* -webkit-filter: blur(13px); */
  filter: blur(0.68vw);
  /* filter: blur(13px); */
  object-fit: fill;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroSource = styled.source``;

export const ArrowDiv = styled(motion.div)``;

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
  position: absolute;
  right: 0vw;
  overflow: hidden;
  height: 98%;
  width: 8.42vw;
  /* width: 200px; */
  cursor: pointer;
  opacity: 1;
  display: flex;
  top: 0;
  transition: 2s all ease;
  opacity: ${({ opac }) => (opac ? "0" : "1")};
  display: ${({ none }) => (none ? "none" : "flex")};

  @media screen and (max-width: 690px) {
    width: auto;
  }
`;
