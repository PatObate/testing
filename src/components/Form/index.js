import React, { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "../../api/axios";
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
  Captcha,
  Input2,
  Select,
  Input4,
  PhoneFlex,
} from "./FormElements";

import {
  ButtonText,
  StartButton,
  ButtonIcon,
  ButtonImg,
} from "../Button/ButtonElements";

import Right from "../../svg/rightbig.svg";

const Form = () => {
  const buttonRef = useRef();
  const captchaRef = useRef(null);

  const initialValues = {
    fullname: "",
    number: "",
    email: "",
    visastatus: "",
    activity: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = async (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    axios
      .post(`https://api-v2.dynamicfreelancer.ae/email/send`, {
        formValues,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!values.fullname) {
      errors.fullname = "is required!";
    }
    if (!values.number) {
      errors.number = "is required!";
    }
    if (!values.email) {
      errors.email = "is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "you entered is not valid!";
    }
    if (!values.visastatus) {
      errors.visastatus = "is required!";
    }
    if (!values.activity) {
      errors.activity = "is required!";
    }
    if (!values.message) {
      errors.message = "is required!";
    } else if (values.message.length < 10) {
      errors.message = "must be longer than 10 characters!";
    }
    return errors;
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <p>success</p>
        ) : (
          <p>not success</p>
        )}
        <FormHeader>
          Your freelance journey starts here. Help us to know you better
        </FormHeader>
        <InputContainer>
          <InputColumn>
            <Label htmlFor="fullname">Full Name {formErrors.fullname}</Label>
            <Input
              type="text"
              name="fullname"
              placeholder="As per your passport"
              value={formValues.fullname}
              onChange={handleChange}
            />
            <Label htmlFor="number">Phone {formErrors.number}</Label>
            <PhoneFlex>
              <Input4
                type="text"
                name="number"
                placeholder="+971-58-5219342"
                value={formValues.number}
                onChange={handleChange}
              />
            </PhoneFlex>
          </InputColumn>
          <InputColumn>
            <Label htmlFor="email">Email ID {formErrors.email}</Label>
            <Input
              type="text"
              name="email"
              placeholder="someone@example.com"
              value={formValues.email}
              onChange={handleChange}
            />
            <Label htmlFor="visastatus">
              Visa Status {formErrors.visastatus}
            </Label>
            <Input
              type="text"
              name="visastatus"
              placeholder="What do you specialize in"
              value={formValues.visastatus}
              onChange={handleChange}
            />
          </InputColumn>
        </InputContainer>
        <InputColumn>
          <Label htmlFor="activity">
            Freelance Activity {formErrors.activity}
          </Label>
          <Input2
            type="text"
            name="activity"
            placeholder="someone@example.com"
            value={formValues.activity}
            onChange={handleChange}
          />
          <Label htmlFor="message">Message {formErrors.message}</Label>
          <InputBig
            type="text"
            name="message"
            placeholder="State your requirement"
            value={formValues.message}
            onChange={handleChange}
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
        <StartButton low="true" ref={buttonRef}>
          <ButtonText>Submit</ButtonText>
          <ButtonIcon>
            <ButtonImg src={Right} alt="right" />
          </ButtonIcon>
        </StartButton>
      </FormContainer>
    </>
  );
};

export default Form;
