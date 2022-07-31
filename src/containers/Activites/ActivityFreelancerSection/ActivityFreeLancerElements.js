import styled from "styled-components";
import image from "../../../images/raisearmyellow.png";

export const ActivityFreelancerContainer = styled.div`
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

export const ActivityFreeContainer690 = styled.div`
  @media screen and (min-width: 691px) {
    display: none;
  }
  @media screen and (max-width: 690px) {
    padding: 30px 0px;
    background: #f8f8f3;
  }
`;

export const ActivityFreeContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 690px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 700px;
    background-image: url(${image});
    background-size: contain;
    background-position: center right;
    background-repeat: no-repeat;
    background-size: 380px;
    padding: 0px 24px;
  }
`;

export const ActivityFreeRow = styled.div`
  width: 50%;
  margin: auto;
  display: block;
`;
export const ActivityFreeRow2 = styled.div`
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

export const SubHeadingWrapper = styled.div``;

export const SmileImg = styled.img`
  width: 20%;
  height: auto;
  position: absolute;
  top: -2.08vw;
  left: 0.52vw;
`;

export const ActivityFreelancerMobSubText = styled.p`
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

export const ActivityFreelancerGreenSpan = styled.span`
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

export const ActivityFreelancerTinySpan = styled.p`
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

export const ActivityWhite = styled.div`
  position: absolute;
  top: 13.8vw;
  left: -7.55vw;
  height: 7.55vw;
  width: 18.33vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.77vw 0.99vw;
  background: white;
  border-radius: 0.99vw;
  box-shadow: 0vw 0.21vw 1.56vw #77777729;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  padding: 28px 24px 0px 24px;
  display: flex;
  justify-content: flex-end;
`;

export const ActivityFreeHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 2.6vw;
  /* font-size: 50px; */
  margin-bottom: 0px;
  width: 28.54vw;
  /* width: 548px; */
  color: black;
  padding-bottom: 1.04vw;
  /* padding-bottom: 20px; */
  line-height: 3.13vw;
  /* line-height: 60px; */
  @media screen and (max-width: 980px) {
    font-size: 25px;
    width: auto;
    line-height: 30px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 690px) {
    padding-bottom: 0px;
    text-align: center;
  }
`;

export const ActivityFreeMobSub = styled.div`
  height: 190px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 24px;
  background: white;
  border-radius: 19px;
  position: relative;
`;

export const MobImg = styled.img`
  width: 20%;
  height: auto;
  position: absolute;
  top: -40px;
  left: 40px;
`;

export const ActivityFreeMobSubText = styled.p`
  margin-bottom: 0;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 27px;
  width: 100%;
`;

export const ActivityFreeGreenSpan = styled.span`
  font-size: 57px;
  font-weight: 400;
  color: #14cc7e;
`;

export const ActivityFreeTinySpan = styled.span`
  font-weight: 400;
  font-family: "Inter", sans-serif;
  margin-bottom: 0px;
  font-size: 15px;
  padding-bottom: 0px;
`;
