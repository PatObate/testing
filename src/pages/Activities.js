import React, { useState } from "react";
import ActivityFirstSection from "../containers/Activites/ActivityFirstSection";
import { ActivityOne } from "../containers/Activites/ActivityFirstSection/data";
import ActivityFreeLancerSection from "../containers/Activites/ActivityFreelancerSection";
import { ActivityCommunity } from "../containers/Activites/ActivityFreelancerSection/data";
import ModalGetStarted from "../components/ModalGetStarted";

const Activities = () => {
  const [showModal2, setShowModal2] = useState(false);
  const openModal2 = () => {
    setShowModal2((prev) => !prev);
  };
  return (
    <>
      <div>
        <ModalGetStarted
          showModal2={showModal2}
          setShowModal2={setShowModal2}
        />
        <ActivityFirstSection {...ActivityOne} />
        <ActivityFreeLancerSection
          {...ActivityCommunity}
          toggleModal={openModal2}
        />
      </div>
    </>
  );
};

export default Activities;
