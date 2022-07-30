import React from "react";

import {
  ClientCard3,
  ClientCardRate,
  ClientCardName,
  ClientCardOcc,
  ClientStarContainer,
  ClientStar,
  ClientCard980,
} from "../CardsElements";

import { AiFillStar } from "react-icons/ai";

const HorizontalCard = ({ showMore, setShowMore }) => {
  return (
    <>
      {showMore ? (
        <ClientCard980>
          <ClientCardRate>
            “Easy to work with. Process is clear, the team is very supportive
            and takes time to answer all questions along the way. Highly
            recommended !”
          </ClientCardRate>
          <ClientCardName>Aurelien BARREAU</ClientCardName>
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
        </ClientCard980>
      ) : null}
    </>
  );
};

export default HorizontalCard;
