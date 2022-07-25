import styled from "styled-components";
import { AiFillMail } from "react-icons/ai";

export const ContactContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 5.6vw 7.29vw;
  /* padding: 90px 190px; */
  background: linear-gradient(89deg, #14161a 0%, #0e264c 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
  @media screen and (max-width: 690px) {
    padding: 50px 30px;
  }
`;

export const ContactForm = styled.form`
  height: 25.54vw;
  width: 38.88vw;
  padding: 2vw;
  background: white;
  border-radius: 1.28vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 690px) {
    height: 500px;
    width: 100%;
    padding: 15px;
  }
`;

export const ContactColumn = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 690px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ContactDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const ContactLabel = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 0.87vw;
  color: #3b4556;
  font-weight: 300;
  text-align: center;
  @media screen and (max-width: 690px) {
    font-size: 14px;
  }
`;

export const ContactInput = styled.input`
  width: 15vw;
  height: 2vw;
  margin-bottom: 0.7vw;
  @media screen and (max-width: 690px) {
    width: 150px;
    height: 20px;
    margin-bottom: 8px;
  }
`;
export const ContactInputBig = styled.input`
  width: 50%;
  height: 4vw;
  margin-bottom: 0.7vw;
  @media screen and (max-width: 690px) {
    width: 100%;
    height: 50px;
    margin-bottom: 15px;
  }
`;

export const ContactButton = styled.button`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: white;
  font-weight: 300;
  background: #0a2c4e;
  padding: 0.5vw 2.6vw;
  border-radius: 0.16vw;
  @media screen and (max-width: 690px) {
    border-radius: 3px;
    padding: 5px 12px;
  }
`;

export const ContactButtonText = styled.p`
  font-size: 0.87vw;
  font-family: "Poppins", sans-serif;
  text-align: center;
  padding-right: 0.5vw;
  @media screen and (max-width: 690px) {
    font-size: 14px;
    padding-right: 10px;
  }
`;

export const MailIcon = styled(AiFillMail)`
  font-size: 1vw;
  color: white;
  transition: all 0.3s ease 0s;
  @media screen and (max-width: 690px) {
    font-size: 20px;
  }
`;
