import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BackgroundClientVideo,
  ClientContact,
  ClientContact2,
  ClientContactDiv,
  ClientContacts,
  ClientContainer,
  ClientHeader,
  ClientHolder,
  ClientInsta,
  ClientLinkedIn,
  ClientLogo,
  ClientPhone,
  ClientSource,
  ClientSpan,
  ClientVidContainer,
  ClientWord,
  ClientWord2,
  LinkWrapper,
} from "./ClientElements";
import background from "../../videos/clientbackground.mov";
import logo from "../../svgs/Logo.svg";
import arrow from "../../lotties/arrow.json";

const LandingSection = () => {
  const [arrowAnim, SetArrowAnim] = useState(true);
  const [arrowAnim2, SetArrowAnim2] = useState(true);

  useEffect(() => {
    SetArrowAnim(true);
    setTimeout(() => {
      SetArrowAnim(false);
    }, 3000);
  }, []);
  useEffect(() => {
    SetArrowAnim2(true);
    setTimeout(() => {
      SetArrowAnim2(false);
    }, 4000);
  }, []);

  return (
    <>
      <ClientVidContainer>
        <BackgroundClientVideo autoPlay muted loop playsInline>
          <ClientSource src={background} type="video/mp4" />
        </BackgroundClientVideo>
      </ClientVidContainer>
      <ClientContainer>
        <ClientLogo src={logo} alt="Logo" />
        <div />
        <ClientHolder>
          <ClientHeader>
            The leading <ClientSpan>HR and Employee Outsourcing </ClientSpan>
            Provider in the UAE, powered by
            <ClientSpan> People, Technology</ClientSpan> and
            <ClientSpan> AI</ClientSpan>
          </ClientHeader>
        </ClientHolder>

        <ClientContacts>
          <ClientWord>Find us on:</ClientWord>
          <ClientContactDiv>
            <ClientContact>
              <ClientLinkedIn />
              <ClientInsta />
            </ClientContact>
            <ClientContact2>
              <ClientPhone />
              <ClientWord2>+971 4 354 4466</ClientWord2>
            </ClientContact2>
          </ClientContactDiv>
        </ClientContacts>
        <LinkWrapper to="/client" none={arrowAnim} opac={arrowAnim2}>
          <ArrowRight animationData={arrow} />
        </LinkWrapper>
      </ClientContainer>
    </>
  );
};

export default LandingSection;
