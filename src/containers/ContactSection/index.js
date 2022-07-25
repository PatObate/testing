import React from "react";
import {
  ContactButton,
  ContactButtonText,
  ContactColumn,
  ContactContainer,
  ContactDiv,
  ContactForm,
  ContactInput,
  ContactInputBig,
  ContactLabel,
  InputContainer,
  MailIcon,
} from "./ContactElements";

const ContactSection = () => {
  return (
    <>
      <ContactContainer>
        <ContactForm>
          <InputContainer>
            <ContactColumn>
              <ContactLabel for="input1">Full Name*</ContactLabel>
              <ContactInput />
              <ContactLabel for="input1">Email*</ContactLabel>
              <ContactInput />
              <ContactLabel for="input1">Service Required</ContactLabel>
              <ContactInput />
            </ContactColumn>
            <ContactColumn>
              <ContactLabel for="input1">Contact Number*</ContactLabel>
              <ContactInput />
              <ContactLabel for="input1">Company Name*</ContactLabel>
              <ContactInput />
              <ContactLabel for="input1">
                How did you hear about us?
              </ContactLabel>
              <ContactInput />
            </ContactColumn>
          </InputContainer>
          <ContactColumn>
            <ContactLabel for="input1">
              Tell us about your requirements
            </ContactLabel>
            <ContactInputBig />
          </ContactColumn>
          <ContactButton>
            <ContactButtonText>Submit</ContactButtonText>
            <MailIcon />
          </ContactButton>
        </ContactForm>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
