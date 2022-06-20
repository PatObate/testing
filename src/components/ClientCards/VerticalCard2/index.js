import React from "react";

import {
  ClientCard2,
  ClientCardRate,
  ClientCardName,
  ClientCardOcc,
  ClientStarContainer,
  ClientStar,
} from "../CardsElements";

import { AiFillStar } from "react-icons/ai";

const VerticalCard2 = ({ showMore, setShowMore }) => {
  return (
    <>
      {showMore ? (
        <ClientCard2>
            <ClientCardRate>
              “Amazing service ! 5 stars is not enough. Definitely the best HR
              company in Dubai. Highly recommend Dynamic Freelancer Thank you
              guys !”
            </ClientCardRate>
            <ClientCardName>Igor Plecas</ClientCardName>
            <ClientCardOcc>Photographer, XCamera</ClientCardOcc>
            <ClientStarContainer>
              <ClientStar>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </ClientStar>
            </ClientStarContainer>
        </ClientCard2>
      ) : null}
    </>
  );
};

export default VerticalCard2;
