import styled from "styled-components";

export const PrivacyContainer = styled.div`
  background: #f8f8f3;
  /* 0px  */
  z-index: 10;
  /* 0px 319px */
  padding: 5vw 16.61vw;
  z-index: 2;

  @media screen and (max-width: 980px) {
    padding: 100px 50px;
    height: 100vh;
  }

  @media screen and (max-width: 690px) {
    padding: 100px 24px;
    background-color: #faf7ef;
    height: auto;
    width: 100%;
  }
`;

export const PrivacyHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: black;
  font-size: 2.6vw;
  /* font-size: 50px; */
  text-align: center;
  margin-bottom: 1.25vw;
  /* padding-bottom: 80px; */
  @media screen and (max-width: 980px) {
    font-size: 25px;
    margin-bottom: 24px;
  }
`;

export const PrivacyText = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: ${({ bold }) => (bold ? "600" : "400")};
  color: #6b6b6b;
  font-size: 0.83vw;
  /* font-size: 50px; */
  margin-bottom: 1.25vw;
  /* padding-bottom: 80px; */
  @media screen and (max-width: 980px) {
    font-size: 16px;
    margin-bottom: 24px;
  }
`;
