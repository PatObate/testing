import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: #313a4ce3;
  position: fixed;
  z-index: 5;
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};
  bottom: ${({ toggle }) => (toggle ? "0" : "-100vh")};
  transition: 0.3s all ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
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
