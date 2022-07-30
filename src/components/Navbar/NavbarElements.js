import styled from "styled-components";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import phone from "../../svg/phonecall.svg";

export const Nav = styled.nav`
  background: #f8f8f3;
  height: 4.95vw;
  /* original height is 95px*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.78vw;
  font-weight: 500;
  /* original font size is 15px */
  z-index: 23;
  position: sticky;
  line-height: 0.99vw;
  /* line-height: 19px; */
  top: ${({ scrollNav }) => (scrollNav ? "-300px" : "0px")};
  margin-top: -4.95vw;
  transition: 0.7s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    height: 95px;
    font-size: 13px;
    margin-top: -95px;
  }
  @media screen and (max-width: 690px) {
    height: 80px;
    font-size: 13px;
    margin-top: -80px;
    background: #f8f8f3;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4.95vw;
  width: 100%;
  padding: 0vw 16.61vw;
  /* original height is 95px*/
  /* width: 1283px; */
  z-index: 1;
  @media screen and (max-width: 960px) {
    height: 95px;
    padding: 0px 0px;
    justify-content: space-around;
  }
  @media screen and (max-width: 690px) {
    max-width: 1100px;
    padding: 0px 20px;
  }
`;

export const NavSplitter = styled.div`
  display: flex;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const NavLogo = styled(NavLink)`
  justify-self: flex-start;
  cursor: pointer;
  /* original font size is 15px */
  display: flex;
  align-items: center;
  width: auto;
`;

export const NavImg = styled.img`
  height: 0.93vw;
  width: 15.02;

  @media screen and (max-width: 960px) {
    height: 10px;
  }
  @media screen and (max-width: 690px) {
    height: 15px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 690px) {
    display: block;
    position: absolute;
    top: 5.5px;
    right: 0;
    transform: translate(-100%, 60%);
    color: black;
    font-size: 1.8rem;
    cursor: pointer;
    transition: 0.7s all ease;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: center;
  text-align: center;
  margin-bottom: 0px;
  padding-left: 0px;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  padding: 0vw 0.26vw;
  position: relative;
  /* padding: 0px 5px; */
  @media screen and (max-width: 960px) {
    padding: 0px 3px;
  }
`;

export const NavLinks = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  /* original padding is 5px */
  /* 0px 30px */
  cursor: pointer;
  height: 100%;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding: 0.54vw 1.2vw;
  border-radius: 1.09vw;
  background: transparent;
  transition: 0.7s all ease;

  @media screen and (max-width: 960px) {
    padding: 10px 10px;
    border-radius: 25px;
  }

  &.active {
    background: #ffc32f;
    transition: 0.7s all ease;
  }
`;

export const NavLinks2 = styled(NavLink)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  /* original padding is 5px */
  /* 0px 30px */
  cursor: pointer;
  height: 100%;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding: 0.54vw 1.2vw;
  border-radius: 1.09vw;
  background: transparent;
  transition: 0.7s all ease;

  @media screen and (max-width: 960px) {
    padding: 10px 10px;
    border-radius: 25px;
  }

  &.active {
    background: #ffc32f;
    transition: 0.7s all ease;
  }
`;

export const NavLinks3 = styled.a`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  /* original padding is 5px */
  /* 0px 30px */
  cursor: pointer;
  height: 100%;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding: 0.54vw 1.2vw;
  border-radius: 1.09vw;
  background: transparent;
  transition: 0.7s all ease;

  @media screen and (max-width: 960px) {
    padding: 10px 10px;
    border-radius: 25px;
  }
`;

export const NavBtn = styled.a`
  text-decoration: none;
  background-image: url(${phone});
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;
  background-color: white;
  padding: 0.47vw 1.25vw 0.47vw 4.43vw;
  /* padding: 9px 24px 9px 85px; */
  border-radius: 2.6vw;
  /* border-radius: 50px 50px 50px 50px; */
  cursor: pointer;
  border: 0.05vw solid #e8ca87;
  height: 3.49vw;
  /* height: 67px; */
  width: 14.06vw;
  /* width: 270px; */
  @media screen and (max-width: 690px) {
    display: none;
  }

  @media screen and (max-width: 960px) {
    padding: 16px 0px 16px 57px;
    border-radius: 50px;
    width: 160px;
    height: 55px;
  }
`;

export const BtnExpert = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 0.83vw;
  color: #5c5d5c;
  text-align: start;
  margin-bottom: 0px;

  @media screen and (max-width: 960px) {
    font-size: 13px;
    padding-bottom: 5px;
  }
`;

export const BtnNumber = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.23vw;
  color: black;
  text-align: start;
  margin-bottom: 0px;

  @media screen and (max-width: 960px) {
    font-size: 13px;
  }
`;
