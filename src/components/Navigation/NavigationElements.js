import styled from "styled-components";
import Lottie from "lottie-react";
import { NavLink } from "react-router-dom";

export const MenuNavWrapperBlur = styled.div`
  -webkit-filter: blur(0.68vw);
  filter: blur(0.68vw);
  border-radius: 50%;
  background: #08111b;
`;

export const MenuNavWrapper = styled.div`
  width: 41.15vw;
  /* width: 790px; */
  height: 41.15vw;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s all ease;
  position: relative;
  background: #08111b;
  box-shadow: #08111b;
  transition: 1s all ease;
  @media screen and (max-width: 690px) {
    transform: scale(2);
  }
`;
export const MenuNav = styled.div`
  width: 31.25vw;
  /* width: 600px; */
  height: 31.25vw;
  /* height: 600px; */
  background: white;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111830;
  box-shadow: 0.05vw 0.05vw 0.83vw 0.21vw #060a187a;
`;

export const Triangle1 = styled(NavLink)`
  width: 0;
  height: 0;
  border-left: 1.56vw solid transparent;
  border-right: 1.56vw solid transparent;
  border-bottom: ${({ toggle }) =>
    toggle ? "1.56vw solid #2648ff" : "1.56vw solid #222d3a"};
  position: absolute;
  z-index: 2;
  top: ${({ toggle }) => (toggle ? "1.04vw" : "1.56vw")};
  transition: 0.5s all ease-in-out;

  &.active {
    border-bottom: 1.56vw solid #2648ff;
  }

  @media screen and (max-width: 690px) {
    display: none;
  }
`;
export const Triangle2 = styled(NavLink)`
  width: 0;
  height: 0;
  border-left: 1.56vw solid transparent;
  border-right: 1.56vw solid transparent;
  border-bottom: ${({ toggle }) =>
    toggle ? "1.56vw solid #2648ff" : "1.56vw solid #222d3a"};
  position: absolute;
  z-index: 2;
  transform: rotate(-60deg);
  top: ${({ toggle }) => (toggle ? "10.42vw" : "10.57vw")};
  left: ${({ toggle }) => (toggle ? "2.60vw" : "3.13vw")};
  transition: 0.5s all ease-in-out;
  &.active {
    border-bottom: 1.56vw solid #2648ff;
  }

  @media screen and (max-width: 690px) {
    display: none;
  }
`;
export const Triangle3 = styled(NavLink)`
  width: 0;
  height: 0;
  border-left: 1.56vw solid transparent;
  border-right: 1.56vw solid transparent;
  border-bottom: ${({ toggle }) =>
    toggle ? "1.56vw solid #2648ff" : "1.56vw solid #222d3a"};
  position: absolute;
  z-index: 2;
  transform: rotate(-120deg);
  bottom: ${({ toggle }) => (toggle ? "10.42vw" : "10.57vw")};
  left: ${({ toggle }) => (toggle ? "2.6vw" : "3.12vw")};
  transition: 0.5s all ease-in-out;
  &.active {
    border-bottom: 1.56vw solid #2648ff;
  }

  @media screen and (max-width: 690px) {
    display: none;
  }
`;
export const Triangle4 = styled(NavLink)`
  width: 0;
  height: 0;
  border-left: 1.56vw solid transparent;
  border-right: 1.56vw solid transparent;
  border-bottom: ${({ toggle }) =>
    toggle ? "1.56vw solid #2648ff" : "1.56vw solid #222d3a"};
  position: absolute;
  z-index: 2;
  transform: rotate(-180deg);
  bottom: ${({ toggle }) => (toggle ? "1.04vw" : "1.56vw")};
  transition: 0.5s all ease-in-out;
  &.active {
    border-bottom: 1.56vw solid #2648ff;
  }

  @media screen and (max-width: 690px) {
    display: none;
  }
`;
export const Triangle5 = styled(NavLink)`
  width: 0;
  height: 0;
  border-left: 1.56vw solid transparent;
  border-right: 1.56vw solid transparent;
  border-bottom: ${({ toggle }) =>
    toggle ? "1.56vw solid #2648ff" : "1.56vw solid #222d3a"};
  position: absolute;
  z-index: 2;
  transform: rotate(120deg);
  bottom: ${({ toggle }) => (toggle ? "10.42vw" : "10.57vw")};
  right: ${({ toggle }) => (toggle ? "2.6vw" : "3.12vw")};
  transition: 0.5s all ease-in-out;
  &.active {
    border-bottom: 1.56vw solid #2648ff;
  }

  @media screen and (max-width: 690px) {
    display: none;
  }
`;
export const Triangle6 = styled(NavLink)`
  width: 0;
  height: 0;
  border-left: 1.56vw solid transparent;
  border-right: 1.56vw solid transparent;
  border-bottom: ${({ toggle }) =>
    toggle ? "1.56vw solid #2648ff" : "1.56vw solid #222d3a"};
  position: absolute;
  z-index: 2;
  transform: rotate(60deg);
  top: ${({ toggle }) => (toggle ? "10.42vw" : "10.57vw")};
  right: ${({ toggle }) => (toggle ? "2.6vw" : "3.12vw")};
  transition: 0.5s all ease-in-out;
  &.active {
    border-bottom: 1.56vw solid #2648ff;
  }

  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const NavImg = styled(NavLink)`
  position: absolute;
  bottom: -8.8vw;
  right: 7.97vw;
  height: 15.63vw;
  /* height: 300px; */
  width: 15.63vw;
  /* width: 300px; */
  transition: 0.5s all ease-in-out;
  cursor: pointer;
  :hover {
    bottom: -9.38vw;
    right: 7.97vw;
    transition: 0.5s all ease-in-out;
  }
  &.active {
    bottom: -9.38vw;
    right: 7.97vw;
    transition: 0.5s all ease-in-out;
  }
  @media screen and (max-width: 690px) {
    transition: 0.3s all ease-in-out;
  }
