import styled from "styled-components";
import { Link } from "react-router-dom";

export const BlogFreelancerContainer = styled.div`
  background: #f8f8f2;
  /* 0px  */
  padding: 5vw 0vw 5vw 16.61vw;
  /* padding: 0vw 319px; */
  z-index: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 980px) {
    padding: 100px 0px 100px 50px;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const BlogFreeRow = styled.div`
  width: 50%;
  margin: auto;
  display: block;
`;
export const BlogFreeRow2 = styled.div`
  /* width 338px */
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 36.46vw;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 50%;
  @media screen and (max-width: 690px) {
    width: 100%;
  }
`;

export const CommunityWhite1 = styled.div`
  position: absolute;
  top: 10.52vw;
  left: -6.04vw;
  height: 10.52vw;
  width: 17.81vw;
  box-shadow: 0vw 0.21vw 1.56vw #77777729;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.77vw 1.3vw;
  background: white;
  border-radius: 0.99vw;
`;

export const SubHeadingWrapper = styled.div``;

export const CommunityMobSubText = styled.p`
  margin-bottom: 0;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  width: 100%;
  font-size: ${({ secondary }) => (secondary ? "1.46vw" : "1.51vw")};
  line-height: 20px;

  @media screen and (max-width: 690px) {
    font-size: 27px;
  }
`;

export const CommunityGreenSpan = styled.span`
  font-size: ${({ secondary }) => (secondary ? "2.92vw" : "3.07vw")};
  /* font size 50px */
  color: #14cc7e;
  /* width: 20px; */
  font-weight: 400;
  @media screen and (max-width: 980px) {
    font-size: 20px;
  }
  @media screen and (max-width: 690px) {
    font-size: 57px;
    width: 30px;
  }
`;

export const CommunityTinySpan = styled.p`
  font-weight: 400;
  font-family: "Inter", sans-serif;
  font-size: 0.8854166666666666vw;
  /* 17px orig font size */
  margin-bottom: 0px;
  padding-top: 0.78vw;
  line-height: 1.04vw;
  @media screen and (max-width: 980px) {
    font-size: 12px;
  }
  @media screen and (max-width: 690px) {
    font-size: 15px;
    padding-top: 0px;
  }
`;

export const CommunityLinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 9.9vw;
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width: 980px) {
    width: auto;
    padding: 10px 0px;
  }
  @media screen and (max-width: 690px) {
    width: auto;
    padding: 14px 0px;
    justify-content: flex-start;
  }
`;

export const ButtonLinkText = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 0.94vw;
  color: #1c8ae2;
  margin-bottom: 0px;
  @media screen and (max-width: 980px) {
    font-size: 11px;
  }
  @media screen and (max-width: 690px) {
    font-size: 18px;
    padding-right: 10px;
  }
`;

export const ButtonLinkIcon = styled.img`
  display: block;
  @media screen and (max-width: 980px) {
    width: 20px;
  }
  @media screen and (max-width: 690px) {
    width: 30px;
  }
`;

export const BlogFreeHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 2.6vw;
  margin-bottom: 0px;
  /* font-size: 50px; */
  width: 28.54vw;
  /* width: 548px; */
  color: black;
  padding-bottom: 1.04vw;
  /* padding-bottom: 20px; */
  line-height: 3.13vw;
  /* line-height: 60px; */
  @media screen and (max-width: 980px) {
    font-size: 25px;
    width: 190px;
    line-height: 30px;
    padding-bottom: 7px;
  }
`;

export const BlogFreeSub = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 20.83vw;
  /* font-weight: 400px; */
  margin-bottom: 0px;
  font-size: 0.94vw;
  /* font-size: 18px; */
  color: black;
  padding-bottom: 2.08vw;
  /* padding-bottom: 40px; */
  line-height: 1.09vw;
  /* line-height: 21px; */
  width: 22.24vw;
  /* width: 427px; */
  @media screen and (max-width: 980px) {
    font-size: 15px;
    padding-bottom: 20px;
    line-height: 17px;
    width: 250px;
  }
`;

export const ExploreLink = styled.p`
  font-weight: 500;
  margin-bottom: 0px;
  font-family: "Inter", sans-serif;
  font-size: 0.94vw;
  /* font-size: 18px; */
  color: #1c8ae2;
  @media screen and (max-width: 980px) {
    font-size: 11px;
  }
`;
