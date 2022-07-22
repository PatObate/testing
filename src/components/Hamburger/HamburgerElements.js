import styled from "styled-components";
import { AiOutlineAlignRight } from "react-icons/ai";

export const HamContainer = styled.div`
  height: 1.86vw;
  width: 1.86vw;
  z-index: 19;
  top: 2.3vw;
  right: 7.29vw;
  position: fixed;
  cursor: pointer;
  @media screen and (max-width: 690px) {
    top: 10px;
    right: 30px;
    height: 30px;
    width: 30px;
  }
`;

export const HamSign = styled(AiOutlineAlignRight)`
  height: 1.86vw;
  width: 1.86vw;
  color: white;
  cursor: pointer;
  transition: 0.7s all ease;
  @media screen and (max-width: 690px) {
    height: 30px;
    width: 30px;
  }
  :hover {
    transition: 0.7s all ease;
    color: #366aa5;
  }
`;
