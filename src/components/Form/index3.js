import React, { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import {
  FormHeader,
  InputContainer,
  InputColumn,
  Label,
  Input,
  InputBig,
  Agreement,
  AgreementBox,
  AgreementTxt,
  AgreementLink,
  FormContainerMob,
  Captcha,
} from "./FormElements";
import { toast } from "react-toastify";

import {
  ButtonText,
  StartButton,
  ButtonIcon,
  ButtonImg,
} from "../Button/ButtonElements";

import Right from "../../svg/rightbig.svg";

const FormMob2 = () => {
  const buttonRef = useRef();
  const captchaRef = useRef(null);
  const notify = () =>
    toast.success(
      "Thanks for contacting us! One of our consultants will be getting touch with you shortly"
    );

  const onEnterButt = () => {
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
          width: "100%",
          background: "#14dcb5",
          duration: 0.1,
        });
      },
    });
  };

  const onLeaveButt = () => {
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
          width: "100%",
          background: "#14dcb5",
          duration: 0.1,
        });
      },
    });
  };
  return (
    <>
      <FormContainerMob>
        <FormHeader>Book your free consultation.</FormHeader>
        <InputContainer>
          <InputColumn>
            <Label htmlFor="fname">Full Name</Label>
            <Input type="text" id="fname" placeholder="As per your passport" />
            <Label htmlFor="fnumber">Phone</Label>
            <Input type="text" id="fnumber" placeholder="+971-58-5219342" />
          </InputColumn>
          <InputColumn>
            <Label htmlFor="fdate">Date</Label>
            <Input type="date" id="fdate" placeholder="dd/mm/yyyy" />
            <Label htmlFor="ftime">Time</Label>
            <Input type="time" id="ftime" placeholder="Eg 10 AM" />
          </InputColumn>
          <InputColumn>
            <Label htmlFor="femail">Email ID</Label>
            <Input type="text" id="femail" placeholder="someone@example.com" />
            <Label htmlFor="factivy">Visa Status</Label>
            <Input
              type="text"
              id="factivity"
              placeholder="What do you specialize in"
            />
          </InputColumn>
        </InputContainer>
        <InputColumn>
          <Label htmlFor="fmessage">Message</Label>
          <InputBig
            type="text"
            id="fmessage"
            placeholder="State your requirement"
          />
        </InputColumn>
        <Agreement>
          <AgreementBox type="checkbox" />
          <AgreementTxt>
            By proceeding, I agree to Dynamic Freelancer’s
            <AgreementLink to="/privacy-policy">Terms of Service</AgreementLink>
            and acknowledge that I have read the
            <AgreementLink to="/privacy-policy"> Privacy Policy</AgreementLink>.
          </AgreementTxt>
          <Captcha sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef} />
        </Agreement>

        <StartButton
          low="true"
          ref={buttonRef}
          onMouseEnter={onEnterButt}
          onClick={notify}
          onMouseLeave={onLeaveButt}
        >
          <ButtonText>Submit</ButtonText>
          <ButtonIcon>
            <ButtonImg src={Right} alt="right" />
          </ButtonIcon>
        </StartButton>
      </FormContainerMob>
    </>
  );
};

export default FormMob2;
