import React from "react";
import {
  ActivityFreelancerContainer,
  ActivityFreeRow,
  ActivityFreeHeader,
  ActivityFreeYellow,
  ActivityFreeCard,
  ActivityTextWrapper,
  ActivityCardText,
  ActivityCardNum,
  ActivityCardTiny,
  ActivityFreeSmile,
  ActivityFreeContainer690,
  ActivityFreeContent,
  ActivityFreeMobSub,
  ActivityFreeMobSubText,
  ActivityFreeGreenSpan,
  ActivityFreeTinySpan,
  ButtonWrapper,
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
}) => {
  return (
    <>
      <ActivityFreelancerContainer>
        <ActivityFreeRow>
          <ActivityFreeHeader>{heading}</ActivityFreeHeader>
          <Button {...ButtonText} />
        </ActivityFreeRow>
        <ActivityFreeRow>
          <ActivityFreeYellow style={{ backgroundImage: `url(${img})` }}>
            <ActivityFreeSmile style={{ backgroundImage: `url(${smile})` }} />
            <ActivityFreeCard>
              <ActivityTextWrapper>
                <ActivityCardText>{text1}</ActivityCardText>
                <ActivityCardNum>{text2}</ActivityCardNum>
                <ActivityCardTiny>{text3}</ActivityCardTiny>
              </ActivityTextWrapper>
            </ActivityFreeCard>
          </ActivityFreeYellow>
        </ActivityFreeRow>
      </ActivityFreelancerContainer>

      {/* mobile */}
      <ActivityFreeContainer690>
        <ActivityFreeContent>
          <ActivityFreeHeader>
            Be Part of our Freelancer Community
          </ActivityFreeHeader>
          <ActivityFreeMobSub>
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
