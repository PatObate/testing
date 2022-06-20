import React from "react";
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  XPic,
  SocialWrapper,
  SocialText,
  SocialPic,
  SocialPics,
} from "./SidebarElements";
import yt from "../../svg/blackyt.svg";
import fb from "../../svg/blackfb.svg";

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
          <SidebarLink to="/" onClick={toggle}>
            Privacy
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            Terms and Conditions
          </SidebarLink>
          <SidebarLink to="/contact" onClick={toggle}>
            Contact Us
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <Btn1>
            <BtnGray>Talk to Expert</BtnGray>
            <BtnBlack>Call 800 FREE</BtnBlack>
          </Btn1>
        </SideBtnWrap>
        <SocialWrapper>
          <SocialText>Follow Us On</SocialText>
          <SocialPics>
            <SocialPic src={yt} alt="social media link" />
            <SocialPic src={fb} alt="social media link" />
            <SocialPic src={yt} alt="social media link" />
          </SocialPics>
        </SocialWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
