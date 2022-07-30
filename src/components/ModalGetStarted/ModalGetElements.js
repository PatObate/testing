import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const GetBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: #f8f8f3;
  position: fixed;
  z-index: 100;
  top: 0;
  top: ${({ toggle }) => (toggle ? "0" : "-150vh")};
  transition: 0.5s all ease;
`;

export const XPic = styled.img`
  position: absolute;
  top: 1.56vw;
  /* top: 30px; */
  right: 3.13vw;
  /* right: 60px; */
  cursor: pointer;
  @media screen and (max-width: 690px) {
    height: auto;
    width: 10%;
    top: 20px;
    right: 20px;
  }
`;

export const GetContainer = styled.div`
  padding: 4.32vw 16.61vw;
  /* padding: 83px 318px; */
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 980px) {
    padding: 80px 50px;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const GetContainerMob = styled.div`
  @media screen and (min-width: 691px) {
    display: none;
  }
  @media screen and (max-width: 690px) {
    height: 100%;
    width: 100%;
  }
`;

export const GetColumn = styled.div`
  width: 37%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const GetColumn2 = styled.div`
  width: 63%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const GetHeader = styled.h2`
  color: black;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.88vw;
  /* font-size: 36px; */
  padding-bottom: 2.34vw;
  /* padding-bottom: 45px; */
  @media screen and (max-width: 980px) {
    font-size: 25px;
    line-height: 30px;
    padding-bottom: 25px;
  }
`;

export const GetNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 2.34vw;
  /* padding-bottom: 45px; */
  @media screen and (max-width: 980px) {
    padding-bottom: 25px;
  }
`;

export const GetItem = styled.div`
  padding: 0vw 0.52vw;
  /* padding: 0px 10px; */
  @media screen and (max-width: 980px) {
    padding: 0px 4px;
  }
`;

export const GetMenu = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 0.78vw;
  /* font-size: 15px; */
  color: ${({ highlight }) => (highlight ? "black" : "#008DFF")};
  padding: 0.52vw 0.78vw;
  /* padding: 10px 15px; */
  border-radius: 1.3vw;
  /* border-radius: 25px; */
  background: ${({ highlight }) => (highlight ? "#FFC32F" : "")};
  text-align: center;
  cursor: pointer;
  transition: 0.7s all ease;
  @media screen and (max-width: 980px) {
    font-size: 13px;
    padding: 6px 12px;
    border-radius: 25px;
  }
`;

export const GetButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height is 63px */
  padding: 0vw 0.68vw;
  /* padding: 0px 13px; */
  background: #f0f0ec;
  border: 0.20000000298023224px solid #2989d7;
  border-radius: 1.3vw;
  /* border radius is 25px */
  width: 24.69vw;
  /* width: 474px; */
  height: 4.22vw;
  /* height: 81px; */
  cursor: pointer;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 980px) {
    padding: 0px 13px;
    width: auto;
    height: auto;
  }
`;

export const GetButtonText = styled.p`
  /* 0 20px */
  font-family: "Inter", sans-serif;
  font-weight: 0.94vw;
  /* font-weight: 18px; */
  font-weight: 500;
  text-align: start;
  margin-bottom: 0px;
  color: #2b91e3;
  @media screen and (max-width: 980px) {
    font-size: 13px;
  }
`;

export const GetButtonIcon = styled.div`
  height: auto;
  position: relative;
`;

export const AccordionWrapper = styled.div`
  opacity: ${({ hide }) => (hide ? "1" : "0")};
  display: ${({ hide }) => (hide ? "block" : "none")};
  width: 100%;
  transition: 0.7s all ease;
  @media screen and (max-width: 980px) {
    padding-bottom: 25px;
  }
`;

export const GetButtonImg1 = styled.img`
  display: block;
  z-index: 1;
  @media screen and (max-width: 980px) {
    width: 30px;
  }
`;

export const GetButtonImg2 = styled.img`
  display: block;
  width: 3.13vw;
  /* width: 60px; */
  z-index: 1;
`;

export const XIcon = styled(AiOutlineClose)`
  font-size: 30px;
  position: absolute;
  top: 30px;
  right: 10px;
  color: white;
  cursor: pointer;
  z-index: 2;
`;

export const GetVideo = styled.div`
  height: 10.42vw;
  width: 15.63vw;
  z-index: 1;
  position: absolute;
  bottom: 40px;
  right: ${({ toggle }) => (toggle ? "40px" : "-1000px")};
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};
  transition: 0.5s all ease;
`;

export const Video = styled.video`
  height: 10.42vw;
  width: 15.63vw;
  position: relative;
`;

export const Source = styled.source``;

// accordion
export const Wrap = styled.div`
  background: rgb(240, 240, 236);
  height: 4.22vw;
  position: relative;
  z-index: 2;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
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

    h1 {
      font-size: 18px;
    }
  }
`;

export const Dropdown = styled.div`
  position: relative;
  z-index: 1;
  top: -2vw;
  background: rgb(240, 240, 236);
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
    border-bottom: 0.1px solid rgb(222, 222, 222);

    p {
      font-size: 13px;
    }
  }
`;

export const HeaderIcon = styled.img`
  transition: all 0.2s;
`;
