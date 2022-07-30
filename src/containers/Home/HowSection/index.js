import React from "react";
import Lottie from "lottie-react";
import {
  HowContainer,
  HowContent,
  HowColumn,
  HowHeading,
  HowSubHeading,
  HowGreenSpan,
  HowTinySpan,
  Card1,
  Card2,
  Card3,
  CardNumber,
  CardHeading,
  CardInfo,
  SubHeadingContainer,
  HowLine,
  TopSection
} from "./HowElements";

import Line from "../../../lotties/Line.json";

const HowSection = () => {
  return (
    <>
      <HowContainer>
        <HowContent>
          <HowLine>
            <Lottie animationData={Line} loop={true} autoPlay={true} />
          </HowLine>
          <HowColumn>
            <TopSection>
              <HowHeading>How it Works</HowHeading>
              <SubHeadingContainer>
                <HowSubHeading>
                  Get started in <HowGreenSpan>3</HowGreenSpan>
                  <HowTinySpan> Simple Steps</HowTinySpan>
                </HowSubHeading>
              </SubHeadingContainer>
            </TopSection>
          </HowColumn>
          <HowColumn>
            <Card1>
              <CardNumber>01</CardNumber>
              <CardHeading>Discovery Meeting</CardHeading>
              <CardInfo>
              We encourage clients to schedule an online or in-person consultation to understand the platform benefits and address questions
              </CardInfo>
            </Card1>
          </HowColumn>
          <HowColumn>
            <Card2>
              <CardNumber>02</CardNumber>
              <CardHeading>Application Signup</CardHeading>
              <CardInfo>
              Complete the online sign-up form and upload required documents to get started
              </CardInfo>
            </Card2>
          </HowColumn>
          <HowColumn>
            <Card3>
              <CardNumber>03</CardNumber>
              <CardHeading>Visa Processing</CardHeading>
              <CardInfo>
              Once you submit your online form, your visa process starts. Stay updated on the progress of your application with instant Email & SMS notifications.
              </CardInfo>
            </Card3>
          </HowColumn>
        </HowContent>
      </HowContainer>
    </>
  );
};

export default HowSection;
