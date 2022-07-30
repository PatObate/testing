import React from "react";
import {
  BlogFreeHeader,
  BlogFreeRow,
  BlogFreeSub,
  BlogFreelancerContainer,
  BlogFreeRow2,
  CommunityWhite1,
  SubHeadingWrapper,
  CommunityMobSubText,
  CommunityGreenSpan,
  CommunityTinySpan,
  CommunityLinkButton,
  ButtonLinkText,
  ButtonLinkIcon,
} from "./BlogFreeLancerElements";
import Button from "../../../components/Button";
import { ButtonText } from "./data";
import Icon from "../../../svg/rightsmall.svg";

const BlogFreeLancerSection = ({
  heading,
  sub,
  img,
  text1,
  text2,
  text3,
  link,
  toggleModal,
}) => {
  return (
    <>
      <BlogFreelancerContainer>
        <BlogFreeRow>
          <BlogFreeHeader>{heading}</BlogFreeHeader>
          <BlogFreeSub>{sub}</BlogFreeSub>
          <div onClick={toggleModal}>
            <Button {...ButtonText} />
          </div>
        </BlogFreeRow>
        <BlogFreeRow2 style={{ backgroundImage: `url(${img})` }}>
          <CommunityWhite1>
            <SubHeadingWrapper>
              <CommunityMobSubText>
                {text1}
                <CommunityGreenSpan>{text2}</CommunityGreenSpan>
              </CommunityMobSubText>
              <CommunityTinySpan>{text3}</CommunityTinySpan>
            </SubHeadingWrapper>
            <CommunityLinkButton to="/activities">
              <ButtonLinkText>{link}</ButtonLinkText>
              <ButtonLinkIcon src={Icon} alt="right arrow" />
            </CommunityLinkButton>
          </CommunityWhite1>
        </BlogFreeRow2>
      </BlogFreelancerContainer>
    </>
  );
};

export default BlogFreeLancerSection;
