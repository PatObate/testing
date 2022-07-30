import React, { useRef, useState } from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
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
  Input2,
  Input4,
} from "./FormElements";

import {
  ButtonText,
  StartButton,
  ButtonIcon,
  ButtonImg,
} from "../Button/ButtonElements";

import Right from "../../svg/rightbig.svg";

const FormMob = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }

  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  const captchaRef = useRef(null);

  return (
    <>
      <FormContainerMob onSubmit={handleSubmit}>
        {!isSubmitted ? <p></p> : <p>Success</p>}
        <FormHeader>
          Your freelance journey starts here. Help us to know you better
        </FormHeader>
        <InputContainer>
          <InputColumn>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="As per your passport"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
            <Label htmlFor="number">Phone</Label>
            <Input4
              type="text"
              id="number"
              name="number"
              placeholder="+971-58-5219342"
              value={values.number}
              onChange={handleChange}
            />
            {errors.number && <p>{errors.number}</p>}
          </InputColumn>
          <InputColumn>
            <Label htmlFor="femail">Email ID</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="someone@example.com"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
            <Label htmlFor="status">Visa Status</Label>
            <Input
              type="text"
              id="status"
              name="status"
              placeholder="What do you specialize in"
              value={values.status}
              onChange={handleChange}
            />
            {errors.status && <p>{errors.status}</p>}
          </InputColumn>
        </InputContainer>
        <InputColumn>
          <Label htmlFor="activity">Freelance Activity</Label>
          <Input2
            type="text"
            id="activity"
            name="activity"
            placeholder="someone@example.com"
            value={values.activity}
            onChange={handleChange}
          />
          {errors.activity && <p>{errors.activity}</p>}
          <Label htmlFor="fmessage">Message</Label>
          <InputBig
            type="text"
            id="message"
            name="message"
            placeholder="State your requirement"
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
        </InputColumn>
        <Agreement>
          <AgreementBox type="checkbox" />
          <AgreementTxt>
            By proceeding, I agree to Dynamic Freelancer’s
            <AgreementLink to="/privacy-policy">Terms of Service</AgreementLink>
            and acknowledge that I have read the
            <AgreementLink to="/privacy-policy"> Privacy Policy</AgreementLink>.
          </AgreementTxt>
        </Agreement>
        <Captcha sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef} />
        <StartButton low="true">
          <ButtonText>Submit</ButtonText>
          <ButtonIcon>
            <ButtonImg src={Right} alt="right" />
          </ButtonIcon>
        </StartButton>
      </FormContainerMob>
    </>
  );
};

export default FormMob;
