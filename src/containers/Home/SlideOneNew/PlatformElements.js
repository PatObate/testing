import styled from "styled-components";

export const Platform1Container = styled.div`
  background-color: #f8f8f3;
  padding: 5vw 16.61vw;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
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
  margin-bottom: 0vw;
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

export const ContainerDiv = styled.div`
  display: ${({ hide }) => (hide ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const CardContainer = styled.div`
  padding: 7.81vw 3.39vw 0vw 3.39vw;
  position: relative;
  /* padding: 150px 65px 0px 65px; */
  background: white;
  border-radius: 1.3vw;
  /* border radius is 25px */
  border: none;

  width: 66.72vw;
  /* width: 1281px; */
  height: 30.42vw;
  /* height: 584px; */
  @media screen and (max-width: 980px) {
    padding: 20px 30px;
    border-radius: 25px;
    width: 100%;
    height: 600px;
    margin-bottom: 15px;
    flex-direction: column;
  }

  @media screen and (max-width: 690px) {
    justify-content: flex-start;
    width: 100%;
    height: 695px;
    padding: 29px 24px;
    border-radius: 19px;
  }
`;

export const CardMenu = styled.div`
  top: -5vw;
  position: relative;
  width: 30.78vw;
  height: 2.55vw;
  border-radius: 1.3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ededed;
  @media screen and (max-width: 980px) {
    position: static;
    width: 100%;
    height: 49px;
    border-radius: 23px;
    margin-bottom: 37px;
  }
`;

export const CardMobWrapper = styled.div`
  opacity: ${({ hide }) => (hide ? "1" : "0")};
  display: ${({ hide }) => (hide ? "flex" : "none")};
  transition: 0.7s all ease;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CardNav = styled.div`
  font-family: "Inter", sans-serif;
  border-radius: 1.3vw;
  padding: 0.67vw 0.78vw;
  background: ${({ highlight }) => (highlight ? " #fcbc28" : "")};
  font-weight: ${({ highlight }) => (highlight ? "700" : "500")};
  transition: 0.7s all ease;
  text-align: center;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 980px) {
    font-size: 16px;
    padding: 13px 15px;
    border-radius: 23px;
  }
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
  position: relative;
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
  width: 55%;
  height: auto;
  @media screen and (max-width: 980px) {
    width: 95%;
  }
  @media screen and (max-width: 690px) {
    width: 55%;
  }
  /*pading is 50px and 150px */
`;

export const CardImg2 = styled.img`
  height: 29.04vw;
  width: auto;
  position: absolute;
  top: -5.13vw;
  /*pading is 50px and 150px */
  z-index: 1;
  @media screen and (max-width: 690px) {
    top: 0px;
    height: 70vw;
  }
`;

export const CardTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.15vw;
  margin-bottom: 0vw;
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
  margin-bottom: 0vw;
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
  margin-bottom: 0vw;
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
