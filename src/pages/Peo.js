import React from "react";
import MenuSelectSection from "../containers/MenuSelectSection";
import { PeoData } from "../containers/MenuSelectSection/data";

const Peo = () => {
  return (
    <>
      <div>
        <MenuSelectSection {...PeoData} />
      </div>
    </>
  );
};

export default Peo;
