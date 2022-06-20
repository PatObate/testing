import styled from "styled-components";
import phone from "../../svg/phonecall.svg";
import map from "../../svg/map.svg";
import top from "../../svg/yellowcontainer.svg";

export const HomeButtonContainer = styled.div`
  @media screen and (min-width: 691px) {
    display: none;
  }
  @media screen and (max-width: 690px) {
    width: 100%;
    position: fixed;
    bottom: ${({ toggle }) => (toggle ? "0px" : "-320px")};
    height: 375px;
    background-color: transparent;
    z-index: 14;
    transition: 0.5s all ease;
  }
`;

export const AbsoluteContainer = styled.div`
  position: absolute;
  width: 100%;
  top: -30px;
  z-index: 2;
`;
export const ButtonWrapper = styled.div`
  width: 69px;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: white;
  margin: auto;
`;
export const ButtonWrapperGreen = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #00d0a8;
`;
export const ButtonWrapperWhite = styled.div`
  width: 35px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: white;
`;

export const HomeButtonImg = styled.img`
  transform: ${({ toggle }) => (toggle ? "rotate(40deg)" : "")};
  transition: 0.5s all ease;
`;

export const HomeContentWrapper = styled.div`
  width: 100%;
  height: 375px;
  background-image: url(${top});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};
  transition: 0.5s all ease;
  z-index: 1;
`;

export const HomeButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const BtnContainer = styled.div`
  padding: 68px 0px 37px 0px;
`;

export const LinkDiv = styled.a`
  text-decoration: none;
`;

export const Btn1 = styled.div`
  background-image: url(${phone});
  text-decoration: none;
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;
  background-color: white;
  padding: 5px 0px 5px 70px;
  /* padding: 9px 24px 9px 85px; */
  border-radius: 50px;
  /* border-radius: 50px 50px 50px 50px; */
  cursor: pointer;
  width: 263px;
  height: 67px;
  margin-bottom: 10px;
`;

export const Btn2 = styled.nav`
  background-color: white;
  padding: 5px 5px;
  /* padding: 9px 24px 9px 85px; */
  border-radius: 50px;
  /* border-radius: 50px 50px 50px 50px; */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 263px;
  height: 67px;
  margin-bottom: 10px;
`;

export const Btn3 = styled.nav`
  background-image: url(${map});
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;
  background-color: white;
  padding: 5px 0px 5px 70px;
  /* padding: 9px 24px 9px 85px; */
  border-radius: 50px;
  /* border-radius: 50px 50px 50px 50px; */
  cursor: pointer;
  width: 263px;
  height: 67px;
`;

export const BtnGray = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #5c5d5c;
  text-align: start;
  font-size: 16px;

  margin-bottom: 0;
`;

export const BtnBlack = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: ${({ third }) => (third ? "16px" : "24px")};
  color: black;
  text-align: start;
  margin-bottom: 0px;
`;

export const BtnText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 15px;
  color: black;
  text-align: start;
  margin-bottom: 0px;
`;

export const BtnBold = styled.span`
  font-weight: 500;
`;

export const TxtSmall = styled.p`
  margin-bottom: 0px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  padding-bottom: 13px;
`;
