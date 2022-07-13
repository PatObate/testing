import React from "react";
import { ModalBackground } from "./NavModalElements";
import Navigation from "../Navigation";

const NavModal = ({ showModal, setShowModal }) => {
  return (
    <ModalBackground
      toggle={showModal}
      onClick={() => setShowModal((prev) => !prev)}
    >
      <Navigation />
    </ModalBackground>
  );
};

export default NavModal;
