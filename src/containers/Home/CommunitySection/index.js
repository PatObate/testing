import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import {
  CommunityContainer,
  CommunityContent,
  CommunityColumn,
  CommunityColumn2,
  CommunityHeader,
  CommunitySub,
  CommunityIcon,
  CommunityLink,
  CommunityLinks,
  CommunityLinksContainer,
  CommunityPicture,
  CommunitySubHeading1,
  CommunitySubHeading2,
  CommunityGreenSpan,
  CommunityTinySpan,
  CommunityHappy,
  CommunityLinkButton,
  ButtonLinkIcon,
  ButtonLinkText,
  SubHeadingWrapper,
  CommunityWrapper,
  CommunityLinkDiv,
  CommunityLinksNon,
  CommunityContainer690,
  CommunityMobSubText,
  CommunityMobSub,
  CommunityWhite1,
  CommunityWhite2,
  SmileImg,
} from "./CommunityElements";

import smile from "../../../images/smileact.png";
import talking from "../../../images/talking.png";
import qa from "../../../images/q&a.png";
import right from "../../../images/rightarrowcomsmall.png";

const CommunitySection = ({ toggleModal }) => {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <>
          <CommunityContainer>
            <CommunityContent>
              <CommunityColumn>
                <CommunityHeader>
                  Be Part of our Freelancer Community
                </CommunityHeader>
                <CommunitySub>
                  We love what we do and we do it with passion. We value the
                  experimentation of the message and smart incentives.
                </CommunitySub>
                <CommunityLinksContainer>
                  <CommunityLinksNon onClick={toggleModal}>
                    <CommunityLinkDiv>
                      <CommunityWrapper>
                        <CommunityIcon
                          src={talking}
                          alt="talking person picture"
                        />
                      </CommunityWrapper>
                      <CommunityLink>Looking For Support? </CommunityLink>
                    </CommunityLinkDiv>
                    <ButtonLinkIcon src={right} alt="right arrow" />
                  </CommunityLinksNon>
                  <CommunityLinks to="/faq">
                    <CommunityLinkDiv>
                      <CommunityWrapper>
                        <CommunityIcon src={qa} alt="qa picture" />
                      </CommunityWrapper>
                      <CommunityLink>View all FAQ</CommunityLink>
                    </CommunityLinkDiv>

                    <ButtonLinkIcon src={right} alt="right arrow" />
                  </CommunityLinks>
                </CommunityLinksContainer>
              </CommunityColumn>
              <CommunityColumn2>
                <CommunityWhite1>
                  <SubHeadingWrapper>
                    <CommunityMobSubText>
                      With over
                      <CommunityGreenSpan>120+</CommunityGreenSpan>
                    </CommunityMobSubText>
                    <CommunityTinySpan>Freelance Activities</CommunityTinySpan>
                  </SubHeadingWrapper>
                  <CommunityLinkButton to="/activities">
                    <ButtonLinkText>Explore Activities</ButtonLinkText>
                    <ButtonLinkIcon src={right} alt="right arrow" />
                  </CommunityLinkButton>
                </CommunityWhite1>
                <CommunityWhite2>
                  <SmileImg src={smile} alt="smiley face" />
                  <SubHeadingWrapper>
                    <CommunityMobSubText secondary="true">
                      Trusted by
                      <CommunityGreenSpan secondary="true">
                        2000+
                      </CommunityGreenSpan>
                    </CommunityMobSubText>
                    <CommunityTinySpan>Happy Freelancer</CommunityTinySpan>
                  </SubHeadingWrapper>
                </CommunityWhite2>
              </CommunityColumn2>
            </CommunityContent>
          </CommunityContainer>

          {/* mobile */}
          <CommunityContainer690>
            <CommunityContent>
              <CommunityHeader>
                Be Part of our Freelancer Community
              </CommunityHeader>
              <CommunityMobSub>
                <SubHeadingWrapper>
                  <CommunityMobSubText>
                    With over
                    <CommunityGreenSpan>120 +</CommunityGreenSpan>
                  </CommunityMobSubText>
                  <CommunityTinySpan>Freelance Activities</CommunityTinySpan>
                </SubHeadingWrapper>
                <CommunityLinkButton to="/activities">
                  <ButtonLinkText>Explore Activities</ButtonLinkText>
                  <ButtonLinkIcon src={right} alt="right arrow" />
                </CommunityLinkButton>
              </CommunityMobSub>
            </CommunityContent>
            <CommunityLinksContainer>
              <CommunityLinksNon onClick={toggleModal}>
                <CommunityIcon src={talking} alt="talking person picture" />
                <CommunityLink>Looking For Support? </CommunityLink>
              </CommunityLinksNon>
              <CommunityLinks to="/faq">
                <CommunityIcon src={qa} alt="qa picture" />
                <CommunityLink>View Common Question</CommunityLink>
              </CommunityLinks>
            </CommunityLinksContainer>
          </CommunityContainer690>
        </>
      )}
    </VisibilitySensor>
  );
};

export default CommunitySection;

{
  /* <VisibilitySensor partialVisibility>
<>
  <CommunitySubHeading1>
    <SubHeadingWrapper>
      With over{" "}
      <CommunityGreenSpan>
        {isVisible ? <CountUp end={120} /> : 120}+
      </CommunityGreenSpan>
      <CommunityTinySpan>
        {" "}
        Freelance Activities
      </CommunityTinySpan>
    </SubHeadingWrapper>
    <CommunityLinkButton to="/activities">
      <ButtonLinkText>Explore Activities</ButtonLinkText>
      <ButtonLinkIcon src={right} alt="right arrow" />
    </CommunityLinkButton>
  </CommunitySubHeading1>
  <CommunityHappy />
  <CommunitySubHeading2>
    Trust by{" "}
    {isVisible ? (
      <>
        <CommunityGreenSpan>
          <CountUp end={2000} /> +
        </CommunityGreenSpan>
      </>
    ) : (
      <>
        <CommunityGreenSpan>2000</CommunityGreenSpan> +
      </>
    )}
    <CommunityTinySpan> Happy Freelancer</CommunityTinySpan>
  </CommunitySubHeading2>
</>
</VisibilitySensor> */
}
