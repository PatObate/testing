import React from "react";
import {
  SidebarBackground,
  SidebarContainer,
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
            <SideLI />
            <SidePH />
            <SideML />
            <SideIg />
          </SidebarIcons>
        </SidebarContainer>
      </SidebarBackground>
    </>
  );
};

export default Sidebar;
