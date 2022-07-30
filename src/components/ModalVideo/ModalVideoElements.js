import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  transition: 0.5s all ease;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 25;
  top: ${({ toggle }) => (toggle ? "0" : "-150vh")};
`;

export const Video = styled.video`
  width: 70vw;
  height: 40vw;
  align-self: center;
  justify-self: center;
  @media screen and (max-width: 960px) {
    width: 600px;
    height: auto;
  }
  @media screen and (max-width: 690px) {
    width: 300px;
    height: auto;
  }
`;

export const Source = styled.source``;

export const ModalWrapper = styled.div`
  width: 70vw;
  height: 40vw;
  background: white;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  @media screen and (max-width: 960px) {
    width: 600px;
    height: auto;
  }
  @media screen and (max-width: 690px) {
    width: 300px;
    height: auto;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  color: white;
  top: 1.04vw;
  /* top: 20px; */
  right: 1.04vw;
  /* right: 20px; */

  font-size: 2vw;
  z-index: 11;

  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
`;
