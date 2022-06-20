import styled from "styled-components";

export const FAQContainer = styled.div`
  background: #f8f8f3;
  /* 0px  */
  overflow: hidden;
  z-index: 10;
  /* 0px 319px */
  padding: 5vw 16.61vw;
  z-index: 2;
  @media screen and (max-width: 980px) {
    padding: 100px 50px;
    height: 100vh;
  }
`;

export const FAQHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: black;
  font-size: 2.6vw;
  /* font-size: 50px; */
  text-align: center;
  margin-bottom: 0px;
  padding-bottom: 4.17vw;
  /* padding-bottom: 80px; */
  @media screen and (max-width: 980px) {
    font-size: 25px;
    padding-bottom: 40px;
  }
`;

export const FAQContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FAQRow = styled.div`
  width: 15%;
  position: relative;
  @media screen and (max-width: 980px) {
    width: 20%;
  }
`;

export const FAQRow2 = styled.div`
  width: 85%;
  @media screen and (max-width: 980px) {
    width: 80%;
  }
`;

export const AccordionWrapper = styled.div`
  opacity: ${({ hide }) => (hide ? "1" : "0")};
  display: ${({ hide }) => (hide ? "block" : "none")};
  transition: 0.7s all ease;
  width: 100%;
`;

export const FAQNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 11.46vw;
  /* top: 220px; */
  @media screen and (max-width: 980px) {
    top: 300px;
  }
`;

export const FAQItem = styled.div`
  padding: 0.26vw 0vw;
  /* padding: 5px 0px; */
  @media screen and (max-width: 980px) {
    padding: 5px 0px;
  }
`;

export const FAQMenu = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 0.94vw;
  margin-bottom: 0px;
  /* font-size: 18px; */
  color: ${({ highlight }) => (highlight ? "#2680EB" : "black")};
  background: ${({ highlight }) => (highlight ? "#F0F0EC" : "")};
  padding: 0.78vw 1.98vw;
  /* padding: 15px 38px; */
  text-align: center;
  transition: 0.7s all ease;
  border-radius: 1.3vw;
  /* border-radius: 25px; */
  cursor: pointer;

  @media screen and (max-width: 980px) {
    padding: 6px 20px;
    font-size: 15px;
    border-radius: 25px;
  }
`;
