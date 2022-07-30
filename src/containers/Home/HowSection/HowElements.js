import styled from "styled-components";
import image1 from "../../../images/happy-to-be-a-team-2021-09-01-09-41-24-utc.png";
import image2 from "../../../images/eyeglass.png";
import image3 from "../../../images/headphones.png";
export const HowContainer = styled.div`
  background: #f8f8f3;
  /* 0px  */
  padding: 5vw 16.61vw;
  position: relative;
  @media screen and (max-width: 980px) {
    padding: 60px 50px;
  }
  @media screen and (max-width: 690px) {
    padding: 50px 24px;
  }
`;

export const HowContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 690px) {
    flex-direction: column;
  }
`;

export const HowColumn = styled.div`
  padding: 1.56vw;
  z-index: 2;
  width: 100%;
  @media screen and (max-width: 690px) {
    padding: 0px;
  }
`;

export const TopSection = styled.div`
  @media screen and (max-width: 690px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 34px;
  }
`;

export const HowHeading = styled.h2`
  z-index: 2;
  font-family: "Inter", sans-serif;
  margin-bottom: 0px;
  font-weight: 700;
  font-size: 2.6vw;
  /* font size is 50px */
  padding-bottom: 1.49vw;
  //28.6px
  color: black;
  line-height: 3.49vw;
  /* line-height: 67px; */

  @media screen and (max-width: 980px) {
    font-size: 25px;
    padding-bottom: 15px;
    line-height: 30px;
    text-align: center;
  }

  @media screen and (max-width: 690px) {
    font-size: 28px;
    padding-bottom: 0px;
    width: 87px;
  }
`;

export const SubHeadingContainer = styled.div`
  z-index: 2;
  padding: 2.08vw 2.86vw 2.08vw 1.88vw;
  /* padding: 40px 55px 40px 36px; */
  background: white;
  border-radius: 1.04vw;
  box-shadow: 0 0.26vw 0.78vw lightgray;
  width: 15.14vw;
  /* width: 233px; */
  /* orig box shadow is 0px 5px 15px */

  @media screen and (max-width: 980px) {
    padding: 25px 15px 25px 15px;
    border-radius: 25px;
    box-shadow: 0px 2px 10px lightgray;
    width: 142px;
  }
  @media screen and (max-width: 690px) {
    width: 168px;
    padding: 30px 18px 36px 22px;
    height: auto;
  }
`;

export const HowSubHeading = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  margin-bottom: 0px;
  font-size: 1.51vw;
  /* font-size: 29px; */
  line-height: 1.2;
  /* line-height: 38px; */
  color: black;
  @media screen and (max-width: 980px) {
    font-size: 15px;
    line-height: 1;
  }
  @media screen and (max-width: 980px) {
    font-size: 26px;
  }
`;

export const HowLine = styled.div`
  position: absolute;
  z-index: 1;
  height: 25.04vw;
  width: 55.21vw;
  top: 1.04vw;
  left: 22vw;
  @media screen and (max-width: 980px) {
    height: auto;
    width: 520px;
    left: 150px;
    top: 20px;
  }

  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const HowGreenSpan = styled.span`
  font-size: 3.07vw;
  /* font-size: 59px; */
  color: #14cc7e;
  font-weight: 400;
  @media screen and (max-width: 980px) {
    font-size: 27px;
  }
  @media screen and (max-width: 690px) {
    font-size: 52px;
  }
`;

export const HowTinySpan = styled.span`
  font-weight: 400;
  font-size: 0.89vw;
  /* 17px orig font size */
  @media screen and (max-width: 980px) {
    font-size: 13px;
  }
  @media screen and (max-width: 980px) {
    font-size: 15px;
  }
