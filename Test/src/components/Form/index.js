import React, { useRef } from "react";
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
  FormContainer,
} from "./FormElements";

import {
  ButtonText,
  StartButton,
  ButtonIcon,
  ButtonImg,
} from "../../components/ButtonElements";

import Right from "../../svg/rightbig.svg";

const Form = () => {
  const buttonRef = useRef();

  const onEnterButt = () => {
    gsap.to(buttonRef.current, {
      width: "13.80vw",
      background: "#14dcb5",
      duration: 0.1,
    });
  };
  const onLeaveButt = () => {
    gsap.to(buttonRef.current, {
      width: "13.02vw",
      background: "#13ceaa",
      duration: 0.1,
    });
  };
  return (
    <>
      <FormContainer>
        <FormHeader>
          Your freelance journey starts here. Help us to know you better
        </FormHeader>
        <InputContainer>
          <InputColumn>
            <Label>Name</Label>
            <Input type="text" placeholder="As per your passport" />
            <Label>Phone</Label>
            <Input type="text" placeholder="+971-58-5219342" />
          </InputColumn>
          <InputColumn>
            <Label>Email ID</Label>
            <Input type="text" placeholder="someone@example.com" />
            <Label>Freelance Activity</Label>
            <Input type="text" placeholder="What do you specialize in" />
          </InputColumn>
        </InputContainer>
        <InputColumn>
          <Label>Message</Label>
          <InputBig type="text" placeholder="State your requirement" />
        </InputColumn>
        <Agreement>
          <AgreementBox type="checkbox" />
          <AgreementTxt>
            By proceeding, I agree to Dynamic Freelancer’s
            <AgreementLink> Terms of Service </AgreementLink>
            and acknowledge that I have read the
            <AgreementLink> Privacy Policy</AgreementLink>.
          </AgreementTxt>
        </Agreement>
        <StartButton
          low="true"
          ref={buttonRef}
          onMouseEnter={onEnterButt}
          onMouseLeave={onLeaveButt}
        >
          <ButtonText>Submit</ButtonText>
          <ButtonIcon>
            <ButtonImg src={Right} />
          </ButtonIcon>
        </StartButton>
      </FormContainer>
    </>
  );
};

export default Form;
