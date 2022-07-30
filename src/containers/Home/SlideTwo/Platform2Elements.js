import styled from "styled-components";

// This section is still not final, i'll be updating the sizings regularly.

export const Platform2Container = styled.div`
  background: #f8f8f3;
  display: flex;
  align-items: center;
  /* 0px  */
  padding: 8vw 0vw !important;
  height: 100vh;
  @media screen and (max-width: 980px) {
    display: none;
  }
`;

export const Platform2Container980 = styled.div`
  @media screen and (min-width: 981px) {
    display: none;
  }
  @media screen and (max-width: 980px) {
    padding: 60px 50px 60px 0px;
    background-color: #faf7ef;
  }

  @media screen and (max-width: 690px) {
    padding: 50px 0px 50px 0px;
  }
`;

export const Platform2Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Platform2Column = styled.div`
  margin: auto;
  width: 50%;
  @media screen and (max-width: 980px) {
    width: 100%;
  }
  @media screen and (max-width: 690px) {
    margin: 0px;
  }
`;

export const Platform2Column2 = styled.div`
  width: 50%;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const PlatformHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  margin-bottom: 0vw;
  font-size: 2.604166666666667vw;
  /* font size is 50px */
  color: black;
  padding-bottom: 1.4322916666666665vw;
  /* padding bottom is 27.5px */
  padding-left: 14.514583333333332vw;

  @media screen and (max-width: 980px) {
    font-size: 25px;
    padding-bottom: 15px;
    line-height: 30px;
    padding-left: 50px;
    width: 480px;
  }

  @media screen and (max-width: 690px) {
    font-size: 25px;
    padding-left: 24px;
    width: 300px;
    padding-bottom: 50px;
  }
`;

export const PlatformImg = styled.img`
  max-width: 100%;
  height: auto;
  @media screen and (max-width: 980px) {
    width: 80%;
    padding-bottom: 15px;
  }

  @media screen and (max-width: 690px) {
    width: 100%;
    padding: 0px 24px 36px 0px;
  }
`;

export const CardContainer = styled.li`
  padding: 2.3vw 2.3854166666666665vw;
  /* padding is 50px 65px */
  background: white;
  border-radius: 1.3020833333333335vw;
  /* border radius is 25px */
  border: none;
  display: flex;
  justify-content: center;
  height: 15.93vw;
  width: 31.04vw;
  @media screen and (max-width: 980px) {
    transform: none;
    left: 0;
    top: 0;
    transform: 0;
    position: relative;
    padding: 12px 12px;
    border-radius: 25px;
    width: auto;
    height: auto;
    flex-direction: column;
    align-self: center;
    margin-left: 50px;
  }

  @media screen and (max-width: 690px) {
    padding: 20px 24px;
    margin-left: 0px;
    width: 100%;
    height: 560px;
  }
`;

export const CardColumn1 = styled.div`
  width: 30%;
  @media screen and (max-width: 980px) {
    width: 20%;
  }
  @media screen and (max-width: 690px) {
    width: 40%;
  }
`;

export const CardColumn2 = styled.div`
  margin: auto;
  width: 70%;
  @media screen and (max-width: 980px) {
    width: 80%;
  }
  @media screen and (max-width: 690px) {
    width: 60%;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  height: 130px;
  border-bottom: ${({ secondary }) => (secondary ? "" : "0.1px solid #dedede")};
`;

export const CardImg = styled.img`
  max-width: 80%;
  height: auto;

  @media screen and (max-width: 980px) {
    width: 80%;
  }

  @media screen and (max-width: 690px) {
    width: 80%;
  }
`;

export const CardHeader = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  margin-bottom: 0px;
  font-size: 1.5625vw;
  /* font-size is 30px */
  color: black;
  @media screen and (max-width: 980px) {
    font-size: 17px;
  }
  @media screen and (max-width: 690px) {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const CardP = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.8333333333333334vw;
  /* font-size is 16px */
  color: black;
  margin-bottom: 0px;
  @media screen and (max-width: 980px) {
    font-size: 14px;
  }
  @media screen and (max-width: 690px) {
    font-size: 12px;
  }
`;
