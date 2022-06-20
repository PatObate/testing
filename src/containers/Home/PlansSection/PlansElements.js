import styled, { keyframes } from "styled-components";
import gold from "../../../svg/gold.svg";

export const PlansContainer = styled.div`
  background: #f8f8f2;
  /* 0px  */
  padding: 5vw 16.61vw;
  /* padding: 0vw 319px; */
  position: relative;
  overflow: hidden;
  height: ${({ secondary }) => (secondary ? "100vh" : "auto")};
  margin: ${({ secondary }) => (secondary ? "auto" : "")};
  @media screen and (max-width: 980px) {
    padding: ${({ secondary }) => (secondary ? "300px 50px" : " 60px 50px")};
  }
  @media screen and (max-width: 690px) {
    padding: 50px 20px;
  }
`;

export const PlansHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 2.6vw;
  /* font size 50px */
  padding-bottom: 3.625vw;
  /* padding-bottom: 108px; */
  line-height: 3.49vw;
  /* line-height: 67px; */
  color: black;
  width: 38.84vw;
  /* width: 765px; */
  margin-bottom: 0px;
  @media screen and (max-width: 980px) {
    font-size: 25px;
    padding-bottom: 50px;
    line-height: 30px;
  }
  @media screen and (max-width: 690px) {
    font-size: 20px;
    line-height: 28px;
    width: 190px;
  }
`;

export const PlansTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const PlansMobileHeader = styled.div`
  @media screen and (min-width: 691px) {
    display: none;
  }
  @media screen and (max-width: 690px) {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 2.6vw;
    text-align: center;
    font-size: 28px;
    padding-bottom: 43px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 14vw;
  @media screen and (max-width: 980px) {
    width: auto;
  }
`;

export const PlansMobileContent = styled.div`
  @media screen and (min-width: 691px) {
    display: none;
  }
  @media screen and (max-width: 690px) {
  }
`;

export const PlansContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const PlansColumn = styled.div`
  height: 100%;
  @media screen and (max-width: 690px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
  }
`;

export const PlansCard1 = styled.div`
  padding: 4.38vw 2.97vw;
  /* padding: 4.375vw 57px; */
  height: 35.36vw;
  /* height is 679px */
  width: 20.21vw;
  /* width is 388px */
  // box-shadow: 0vw 0.26041666666666663vw 0.78125vw lightgray;
  /* box shadow is 0px 5px 15px */
  background: #fae8d0;
  border-radius: 1.3vw;
  /* border radius 25px */
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  /* width: 290px; */

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-0.52vw);
    box-shadow: 0vw 0.21vw 1.56vw #77777729;
  }
  @media screen and (max-width: 980px) {
    padding: 40px 20px;
    height: 350px;
    width: 200px;
    box-shadow: 0px 2px 10px lightgray;
    border-radius: 25px;
  }
  @media screen and (max-width: 690px) {
    margin-bottom: 0px;
    padding: 84px 26px;
    height: 611px;
    width: 327px;
    &:hover {
      transition: none;
      transform: none;
      box-shadow: none;
    }
  }
`;

export const PlansCard2 = styled.div`
  position: relative;
  padding: 4.38vw 2.97vw;
  /* padding: 4.375vw 57px; */
  height: 35.36vw;
  /* height is 679px */
  width: 20.21vw;
  /* width is 388px */
  // box-shadow: 0vw 0.26041666666666663vw 0.78125vw lightgray;
  /* box shadow is 0px 5px 15px */
  background: #172631;
  border-radius: 1.3vw;
  /* border radius 25px */
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  /* width: 290px; */

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-0.52vw);
    box-shadow: 0vw 0.21vw 1.56vw #77777729;
  }
  @media screen and (max-width: 980px) {
    padding: 40px 20px;
    height: 350px;
    width: 200px;
    box-shadow: 0px 2px 10px lightgray;
    border-radius: 25px;
  }
  @media screen and (max-width: 690px) {
    margin-bottom: 0px;
    padding: 84px 26px;
    height: 611px;
    width: 327px;
    &:hover {
      transition: none;
      transform: none;
      box-shadow: none;
    }
  }
`;

const Shimmer = keyframes`
 100% {-webkit-mask-position:left}
`;

export const GoldLabel = styled.div`
  background: transparent url(${gold}) no-repeat right top;
  background-size: 7.81vw 2.6vw;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 7.81vw;
  height: 2.6vw;
  @media screen and (max-width: 690px) {
    background-size: auto;
    height: 50px;
    width: 160px;
  }
`;

export const GoldIcon = styled.img`
  position: block;
  @media screen and (max-width: 980px) {
    width: 14px;
  }
  @media screen and (max-width: 690px) {
    width: 30px;
  }
