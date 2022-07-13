import React from "react";
import { ButtonWrapper, LottieCircle } from "./MenuButtonElements";
import circle from "../../lotties/circle.json";

const MenuButton = ({ showModal, setShowModal }) => {
  return (
    <>
      <ButtonWrapper
        toggle={showModal}
        onClick={() => setShowModal((prev) => !prev)}
      >
        <LottieCircle animationData={circle} />
      </ButtonWrapper>
    </>
  );
};

export default MenuButton;
