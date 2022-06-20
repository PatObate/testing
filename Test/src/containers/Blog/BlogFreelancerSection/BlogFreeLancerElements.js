import styled from "styled-components";

export const BlogFreelancerContainer = styled.div`
  background: #f8f8f2;
  /* 0px  */
  padding: 5vw 0vw 5vw 16.61vw;
  /* padding: 0vw 319px; */
  z-index: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 980px) {
    padding: 100px 0px 100px 50px;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const BlogFreeRow = styled.div`
  width: 50%;
  margin: auto;
  display: block;
`;

export const BlogFreeHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 2.6vw;
  margin-bottom: 0px;
  /* font-size: 50px; */
  width: 28.54vw;
  /* width: 548px; */
  color: black;
  padding-bottom: 1.04vw;
  /* padding-bottom: 20px; */
  line-height: 3.13vw;
  /* line-height: 60px; */
  @media screen and (max-width: 980px) {
    font-size: 25px;
    width: 190px;
    line-height: 30px;
    padding-bottom: 7px;
  }
`;

export const BlogFreeSub = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 20.83vw;
  /* font-weight: 400px; */
  margin-bottom: 0px;
  font-size: 0.94vw;
  /* font-size: 18px; */
  color: black;
  padding-bottom: 2.08vw;
  /* padding-bottom: 40px; */
  line-height: 1.09vw;
  /* line-height: 21px; */
  width: 22.24vw;
  /* width: 427px; */
  @media screen and (max-width: 980px) {
    font-size: 15px;
    padding-bottom: 20px;
    line-height: 17px;
    width: 250px;
  }
`;

export const BlogFreeYellow = styled.div`
  background-size: contain;
  background-position: top right;
  background-repeat: no-repeat;
  height: 26.93vw;
  /* height: 517px; */
  width: 47.76vw;
  /* width: 917px; */
  display: grid;
  grid-template-columns: 37% 63%;
  grid-template-rows: 21% 39% 40%;
  position: relative;
  @media screen and (max-width: 980px) {
    height: 300px;
    width: 450px;
    background-position: center right;
  }
`;

export const BlogFreeCard = styled.div`
  padding: 1.15vw 1.72vw;
  /* padding: 22px 33px; */
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background: white;
  z-index: 2;
  border-radius: 0.99vw;
  /* border-radius: 19px; */
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 980px) {
    border-radius: 19px;
  }
`;

export const BlogTextWrapper = styled.div``;

export const BlogCardText = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  margin-bottom: 0px;
  font-size: 1.51vw;
  /* font-size: 29px; */
  color: black;
  display: inline;
  @media screen and (max-width: 980px) {
    font-size: 15px;
  }
`;

export const BlogCardNum = styled.p`
  color: #13ceaa;
  font-weight: 400;
  margin-bottom: 0px;
  font-size: 3.13vw;
  /* font-size: 60px; */
  display: inline;
  font-family: "Inter", sans-serif;
  @media screen and (max-width: 980px) {
    font-size: 20px;
  }
`;

export const BlogCardTiny = styled.p`
  font-size: 0.89vw;
  /* font-size: 17px; */
  margin-bottom: 0px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  color: black;
  @media screen and (max-width: 980px) {
    font-size: 12px;
  }
`;

export const ExploreLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 9.11vw;
  /* width: 175px; */
  cursor: pointer;
  @media screen and (max-width: 980px) {
    width: 80%;
  }
`;

export const ExploreLink = styled.p`
  font-weight: 500;
  margin-bottom: 0px;
  font-family: "Inter", sans-serif;
  font-size: 0.94vw;
  /* font-size: 18px; */
  color: #1c8ae2;
  @media screen and (max-width: 980px) {
    font-size: 11px;
  }
`;

export const ExploreLinkIcon = styled.img`
  transform: rotate(180deg);
  display: block;
  @media screen and (max-width: 980px) {
    width: 20px;
  }
`;