`;

export const NavImg2 = styled(NavLink)`
  max-width: 100%;
  height: auto;
  position: absolute;
  height: 15.63vw;
  /* height: 300px; */
  width: 15.63vw;
  /* width: 300px; */
  top: 16.25vw;
  right: -6.46vw;
  transform: rotate(-60deg);
  transition: 0.5s all ease-in-out;
  cursor: pointer;
  :hover {
    top: 16.56vw;
    right: -6.98vw;
    transition: 0.5s all ease-in-out;
  }
  &.active {
    top: 16.56vw;
    right: -6.98vw;
    transition: 0.5s all ease-in-out;
  }
  @media screen and (max-width: 690px) {
    transition: 0.3s all ease-in-out;
  }
`;
export const NavImg3 = styled(NavLink)`
  max-width: 100%;
  height: auto;
  position: absolute;
  top: -0.31vw;
  height: 15.63vw;
  /* height: 300px; */
  width: 15.63vw;
  /* width: 300px; */
  right: -6.56vw;
  transform: rotate(-120deg);
  transition: 0.5s all ease-in-out;
  cursor: pointer;
  :hover {
    top: -0.57vw;
    right: -7.08vw;
    transition: 0.5s all ease-in-out;
  }
  &.active {
    top: -0.57vw;
    right: -7.08vw;
    transition: 0.5s all ease-in-out;
  }
  @media screen and (max-width: 690px) {
    transition: 0.3s all ease-in-out;
  }
`;
export const NavImg4 = styled(NavLink)`
  max-width: 100%;
  height: auto;
  position: absolute;
  top: -8.7vw;
  height: 15.63vw;
  /* height: 300px; */
  width: 15.63vw;
  /* width: 300px; */
  right: 7.71vw;
  transform: rotate(-180deg);
  transition: 0.5s all ease-in-out;
  cursor: pointer;
  :hover {
    top: -9.38vw;
    right: 7.71vw;
    transition: 0.5s all ease-in-out;
  }

  &.active {
    top: -9.38vw;
    right: 7.71vw;
    transition: 0.5s all ease-in-out;
  }
  @media screen and (max-width: 690px) {
    transition: 0.3s all ease-in-out;
  }
