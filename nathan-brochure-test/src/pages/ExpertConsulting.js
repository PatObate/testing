import React from "react";
import MenuSelectSection from "../containers/MenuSelectSection";
import { ExpertConsultData } from "../containers/MenuSelectSection/data";
const ExpertConsulting = () => {
  return (
    <>
      <div>
        <MenuSelectSection {...ExpertConsultData} />
      </div>
    </>
  );
};

export default ExpertConsulting;
