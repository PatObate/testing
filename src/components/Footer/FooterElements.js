import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterContainer = styled.div`
  background: #1d2b36;
  /* 0px  */
  padding: 3vw 16.614583333333332vw;
  position: relative;
  z-index: 15;
  height: 135px;
  /* height: 150px; */

  @media screen and (max-width: 980px) {
    padding: 30px 50px;
    height: auto;
  }

  @media screen and (max-width: 690px) {
    padding: 20px 20px;
    height: 209px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  @media screen and (max-width: 690px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  /* height is 135px */
`;

export const FooterTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 690px) {
    align-items: center;
  }
`;

export const FooterTextColumn2 = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  @media screen and (max-width: 690px) {
    align-items: center;
  }
`;

export const FooterHeader = styled.img`
  padding-bottom: 0.78vw;
  @media screen and (max-width: 980px) {
    padding-bottom: 15px;
  }
  @media screen and (max-width: 690px) {
    padding-bottom: 6px;
    height: auto;
    width: 60%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 690px) {
    flex-direction: column;
  }
`;

export const TextContainer2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const FooterTextMobile = styled.p`
  @media screen and (min-width: 691px) {
    display: none;
  }

  @media screen and (max-width: 690px) {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 9px;
    color: white;
    margin-bottom: 0px;
    padding-bottom: 15px;
  }
`;

export const FooterText = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 0.7291666666666666vw;
  /* font-size is 14px */
  color: white;
  padding-right: 0.5208333333333333vw;
  margin-bottom: 0px;
  /* padding-right: 10px; */
  @media screen and (max-width: 980px) {
    padding-right: 10px;
    font-size: 13px;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const FooterText2 = styled(NavLink)`
  font-family: "Inter", sans-serif;
  text-decoration: underline;
  margin-bottom: 0px;
  font-weight: 500;
  font-size: 0.7291666666666666vw;
  /* font-size is 14px */
  color: white;
  padding-right: 0.5208333333333333vw;
  /* padding-right: 10px; */
  @media screen and (max-width: 980px) {
    padding-right: 10px;
    font-size: 13px;
  }
  @media screen and (max-width: 690px) {
    padding-right: 0px;
    font-size: 12px;
    padding-bottom: 15px;
  }
`;

export const FooterTextF = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0px;
  /* font-size is 14px */
  color: white;
  @media screen and (max-width: 980px) {
    font-size: 12px;
    font-weight: 400;
  }
`;

export const FooterIcon = styled.img`
  /* font-size is 40px */
  padding: 0.42vw;
  @media screen and (max-width: 69px) {
    padding: 8px;
    font-size: 40px;
  }
`;
