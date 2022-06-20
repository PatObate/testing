import styled from "styled-components";

export const BlogCardContainer = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1.56vw 1.3vw 2.08vw 1.3vw;
  /* padding: 30px 25px 40px 25px; */
  height: 29.27vw;
  /* height: 562px; */
  width: 21.09vw;
  /* width: 405px; */
  border-radius: 1.3vw;
  z-index: 1;

  @media screen and (max-width: 980px) {
    height: 300px;
    width: 220px;
    padding: 20px 15px 30px 15px;
    border-radius: 25px;
  }
  @media screen and (max-width: 690px) {
    height: 260px;
    width: 100%;
    padding: 26px 13px 28px 13px;
    border-radius: 25px;
    margin-bottom: 20px;
  }
`;

export const RedRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const RedTag = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.83vw;
  /* font-size: 16px; */
  padding: 0.26vw 0.78vw;
  /* padding: 5px 15px; */
  background: #f45959;
  color: white;
  border-radius: 0.57vw;
  margin-bottom: 0px;
  /* border-radius: 11px; */
  @media screen and (max-width: 980px) {
    font-size: 12px;
    padding: 3px 12px;
    border-radius: 11px;
  }
  @media screen and (max-width: 690px) {
    font-size: 16px;
    padding: 5px 15px;
    border-radius: 11px;
  }
`;

export const WordRow = styled.div``;

export const CardHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1.3vw;
  /* font-size: 25px; */
  line-height: 1.3vw;
  /* line-height: 25px; */
  color: white;
  text-align: center;
  padding-bottom: 1.56vw;
  /* padding-bottom: 30px; */
  @media screen and (max-width: 980px) {
    font-size: 15px;
    line-height: 19px;
    padding-bottom: 10px;
  }
  @media screen and (max-width: 690px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

export const Line = styled.div`
  border-bottom: 0.1vw solid #ffc32f;
  /* border-bottom: 2px solid #ffc32f; */
  width: 3.13vw;
  /* width: 60px; */
  display: block;
  margin: auto;
  margin-bottom: 0.78vw;
  /* margin-bottom: 15px; */
  @media screen and (max-width: 980px) {
    width: 30px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 690px) {
    border-bottom: 2px solid #ffc32f;
    width: 50px;
  }
`;

export const Date = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.83vw;
  margin-bottom: 0px;
  /* font-size: 16px; */
  color: #ffc32f;
  text-align: center;
  @media screen and (max-width: 980px) {
    font-size: 13px;
  }
  @media screen and (max-width: 980px) {
    font-size: 16px;
  }
`;
