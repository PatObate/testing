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

import img from "../../../images/reviews/russian.jpg";

import { AiFillStar } from "react-icons/ai";
import { GooglePic } from "../../../containers/Home/ClientSection/ClientElements";
import google from "../../../images/googlesmall.png";

const HorizontalCard3 = ({ isOn }) => {
  return (
    <>
      <ClientCard4 scrollNav={isOn}>
        <ClientRow display="true">
          <ClientImg src={img} alt="young girl picture small" />
          <ClientColumn2>
            <ClientCardName>Игорь Рызов</ClientCardName>
            <ClientCardOcc>Business Coach</ClientCardOcc>
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
            Everything is very clear and fast. I am satisfied. Thanks to Julia
            and Rochel . Very customer-oriented approach. No extra expenses, no
            extra fees. Thanks
          </ClientCardRate>
        </ClientRow>
      </ClientCard4>
    </>
  );
};

export default HorizontalCard3;
