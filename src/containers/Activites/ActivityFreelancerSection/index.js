import React from "react";
import {
  ActivityFreelancerContainer,
  ActivityFreeRow,
  ActivityFreeHeader,
  ActivityFreeContainer690,
  ActivityFreeContent,
  ActivityFreeMobSub,
  ActivityFreeMobSubText,
  ActivityFreeGreenSpan,
  ActivityFreeTinySpan,
  ButtonWrapper,
  MobImg,
  ActivityFreeRow2,
  SmileImg,
  SubHeadingWrapper,
  ActivityFreelancerMobSubText,
  ActivityFreelancerGreenSpan,
  ActivityFreelancerTinySpan,
  ActivityWhite,
} from "./ActivityFreeLancerElements";

import Button from "../../../components/Button";
import { ButtonText } from "./data";

const ActivityFreeLancerSection = ({
  heading,
  img,
  text1,
  text2,
  text3,
  smile,
  toggleModal,
}) => {
  return (
    <>
      <ActivityFreelancerContainer>
        <ActivityFreeRow>
          <ActivityFreeHeader>{heading}</ActivityFreeHeader>
          <div onClick={toggleModal}>
            <Button {...ButtonText} />
          </div>
        </ActivityFreeRow>
        <ActivityFreeRow2 style={{ backgroundImage: `url(${img})` }}>
          <ActivityWhite>
            <SmileImg src={smile} alt="smiley face" />
            <SubHeadingWrapper>
              <ActivityFreelancerMobSubText secondary="true">
                {text1}
                <ActivityFreelancerGreenSpan secondary="true">
                  {text2}
                </ActivityFreelancerGreenSpan>
              </ActivityFreelancerMobSubText>
              <ActivityFreelancerTinySpan>{text3}</ActivityFreelancerTinySpan>
            </SubHeadingWrapper>
          </ActivityWhite>
        </ActivityFreeRow2>
      </ActivityFreelancerContainer>

      {/* mobile */}
      <ActivityFreeContainer690>
        <ActivityFreeContent>
          <ActivityFreeHeader>
            Be Part of our Freelancer Community
          </ActivityFreeHeader>
          <ActivityFreeMobSub>
            <MobImg src={smile} alt="smiley face" />
            <ActivityFreeMobSubText>
              Trust by
              <ActivityFreeGreenSpan>2000+</ActivityFreeGreenSpan>
            </ActivityFreeMobSubText>
            <ActivityFreeTinySpan>Happy Freelancer</ActivityFreeTinySpan>
          </ActivityFreeMobSub>
        </ActivityFreeContent>
        <ButtonWrapper>
          <Button {...ButtonText} />
        </ButtonWrapper>
      </ActivityFreeContainer690>
    </>
  );
};

export default ActivityFreeLancerSection;
