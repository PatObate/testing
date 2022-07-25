import styled from "styled-components";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";

export const ClientVidContainer = styled(motion.div)`
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

export const ClientContainer = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  padding: 5.6vw 7.29vw;
  /* padding: 90px 190px; */
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  z-index: 2;
  @media screen and (max-width: 690px) {
    padding: 50px 30px;
  }
`;

export const ClientLogo = styled(motion.img)`
  width: 10%;
  height: auto;
  position: absolute;
  top: 3vw;
  left: 7.29vw;

  @media screen and (max-width: 690px) {
    top: 20px;
    left: 30px;
    width: 40%;
  }
`;

export const ClientHolder = styled.div`
  width: 57.55vw;
  @media screen and (max-width: 690px) {
    width: 100%;
  }
`;

export const ClientHeader = styled(motion.h1)`
  font-family: "Poppins", sans-serif;
  font-size: 1.82vw;
  width: 41.98vw;
  line-height: 1.5;
  /* font-size: 65px; */
  color: #fff;
  font-weight: 100;
  /* padding-bottom: 88px; */
  text-align: start;
  @media screen and (max-width: 690px) {
    font-size: 32px;
    width: auto;
  }
`;

export const ClientSpan = styled.span`
  font-weight: 600;
`;

export const BackgroundClientVideo = styled.video`
  width: 100%;
  height: 100%;
  -webkit-filter: blur(0.68vw);
  /* -webkit-filter: blur(13px); */
  filter: blur(0.68vw);
  /* filter: blur(13px); */
  object-fit: fill;
`;

export const ClientSource = styled.source``;

export const ClientContacts = styled(motion.div)`
  width: 57.55vw;
  @media screen and (max-width: 690px) {
    width: 100%;
  }
`;

export const ContactClientDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 690px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const ClientContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ClientContact2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const ClientLinkedIn = styled(AiFillLinkedin)`
  height: auto;
  width: 2vw;
  color: #1b58a5;
  padding: 0.5vw;
  background: #bbd8f3;
  border-radius: 100%;
  margin-right: 0.5vw;
  @media screen and (max-width: 690px) {
    padding: 10px;
    font-size: 14px;
    width: 40px;
    margin-right: 10px;
  }
`;

export const ClientInsta = styled(AiFillInstagram)`
  height: auto;
  width: 2vw;
  color: #1b58a5;
  padding: 0.5vw;
  background: #bbd8f3;
  border-radius: 100%;
  margin-right: 0.5vw;
  @media screen and (max-width: 690px) {
    padding: 10px;
    font-size: 14px;
    width: 40px;
    margin-right: 10px;
  }
`;

export const ClientContactDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 690px) {
    justify-content: flex-start;
  }
`;
export const ClientPhone = styled(AiFillPhone)`
  height: auto;
  width: 2vw;
  color: #1b58a5;
  padding: 0.5vw;
  background: #bbd8f3;
  border-radius: 100%;
  margin-right: 0.5vw;
  @media screen and (max-width: 690px) {
    padding: 10px;
    font-size: 14px;
    width: 40px;
    margin-right: 10px;
  }
`;

export const ClientWord = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1vw;
  font-weight: 100;
  color: white;
  padding-bottom: 0.5vw;
  @media screen and (max-width: 690px) {
    font-size: 20px;
    padding-bottom: 15px;
  }
`;

export const ClientWord2 = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1vw;
  font-weight: 100;
  color: white;
  @media screen and (max-width: 690px) {
    font-size: 20px;
    text-align: center;
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

export const LinkWrapperWhole = styled(motion.div)`
  position: fixed;
  right: 0vw;
  cursor: pointer;
`;
