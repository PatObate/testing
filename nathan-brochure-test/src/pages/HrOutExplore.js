import React from "react";
import ExploreSection from "../containers/ExploreSection";
import { CardText2 } from "../containers/ExploreSection/data";

const HrOutExplore = () => {
  return (
    <>
      <div>
        <ExploreSection {...CardText2} />
      </div>
    </>
  );
};

export default HrOutExplore;
