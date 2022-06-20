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
                  With in <HowGreenSpan>3</HowGreenSpan>
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
                We encourage clients to schedule a consultation to understand
                the platform and address questions.
              </CardInfo>
            </Card1>
          </HowColumn>
          <HowColumn>
            <Card2>
              <CardNumber>02</CardNumber>
              <CardHeading>Application Signup</CardHeading>
              <CardInfo>
                Clients signup the forms and share the required documents
              </CardInfo>
            </Card2>
          </HowColumn>
          <HowColumn>
            <Card3>
              <CardNumber>03</CardNumber>
              <CardHeading>Visa Processing</CardHeading>
              <CardInfo>
                Clients signup the forms and share the required documents
              </CardInfo>
            </Card3>
          </HowColumn>
        </HowContent>
      </HowContainer>
    </>
  );
};

export default HowSection;