`;

export const GoldText = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.83vw;
  color: black;
  @media screen and (max-width: 980px) {
    font-size: 6px;
  }
  @media screen and (max-width: 690px) {
    font-size: 16px;
  }
`;

export const PlansCard3 = styled.div`
  padding: 4.375vw 2.96875vw;
  /* padding: 4.375vw 57px; */
  height: 35.36vw;
  /* height is 679px */
  width: 20.21vw;
  /* width is 388px */
  // box-shadow: 0vw 0.26041666666666663vw 0.78125vw lightgray;
  /* box shadow is 0px 5px 15px */
  background: #dceaf4;
  border-radius: 1.3vw;
  /* border radius 25px */
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  /* width: 290px; */

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-0.52vw);
    box-shadow: 0vw 0.21vw 1.56vw #77777729;
  }
  @media screen and (max-width: 980px) {
    padding: 40px 20px;
    height: 350px;
    width: 200px;
    box-shadow: 0px 2px 10px lightgray;
    border-radius: 25px;
  }
  @media screen and (max-width: 690px) {
    margin-bottom: 0px;
    padding: 84px 26px;
    height: 611px;
    width: 327px;
    &:hover {
      transition: none;
      transform: none;
      box-shadow: none;
    }
  }
`;

export const PlansTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  margin-bottom: 0px;
  font-size: 1.5625vw;
  /* font size is 30px */
  color: #172631;
  line-height: 2.08vw;
  /* line-height: 40px; */
  padding-bottom: 0.99vw;
  /* padding bottom is 19px */
  @media screen and (max-width: 980px) {
    font-size: 20px;
    line-height: 23px;
    padding-bottom: 5px;
  }
  @media screen and (max-width: 690px) {
    font-size: 24px;
    line-height: 29px;
    padding-bottom: 18px;
  }
`;

export const PlansTitle2 = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.5625vw;
  /* font size is 30px */
  margin-bottom: 0px;
  color: white;
  line-height: 2.08vw;
  /* line-height: 40px; */
  padding-bottom: 0.99vw;
  /* padding bottom is 19px */
  display: inline-block;
  mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300% 100%;
  background-repeat: no-repeat;
  animation: ${Shimmer} 7.5s infinite;

  @media screen and (max-width: 980px) {
    font-size: 20px;
    line-height: 23px;
    padding-bottom: 5px;
  }
  @media screen and (max-width: 690px) {
    font-size: 24px;
    line-height: 29px;
    padding-bottom: 18px;
  }
`;

export const PlansSub = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.83vw;
  /* font size is 16px */
  margin-bottom: 0px;
  color: #505050;
  padding-bottom: 2.08vw;
  /* padding bottom is 40px */
  line-height: 0.83vw;
  /* line-height: 16px; */

  @media screen and (max-width: 690px) {
    font-size: 16px;
    line-height: 20px;
    padding-bottom: 22.89px;
  }
`;

export const PlansSub2 = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.83vw;
  /* font size is 16px */
  margin-bottom: 0px;
  color: #596a72;
  padding-bottom: 2.083vw;
  /* padding bottom is 40px */

  @media screen and (max-width: 980px) {
    font-size: 14px;
    line-height: 18px;
    padding-bottom: 12px;
  }

  @media screen and (max-width: 690px) {
    font-size: 16px;
    line-height: 20px;
    padding-bottom: 22.89px;
  }
`;

export const SubPrice = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.83vw;
  /* font-size is 16px */
  margin-bottom: 0px;
  color: #505050;
  line-height: 1.72vw;
  /* line-height: 33px; */
  padding-bottom: 0.31vw;
  /* padding-bottom: 6px; */

  @media screen and (max-width: 980px) {
    font-size: 13px;
    line-height: 15px;
    padding-bottom: 3px;
  }

  @media screen and (max-width: 690px) {
    font-size: 25px;
    line-height: 39px;
    padding-bottom: 6px;
  }
`;

export const SubPrice2 = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.83vw;
  /* font-size is 16px */
  color: #13c278;
  display: inline-block;
  margin-bottom: 0px;
  line-height: 1.72vw;
  /* line-height: 33px; */
  padding-bottom: 0.31vw;
  /* padding-bottom: 6px; */
  mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300% 100%;
  background-repeat: no-repeat;
  animation: ${Shimmer} 7.5s infinite;

  @media screen and (max-width: 980px) {
    font-size: 13px;
    line-height: 15px;
    padding-bottom: 3px;
  }

  @media screen and (max-width: 690px) {
    font-size: 25px;
    line-height: 39px;
    padding-bottom: 6px;
  }
`;

