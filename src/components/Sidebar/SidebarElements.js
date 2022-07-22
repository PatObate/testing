import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

export const SidebarBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 20;
  right: ${({ toggle }) => (toggle ? "0" : "-100vw")};
  bottom: 0;
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};
  transition: 0.3s all ease-in-out;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 690px) {
    justify-content: center;
  }
`;

export const XIcon = styled(AiOutlineClose)`
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};
  transition: 2s width ease-in-out;
  height: 1.86vw;
  width: 1.86vw;
  position: absolute;
  top: 2.3vw;
  right: 1.29vw;
  color: #6c757d;
  cursor: pointer;
  z-index: 2;
  @media screen and (max-width: 690px) {
    height: 30px;
    width: 30px;
  }
`;

export const SidebarContainer = styled.div`
  width: 20.18vw;
  transition: 0.8s width ease-in-out;
  height: 100%;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: white;
  @media screen and (max-width: 690px) {
    width: 100%;
  }
`;

export const SideBarLogo = styled.img`
  width: 70%;
  height: auto;
  margin: auto;
  padding-bottom: 0.63vw;
  @media screen and (max-width: 690px) {
    padding-bottom: 15px;
  }
`;

export const SideBarLink = styled(Link)`
  padding-bottom: 0.2vw;
  margin: auto;
  display: block;
  margin-bottom: 0.43vw;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-size: 0.83vw;
  /* font-size: 60px; */
  color: black;
  font-weight: 300;
  border-bottom: 0.01vw solid gray;
  width: 100%;
  @media screen and (max-width: 690px) {
    padding-bottom: 15px;
    border-bottom: 0.1px solid gray;
    font-size: 15px;
  }
`;

export const SidebarIcons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SideLI = styled(AiFillLinkedin)`
  font-size: 1vw;
  color: #0a2c4e;
  @media screen and (max-width: 690px) {
    font-size: 30px;
  }
`;
export const SidePH = styled(AiFillPhone)`
  font-size: 1vw;
  color: #0a2c4e;
  @media screen and (max-width: 690px) {
    font-size: 30px;
  }
`;
export const SideML = styled(AiFillMail)`
  font-size: 1vw;
  color: #0a2c4e;
  @media screen and (max-width: 690px) {
    font-size: 30px;
  }
`;

export const SideIg = styled(AiFillInstagram)`
  font-size: 1vw;
  color: #0a2c4e;
  @media screen and (max-width: 690px) {
    font-size: 30px;
  }
`;
