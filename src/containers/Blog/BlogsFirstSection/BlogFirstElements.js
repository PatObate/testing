import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BlogFirstContainer = styled.div`
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

export const BlogMobile = styled.div`
  @media screen and (min-width: 691px) {
    display: none;
  }

  @media screen and (max-width: 690px) {
    padding: 100px 24px;
    background-color: #faf7ef;
    height: auto;
    width: 100%;
  }
`;

export const BlogFirstRow1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0vw 16.61vw;
  @media screen and (max-width: 980px) {
    padding: 0px 50px;
  }
`;

export const BlogFirstHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 2.6vw;
  color: black;
  padding-bottom: 3.13vw;
  margin-bottom: 0px;
  /* padding-bottom: 60px; */
  @media screen and (max-width: 980px) {
    font-size: 25px;
    padding-bottom: 40px;
  }

  @media screen and (max-width: 690px) {
    text-align: center;
  }
`;

export const BlogFirstNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.52vw;
  /* padding-top: 10px; */
  @media screen and (max-width: 980px) {
    padding-top: 10px;
  }

  @media screen and (max-width: 690px) {
    padding-top: 0px;
  }
`;

export const GetItem = styled.div`
  padding: 0vw 0.05vw;
  @media screen and (max-width: 980px) {
    padding: 0px 2px;
  }
  @media screen and (max-width: 690px) {
    padding: 0px 0px;
  }
`;

export const GetMenu = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  margin-bottom: 0px;
  font-size: 0.94vw;
  color: ${({ highlight }) => (highlight ? "#2680EB" : "black")};
  background: ${({ highlight }) => (highlight ? "#F0F0EC" : "")};
  padding: 0.78vw 0vw;
  text-align: center;
  transition: 0.7s all ease;
  border-radius: 1.3vw;
  cursor: pointer;
  width: 6.25vw;
  /* width: 120px; */
  @media screen and (max-width: 980px) {
    font-size: 13px;
    padding: 7px 0px;
    width: 70px;
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

export const BlogFirstRow2 = styled.div`
  margin: auto;
  width: 100%;
  margin-left: 14.43vw;
  @media screen and (max-width: 980px) {
    width: 90%;
  }
  @media screen and (max-width: 690px) {
    width: 100%;
  }
`;

export const BlogCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
