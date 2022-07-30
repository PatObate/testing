import styled from "styled-components";

export const FAQContainer = styled.div`
  background: #f8f8f3;
  /* 0px  */
  overflow: hidden;
  z-index: 10;
  /* 0px 319px */
  padding: 5vw 16.61vw;
  z-index: 2;
  min-height: 100vh;
  height: auto;

  @media screen and (max-width: 980px) {
    padding: 100px 50px;
    height: 100vh;
  }

  @media screen and (max-width: 690px) {
    padding: 100px 0px;
    background-color: #faf7ef;
    height: auto;
    width: 100%;
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
    padding: 0px 24px 35px 24px;
  }
`;

export const FAQContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 690px) {
    flex-direction: column;
  }
`;

export const FAQRow = styled.div`
  width: 15%;
  position: relative;
  @media screen and (max-width: 980px) {
    width: 20%;
  }
  @media screen and (max-width: 690px) {
    width: 100%;
    padding: 0px 24px 23px 24px;
  }
`;

export const FAQRow2 = styled.div`
  width: 85%;
  @media screen and (max-width: 980px) {
    width: 80%;
  }
  @media screen and (max-width: 690px) {
    width: 100%;
  }
`;

export const AccordionWrapper = styled.div`
  opacity: ${({ hide }) => (hide ? "1" : "0")};
  display: ${({ hide }) => (hide ? "block" : "none")};
  transition: 0.7s all ease;
  height: 100%;
  width: 100%;
`;

export const AccordionContainerMob = styled.div`
  @media screen and (min-width: 691px) {
    width: 100%;
    background: none;
    border-radius: 0;
    padding: 0;
  }
  @media screen and (max-width: 690px) {
    width: 100%;
    height: auto;
    background: white;
    border-radius: 25px;
    padding: 15px 0px;
  }
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
  @media screen and (max-width: 690px) {
    flex-direction: row;
    position: relative;
    top: 0px;
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
  @media screen and (max-width: 690px) {
    font-size: 18px;
    background: none;
    width: auto;
    font-weight: ${({ highlight }) => (highlight ? "700" : "300")};
    text-decoration: ${({ highlight }) => (highlight ? "underline" : "none")};
  }
`;

// accordion

export const Wrap = styled.div`
  background: white;
  height: 4.22vw;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  z-index: 2;
  position: relative;
  padding: 0vw 1.46vw;
  border-radius: 1.3vw;
  margin-bottom: 1vw;
  h1 {
    font-size: 0.83vw;
    font-family: Inter, sans-serif;
    font-weight: 500;
    text-align: left;
    margin-bottom: 0;
  }

  @media screen and (max-width: 980px) {
    height: 50px;
    border-radius: 25px;
    padding: 16px 12px;

    h1 {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 690px) {
    border-bottom: 0.1px solid rgb(222, 222, 222);
    height: 100px;
    padding: 0px 24px;
    border-radius: 0px;
    z-index: 1;

    h1 {
      font-size: 18px;
    }
  }
`;

export const Dropdown = styled.div`
  position: relative;
  z-index: 1;
  top: -2vw;
  background: white;
  color: black;
  width: 100%;
  height: auto;
  padding: 1vw 1.46vw;
  border-radius: 0vw 0vw 1.3vw 1.3vw;
  p {
    font-size: 0.83vw;
    font-family: Inter, sans-serif;
    font-weight: 400;
    text-align: left;
    margin-bottom: 0;
  }

  @media screen and (max-width: 980px) {
    top: -24px;
    border-radius: 0px 0px 25px 25px;
    padding: 20px 12px;

    p {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 690px) {
    top: -20px;
    padding: 20px 24px;
    z-index: 2;
    border-bottom: 0.1px solid rgb(222, 222, 222);

    p {
      font-size: 13px;
    }
  }
`;

export const HeaderIcon = styled.img`
  transition: all 0.2s;
`;
