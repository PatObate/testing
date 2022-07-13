import React from "react";
import MenuSelectSection from "../containers/MenuSelectSection";
import { StaffingData } from "../containers/MenuSelectSection/data";
const StaffingServices = () => {
  return (
    <>
      <div>
        <MenuSelectSection {...StaffingData} />
      </div>
    </>
  );
};

export default StaffingServices;
