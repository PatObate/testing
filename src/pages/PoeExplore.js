import React from "react";
import ExploreSection from "../containers/ExploreSection";
import Cards from "../containers/ExploreSection/card";
import { CardText1 } from "../containers/ExploreSection/data";

const PoeExplore = () => {
  return (
    <>
      <div>
        <ExploreSection {...CardText1} {...Cards} />
      </div>
    </>
  );
};

export default PoeExplore;
