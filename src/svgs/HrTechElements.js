import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavWrapper = styled(NavLink)`
  fill: #1a2c4a;
  transition: 0.5s all ease-in-out;
  &:hover {
    fill: #2648ff;
    transition: 0.5s all ease-in-out;
  }
  &.active {
    fill: #2648ff;
    transition: 0.5s all ease-in-out;
  }
`;

export const Path1 = styled.path`
  fill: inherit;
`;

export const Path2 = styled.path`
  fill: #ffffff;
`;
