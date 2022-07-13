import React from "react";
import MenuSelectSection from "../containers/MenuSelectSection";
import { HrTechData } from "../containers/MenuSelectSection/data";
const HrTechnology = () => {
  return (
    <>
      <div>
        <MenuSelectSection {...HrTechData} />
      </div>
    </>
  );
};

export default HrTechnology;