export const SubPriceAmount = styled.span`
  font-weight: 700;
  font-size: 1.82vw;
  /* font-size is 35px */
  color: #172631;
  line-height: 2.45vw;
  /* line-height: 47px; */

  @media screen and (max-width: 980px) {
    font-size: 15px;
    line-height: 15px;
  }

  @media screen and (max-width: 690px) {
    font-size: 35px;
    line-height: 30px;
  }
`;

export const SubPriceAmount2 = styled.span`
  font-weight: 700;
  font-size: 1.82vw;
  /* font-size 35px */
  color: #13c278;
  line-height: 2.45vw;
  /* line-height: 47px; */

  @media screen and (max-width: 980px) {
    font-size: 15px;
    line-height: 15px;
  }
  @media screen and (max-width: 690px) {
    font-size: 35px;
    line-height: 30px;
  }
`;

export const LilSubPrice = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.83vw;
  /* fontsize is 16px */
  color: #505050;
  margin-bottom: 0px;
  padding-bottom: 1.04vw;
  /* padding bottom is 20px */
  line-height: 0.83vw;
  /* line-height: 16px; */

  @media screen and (max-width: 980px) {
    font-size: 12px;
    line-height: 12px;
    padding-bottom: 15px;
  }
  @media screen and (max-width: 690px) {
    font-size: 16px;
    line-height: 30px;
    padding-bottom: 15px;
  }
`;

export const LilSubPrice2 = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  margin-bottom: 0px;
  font-size: 0.83vw;
  /* font-size is 16px */
  color: #1c8ae2;
  padding-bottom: 1.04vw;
  /* padding bottom is 20px */
  line-height: 0.83vw;
  /* line-height: 16px; */
  @media screen and (max-width: 980px) {
    font-size: 12px;
    line-height: 12px;
  }

  @media screen and (max-width: 690px) {
    font-size: 16px;
    line-height: 30px;
    padding-bottom: 15px;
  }
`;

export const Line = styled.div`
  margin-bottom: 2.083vw;
  border-bottom: 2px solid #262626;
  width: 1.56vw;

  @media screen and (max-width: 690px) {
    width: 30px;
    margin-bottom: 20px;
  }
`;

export const Line2 = styled.div`
  margin-bottom: 2.083vw;
  border-bottom: 2px solid #fcbc28;
  width: 1.56vw;

  @media screen and (max-width: 690px) {
    width: 30px;
    margin-bottom: 20px;
  }
`;

export const PlansCheckContainer = styled.div`
  padding-bottom: 3.958333333333333vw;
  /* padding-bottom 76px */
  @media screen and (max-width: 980px) {
    padding-bottom: 125px;
  }
`;

export const PlansCheckWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 690px) {
    padding-bottom: 15px;
  }
`;

export const PlansCheckLottie = styled.div`
  height: 1.82vw;
  /* height: 35px;4 */
  padding-right: 0.52vw;
  /* padding-right: 10px; */
  width: 1.82vw;
  /* width: 35px; */
  @media screen and (max-width: 980px) {
    height: 18px;
    padding-right: 0px;
    width: 14px;
  }

  @media screen and (max-width: 690px) {
    width: 24px;
    height: 24px;
  }
`;

export const PlansCheck = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.04vw;
  /* font-size 20px */
  color: #172631;
  margin-bottom: 0px;
  line-height: 1.04vw;
  /* line-height: 20px; */
  @media screen and (max-width: 980px) {
    font-size: 13px;
    line-height: 10px;
  }

  @media screen and (max-width: 690px) {
    font-size: 20px;
    line-height: 24px;
    padding-left: 7px;
  }
`;

export const PlansCheck2 = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.04vw;
  /* font-size 20px */
  color: white;
  margin-bottom: 0px;
  line-height: 1.04vw;
  /* line-height: 20px; */
  @media screen and (max-width: 980px) {
    font-size: 13px;
    line-height: 10px;
  }

  @media screen and (max-width: 690px) {
    font-size: 20px;
    line-height: 24px;
    padding-left: 7px;
  }
`;

export const PlansReminder = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.04vw;
  margin-bottom: 0px;
  /* font-size 20px */
  color: #505050;
  line-height: 1.04vw;
  /* line-height: 20px; */
  @media screen and (max-width: 980px) {
    font-size: 12px;
    line-height: 14px;
  }

  @media screen and (max-width: 690px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const PlansVat = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.83vw;
  /* font-size: 16px; */
  color: black;
  margin-bottom: 0px;
  text-align: right;
  padding-top: 1.56vw;
  /* padding-top: 30px; */
  @media screen and (max-width: 980px) {
    font-size: 13px;
    padding-top: 10px;
  }
  @media screen and (max-width: 690px) {
    font-size: 16px;
    padding-top: 25px;
    text-align: center;
  }
`;