`;

export const NavImg5 = styled(NavLink)`
  max-width: 100%;
  height: auto;
  height: 15.63vw;
  /* height: 300px; */
  width: 15.63vw;
  /* width: 300px; */
  position: absolute;
  left: -6.51vw;
  top: -0.52vw;
  transform: rotate(120deg);
  transition: 0.5s all ease-in-out;
  cursor: pointer;
  :hover {
    left: -7.03vw;
    top: -0.89vw;
    transition: 0.5s all ease-in-out;
  }
  &.active {
    left: -7.03vw;
    top: -0.89vw;
    transition: 0.5s all ease-in-out;
  }
  @media screen and (max-width: 690px) {
    transition: 0.3s all ease-in-out;
  }
`;
export const NavImg6 = styled(NavLink)`
  max-width: 100%;
  height: auto;
  position: absolute;
  height: 15.63vw;
  /* height: 300px; */
  width: 15.63vw;
  /* width: 300px; */
  bottom: -0.42vw;
  left: -6.61vw;
  transform: rotate(60deg);
  transition: 0.5s all ease-in-out;
  cursor: pointer;
  :hover {
    bottom: -0.68vw;
    left: -7.14vw;
    transition: 0.5s all ease-in-out;
  }
  &.active {
    bottom: -0.68vw;
    left: -7.14vw;
    transition: 0.5s all ease-in-out;
  }
  @media screen and (max-width: 690px) {
    transition: 0.3s all ease-in-out;
  }
`;

export const Circle = styled(Lottie)`
  width: 20.89vw;
  height: 20.89vw;
