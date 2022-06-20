import styled from "styled-components";

// This section is still not final, i'll be updating the sizings regularly.

export const Platform1Container = styled.div`
  background-color: #f8f8f3;
  padding: 5vw 16.61vw;
  overflow: hidden;
  height: 100vh;
  position: relative;
  @media screen and (max-width: 980px) {
    display: none;
  }
  z-index: 1;
`;

export const Platform1Container980 = styled.div`
  @media screen and (min-width: 981px) {
    display: none;
  }
  @media screen and (max-width: 980px) {
    padding: 30px 50px;
    background-color: #f8f8f3;
  }

  @media screen and (max-width: 690px) {
    padding: 50px 0px;
  }
`;

export const SlideWrap = styled.div`
  overflow: hidden;
  position: relative;
`;

export const PlatformHeader = styled.h2`
  font-size: 2.6vw;
  /* 50px font size */
  font-family: "Inter", sans-serif;
  font-weight: 700;
  margin-bottom: 0px;
  padding-bottom: 3.65vw;
  /* padding bottom 70px */
  text-align: center;
  @media screen and (max-width: 980px) {
    font-size: 25px;
    padding-bottom: 15px;
    line-height: 30px;
  }

  @media screen and (max-width: 690px) {
    font-size: 25px;
    width: 256px;
    margin: auto;
  }
`;

export const PlatformContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 690px) {
  }
`;

export const CardContainer = styled.div`
  padding: 150px 65px 0px 65px;
  /* padding is 50px and 65 px */
  background: white;
  border-radius: 1.3vw;
  /* border radius is 25px */
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1281px;
  /* width is 923px */
  height: 584px;
  /* height is 395px */
  @media screen and (max-width: 980px) {
    padding: 20px 30px;
    border-radius: 25px;
    width: 570px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 690px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 695px;
    padding: 29px 24px;
    border-radius: 19px;
  }
`;

export const CardMenu = styled.div`
  width: 100%;
  height: 49px;
  background: #ededed;
  border-radius: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 37px;
`;

export const CardMobWrapper = styled.div`
  opacity: ${({ hide }) => (hide ? "1" : "0")};
  display: ${({ hide }) => (hide ? "block" : "none")};
  transition: 0.7s all ease;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const CardNav = styled.div`
  font-size: 16px;
  font-family: "Inter", sans-serif;
  width: 100%;
  height: 100%;
  padding: 13px 15px;
  text-align: center;
  border-radius: 23px;
  background: ${({ highlight }) => (highlight ? " #fcbc28" : "")};
  font-weight: ${({ highlight }) => (highlight ? "700" : "500")};
  transition: 0.7s all ease;
`;

export const CardRow = styled.div`
  display: flex;
`;

export const CardRow2 = styled.div`
  @media screen and (min-width: 691px) {
    display: none;
  }
  @media screen and (max-width: 690px) {
    display: flex;
  }
`;

export const CardColumn = styled.div`
  width: 50%;
  height: 100%;
  @media screen and (max-width: 980px) {
    width: 70%;
  }
  @media screen and (max-width: 690px) {
    width: 100%;
    height: auto;
  }
`;

export const CardColumnPic = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 980px) {
    width: 30%;
  }
  @media screen and (max-width: 690px) {
    width: 100%;
    height: 250px;
    position: relative;
    align-items: center;
  }
`;

export const ButtonColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardImg = styled.img`
  z-index: 2;
  height: 60%;
  width: auto;
  /*pading is 50px and 150px */
`;

export const CardImg2 = styled.img`
  height: 100%;
  width: auto;
  position: absolute;
  top: 3.13vw;
  /*pading is 50px and 150px */
  z-index: 1;
  @media screen and (max-width: 690px) {
    top: 30px;
  }
`;

export const CardTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.15vw;
  margin-bottom: 0px;
  padding-bottom: 1.04vw;
  /* padding-bottom: 20px; */
  @media screen and (max-width: 980px) {
    font-size: 17px;
  }
`;

export const CardList = styled.div`
  padding-bottom: 4.69vw;
  /* padding bottom is 90px */
  height: 14.06vw;
  /* height: 270px; */
  @media screen and (max-width: 980px) {
    height: auto;
    padding-bottom: 90px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 0.52vw;
  /* padding-bottom: 10px; */
  @media screen and (max-width: 980px) {
    padding-bottom: 7px;
  }
  @media screen and (max-width: 690px) {
    padding-bottom: 20px;
  }
`;

export const CardItem = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  margin-bottom: 0px;
  font-size: 1.04vw;
  /* font-size 20px */
  color: black;
  /* padding bottom 10px */
  @media screen and (max-width: 980px) {
    font-size: 14px;
  }
  @media screen and (max-width: 690px) {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const CheckIcon = styled.p`
  font-size: 0.83vw;
  margin-bottom: 0px;
  /* font-size: 16px; */
  color: #13ceaa;
  padding-right: 0.26vw;
  /* padding-right: 5px; */
  @media screen and (max-width: 690px) {
    font-size: 15px;
    padding-right: 10px;
  }
`;

export const CardButton = styled.button`
  cursor: pointer;
  padding: 1.82vw 2.08vw;
  /* padding is 35px 40px */
  border-radius: 1.3vw;
  /* border radius is 25px */
  background: #f7f7f7;
  border: none;
`;
