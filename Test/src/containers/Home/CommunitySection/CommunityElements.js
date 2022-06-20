import styled from "styled-components";
import image from "../../../images/younggirlnew.png";
import image2 from "../../../images/happy.png";
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
  width: 50%;
  display: grid;
  grid-template-columns: 2% 15% 1% 9% 16% 16% 41%;
  grid-template-rows: 10% 25% 20% 7% 7% 18%;
  @media screen and (max-width: 690px) {
    width: 100%;
  }
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
  padding: 0px 18px;
  background: white;
  border-radius: 19px;
`;

export const CommunityMobSubText = styled.p`
  margin-bottom: 0;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 27px;
  width: 100%;
`;

export const CommunityLinksContainer = styled.div`
  align-items: flex-start;
  justify-content: space-around;
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

export const CommunityPicture = styled.div`
  background-image: url(${image});
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  height: 30vw;
  /* height is 576px */
  width: auto;
  grid-column: 1 / 8;
  grid-row: 2/8;
  @media screen and (max-width: 690px) {
    background-position: top right;
    height: 200px;
  }
`;

export const CommunityHappy = styled.div`
  background-image: url(${image2});
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  height: 4.010416666666667vw;
  /* height is 77px */
  width: auto;
  grid-column: 4 / 5;
  grid-row: 4/6;
  z-index: 3;
  @media screen and (max-width: 980px) {
    height: 45px;
  }
`;

export const CommunitySubHeading1 = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.5625vw;
  /* font size is 30px */
  color: black;
  padding: 1.0416666666666665vw 1.0416666666666665vw;
  /* padding is 20px 20px */

  background: white;
  border-radius: 1.0416666666666665vw;
  box-shadow: 0 0.26041666666666663vw 0.78125vw gray;
  /* orig box shadow is 0px 5px 15px */
  grid-column: 2 / 6;
  grid-row: 1 / 3;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 980px) {
    padding: 10px 10px;
    border-radius: 10px;
    box-shadow: 0px 2px 10px lightgray;
    font-size: 15px;
    line-height: 20px;
  }
  @media screen and (max-width: 690px) {
    font-size: 12px;
    line-height: 17px;
    padding: 5px 5px;
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

export const CommunitySubHeading2 = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.5625vw;
  /* font size is 30px */
  color: black;
  padding: 1.0416666666666665vw 1.0416666666666665vw;
  /* padding is 20px 20px */
  background: white;
  border-radius: 1.0416666666666665vw;
  box-shadow: 0 0.26041666666666663vw 0.78125vw gray;
  /* orig box shadow is 0px 5px 15px */
  grid-column: 3 / 7;
  grid-row: 5 / 7;
  z-index: 2;
  @media screen and (max-width: 980px) {
    padding: 10px 10px;
    border-radius: 10px;
    box-shadow: 0px 2px 10px lightgray;
    font-size: 15px;
    line-height: 20px;
  }
  @media screen and (max-width: 690px) {
    font-size: 13px;
    line-height: 17px;
    width: auto;
  }
`;

export const CommunityGreenSpan = styled.span`
  font-size: 2.604166666666667vw;
  /* font size 50px */
  color: #14cc7e;
  width: 1.0416666666666665vw;
  /* width: 20px; */
  @media screen and (max-width: 980px) {
    font-size: 20px;
  }
  @media screen and (max-width: 690px) {
    font-size: 57px;
    width: 30px;
    font-weight: 400;
  }
`;

export const CommunityTinySpan = styled.span`
  font-weight: 400;
  font-family: "Inter", sans-serif;
  font-size: 0.8854166666666666vw;
  /* 17px orig font size */
  margin-bottom: 0px;
  padding-bottom: 20px;
  @media screen and (max-width: 980px) {
    font-size: 12px;
  }
  @media screen and (max-width: 690px) {
    font-size: 15px;
    padding-bottom: 0px;
  }
`;
