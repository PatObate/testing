import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinks2,
  NavBtn,
  NavSplitter,
  NavImg,
  MobileIcon,
  BtnExpert,
  BtnNumber,
} from "./NavbarElements";

import logo from "../../svg/logo.svg";

import { CgMenuLeftAlt } from "react-icons/cg";

const NavbarHome = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          // if scroll down hide the navbar
          setScrollNav(true);
        } else {
          // if scroll up show the navbar
          setScrollNav(false);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
    controlNavbar();
  }, [lastScrollY]);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer scrollNav={scrollNav}>
          <NavLogo to="/">
            <NavImg src={logo} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <CgMenuLeftAlt />
          </MobileIcon>
          <NavSplitter>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="landing"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks2 to="/faq">
                  FAQ
                </NavLinks2>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="plans"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={95}
                >
                  Pricing
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks2 to="/blog" onClick={refreshPage}>
                  Blog
                </NavLinks2>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={95}
                >
                  Contact Us
                </NavLinks>
              </NavItem>
              <NavBtn>
                <BtnExpert>Talk to Expert</BtnExpert>
                <BtnNumber>Call 800 FREE</BtnNumber>
              </NavBtn>
            </NavMenu>
          </NavSplitter>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavbarHome;
