import styled from "styled-components";

export const ActivityCardWrapprt = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
export const ActivityCardContainer = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.6vw 2.45vw;
  /* padding: 50px 47px; */
  height: 19.64vw;
  /* height: 377px; */
  width: 23.44vw;
  /* width: 546px; */
  border-radius: 1.3vw;
  /* border-radius: 25px; */

  @media screen and (max-width: 980px) {
    height: 250px;
    width: 240px;
    padding: 20px 30px;
    border-radius: 25px;
  }
`;

export const ActivityCardRow1 = styled.div`
  width: 30%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;
export const ActivityCardRow2 = styled.div`
  width: 70%;
  margin: auto;
  display: block;
`;

export const ActivityCardImg = styled.img`
  width: 80%;
`;

export const ActivityCardHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 2.08vw;
  margin-bottom: 0px;
  /* font-size: 40px; */
  padding-bottom: 1.04vw;
  /* padding-bottom: 20px; */
  color: black;
  @media screen and (max-width: 980px) {
    font-size: 15px;
    padding-bottom: 10px;
  }
`;

export const ActivityCardP = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.04vw;
  margin-bottom: 0px;
  /* font-size: 20px; */
  padding-bottom: 0.52vw;
  /* padding-bottom: 10px; */
  color: black;
  @media screen and (max-width: 980px) {
    font-size: 13px;
    padding-bottom: 7px;
  }
`;
