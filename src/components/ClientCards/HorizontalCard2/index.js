import React from "react";

import {
  ClientCard4,
  ClientCardRate,
  ClientCardName,
  ClientCardOcc,
  ClientStarContainer,
  ClientStar,
  ClientRow,
  ClientColumn2,
  ClientImg,
} from "../CardsElements";

import img from "../../../images/reviews/Aman.webp";

import { AiFillStar } from "react-icons/ai";
import { GooglePic } from "../../../containers/Home/ClientSection/ClientElements";
import google from "../../../images/googlesmall.png";

const HorizontalCard2 = ({ isOn }) => {
  return (
    <>
      <ClientCard4 scrollNav={isOn}>
        <ClientRow display="true">
          <ClientImg src={img} alt="young girl picture small" />
          <ClientColumn2>
            <ClientCardName>Aman Dhanda</ClientCardName>
            <ClientCardOcc>Wordpress Developer</ClientCardOcc>
            <ClientStarContainer>
              <ClientStar>
                <GooglePic src={google} />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </ClientStar>
            </ClientStarContainer>
          </ClientColumn2>
        </ClientRow>
        <ClientRow>
          <ClientCardRate>
            My experience with Dynamic Freelancer was amazing. During the
            signup, Shirin cleared all my doubts. And during onboarding, Vanessa
            made the process very smooth and easy. I highly recommend them if
            you are also looking for similar services.
          </ClientCardRate>
        </ClientRow>
      </ClientCard4>
    </>
  );
};

export default HorizontalCard2;
