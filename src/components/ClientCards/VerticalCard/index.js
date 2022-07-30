import React from "react";

import {
  ClientCard1,
  ClientCardRate,
  ClientCardName,
  ClientCardOcc,
  ClientStarContainer,
  ClientStar,
} from "../CardsElements";

import { AiFillStar } from "react-icons/ai";

const VerticalCard = ({ showMore, setShowMore }) => {
  return (
    <>
      {showMore ? (
        <ClientCard1>
          <ClientCardRate>
            “Dynamic Freelancer is a true Professional and master of its craft.”
          </ClientCardRate>
          <ClientCardName>Istiak Ahmed</ClientCardName>
          <ClientCardOcc>CEO, Avito</ClientCardOcc>
          <ClientStarContainer>
            <ClientStar>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </ClientStar>
          </ClientStarContainer>
        </ClientCard1>
      ) : null}
    </>
  );
};

export default VerticalCard;