`;

export const LinkWrapper = styled(NavLink)``;

export const MenuSub1 = styled(NavLink)`
  font-family: "Poppins", sans-serif;
  color: ${({ toggle }) => (toggle ? "#2648ff" : "white")};
  font-size: 1.25vw;
  font-weight: 300;
  position: absolute;
  top: -2.34vw;
  transition: 0.5s all ease-in-out;
  text-decoration: none;
  &.active {
    color: #2648ff;
    text-decoration: none;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;
export const MenuSub2 = styled(NavLink)`
  font-family: "Poppins", sans-serif;
  color: ${({ toggle }) => (toggle ? "#2648ff" : "white")};
  font-size: 1.25vw;
  font-weight: 300;
  position: absolute;
  top: 8.85vw;
  left: -7.29vw;
  transition: 0.5s all ease-in-out;
  text-decoration: none;
  &.active {
    color: #2648ff;
    text-decoration: none;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;
export const MenuSub3 = styled(NavLink)`
  font-family: "Poppins", sans-serif;
  color: ${({ toggle }) => (toggle ? "#2648ff" : "white")};
  font-size: 1.25vw;
  font-weight: 300;
  position: absolute;
  bottom: 8.85vw;
  left: -7.55vw;
  transition: 0.5s all ease-in-out;
  text-decoration: none;
  &.active {
    color: #2648ff;
    text-decoration: none;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;
export const MenuSub4 = styled(NavLink)`
  font-family: "Poppins", sans-serif;
  color: ${({ toggle }) => (toggle ? "#2648ff" : "white")};
  font-size: 1.25vw;
  font-weight: 300;
  position: absolute;
  bottom: -2.34vw;
  transition: 0.5s all ease-in-out;
  text-decoration: none;
  &.active {
    color: #2648ff;
    text-decoration: none;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;
export const MenuSub5 = styled(NavLink)`
  font-family: "Poppins", sans-serif;
  color: ${({ toggle }) => (toggle ? "#2648ff" : "white")};
  font-size: 1.25vw;
  font-weight: 300;
  position: absolute;
  bottom: 8.85vw;
  right: -8.85vw;
  transition: 0.5s all ease-in-out;
  text-decoration: none;
  &.active {
    color: #2648ff;
    text-decoration: none;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;
export const MenuSub6 = styled(NavLink)`
  font-family: "Poppins", sans-serif;
  color: ${({ toggle }) => (toggle ? "#2648ff" : "white")};
  font-size: 1.25vw;
  font-weight: 300;
  position: absolute;
  top: 8.85vw;
  right: -8.39vw;
  transition: 0.5s all ease-in-out;
  text-decoration: none;
  &.active {
    color: #2648ff;
    text-decoration: none;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const MenuSub1Mob = styled(NavLink)`
  @media screen and (min-width: 691px) {
    display: none;
  }
  @media screen and (max-width: 690px) {
    font-family: "Poppins", sans-serif;
    color: ${({ toggle }) => (toggle ? "#2648ff" : "white")};
    font-size: 1.25vw;
    font-weight: 300;
    position: absolute;
    top: -2.34vw;
    transition: 0.5s all ease-in-out;
    text-decoration: none;
    &.active {
      color: #2648ff;
      text-decoration: none;
    }
  }
`;
export const MenuSub2Mob = styled(NavLink)`
  @media screen and (min-width: 691px) {
    display: none;
  }
  @media screen and (max-width: 690px) {
    font-family: "Poppins", sans-serif;
    color: ${({ toggle }) => (toggle ? "#2648ff" : "white")};
    font-size: 1.25vw;
    font-weight: 300;
    position: absolute;
    top: 8.85vw;
    left: -7.29vw;
    transition: 0.5s all ease-in-out;
    text-decoration: none;
    &.active {
      color: #2648ff;
      text-decoration: none;
    }
  }
`;
export const MenuSub3Mob = styled(NavLink)`
  @media screen and (min-width: 691px) {
    display: none;
  }
  @media screen and (max-width: 690px) {
    font-family: "Poppins", sans-serif;
    color: ${({ toggle }) => (toggle ? "#2648ff" : "white")};
    font-size: 1.25vw;
    font-weight: 300;
    position: absolute;
    bottom: 8.85vw;
    left: -7.55vw;
    transition: 0.5s all ease-in-out;
    text-decoration: none;
    &.active {
      color: #2648ff;
      text-decoration: none;
    }
  }
`;
export const MenuSub4Mob = styled(NavLink)`
  @media screen and (min-width: 691px) {
    display: none;
  }
  @media screen and (max-width: 690px) {
    font-family: "Poppins", sans-serif;
    color: ${({ toggle }) => (toggle ? "#2648ff" : "white")};
    font-size: 1.25vw;
    font-weight: 300;
    position: absolute;
    bottom: -2.34vw;
    transition: 0.5s all ease-in-out;
    text-decoration: none;
    &.active {
      color: #2648ff;
      text-decoration: none;
    }
  }
`;
export const MenuSub5Mob = styled(NavLink)`
  @media screen and (min-width: 691px) {
    display: none;
  }
  @media screen and (max-width: 690px) {
    font-family: "Poppins", sans-serif;
    color: ${({ toggle }) => (toggle ? "#2648ff" : "white")};
    font-size: 1.25vw;
    font-weight: 300;
    position: absolute;
    bottom: 8.85vw;
    right: -8.85vw;
    transition: 0.5s all ease-in-out;
    text-decoration: none;
    &.active {
      color: #2648ff;
      text-decoration: none;
    }
  }
`;
export const MenuSub6Mob = styled(NavLink)`
  @media screen and (min-width: 691px) {
    display: none;
  }
  @media screen and (max-width: 690px) {
    font-family: "Poppins", sans-serif;
    color: ${({ toggle }) => (toggle ? "#2648ff" : "white")};
    font-size: 1.25vw;
    font-weight: 300;
    position: absolute;
    top: 8.85vw;
    right: -8.39vw;
    transition: 0.5s all ease-in-out;
    text-decoration: none;
    &.active {
      color: #2648ff;
      text-decoration: none;
    }
  }
`;
