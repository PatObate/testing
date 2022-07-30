import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
export const BlogLeft = styled(AiOutlineArrowLeft)`
  font-size: 4vw;
  color: #292d32;
  margin-right: 2vw;
  @media screen and (max-width: 980px) {
    font-size: 30px;
    margin-right: 10px;
  }
`;
export const BlogRight = styled(AiOutlineArrowRight)`
  font-size: 4vw;
  color: #292d32;
  margin-left: 2vw;
  @media screen and (max-width: 980px) {
    font-size: 30px;
    margin-left: 10px;
  }
`;

export const NavTextSmall = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  text-align: start;
  font-size: 0.94vw;
  margin-bottom: 0.52vw;
  color: #172631;
  @media screen and (max-width: 980px) {
    font-size: 13px;
  }
`;
export const NavTextSmall2 = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  text-align: end;
  font-size: 0.94vw;
  margin-bottom: 0.52vw;
  color: #172631;
  @media screen and (max-width: 980px) {
    font-size: 13px;
  }
`;
export const NavTextBig = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1.04vw;
  width: 20vw;
  margin-bottom: 0px;
  color: #333333;
  @media screen and (max-width: 980px) {
    font-size: 15px;
    width: 150px;
  }
`;

export const BlogPageContainer = styled.div`
  background: #f8f8f3;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 0px  */
  padding: 5vw 0vw;
  overflow: hidden;
  /* 0px 319px */
  @media screen and (max-width: 980px) {
    padding: 100px 0px;
  }
  @media screen and (max-width: 690px) {
    padding: 100px 0px;
  }
`;

export const BlogPageWrapper = styled.div``;

export const BlogPageRow1 = styled.div`
  padding: 0vw 16.61vw 1.3vw 16.61vw;
  @media screen and (max-width: 980px) {
    padding: 0px 50px 20px 50px;
  }
  @media screen and (max-width: 690px) {
    padding: 0px 24px 20px 24px;
  }
`;

export const BlogPageTop = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.73vw;
  margin-bottom: 0px;
  /* font-size: 14px; */
  @media screen and (max-width: 980px) {
    font-size: 13px;
  }
`;

export const BlogPageTopBold = styled.span`
  font-weight: 700;
  text-decoration: underline;
`;

export const BlogPageRow2 = styled.div`
  padding: 2.29vw 16.61vw 9.11vw 16.61vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 38.02vw;
  /* height: 730px; */
  width: 100%;
  box-shadow: inset 0 0 5.21vw black;
  @media screen and (max-width: 980px) {
    padding: 20px 50px 40px 50px;
    height: 300px;
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
  margin-bottom: 0px;
  font-size: 0.83vw;
  /* font-size: 16px; */
  padding: 0.26vw 0.78vw;
  /* padding: 5px 15px; */
  background: #f45959;
  color: white;
  border-radius: 0.57vw;
  /* border-radius: 11px; */
  @media screen and (max-width: 980px) {
    font-size: 12px;
    padding: 3px 12px;
    border-radius: 11px;
  }
`;

export const WordRow = styled.div`
  padding: 0vw 10.42vw;
  /* padding: 0px 200px; */
  @media screen and (max-width: 980px) {
    padding: 0px 50px;
  }
`;

export const CardHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  margin-bottom: 0px;
  font-size: 2.6vw;
  /* font-size: 50px; */
  line-height: 3.13vw;
  /* line-height: 60px; */
  color: white;
  text-align: center;
  padding-bottom: 1.56vw;
  /* padding-bottom: 30px; */
  @media screen and (max-width: 980px) {
    font-size: 20px;
    line-height: 30px;
    padding-bottom: 10px;
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
    width: 50px;
    margin-bottom: 10px;
  }
`;

export const Date = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 1.25vw;
  margin-bottom: 0px;
  /* line-height: 24px; */
  font-size: 0.83vw;
  /* font-size: 16px; */
  color: #ffc32f;
  text-align: center;
  @media screen and (max-width: 980px) {
    font-size: 14px;
    padding-bottom: 10px;
  }
`;

export const BlogPageRow3 = styled.div`
  padding: 4.01vw 16.61vw;
  /* padding: 77px 16.614583333333332vw; */
  @media screen and (max-width: 980px) {
    padding: 50px 50px;
  }
  @media screen and (max-width: 690px) {
    padding: 50px 50px;
    width: 100%;
  }
`;

export const BlogPageContainer2 = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4vw;
  border-bottom: 0.03vw solid #292d32;
`;

export const BlogPageContainer3 = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 690px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const BlogPageNav = styled(NavLink)`
  height: auto;
  text-decoration: none;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translateX(-0.52vw);
  }
`;
export const BlogPageNav2 = styled(NavLink)`
  height: auto;
  text-decoration: none;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translateX(0.52vw);
  }
`;

export const BlogPageP = styled.p`
  margin-bottom: 4.01vw;

  p {
    font-family: "Inter", sans-serif;
    font-weight: 300;
    margin-bottom: 0px;
    font-size: 0.94vw;
    padding-bottom: 1.5vw;
    /* font-size: 18px; */
    line-height: 1.25vw;
    /* line-height: 24px; */
    /* padding-bottom: 77px; */

    span {
      font-weight: 600;
    }
  }

  @media screen and (max-width: 980px) {
    font-size: 14px;
    line-height: 16px;

    p {
      font-size: 14px;
      padding-bottom: 12px;
      line-height: 16px;
    }
  }
  @media screen and (max-width: 690px) {
    padding: 0px 24px 50px 24px;

    p {
      padding: 0px 24px 50px 24px;
    }
  }
