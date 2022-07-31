import styled from "styled-components";
import image from "../../../images/younggirlnew.png";
import image3 from "../../../images/happygirlmob.png";
import { Link } from "react-router-dom";

export const CommunityContainer = styled.div`
  background: #f8f8f3;
  /* 0px  */
  padding: 5vw 0vw 5vw 16.614583333333332vw;
  @media screen and (max-width: 980px) {
    padding: 60px 0px 60px 50px;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const CommunityContainer690 = styled.div`
  @media screen and (min-width: 691px) {
    display: none;
  }
  @media screen and (max-width: 690px) {
    padding: 50px 0px;
    background: #f8f8f3;
  }
`;

export const SmileImg = styled.img`
  width: 20%;
  height: auto;
  position: absolute;
  top: -2.08vw;
  /* top: -40px; */
  left: 0.52vw;
  /* left: 10px; */
`;

export const CommunityContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 690px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 700px;
    background-image: url(${image3});
    background-size: contain;
    background-position: center right;
    background-repeat: no-repeat;
    background-size: 380px;
    padding: 0px 24px;
  }
`;

export const CommunityColumn = styled.div`
  /* width 338px */
  margin: auto;
  width: 50%;
  @media screen and (max-width: 690px) {
    width: 100%;
  }
`;

export const CommunityColumn2 = styled.div`
  /* width 338px */
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 36.46vw;
  /* height: 700px; */
  background-image: url(${image});
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
  top: 2.86vw;
  /* top: 55px; */
  left: -9.69vw;
  /* left: -186px; */
  height: 10.52vw;
  /* height: 202px; */
  width: 17.81vw;
  /* width: 342px; */
  box-shadow: 0vw 0.21vw 1.56vw #77777729;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.77vw 1.3vw;
  /* padding: 34px 25px; */
  background: white;
  border-radius: 0.99vw;
  /* border-radius: 19px; */
  @media screen and (max-width: 980px) {
    height: 12.52vw;
  }
`;
export const CommunityWhite2 = styled.div`
  position: absolute;
  bottom: 1.82vw;
  /* bottom: 35px; */
  box-shadow: 0vw 0.21vw 1.56vw #77777729;
  left: 6.61vw;
  /* left: 127px; */
  height: 9.55vw;
  /* height: 145px; */
  width: 18.33vw;
  /* width: 352px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.77vw 0.99vw;
  /* padding: 34px 19px; */
  background: white;
  border-radius: 0.99vw;
  /* border-radius: 19px; */
`;

export const CommunityHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 2.604166666666667vw;
  /* font size is 50px */
  color: black;
  width: 17.447916666666664vw;
  /* width: 335px; */
  line-height: 3.4895833333333335vw;
  /* line-height: 67px; */
  padding-bottom: 0.5208333333333333vw;
  /* padding-bottom: 10px; */
  margin-bottom: 0px;
  @media screen and (max-width: 980px) {
    font-size: 25px;
    line-height: 30px;
    width: 280px;
    padding-bottom: 7px;
  }
  @media screen and (max-width: 690px) {
    padding-bottom: 0px;
    text-align: center;
  }
`;

export const CommunitySub = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.9375vw;
  /*font size 18px */
  width: 20.989583333333332vw;
  /* width is 403px */
  padding-bottom: 2.604166666666667vw;
  /* padding-bottom: 50px; */
  line-height: 1.25vw;
  /* line-height: 24px; */
  margin-bottom: 0px;
  @media screen and (max-width: 980px) {
    font-size: 15px;
    padding-bottom: 20px;
    line-height: 17px;
    width: 280px;
  }

  @media screen and (max-width: 980px) {
    display: none;
  }
`;

export const CommunityMobSub = styled.div`
  height: 190px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 23px 18px;
  background: white;
  border-radius: 19px;
`;

export const CommunityMobSubText = styled.p`
  margin-bottom: 0;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  width: 100%;
  font-size: ${({ secondary }) => (secondary ? "1.46vw" : "1.51vw")};
  line-height: 1;

  @media screen and (max-width: 690px) {
    font-size: 27px;
  }
`;

export const CommunityLinksContainer = styled.div`
  align-items: flex-start;
  justify-content: flex-start;
  /* padding right is 150px */
  display: flex;
  @media screen and (max-width: 980px) {
  }

  @media screen and (max-width: 690px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CommunityLinks = styled(Link)`
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  background: #ededed;
  width: 17.97vw;
  /* width: 345px; */
  height: 4.32vw;
  /* height: 83px; */
  border-radius: 1.3vw;
  /* border-radius: 25px; */
  justify-content: space-between;
  padding: 0vw 0.73vw;
  /* padding: 0px 14px; */
  text-decoration: none;
  @media screen and (max-width: 980px) {
    width: auto;
    padding: 19px 6px;
  }
  @media screen and (max-width: 690px) {
    height: auto;
    width: 320px;
    padding: 15px 0px;
    background: none;
    justify-content: flex-start;
  }
`;

export const CommunityLinksNon = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  background: #ededed;
  width: 17.97vw;
  /* width: 345px; */
  height: 4.32vw;
  /* height: 83px; */
  border-radius: 1.3vw;
  /* border-radius: 25px; */
  justify-content: space-between;
  padding: 0vw 0.73vw;
  /* padding: 0px 14px; */
  margin-right: 18px;
  @media screen and (max-width: 980px) {
    width: auto;
    padding: 19px 6px;
  }
  @media screen and (max-width: 690px) {
    height: auto;
    width: 320px;
    padding: 15px 0px;
    background: none;
    justify-content: flex-start;
  }
`;

export const CommunityLinkDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const CommunityWrapper = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5.21vw;
  /* border-radius: 100px; */
  width: 3.39vw;
  /* width: 65px; */
  height: 3.39vw;
  /* height: 65px; */
  margin-right: 0.36vw;
  /* margin-right: 7px; */
`;

export const CommunityIcon = styled.img`
  width: 70%;
  height: auto;
  display: block;
  @media screen and (max-width: 690px) {
    width: 30%;
  }
`;

export const CommunityLink = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 0.9375vw;
  margin-bottom: 0px;
  /* font size is 18px */
  color: #008dff;
  /* will add links later on */
  line-height: 3.02vw;
  /* line-height: 58px; */
  @media screen and (max-width: 980px) {
    font-size: 13px;
    line-height: 16px;
  }
  @media screen and (max-width: 690px) {
    font-size: 18px;
    text-decoration: underline;
    padding-left: 10px;
  }
`;

export const SubHeadingWrapper = styled.div``;

export const CommunityLinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 9.9vw;
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width: 980px) {
    width: auto;
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
  line-height: 20px;
  @media screen and (max-width: 980px) {
    font-size: 12px;
  }
  @media screen and (max-width: 690px) {
    font-size: 15px;
    padding-top: 0px;
  }
`;
