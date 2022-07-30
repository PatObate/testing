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
  FooterTextColumn,
  FooterText2,
  FooterTextColumn2,
} from "./FooterElements";

import ig from "../../svg/igwhite.svg";

import logo from "../../svg/WhiteLogo.svg";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterTextColumn>
            <FooterHeader src={logo} alt="logo" />
            <FooterTextMobile>
              ©2022 Copyright. All rights reserved.
            </FooterTextMobile>
            <TextContainer>
              <FooterText>©2021 Copyright. All rights reserved</FooterText>
              <FooterText2 to="/privacy-policy">Privacy Policy</FooterText2>
            </TextContainer>
          </FooterTextColumn>
          <FooterTextColumn2
            href="https://www.instagram.com/dynamicfreelancer/?hl=en"
            target="_blank"
          >
            <FooterTextF>Follow Us On Instagram:</FooterTextF>
            <FooterIcon src={ig} alt="instagram" />
          </FooterTextColumn2>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
