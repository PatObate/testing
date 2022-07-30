import React, { useRef } from "react";
import gsap from "gsap";
import Right from "../../svg/rightbig.svg";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  StartButton,
  ButtonText,
  ButtonIcon,
  ButtonImg,
} from "./ButtonElements";

const Button = ({ buttonword, low }) => {
  const buttonRef = useRef();

  const onEnter = () => {
    ScrollTrigger.matchMedia({
      "(min-width: 981px)": function () {
        gsap.to(buttonRef.current, {
          width: "13.80vw",
          background: "#14dcb5",
          duration: 0.1,
        });
      },
    });
    ScrollTrigger.matchMedia({
      "(max-width: 980px)": function () {
        gsap.to(buttonRef.current, {
          width: "170px",
          background: "#14dcb5",
          duration: 0.1,
        });
      },
    });
  };

  const onLeave = () => {
    ScrollTrigger.matchMedia({
      "(min-width: 981px)": function () {
        gsap.to(buttonRef.current, {
          width: "13.02vw",
          background: "#13ceaa",
          duration: 0.1,
        });
      },
    });

    ScrollTrigger.matchMedia({
      "(max-width: 980px)": function () {
        gsap.to(buttonRef.current, {
          width: "170px",
          background: "#14dcb5",
          duration: 0.1,
        });
      },
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
          <ButtonImg src={Right} alt="right" />
        </ButtonIcon>
      </StartButton>
    </>
  );
};

export default Button;
