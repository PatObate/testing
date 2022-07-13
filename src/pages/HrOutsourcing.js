import React from "react";
import MenuSelectSection from "../containers/MenuSelectSection";
import { HrOutData } from "../containers/MenuSelectSection/data";

const HrOut = () => {
  return (
    <>
      <div>
        <MenuSelectSection {...HrOutData} />
      </div>
    </>
  );
};

export default HrOut;
