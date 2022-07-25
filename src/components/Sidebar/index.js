import React from "react";
import {
  SidebarBackground,
  SidebarContainer,
  SideBarIconLink,
  SidebarIcons,
  SideBarLink,
  SideBarLogo,
  SideIg,
  SideLI,
  SideML,
  SidePH,
  XIcon,
} from "./SidebarElements";
import logo from "../../images/blue-logo.webp";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <>
      <SidebarBackground toggle={isOpen} onClick={toggle}>
        <XIcon onClick={toggle} toggle={isOpen} />
        <SidebarContainer>
          <div>
            <SideBarLogo src={logo} />
            <SideBarLink to="/landing">Home</SideBarLink>
            <SideBarLink to="/about">About</SideBarLink>
            <SideBarLink to="/contact">Contact Us</SideBarLink>
            <SideBarLink to="/poeandeor">Peo & Eor Services</SideBarLink>
            <SideBarLink to="/hroutsourcing">HR Outsourcing</SideBarLink>
            <SideBarLink to="/staffingservices">Staffing Services</SideBarLink>
            <SideBarLink to="/hrtechnology">HR Technology</SideBarLink>
            <SideBarLink to="/remoteworkforce">Remote Workforce</SideBarLink>
            <SideBarLink to="/expertconsulting">Expert Consulting</SideBarLink>
          </div>
          <SidebarIcons>
            <SideBarIconLink
              href="https://www.linkedin.com/company/nathan-&-nathan/"
              target="_blank"
            >
              <SideLI />
            </SideBarIconLink>
            <SideBarIconLink href="tel:+971 4 354 4466">
              <SidePH />
            </SideBarIconLink>
            <SideBarIconLink href="mailto:info@nathanhr.com">
              <SideML />
            </SideBarIconLink>
            <SideBarIconLink
              href="https://www.instagram.com/nathan_nathan.inc/"
              target="_blank"
            >
              <SideIg />
            </SideBarIconLink>
          </SidebarIcons>
        </SidebarContainer>
      </SidebarBackground>
    </>
  );
};

export default Sidebar;
