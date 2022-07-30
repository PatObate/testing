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

import img from "../../../images/reviews/Ahmed.png";

import { AiFillStar } from "react-icons/ai";
import { GooglePic } from "../../../containers/Home/ClientSection/ClientElements";

const VerticalCard3 = ({ isOn }) => {
  return (
    <>
      <ClientCard5 scrollNav={isOn}>
        <ClientRow>
          <ClientImg src={img} alt="young girl picture small" />
          <ClientColumn2>
            <ClientCardName>Ahmed Mohammed Maawy</ClientCardName>
            <ClientCardOcc>Bussiness Development Associate</ClientCardOcc>
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
            At Dynamic the folks there are professional, helpful, polite,
            resourceful, and trustworthy. Thank you very much for all the
            support accorded. Your impression is always a lasting one.
          </ClientCardRate>
        </ClientRow>
      </ClientCard5>
    </>
  );
};

export default VerticalCard3;
