import React, { useRef } from "react";
import gsap from "gsap";
import Right from "../../svg/rightbig.svg";

import {
  StartButton,
  ButtonText,
  ButtonIcon,
  ButtonImg,
} from "./ButtonElements";

const Button = ({ buttonword, low }) => {
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
      <StartButton
        ref={buttonRef}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        low={low}
      >
        <ButtonText>{buttonword}</ButtonText>
        <ButtonIcon>
          <ButtonImg src={Right} />
        </ButtonIcon>
      </StartButton>
    </>
  );
};

export default Button;
