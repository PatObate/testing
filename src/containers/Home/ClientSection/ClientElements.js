import styled from "styled-components";

export const ClientContainer = styled.div`
  background: #f8f8f3;
  /* 0px  */
  padding: 7vw 16.61vw;
  overflow: hidden;
  transition: 0.7s all ease;
  position: relative;
  height: ${({ scrollNav }) => (scrollNav ? "140vh" : "100vh")};
  width: 100%;

  @media screen and (max-width: 980px) {
    padding: 0px 50px 60px 50px;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const MClientContainer = styled.div`
  @media screen and (min-width: 691px) {
    display: none;
  }
  @media screen and (max-width: 690px) {
    padding: 0px 24px;
    height: 600px;
    position: relative;
    overflow: hidden;
  }
`;

export const MClientContent = styled.div``;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ClientHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  margin-bottom: 0vw;
  color: black;
  font-size: 2.6vw;
  /* font-size: 50px; */
  padding-bottom: 2.6vw;
  /* padding-bottom: 50px; */
  text-align: center;

  @media screen and (max-width: 980px) {
    font-size: 25px;
    padding-bottom: 15px;
    line-height: 30px;
  }

  @media screen and (max-width: 690px) {
    font-size: 25px;
  }
`;

export const ClientContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.7s all ease;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    background: ${({ scrollNav }) =>
      scrollNav
        ? "transparent"
        : "transparent linear-gradient(179deg,#ffffff00 0%,#f8f8f3 100%) 0% 3% no-repeat padding-box"};
    height: 100%;
    z-index: 4;
    top: 3.65vw;
    /* top: 70px; */
    transition: 0.7s all ease;
  }
  @media screen and (max-width: 690px) {
    flex-direction: column;
  }
`;

export const ClientColumn = styled.div`
  margin: auto;
  z-index: 3;
`;

export const ClientButton = styled.div`
  padding: 0.94vw 0.94vw;
  /* padding: 18px 58px; */
  color: white;
  background: #1d2b36;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 1.25vw;
  text-decoration: none;
  height: 3.33vw;
  /* height: 64px; */
  /* font-size: 24px; */
  border-radius: 1.3vw;
  /* border-radius: 25px; */
  text-align: center;
  cursor: pointer;
  display: block;
  margin: auto;
  width: 13.02vw;
  /* width: 250px; */
  z-index: 4;
  position: relative;

  @media screen and (max-width: 980px) {
    padding: 15px 30px;
    font-size: 16px;
    border-radius: 25px;
    height: auto;
    font-size: 17px;
    width: 160px;
  }
  @media screen and (max-width: 690px) {
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 25px;
  }
`;

export const ClientDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const GooglePic = styled.img`
  height: auto;
  width: 20%;
  margin-right: 0.07vw;
`;
