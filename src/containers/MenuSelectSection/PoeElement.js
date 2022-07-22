import styled from "styled-components";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const PoeContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  padding: 5.6vw 7.29vw;
  overflow: hidden;
  @media screen and (max-width: 690px) {
    padding: 50px 30px;
    min-height: 100vh;
    height: auto;
    overflow: auto;
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
    font-size: 20px;
    width: 100%;
    padding-bottom: 20px;
    text-align: center;
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
    align-items: flex-start;
  }
`;

export const PoeContentNone = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const CardRow2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const CardContainer2 = styled.div`
  height: 40.99vw;
  display: ${({ more }) => (more ? "flex" : "none")};
  width: 35.42vw;
  background: #171b236e;
  border-radius: 0vw 1.28vw 1.28vw 0vw;
  padding: ${({ triplewidth }) =>
    triplewidth ? " 3.96vw 0.79vw" : " 3.96vw 4.79vw"};
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 690px) {
    display: none;
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
  @media screen and (max-width: 690px) {
    height: 15vh;
  }
`;

export const CardContainer = styled.div`
  height: 40.99vw;
  width: ${({ more }) => (more ? "52.57vw;" : "27.5vw")};
  background: white;
  transition: 0.7s all ease;
  border-radius: ${({ more }) => (more ? "1.28vw 0vw 0vw 1.28vw" : "1.28vw")};
  padding: 2.34vw 2.08vw;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 690px) {
    width: 100%;
    height: auto;
    border-radius: 25px;
    padding: 20px 15px;
  }
`;

export const CardWrapper = styled.div`
  display: ${({ hide }) => (hide ? "block" : "none")};
`;

export const CardHeader = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.41vw;
  color: #08111b;
  font-weight: 600;
  padding-bottom: 0.83vw;
  @media screen and (max-width: 690px) {
    padding-bottom: 15px;
    font-size: 15px;
  }
`;

export const CardVid = styled.video`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;

export const CardVideoMain = styled.div`
  display: block;
  width: ${({ more }) => (more ? "14.48vw" : "100%")};
  height: 12.27vw;
  border-radius: 30px;
  transition: 0.7s all ease;
  overflow: hidden;
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

export const CardSource = styled.source``;

export const CardData = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 0.83vw;
  color: #111830;
  font-weight: 300;
  line-height: 2;
  text-align: left;
  padding-bottom: 0.83vw;
  @media screen and (max-width: 690px) {
    font-size: 13px;
    line-height: 1.5;
    padding-bottom: 10px;
  }
`;

export const MenuNavWrapper = styled.div`
  display: ${({ more }) => (more ? "none" : "block")};
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const CardButton = styled.div`
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

    text-align: center;
    font-size: 14px;
    justify-content: center;
    :hover {
      transition: 0.5s all ease-in-out;
      width: 90px;
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
    font-size: 14px;
  }
`;

export const CardMobOption1 = styled.div`
  width: 100%;
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

export const CardMobWrapper = styled.div`
  @media screen and (max-width: 690px) {
    width: 100%;
    height: auto;
    display: ${({ more }) => (more ? "block" : "none")};
    padding: 25px 0px;
    border-radius: 25px;
    background: #425893ba;
    margin: 20px auto;
  }
  @media screen and (min-width: 691px) {
    display: none;
  }
`;

export const CardButtonWrapper = styled.div`
  margin: auto;
`;
