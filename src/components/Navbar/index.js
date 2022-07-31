import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks2,
  NavBtn,
  NavSplitter,
  NavImg,
  MobileIcon,
  BtnExpert,
  BtnNumber,
  NavLinks3,
} from "./NavbarElements";

import logo from "../../svg/logo.svg";

import { CgMenuLeftAlt } from "react-icons/cg";
import {
  NavDown,
  NavDrop2,
  NavDropBlock,
  NavDropContainer,
  NavDropper,
  NavLink3,
  NavText,
} from "../NavbarHome/NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => setIsOn((prev) => !prev);

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
            <NavImg src={logo} alt="logo" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <CgMenuLeftAlt />
          </MobileIcon>
          <NavSplitter>
            <NavMenu>
              <NavItem>
                <NavLinks2 to="/" exact>
                  Home
                </NavLinks2>
              </NavItem>
              <NavItem onMouseEnter={handleToggle} onMouseLeave={handleToggle}>
                <NavLink3 drop={isOn}>
                  <NavText>Packages</NavText>
                  <NavDown />
                </NavLink3>
                <NavDropContainer drop={isOn}>
                  <NavDropBlock />
                  <NavDropper>
                    <NavDrop2 to="/pricing">Pricing</NavDrop2>
                    <NavDrop2 to="/activities">Freelance Activities</NavDrop2>
                  </NavDropper>
                </NavDropContainer>
              </NavItem>
              <NavItem>
                <NavLinks2 to="/faq">FAQ</NavLinks2>
              </NavItem>
              <NavItem>
                <NavLinks3
                  href="https://signup.dynamicfreelancer.ae/"
                  target="_blank"
                >
                  Sign Up
                </NavLinks3>
              </NavItem>
              <NavItem>
                <NavLinks2 to="/blog">Blog</NavLinks2>
              </NavItem>
              <NavItem>
                <NavLinks2 to="/contact">Contact</NavLinks2>
              </NavItem>
              <NavBtn href="tel:8003733">
                <BtnExpert>Talk to an expert</BtnExpert>
                <BtnNumber>Call 800 FREE</BtnNumber>
              </NavBtn>
            </NavMenu>
          </NavSplitter>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
