import styled from "styled-components";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import next from "../../images/Next.png";
import { motion } from "framer-motion";

export const SpecialContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  padding: 2.6vw 7.29vw;
  /* padding: 270px 140px 50px 140px; */
  background: linear-gradient(89deg, #000b1e 0%, #002549c9 100%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 690px) {
    padding: 10px 30px;
    height: 120vh;
  }
`;

export const SpecialContent = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

export const SpecialWrapper = styled.div`
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

export const SpecialDiv = styled.div`
  display: none;
  @media screen and (max-width: 690px) {
    display: block;
  }
`;

export const SpecialImgMob = styled.div`
  height: 100px;
  width: 200px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.5s all ease-in-out;
  border-radius: 25px;
`;

export const SpecialHeader = styled(motion.h1)`
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

export const SpecialSpan = styled.span`
  font-weight: 600;
`;
export const SpecialRight = styled.div`
  width: auto;
`;

export const SpecialSub = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.56vw;
  /* font-size: 30px; */
  color: #ffffff;
  font-weight: 100;
  text-align: start;
  @media screen and (max-width: 690px) {
    text-align: center;
    font-size: 12px;
  }
`;

export const SpecialCardContainer = styled.div`
  height: 19.01vw;
  /* height: 365px; */
  width: 46.12vw;
  /* width: 885.5px; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #12233345;
  border-radius: 1.56vw;
  /* border-radius: 30px; */
  @media screen and (max-width: 690px) {
    margin: auto;
    flex-direction: column;
    height: 300px;
    width: 100%;
    justify-content: space-evenly;
    border-radius: 25px;
  }
`;

export const SpecialImg = styled.img`
  width: 7.97vw;
  height: 10.52vw;
  object-fit: cover;
  margin-bottom: 1.3vw;
  border-radius: 1.15vw;
  /* padding-bottom: 25px; */
  @media screen and (max-width: 690px) {
    display: none;
  }
`;
export const SpecialImg2 = styled.img`
  width: 40%;
  height: auto;
  /* padding-bottom: 25px; */
`;

export const SpecialTag = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.25vw;
  /* font-size: 24px; */
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  @media screen and (max-width: 690px) {
    font-size: 13px;
  }
`;

export const SpecialLight = styled.p`
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

export const SpecialImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 46.12vw;
  /* width: 885.5px; */
`;

export const LinkWrapper = styled(Link)`
  position: absolute;
  right: 0vw;
  height: 100%;
  /* width: 200px; */
  cursor: url(${next}), auto;
  opacity: 1;
  display: flex;
  top: 0;
  transition: 2s all ease;

  @media screen and (max-width: 690px) {
    width: auto;
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
    height: 120vh;
  }
`;

export const ArrowDiv = styled(motion.div)``;
