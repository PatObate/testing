import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background: #f8f8f3;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-150%")};
  transition: 0.3s ease-in-out;
`;

export const Icon = styled.div`
  display: block;
  position: absolute;
  top: 1px;
  right: -37px;
  transform: translate(-100%, 60%);
  color: black;
  cursor: pointer;
  transition: 0.7s all ease;
`;

export const XPic = styled.img`
  cursor: pointer;
  height: auto;
  width: 80%;
`;

export const SidebarWrapper = styled.div``;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 50px);
  text-align: center;
  margin-bottom: 67px;
  padding: 0;

  @media screen and (max-width: 380px) {
    grid-template-rows: repeat(9, 40px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: black;
  cursor: pointer;

  &:hover {
    color: #ffc32f;
    transition: 0.2 ease-in-out;
  }
`;

export const SidebarLink2 = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: black;
  cursor: pointer;

  &:hover {
    color: #ffc32f;
    transition: 0.2 ease-in-out;
  }
`;

export const SideBtnWrap = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

export const SocialWrapper = styled.a`
  width: 100%;
  padding-top: 40px;
  text-decoration: none;
  @media screen and (max-width: 380px) {
    padding-top: 20px;
  }
`;

export const SocialText = styled.p`
  margin-bottom: 0px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: black;
  font-size: 12px;
  text-align: center;
`;

export const SocialPics = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  margin: auto;
`;

export const SocialPic = styled.img``;
