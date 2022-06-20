import styled from "styled-components";

export const FormContainer = styled.form`
  height: 47.66vw;
  width: 38.85vw;
  /* width: 746px; */
  padding: ${({ secondary }) =>
    secondary ? "2.86vw 3.02vw" : "4.43vw 3.02vw"};
  /* box shadow is 0px 5px 15px */
  border-radius: 1.3020833333333335vw;
  /* border radius 25px */
  background: ${({ secondary }) => (secondary ? "#f5f2e9" : "white")};
  box-shadow: ${({ secondary }) =>
    secondary ? "" : "0vw 0.21vw 2.60vw #EDE6D3"};

  @media screen and (max-width: 980px) {
    padding: 20px 30px;
    box-shadow: 0px 2px 10px lightgray;
    border-radius: 25px;
    height: auto;
    width: 340px;
  }
  @media screen and (max-width: 690px) {
    width: 100%;
    height: 850.48px;
    padding: 26px 24px;
    border-radius: 19px;
  }
`;

export const FormContainerMob = styled.form`
  height: 100vh;
  width: 100%;
  padding: 26px 24px;
  background: white;
  border-radius: 19px;
`;

export const FormHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 2.08vw;
  margin-bottom: 0px;
  /* font-size is 35px */
  color: black;
  padding-bottom: 3.44vw;
  line-height: 2.55vw;
  /* line-height: 53px; */

  @media screen and (max-width: 980px) {
    font-size: 17px;
    padding-bottom: 20px;
    line-height: 20px;
  }
  @media screen and (max-width: 690px) {
    font-size: 20px;
    line-height: 24px;
    width: 289px;
  }
`;

export const Label = styled.label`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.94vw;
  /* font-size is 14px */
  color: black;
  padding-bottom: 0.26vw;
  @media screen and (max-width: 980px) {
    font-size: 13px;
  }

  @media screen and (max-width: 690px) {
    font-size: 16px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 690px) {
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InputColumn = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: 980px) {
    padding-bottom: 10px;
  }
  @media screen and (max-width: 690px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 0.5208333333333333vw 0.5208333333333333vw 0.5208333333333333vw;
  /* padding is 10px 10px 10px */
  background: white;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.94vw;
  color: #798289;
  border: 0.015625vw solid #a8a8a8;
  /* border is 0.3px */
  border-radius: 1.3020833333333335vw;
  /* border radius is 25px */
  width: 14.89vw;
  height: 3.54vw;
  /* width is 250px */
  margin-bottom: 1.72vw;
  /* margin-left: 10px; */
  /* margin bottom is 15px */
  @media screen and (max-width: 980px) {
    padding: 5px 10px;
    font-size: 10px;
    border: 1px solid #a8a8a8;
    width: 130px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 690px) {
    font-size: 16px;
    width: 100%;
    height: 58px;
    border-radius: 14px;
  }
`;

export const InputBig = styled.input`
  padding: 0.5208333333333333vw 0.5208333333333333vw 0.5208333333333333vw
    0.5208333333333333vw;
  /* padding is 10px 10px 10px */
  background: white;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.94vw;
  /* font-size is 14px */
  color: #798289;
  border: 0.015625vw solid #a8a8a8;
  /* border is 0.3px */
  border-radius: 1.3020833333333335vw;
  /* border radius is 25px */
  margin-bottom: 3.13vw;
  /* margin-bottom is 15px */
  width: 100%;
  height: 5.63vw;

  @media screen and (max-width: 980px) {
    padding: 10px 10px;
    font-size: 10px;
    height: 70px;
  }

  @media screen and (max-width: 690px) {
    font-size: 16px;
    width: 100%;
    height: 97px;
    border-radius: 14px;
  }
`;

export const Agreement = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  column-gap: 0.78vw;

  @media screen and (max-width: 690px) {
    column-gap: 20px;
  }
`;

export const AgreementBox = styled.input`
  width: 1.74vw;
  height: 1.74vw;

  color: #798289;
  cursor: pointer;

  @media screen and (max-width: 980px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 980px) {
    width: 60px;
    height: 60px;
  }
`;

export const AgreementTxt = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.73vw;
  margin-bottom: 0px;
  color: black;
  padding-bottom: 1.88vw;
  @media screen and (max-width: 980px) {
    font-size: 12px;
    padding-bottom: 15px;
  }
  @media screen and (max-width: 690px) {
    font-weight: 500;
  }
`;

export const AgreementLink = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #d3980f;
  text-decoration: underline;
  cursor: pointer;
  @media screen and (max-width: 980px) {
    font-size: 12px;
  }
`;
