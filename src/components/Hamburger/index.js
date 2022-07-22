import React from "react";
import { HamContainer, HamSign } from "./HamburgerElements";

const Hamburger = ({ toggle }) => {
  return (
    <>
      <HamContainer onClick={toggle}>
        <HamSign />
      </HamContainer>
    </>
  );
};

export default Hamburger;
