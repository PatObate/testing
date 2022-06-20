import React from "react";
import ActivityFirstSection from "../containers/Activites/ActivityFirstSection";
import { ActivityOne } from "../containers/Activites/ActivityFirstSection/data";
import ActivityFreeLancerSection from "../containers/Activites/ActivityFreelancerSection";
import { ActivityCommunity } from "../containers/Activites/ActivityFreelancerSection/data";

const Activities = () => {
  return (
    <>
      <div>
        <ActivityFirstSection {...ActivityOne} />
        <ActivityFreeLancerSection {...ActivityCommunity} />
      </div>
    </>
  );
};

export default Activities;
