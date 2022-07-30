import styled from "styled-components";

export const StartButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height is 63px */
  padding: ${({ secondary }) =>
    secondary ? "1.56vw 1.04vw" : " 0.68vw 0.94vw"};
  background: ${({ secondary }) => (secondary ? "#F7F7F7" : "#13ceaa")};
  border: none;
  outline: none;
  border-radius: 1.3020833333333335vw;
  /* border radius is 25px */
  width: ${({ secondary }) => (secondary ? "23.18vw" : "13.02vw")};
  /* width: 250px; */
  height: ${({ secondary }) => (secondary ? "4.84vw" : " 3.28vw")};
  /* height: 63px; */
  cursor: pointer;
  overflow: hidden;
  z-index: 3;
  position: relative;

  margin-bottom: ${({ low }) => (low ? "0vw" : "4.1vw")};

  @media screen and (max-width: 980px) {
    border-radius: 25px;
    margin-bottom: ${({ low }) => (low ? "0px" : "50px")};
    width: ${({ secondary }) => (secondary ? "397px" : "170px")};
    height: auto;
    padding: 13px 13px;
  }
  @media screen and (max-width: 690px) {
    margin-bottom: ${({ low }) => (low ? "0px" : "20px")};
    display: ${({ view }) => (view ? "none" : "")};
    justify-content: space-between;
    width: 236px;
    height: ${({ secondary }) => (secondary ? "60px" : "63px")};
    border-radius: 20px;
    border: ${({ secondary }) => (secondary ? "0.1px solid #c0e3ff" : "")};
    padding: ${({ secondary }) => (secondary ? "20px 5px" : " 18px 20px")};
    background: ${({ secondary }) => (secondary ? "white" : "#13ceaa")};
  }
`;

export const ButtonText = styled.p`
  /* 0 20px */
  font-family: "Inter", sans-serif;
  font-weight: ${({ medium }) => (medium ? "500" : "400")};
  font-size: ${({ small }) => (small ? "0.94vw" : " 1.1vw")};
  color: ${({ blue }) => (blue ? "#2B91E3" : "white")};
  margin-bottom: 0px;
  @media screen and (max-width: 980px) {
    font-size: 16px;
    padding-right: 10px;
  }
  @media screen and (max-width: 690px) {
    font-size: ${({ small }) => (small ? "16px" : "22px")};
    color: ${({ blue }) => (blue ? "#008dff" : "white")};
  }
`;

export const ButtonIcon = styled.div`
  padding-right: ${({ secondary }) => (secondary ? "1.04vw" : "0vw")};
`;

export const ButtonImg = styled.img`
  transform: ${({ secondary }) => (secondary ? "rotate(180deg)" : "none")};
  display: block;
  z-index: 1;
  width: 2.28vw;
  @media screen and (max-width: 980px) {
    width: 30px;
  }
  @media screen and (max-width: 690px) {
    width: 30px;
  }
`;
export const ButtonImg1 = styled.img`
  width: 3.13vw;
  display: block;
  z-index: 1;
  @media screen and (max-width: 690px) {
    width: 40px;
  }
`;
export const ButtonImg2 = styled.img`
  transform: ${({ secondary }) => (secondary ? "rotate(180deg)" : "none")};
  display: block;
  position: absolute;
  z-index: 2;
  left: 2.34vw;
  /* left: 45px; */
  top: 0.83vw;
  /* top: 16px; */
  width: 3.13vw;
  @media screen and (max-width: 690px) {
    width: 40px;
    top: 7px;
    left: 20px;
  }
`;