`;

export const FormContainer = styled.form`
  height: 35.63vw;
  /* height: 684px; */
  width: 100%;
  padding: 2.6vw 3.13vw;
  /* padding: 50px 60px; */
  /* box shadow is 0px 5px 15px */
  border-radius: 1.3020833333333335vw;
  /* border radius 25px */
  background: white;
  box-shadow: 0vw 0.26041666666666663vw 0.78125vw lightgray;

  @media screen and (max-width: 980px) {
    padding: 20px 30px;
    box-shadow: 0px 2px 10px lightgray;
    border-radius: 25px;
    height: auto;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const FormHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 2.08vw;
  margin-bottom: 0px;
  /* font-size: 40px; */
  /* font-size is 35px */
  color: black;
  padding-bottom: 1.41vw;
  /* padding-bottom: 27px; */
  line-height: 2.55vw;
  /* line-height: 49px; */
  /* line-height: 53px; */
  @media screen and (max-width: 980px) {
    font-size: 17px;
    padding-bottom: 20px;
    line-height: 20px;
  }
`;

export const Label = styled.label`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.94vw;
  /* font-size: 18px; */
  color: black;
  padding-bottom: 0.52vw;
  /* padding-bottom: 10px; */
  @media screen and (max-width: 980px) {
    font-size: 13px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputColumn = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: 980px) {
    padding-bottom: 10px;
  }
`;

export const Input = styled.input`
  padding: 0.52vw 0.52vw 0.52vw;
  /* padding is 10px 10px 10px */
  background: white;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.94vw;
  /* font-size: 18px; */
  color: #798289;
  border: 0.03vw solid #a8a8a8;
  /* border is 0.3px */
  border-radius: 1.3vw;
  /* border radius is 25px */
  width: 15.89vw;
  /* width: 305px; */
  height: 3.54vw;
  /* height: 68px; */
  margin-bottom: 1.3vw;
  /* margin-bottom: 25px; */
  @media screen and (max-width: 980px) {
    padding: 5px 10px;
    font-size: 10px;
    border: 1px solid #a8a8a8;
    width: 130px;
    margin-bottom: 10px;
  }
`;

export const InputLong = styled.input`
  padding: 0.52vw 0.52vw 0.52vw;
  /* padding is 10px 10px 10px */
  background: white;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.94vw;
  /* font-size: 18px; */
  color: #798289;
  border: 0.5px solid #a8a8a8;
  /* border is 0.3px */
  border-radius: 1.3vw;
  /* border radius is 25px */
  width: 26.04vw;
  /* width: 500px; */
  height: 3.54vw;
  /* height: 68px; */
  margin-bottom: 1.3vw;
  /* margin-bottom: 25px; */
  @media screen and (max-width: 980px) {
    padding: 5px 10px;
    font-size: 10px;
    border: 1px solid #a8a8a8;
    width: 300px;
    margin-bottom: 10px;
  }
`;

export const InputBig = styled.textarea`
  padding: 0.52vw 0.52vw 0.52vw 0.52vw;
  /* padding is 10px 10px 10px */
  background: white;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.94vw;
  /* font-size: 18px; */
  /* font-size is 14px */
  color: #798289;
  border: 0.03vw solid #a8a8a8;
  /* border: 0.5px solid #a8a8a8; */
  /* border is 0.3px */
  border-radius: 1.3vw;
  /* border radius is 25px */
  margin-bottom: 1.04vw;
  /* margin-bottom: 20px; */
  /* margin-bottom is 15px */
  width: 100%;
  height: 7.66vw;
  /* height: 147px; */
  @media screen and (max-width: 980px) {
    padding: 10px 10px;
    font-size: 10px;
    height: 70px;
  }
`;

export const BlogPageNext = styled.div`
  padding: 0px 16.61vw 2.27vw 16.61vw;
  /* padding: 0px 16.61vw 43.5px 16.61vw; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BlogNextColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BlogCardContainer = styled(NavLink)`
  text-decoration: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1.56vw 1.3vw 2.08vw 1.3vw;
  /* padding: 30px 25px 40px 25px; */
  height: 18.85vw;
  /* height: 562px; */
  width: 21.09vw;
  /* width: 405px; */
  margin-right: 1.77vw;
  border-radius: 1.3vw;
  z-index: 1;
  opacity: ${({ hide }) => (hide ? "0" : "1")};
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-0.52vw);
    box-shadow: 0vw 0.21vw 1.56vw #77777729;
  }

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

export const RedRow2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const RedTag2 = styled.p`
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

export const WordRow2 = styled.div``;

export const CardHeader2 = styled.h2`
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

export const Line2 = styled.div`
  border-bottom: 0.1vw solid #ffc32f;
  /* border-bottom: 2px solid #ffc32f; */
  width: 3.13vw;
  /* width: 60px; */
  display: block;
  margin: auto;
  margin-bottom: 0.78vw;
  /* margin-bottom: 15px; */
  @media screen and (max-width: 980px) {
    width: 50px;
    margin-bottom: 10px;
  }
`;

export const Date2 = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 1.25vw;
  margin-bottom: 0px;
  /* line-height: 24px; */
  font-size: 0.83vw;
  /* font-size: 16px; */
  color: #ffc32f;
  text-align: center;
  @media screen and (max-width: 980px) {
    font-size: 14px;
    padding-bottom: 10px;
  }
`;
