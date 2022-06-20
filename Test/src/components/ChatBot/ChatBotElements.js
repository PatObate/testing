import styled from "styled-components";

export const ChatBotContainer = styled.div`
  background: white;
  /* margin-bottom: -4.95vw; */
  border-radius: 2.19vw;
  width: 13.59vw;
  /* width: 261px; */
  right: 8.85vw;
  /* right: 170px; */
  height: 3.43vw;
  position: fixed;
  padding: 0.31vw 0.31vw;
  /* padding: 6px 6px; */
  z-index: 14;
  display: flex;
  align-items: center;
  justify-content: space-around;
  bottom: 0.52vw;
  /* bottom: 10px; */
  @media screen and (max-width: 980px) {
    width: 220px;
    height: auto;
    padding: 6px 6px;
    border-radius: 25px;
    bottom: 5px;
    right: 50px;
  }

  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const ChatBotLogo = styled.img`
  display: block;
  height: 2.58vw;
  width: 2.58vw;
  @media screen and (max-width: 980px) {
    height: 30px;
    width: auto;
  }
`;

export const ChatBotText = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 0.78vw;
  /* font-size: 15px; */
  background: white;
  margin-bottom: 0;
  color: black;
  @media screen and (max-width: 980px) {
    font-size: 13px;
    line-height: 16px;
  }
`;

export const ChatBotTextBold = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 0.78vw;
  /* font-size: 15px; */
  background: white;
  color: black;
  @media screen and (max-width: 980px) {
    font-size: 13px;
  }
`;
