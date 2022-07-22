import styled from "styled-components";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

export const LoadingBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(89deg, #14161a 0%, #0e264c 100%);
  align-items: center;
  justify-content: center;
  display: flex;
  @media screen and (max-width: 690px) {
    background: linear-gradient(358deg, #14161a 0%, #0e264c 100%);
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

export const LoadingLogoWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 2.6vw;
  @media screen and (max-width: 690px) {
    top: 40px;
  }
`;

export const LoadingLogo = styled.img`
  width: 15%;
  height: auto;
  margin: auto;
  display: block;
  @media screen and (max-width: 690px) {
    width: 50%;
  }
`;

export const NathanMusic = styled.audio``;

export const LoadingText = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 4.69vw;
  /* font-size: 90px; */
  color: white;
  font-weight: 100;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: -3.39vw;
  bottom: 0;
  @media screen and (max-width: 690px) {
    font-size: 30px;
  }
`;

export const TextWrapper = styled.div`
  width: 20.23vw;
  /* width: 350px; */
  position: relative;
  @media screen and (max-width: 690px) {
    width: 350px;
  }
`;
