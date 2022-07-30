import React, { useState } from "react";
import PlansSection2 from "../containers/Home/PlansSection/index2";
import ModalGetStarted from "../components/ModalGetStarted";

const Pricing = () => {
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
        <PlansSection2 toggleModal={openModal2} />
      </div>
    </>
  );
};

export default Pricing;
