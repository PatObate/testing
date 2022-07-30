import styled from "styled-components";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export const ActivityFirstContainer = styled.div`
  background: #f8f8f2;
  /* 0px  */
  padding: 5vw 0vw;
  /* padding: 0vw 319px; */
  z-index: 1;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 980px) {
    padding: 100px 0px;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const ActivityMContainer = styled.div`
  @media screen and (min-width: 691px) {
    display: none;
  }

  @media screen and (max-width: 690px) {
    padding: 100px 0px;
    background-color: #f8f8f3;
  }
`;

export const ActivityContent = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ListContainer = styled.div`
  background: #f5f2e9;
  border-radius: 25px;
  padding: 25px 0px;
  width: 100%;
  height: auto;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ListWrapper = styled.div`
  display: flex;
  background: white;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 100%;
  padding: 0px 24px 0px 0px;
  border-bottom: ${({ secondary }) => (secondary ? "" : "0.1px solid #dedede")};
  border-radius: ${({ top }) => (top ? "25px 25px 0px 0px" : "")};
`;

export const ListColumn1 = styled.div`
  width: 25%;
  margin: auto;
`;
export const ListColumn2 = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListText = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 0px;
`;

export const ListImg = styled.img`
  width: 25%;
  height: auto;
  display: block;
  padding-right: 12px;
`;

export const ListImg2 = styled.img`
  width: 60%;
  height: auto;
  position: absolute;
`;

export const ListTag = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 0px;
  padding-top: 20px;
`;

export const ButtonImg = styled.img`
  display: block;

  transform: rotate(180deg);
`;

export const ActivityFirstRow1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3.13vw;
  /* padding-bottom: 60px; */
  line-height: 3.13vw;
  /* line-height: 60px; */
  width: 100%;
  padding: 0vw 16.614583333333332vw 3.13vw 16.614583333333332vw;
  @media screen and (max-width: 980px) {
    padding: 0px 50px 40px 50px;
  }
`;

export const ActivityFirstHeadWrapper = styled.div``;

export const ActivityFirstHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 2.6vw;
  margin-bottom: 0px;
  /* font-size: 50px; */
  color: black;
  width: 24.17vw;
  /* width: 464px; */
  @media screen and (max-width: 980px) {
    font-size: 25px;
    padding-bottom: 7px;
    line-height: 30px;
    width: 240px;
  }
  @media screen and (max-width: 690px) {
    font-size: 25px;
    text-align: center;
    width: 250px;
    padding-bottom: 50px;
  }
`;

export const ActivityFirstSub = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  margin-bottom: 0px;
  font-size: 0.78vw;
  /* font-size: 15px; */
  color: black;
  line-height: 1.04vw;
  /* line-height: 20px; */
  width: 20.83vw;
  /* width: 400px; */
  @media screen and (max-width: 980px) {
    font-size: 15px;
    padding-bottom: 20px;
    line-height: 17px;
    width: 230px;
  }
`;
// `;

export const ActivityFirstNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 8.33vw;
  /* height: 160px; */
  @media screen and (max-width: 980px) {
    height: 130px;
  }
`;

export const ActivityIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.6vw;
  /* height: 50px; */
  @media screen and (max-width: 980px) {
    height: 50px;
  }
`;

export const ActivityFirstIcon = styled(AiOutlineArrowLeft)`
  font-size: 2.6vw;
  /* font-size: 50px; */
  display: block;
  color: #aeb0af;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media screen and (max-width: 980px) {
    font-size: 40px;
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    color: #292d32;
  }
`;
export const ActivityFirstIcon2 = styled(AiOutlineArrowRight)`
  font-size: 2.6vw;
  /* font-size: 50px; */
  display: block;
  color: #aeb0af;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media screen and (max-width: 980px) {
    font-size: 40px;
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    color: #292d32;
  }
`;

export const ActivityFirstRow2 = styled.div`
  margin: auto;
  width: 100%;
  padding-left: 14.43vw;
`;

// carousel
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

  @media screen and (max-width: 690px) {
    border-bottom: 0.1px solid rgb(222, 222, 222);
    height: 100px;
    padding: 0px 24px;
    border-radius: 0px;
    margin-bottom: 0;
    h1 {
      font-size: 18px;
    }
  }
`;

export const Dropdown = styled.div`
  background: white;
  color: black;
  width: 100%;
  height: auto;
  padding: 1vw 1.46vw;
  border-radius: 0vw 0vw 1.3vw 1.3vw;
  position: relative;
  p {
    font-size: 0.83vw;
    font-family: Inter, sans-serif;
    font-weight: 400;
    text-align: left;
    margin-bottom: 0;
  }

  @media screen and (max-width: 690px) {
    padding: 20px 24px;
    top: -1px;
    border-bottom: 0.1px solid rgb(222, 222, 222);
    border-radius: 0px;

    p {
      font-size: 16px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
