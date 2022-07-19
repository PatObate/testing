import styled from "styled-components";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../../images/backgroundmobile.jpg";

export const SupportContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  padding: 12.6vw 7.29vw 2.6vw 7.29vw;
  /* padding: 270px 140px 50px 140px; */
  z-index: 2;
  @media screen and (max-width: 690px) {
    background: url(${img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 10px 30px;
  }
`;

export const SupportContent = styled(motion.div)`
  height: 100%;
  width: 100%;
`;

export const SupportContent2 = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

export const SupportWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 690px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const SupportHeader = styled(motion.h1)`
  font-family: "Poppins", sans-serif;
  font-size: 3.13vw;
  /* font-size: 60px; */
  color: white;
  font-weight: 100;
  width: 36.16vw;
  /* width: 675px; */
  line-height: 1.3;
  @media screen and (max-width: 690px) {
    font-size: 28px;
    text-align: start;
    width: 100%;
  }
`;

export const SupportSpan = styled.span`
  font-weight: 600;
`;

export const SupportRow = styled.div`
  width: 100%;
`;

export const SupportRow2 = styled.div`
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const SupportRow3 = styled.div`
  display: none;
  @media screen and (max-width: 690px) {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const SupportRow4 = styled.div`
  @media screen and (max-width: 690px) {
    display: none;
  }
`;
export const SupportSub = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.56vw;
  /* font-size: 30px; */
  color: #ffffff;
  font-weight: 100;
  text-align: start;
  padding-bottom: 1.04vw;
  @media screen and (max-width: 690px) {
    font-size: 13px;
    text-align: start;
    width: 100%;
    margin: auto;
  }
`;

export const SupportImgMob = styled.div`
  height: 100px;
  width: 200px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s all ease-in-out;
  border-radius: 25px;
  flex-direction: column;
`;

export const SupportCardContainer = styled(motion.div)`
  height: 18.01vw;
  /* height: 365px; */
  width: 46.12vw;
  /* width: 885.5px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #12233345;
  border-radius: 1.56vw;
  /* border-radius: 30px; */
  margin-bottom: 6.25vw;
  padding: 0px 6vw;
  @media screen and (max-width: 690px) {
    margin: auto;
    padding: 10px 10px;
    flex-direction: column;
    height: 350px;
    width: 100%;
    justify-content: space-evenly;
    border-radius: 25px;
  }
`;

export const SupportImg = styled.img`
  width: 7.97vw;
  height: 10.52vw;
  object-fit: cover;
  margin-bottom: 1.3vw;
  transition: 0.5s all ease-in-out;
  border-radius: 1.15vw;
  /* padding-bottom: 25px; */
  :hover {
    transition: 0.5s all ease-in-out;
    transform: translateY(-0.52vw);
    box-shadow: 0 0.52vw 0.52vw rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 690px) {
    height: 100px;
    width: 200px;
    border-radius: 25px;
  }
`;
export const SupportImg2 = styled.img`
  width: 20%;
  height: auto;
  padding-bottom: 2.5vw;
  /* padding-bottom: 25px; */
  @media screen and (max-width: 690px) {
    width: 33%;
    padding-bottom: 35px;
  }
`;
export const SupportImg3 = styled.img`
  width: 40%;
  height: auto;
  /* padding-bottom: 25px; */
  @media screen and (max-width: 690px) {
    width: 62%;
  }
`;

export const SupportTag = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.25vw;
  /* font-size: 24px; */
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  line-height: 1;
  @media screen and (max-width: 690px) {
    font-size: 13px;
  }
`;

export const SupportLight = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.25vw;
  /* font-size: 24px; */
  color: #ffffff;
  font-weight: 100;
  text-align: center;
  @media screen and (max-width: 690px) {
    font-size: 15px;
  }
`;

export const SupportLine = styled.div`
  border-bottom: 0.1vw solid #834924;
  /* border-bottom: 2px solid #834924; */
  width: 10.42vw;
  /* width: 200px; */
  margin-top: 14.48vw;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const SupportTiny = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 0.83vw;
  /* font-size: 16px; */
  color: #ffffff;
  font-weight: 100;
  text-align: start;
  padding-bottom: 1vw;
  @media screen and (max-width: 690px) {
    text-align: center;
    font-size: 12px;
    width: auto;
  }
`;

export const SupportImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 46.12vw;
  /* width: 885.5px; */
  @media screen and (max-width: 690px) {
    margin: auto;
    justify-content: center;
    width: auto;
  }
`;
export const LinkWrapperImg = styled(Link)`
  text-decoration: none;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;
export const LinkWrapperImg2 = styled(Link)`
  display: none;
  @media screen and (max-width: 690px) {
    display: block;
    text-decoration: none;
  }
`;

export const LinkWrapper = styled(Link)`
  position: absolute;
  right: 0vw;
  top: 0vw;
  height: 98%;
  width: 7.42vw;
  /* width: 200px; */
  cursor: pointer;
  opacity: ${({ opac }) => (opac ? "0" : "1")};
  display: ${({ none }) => (none ? "none" : "flex")};
  transition: 2s all ease;
  @media screen and (max-width: 690px) {
    width: auto;
    height: 100vh;
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
  @media screen and (max-width: 690px) {
    width: auto;
    height: 100vh;
  }
`;

export const ArrowRight = styled(Lottie)`
  z-index: 1;
  /* width: 200px; */
  width: 7.42vw;
  @media screen and (max-width: 690px) {
    width: 70px;
  }
`;

export const ArrowLeft = styled(Lottie)`
  z-index: 1;
  width: 7.42vw;
  transform: rotate(180deg);
  /* width: 200px; */
  @media screen and (max-width: 690px) {
    width: 70px;
  }
`;

export const ArrowDiv = styled(motion.div)``;
