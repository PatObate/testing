import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 25;
`;

export const Video = styled.video`
  width: 70vw;
  height: 40vw;
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
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 1.04vw;
  /* top: 20px; */
  right: 1.04vw;
  /* right: 20px; */
  width: 1.67vw;
  /* width: 32px; */
  height: 1.67vw;
  /* height: 32px; */
  z-index: 11;
  color: black;
`;
