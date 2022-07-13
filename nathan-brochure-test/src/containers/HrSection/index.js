import React from "react";
import { PoeContainer, PoeHeader, PoeRow, PoeWrapper } from "./PoeElement";
import Navigation from "../../components/Navigation";
import DataCard from "../../components/DataCard";
import { CardText } from "./data";

const PeoEorSection = () => {
  return (
    <>
      <PoeContainer>
        <PoeWrapper>
          <PoeRow>
            <PoeHeader>HR OUTSOURCING</PoeHeader>
            <DataCard {...CardText} />
          </PoeRow>
          <Navigation />
        </PoeWrapper>
      </PoeContainer>
    </>
  );
};

export default PeoEorSection;
