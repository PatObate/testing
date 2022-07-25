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
  LinkWrapperWhole,
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

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "-2.60vw",
    },
    hidden2: {
      opacity: 0,
      y: "2.60vw",
    },
    visible: {
      x: "0vw",
      opacity: 1,
      transition: { delay: 1, duration: 0.5 },
    },
    visible2: {
      x: "0vw",
      opacity: 1,
      transition: { delay: 1.5, duration: 0.5 },
    },
    visible3: {
      y: "0vw",
      opacity: 1,
      transition: { delay: 2, duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <ClientVidContainer>
        <BackgroundClientVideo autoPlay muted loop playsInline>
          <ClientSource src={background} type="video/mp4" />
        </BackgroundClientVideo>
      </ClientVidContainer>
      <ClientContainer>
        <ClientLogo
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          src={logo}
          alt="Logo"
        />
        <div />
        <ClientHolder>
          <ClientHeader
            variants={containerVariants}
            initial="hidden"
            animate="visible2"
            exit="exit"
            src={logo}
            alt="Logo"
          >
            The leading <ClientSpan>HR and Employee Outsourcing </ClientSpan>
            Provider in the UAE, powered by
            <ClientSpan> People, Technology</ClientSpan> and
            <ClientSpan> AI</ClientSpan>
          </ClientHeader>
        </ClientHolder>

        <ClientContacts
          variants={containerVariants}
          initial="hidden2"
          animate="visible3"
          exit="exit"
          src={logo}
          alt="Logo"
        >
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
        <LinkWrapperWhole variants={containerVariants} exit="exit">
          <LinkWrapper to="/client" none={arrowAnim} opac={arrowAnim2}>
            <ArrowRight animationData={arrow} />
          </LinkWrapper>
        </LinkWrapperWhole>
      </ClientContainer>
    </>
  );
};

export default LandingSection;
