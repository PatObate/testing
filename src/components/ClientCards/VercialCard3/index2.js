import React from "react";

import {
  ClientCard5,
  ClientCardRate,
  ClientCardName,
  ClientCardOcc,
  ClientStarContainer,
  ClientStar,
  ClientRow,
  ClientColumn2,
  ClientImg,
} from "../CardsElements";
import google from "../../../images/googlesmall.png";

import img from "../../../images/reviews/Sarkis.jfif";

import { AiFillStar } from "react-icons/ai";
import { GooglePic } from "../../../containers/Home/ClientSection/ClientElements";

const VerticalCard4 = ({ isOn }) => {
  return (
    <>
      <ClientCard5 scrollNav={isOn}>
        <ClientRow>
          <ClientImg src={img} alt="young girl picture small" />
          <ClientColumn2>
            <ClientCardName>Sarkis Kourjian</ClientCardName>
            <ClientCardOcc>Freelance Interior Designer</ClientCardOcc>
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
            Dynamic Freelancer really made my move to Dubai easier than I
            thought it would be. Shirin and Vanessa are always ready to answer,
            help and provide the fastest possible Service. Their online platform
            is easy to use and very practical. Highly recommended.
          </ClientCardRate>
        </ClientRow>
      </ClientCard5>
    </>
  );
};

export default VerticalCard4;
