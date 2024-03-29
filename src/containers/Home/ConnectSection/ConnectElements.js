import styled from "styled-components";

export const ConnectContainer = styled.div`
  background: #f8f8f3;
  /* 0px  */
  padding: ${({ secondary }) =>
    secondary ? "5vw 16.61vw 10vw 16.61vw" : "5vw 16.61vw 10vw 16.61vw"};
  position: relative;
  overflow: hidden;
  z-index: 15;
  height: auto;
  margin: ${({ secondary }) => (secondary ? "auto" : "")};

  @media screen and (max-width: 980px) {
    padding: ${({ secondary }) => (secondary ? "300px 50px" : " 60px 50px")};
  }
  @media screen and (max-width: 690px) {
    padding: 50px 0px;
  }
`;

export const ConnectContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 690px) {
    flex-direction: column;
  }
`;

export const ConnectColumn = styled.div`
  width: 34%;
  @media screen and (max-width: 690px) {
    width: 100%;
    padding-bottom: 20px;
    display: none;
  }
`;

export const ConnectColumn2 = styled.div`
  width: 66%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 690px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ConnectDivMob = styled.div`
  @media screen and (min-width: 691px) {
    display: none;
  }

  @media screen and (max-width: 690px) {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 40px 24px;
  }
`;

export const ConnectHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 2.6vw;
  margin-bottom: 0vw;
  /* font size is 50px */
  padding-bottom: 0.52vw;
  /* padding-bottom: 10px; */
  line-height: 3.49vw;
  /* line-height: 67px; */
  @media screen and (max-width: 980px) {
    font-size: 25px;
    padding-bottom: 7px;
    line-height: 30px;
  }
  @media screen and (max-width: 690px) {
    font-size: 25px;
    padding-bottom: 10px;
  }
`;

export const ConnectSub = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  margin-bottom: 0vw;
  font-size: 0.94vw;
  /* font size is 18px */
  width: 18.85vw;
  /* width: 362px; */
  padding-bottom: 1.56vw;
  /* padding bottom is 30px */
  line-height: 1.25vw;
  /* line-height: 24px; */
  @media screen and (max-width: 980px) {
    font-size: 15px;

    line-height: 17px;
    width: auto;
  }
  @media screen and (max-width: 690px) {
    font-size: 16px;
    padding-bottom: 23px;
    text-align: center;
  }
`;

export const ConnectIcon = styled.img`
  max-width: 100%;
  height: auto;

  @media screen and (max-width: 980px) {
    width: 14%;
  }

  @media screen and (max-width: 690px) {
    width: 10%;
  }
`;

export const ConnectKeys = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 1.56vw;
  /* padding bottom is 30px */
  /* width is 400px */
  @media screen and (max-width: 980px) {
    padding-bottom: 10px;
  }
  @media screen and (max-width: 690px) {
    width: 100%;
    min-height: 90px;
    justify-content: space-between;
    background: white;
    margin-bottom: 10px;
    padding-bottom: 0px;
    padding: 8px;
    border-radius: 20px;
    border: 0.1px solid #c0e3ff;
  }
`;

export const ConnectText = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1.25vw;
  color: #172631;
  /* font-size is 24px */
  line-height: 2.08vw;
  /* line-height: 40px; */
  width: 100%;
  @media screen and (max-width: 980px) {
    font-size: 13px;
    line-height: 16px;
  }
  @media screen and (max-width: 690px) {
    font-size: 18px;
    line-height: 1.2;
    width: ${({ secondary }) => (secondary ? "236px" : " auto")};
  }
`;

export const ConnectTinySpan = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.94vw;
  color: #172631;
  /* font-size is 18px */
  padding-left: 1.3vw;
  /* padding-left: 40px; */
  line-height: 1.25vw;
  /* line-height: 24px; */
  width: 18.65vw;
  @media screen and (max-width: 980px) {
    font-size: 12px;
    padding-left: 10px;
    line-height: 12px;
  }
  @media screen and (max-width: 690px) {
    font-size: 14px;
    line-height: 17px;
    width: auto;
  }
`;

export const ConnectTinySpanLink = styled.div`
  color: blue;
  text-decoration: underline;
`;
