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
  height: 134px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 24px;
  background: white;
  border-radius: 19px;
  position: relative;
`;

export const ActivityFreeMobSubText = styled.p`
  margin-bottom: 0;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 27px;
  width: 100%;
`;

export const ActivityFreeYellow = styled.div`
  background-size: contain;
  background-position: top right;
  background-repeat: no-repeat;
  height: 26.88vw;
  /* height: 516px; */
  width: 47.76vw;
  /* width: 917px; */
  display: grid;
  grid-template-columns: 1% 9% 29% 61%;
  grid-template-rows: 21% 8% 8% 20% 43%;
  position: relative;
  @media screen and (max-width: 980px) {
    height: 300px;
    width: 450px;
    background-position: center right;
  }
`;

export const ActivityFreeSmile = styled.div`
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  z-index: 3;
`;

export const ActivityFreeCard = styled.div`
  padding: 1.15vw 1.3vw;
  /* padding: 22px 25px; */
  grid-column: 1 / 4;
  grid-row: 3 / 5;
  background: white;
  z-index: 2;
  border-radius: 0.99vw;
  /* border-radius: 19px; */
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 980px) {
    border-radius: 19px;
  }
`;

export const ActivityTextWrapper = styled.div``;

export const ActivityCardText = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1.51vw;
  margin-bottom: 0px;
  /* font-size: 29px; */
  color: black;
  display: inline;
  @media screen and (max-width: 980px) {
    font-size: 15px;
  }
`;

export const ActivityCardNum = styled.p`
  color: #13ceaa;
  font-weight: 400;
  margin-bottom: 0px;
  font-size: 3.13vw;
  /* font-size: 60px; */
  display: inline;
  font-family: "Inter", sans-serif;
  @media screen and (max-width: 980px) {
    font-size: 20px;
  }
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

export const ActivityCardTiny = styled.p`
  font-size: 0.89vw;
  /* font-size: 17px; */
  margin-bottom: 0px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  color: black;
  @media screen and (max-width: 980px) {
    font-size: 12px;
  }
`;
