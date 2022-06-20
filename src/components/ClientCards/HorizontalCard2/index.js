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

import img from "../../../images/younggirlsmall.png";

import { AiFillStar } from "react-icons/ai";

const HorizontalCard2 = ({ showMore, setShowMore }) => {
  return (
    <>
      {showMore ? (
        <ClientCard4>
          <ClientRow display="true">
            <ClientColumn2>
              <ClientImg src={img} alt="young girl picture small" />
            </ClientColumn2>
            <ClientColumn2>
              <ClientCardName>Aurelien </ClientCardName>
              <ClientCardOcc>Artist, Oxylex</ClientCardOcc>
              <ClientStarContainer>
                <ClientStar>
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
              “Easy to work with. Process is clear, the team is very supportive
              and takes time to answer all questions along the way. Highly
              recommended !”
            </ClientCardRate>
          </ClientRow>
        </ClientCard4>
      ) : null}
    </>
  );
};

export default HorizontalCard2;
