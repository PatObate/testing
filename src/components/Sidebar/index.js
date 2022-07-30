import React from "react";
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  XPic,
  SocialWrapper,
  SocialText,
  SocialPic,
  SocialPics,
  SidebarLink2,
} from "./SidebarElements";
import ig from "../../svg/blackig.svg";

import X from "../../svg/xblack.svg";
import { Btn1, BtnBlack, BtnGray } from "../HomeButton/HomeButtonElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <XPic src={X} alt="X" />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/faq" onClick={toggle}>
            FAQ
          </SidebarLink>
          <SidebarLink to="/pricing" onClick={toggle}>
            Pricing
          </SidebarLink>
          <SidebarLink to="/activities" onClick={toggle}>
            Freelance Activities
          </SidebarLink>
          <SidebarLink to="/blog" onClick={toggle}>
            Blog
          </SidebarLink>
          <SidebarLink to="/privacy-policy" onClick={toggle}>
            Privacy
          </SidebarLink>
          <SidebarLink to="/contact" onClick={toggle}>
            Contact Us
          </SidebarLink>
          <SidebarLink2
            href="https://signup.dynamicfreelancer.ae/"
            target="_blank"
            onClick={toggle}
          >
            Sign Up
          </SidebarLink2>
        </SidebarMenu>
        <SideBtnWrap href="tel:8003733">
          <Btn1>
            <BtnGray>Talk to an expert</BtnGray>
            <BtnBlack>Call 800 FREE</BtnBlack>
          </Btn1>
        </SideBtnWrap>
        <SocialWrapper
          href="https://www.instagram.com/dynamicfreelancer/?hl=en"
          target="_blank"
        >
          <SocialText>Follow Us On Instagram:</SocialText>
          <SocialPics>
            <SocialPic src={ig} alt="social media link" />
          </SocialPics>
        </SocialWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
