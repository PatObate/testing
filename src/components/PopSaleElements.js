import styled from "styled-components";

export const PopSaleNotif = styled.div`
  display: ${({ scrollNav }) => (scrollNav ? "none" : "flex")};
  align-items: center;
  background: #f9e2dd;
  border: none;
  outline: none;
  border-radius: 1.3vw;
  /* border-radius: 25px; */
  overflow: hidden;
  /* font size 20px */
  z-index: 9999;
  margin-bottom: 3.94vw;
  /* margin-bottom: 75.56px; */
  width: 36.45833333333333vw;
  height: 3.5937499999999996vw;
  padding: 0;
  /* padding: 0vw 35.18px; */

  /* padding: 0px 10px; */
  @media screen and (max-width: 980px) {
    width: auto;
    height: auto;
    padding: 6px 0px;
    border-radius: 25px;
  }
  @media screen and (max-width: 690px) {
    margin-bottom: 10px;
    width: auto;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const PopSaleNotif100 = styled.div`
  /* display: ${({ scrollNav }) => (scrollNav ? "none" : "flex")}; */
  align-items: center;
  background: #f9e2dd;
  cursor: pointer;
  z-index: 13;
  /* border-radius: 25px; */
  /* font size 20px */
  /* margin-bottom: 75.56px; */
  height: 3.43vw;
  position: fixed;
  left: ${({ scrollNav }) => (scrollNav ? "50px" : "-500px")};
  opacity: ${({ scrollNav }) => (scrollNav ? "1" : "0")};
  transition: 1s all ease;
  bottom: 0.52vw;
  /* bottom: 10px; */
  width: 35vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1.3vw;
  @media screen and (max-width: 980px) {
    width: 400px;
    height: auto;
    padding: 6px 0px;
    border-radius: 25px;
    bottom: 5px;
  }

  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const PopSaleText = styled.p`
  /* padding: 0px 36px 0px 20px; */
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.04vw;
  /* font-size: 20px; */
  line-height: 0.9895833333333333vw;
  /* line-height: 19px; */
  /* 0 10px*/
  color: #f7263d;
  margin-bottom: 0px;

  @media screen and (max-width: 980px) {
    font-size: 13px;
    line-height: 16px;
  }
`;

export const PopSaleTextBold = styled.span`
  font-weight: 800;
  font-size: 1.2vw;
  @media screen and (max-width: 980px) {
    font-size: 13px;
  }
`;

export const PopSaleIcon = styled.div`
  padding-right: 0.63vw;
  @media screen and (max-width: 980px) {
    padding-right: 10px;
  }
`;

export const PopSaleImg = styled.img`
  display: block;
  height: 2.58vw;
  width: 2.58vw;
  @media screen and (max-width: 980px) {
    height: 30px;
    width: auto;
  }
`;

export const PopSaleDiv = styled.div`
  display: block;
`;