`;

export const Card1 = styled.div`
  z-index: 2;
  background-color: #8cc9dc;
  background-image: url(${image1});
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  padding: 6.42vw 1.04vw 2.04vw 1.04vw;
  /* padding: 123.2px 20px 39.2px 20px; */

  border-radius: 1.3vw;
  /* border radius 25px */
  // box-shadow: 0vw 0.26041666666666663vw 0.78125vw lightgray;
  /* orig box shadow is 0px 5px 15px */
  height: 25.32vw;
  /* height: 467px; */
  width: 15.1vw;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  /* width: 290px; */

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-0.52vw);
    box-shadow: 0vw 0.21vw 1.56vw #77777729;
  }

  @media screen and (max-width: 980px) {
    padding: 65px 10px 18px 10px;
    border-radius: 25px;
    box-shadow: 0px 2px 10px lightgray;
    height: 285px;
    width: 155px;
  }
  @media screen and (max-width: 690px) {
    padding: 21px 18px;
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    background-size: 199px 156px;
    background-position: top right;
    height: 235px;
  }
`;

export const Card2 = styled.div`
  z-index: 2;
  background-color: #f4cc77;
  background-image: url(${image2});
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  padding: 6.42vw 1.04vw 2.04vw 1.04vw;
  /* padding: 123.2px 20px 39.2px 20px; */

  border-radius: 1.3vw;
  /* border radius 25px */
  // box-shadow: 0vw 0.26041666666666663vw 0.78125vw lightgray;
  /* orig box shadow is 0px 5px 15px */
  height: 25.32vw;
  /* height: 467px; */
  width: 15.1vw;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  /* width: 290px; */

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-0.52vw);
    box-shadow: 0vw 0.21vw 1.56vw #77777729;
  }

  @media screen and (max-width: 980px) {
    padding: 65px 10px 18px 10px;
    border-radius: 25px;
    box-shadow: 0px 2px 10px lightgray;
    height: 285px;
    width: 155px;
  }
  @media screen and (max-width: 690px) {
    padding: 21px 18px;
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    background-size: 199px 156px;
    background-position: top right;
    height: 235px;
  }
`;

export const Card3 = styled.div`
  z-index: 2;
  background-color: #75dfc7;
  background-image: url(${image3});
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  padding: 6.42vw 1.04vw 2.04vw 1.04vw;
  /* padding: 123.2px 20px 39.2px 20px; */

  border-radius: 1.3vw;
  /* border radius 25px */
  // box-shadow: 0vw 0.26041666666666663vw 0.78125vw lightgray;
  /* orig box shadow is 0px 5px 15px */
  height: 25.32vw;
  /* height: 467px; */
  width: 15.1vw;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  /* width: 290px; */

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-0.52vw);
    box-shadow: 0vw 0.21vw 1.56vw #77777729;
  }

  @media screen and (max-width: 980px) {
    padding: 65px 10px 18px 10px;
    border-radius: 25px;
    box-shadow: 0px 2px 10px lightgray;
    height: 285px;
    width: 155px;
  }
  @media screen and (max-width: 690px) {
    padding: 21px 18px;
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    background-size: 199px 156px;
    background-position: top right;
    height: 235px;
  }
`;

export const CardNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 4.17vw;
  margin-bottom: 0px;
  /* font-size: 80px; */
  color: white;
  padding-bottom: 1.88vw;
  /* padding-bottom: 36px; */
  line-height: 5.52vw;
  /* line-height: 106px; */
  @media screen and (max-width: 980px) {
    font-size: 40px;
    padding-bottom: 10px;
    line-height: 50px;
  }

  @media screen and (max-width: 690px) {
    padding: 53px 0px;
    font-size: 80px;
  }
`;

export const CardHeading = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.82vw;
  margin-bottom: 0px;
  /* font size 35px */
  color: black;
  line-height: 2.76vw;
  /* line-height: 53px; */
  padding-bottom: 0.33vw;
  /* padding-bottom: 6.3px; */
  @media screen and (max-width: 980px) {
    font-size: 17px;
  }
  @media screen and (max-width: 690px) {
    font-size: 24px;
    padding-bottom: 0px;
  }
`;

export const CardInfo = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  margin-bottom: 0px;
  color: black;
  font-size: 0.68vw;
  line-height: 1.09vw;
  /* line-height: 21px; */
  /* font-size 13px*/
  @media screen and (max-width: 980px) {
    font-size: 14px;
    line-height: 16px;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;
