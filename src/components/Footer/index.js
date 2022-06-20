import React from "react";
import {
  FooterContainer,
  FooterHeader,
  FooterText,
  FooterTextF,
  FooterIcon,
  FooterWrapper,
  FooterColumn,
  TextContainer,
  TextContainer2,
  FooterTextMobile,
} from "./FooterElements";

import logo from "../../svg/WhiteLogo.svg";

import { AiFillYoutube, AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterHeader src={logo} />
          <FooterTextMobile>
            ©2022 Copyright. All rights reserved.
          </FooterTextMobile>
          <TextContainer>
            <FooterText>©2021 Copyright. All rights reserved</FooterText>
            <FooterText>Privacy Policy</FooterText>
            <FooterText>Terms Of Service</FooterText>
          </TextContainer>

          <FooterTextF>Follow Us On</FooterTextF>
          <TextContainer2>
            <FooterIcon>
              <AiFillYoutube style={{ display: "block" }} />
            </FooterIcon>
            <FooterIcon>
              <AiFillFacebook style={{ display: "block" }} />
            </FooterIcon>
            <FooterIcon>
              <AiFillInstagram style={{ display: "block" }} />
            </FooterIcon>
          </TextContainer2>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
