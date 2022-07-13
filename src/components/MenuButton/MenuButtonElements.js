import styled from "styled-components";
import Lottie from "lottie-react";

export const ButtonWrapper = styled.div`
  display: none;
  @media screen and (max-width: 690px) {
    width: 69px;
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #111830;
    position: fixed;
    bottom: 30px;
    opacity: ${({ toggle }) => (toggle ? "0" : "1")};
    transition: 0.3s all ease-in-out;
  }
`;

export const LottieCircle = styled(Lottie)`
  width: 69px;
  height: 69px;
`;
