import styled from "styled-components";
import { AiOutlineAlignRight } from "react-icons/ai";

export const HamContainer = styled.div`
  z-index: 19;
  top: 2.3vw;
  right: 7.29vw;
  position: fixed;
  cursor: pointer;
  @media screen and (max-width: 690px) {
    padding: 3px 14px;
    background: #111830;
    top: 10px;
    right: 0px;
    border-radius: 30px 0px 0px 30px;
  }
`;

export const HamSign = styled(AiOutlineAlignRight)`
  font-size: 2vw;
  color: white;
  cursor: pointer;
  transition: 0.7s all ease;
  @media screen and (max-width: 690px) {
    font-size: 30px;
  }
  :hover {
    transition: 0.7s all ease;
    color: #366aa5;
  }
`;
