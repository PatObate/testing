import React, { useRef, useState } from "react";
import gsap from "gsap";
import Right from "../../svg/rightbig.svg";

import {
  StartButton,
  ButtonText,
  ButtonIcon,
  ButtonImg,
} from "./ButtonElements";
import ModalGetStarted from "../ModalGetStarted";

const ButtonModal = () => {
  const [showModal2, setShowModal2] = useState(false);

  const openModal2 = () => {
    setShowModal2((prev) => !prev);
  };

  const buttonRef = useRef();

  const onEnter = () => {
    gsap.to(buttonRef.current, {
      width: "13.80vw",
      background: "#14dcb5",
      duration: 0.1,
    });
  };
  const onLeave = () => {
    gsap.to(buttonRef.current, {
      width: "13.02vw",
      background: "#13ceaa",
      duration: 0.1,
    });
  };
  return (
    <>
      <ModalGetStarted showModal2={showModal2} setShowModal2={setShowModal2} />
      <StartButton
        ref={buttonRef}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        low="true"
        onClick={openModal2}
      >
        <ButtonText>Get Started</ButtonText>
        <ButtonIcon>
          <ButtonImg src={Right} />
        </ButtonIcon>
      </StartButton>
    </>
  );
};

export default ButtonModal;
