import React from "react";
import {
  BlogFreeHeader,
  BlogFreeRow,
  BlogFreeSub,
  BlogFreelancerContainer,
  BlogFreeYellow,
  BlogFreeCard,
  BlogCardText,
  BlogCardNum,
  BlogCardTiny,
  BlogTextWrapper,
  ExploreLinkWrapper,
  ExploreLink,
  ExploreLinkIcon,
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
}) => {
  return (
    <>
      <BlogFreelancerContainer>
        <BlogFreeRow>
          <BlogFreeHeader>{heading}</BlogFreeHeader>
          <BlogFreeSub>{sub}</BlogFreeSub>
          <Button {...ButtonText} />
        </BlogFreeRow>
        <BlogFreeRow>
          <BlogFreeYellow style={{ backgroundImage: `url(${img})` }}>
            <BlogFreeCard>
              <BlogTextWrapper>
                <BlogCardText>{text1}</BlogCardText>
                <BlogCardNum>{text2}</BlogCardNum>
                <BlogCardTiny>{text3}</BlogCardTiny>
              </BlogTextWrapper>
              <ExploreLinkWrapper>
                <ExploreLink>{link}</ExploreLink>
                <ExploreLinkIcon src={Icon} />
              </ExploreLinkWrapper>
            </BlogFreeCard>
          </BlogFreeYellow>
        </BlogFreeRow>
      </BlogFreelancerContainer>
    </>
  );
};

export default BlogFreeLancerSection;
