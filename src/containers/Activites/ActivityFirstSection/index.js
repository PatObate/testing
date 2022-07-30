import React, { useState, useRef } from "react";
import {
  ActivityFirstContainer,
  ActivityFirstRow1,
  ActivityFirstHeadWrapper,
  ActivityFirstHeader,
  ActivityFirstSub,
  ActivityFirstNav,
  ActivityFirstIcon,
  ActivityFirstIcon2,
  ActivityFirstRow2,
  ActivityIconWrapper,
  ActivityMContainer,
  ActivityContent,
  ListContainer,
  ListColumn2,
  ListColumn1,
  ListWrapper,
  ListImg,
  ListText,
  ButtonImg,
  ListTag,
  Wrap,
  Dropdown,
  Wrapper,
} from "./ActivityFirstElements";
import { Cards } from "./cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ActivityCardContainer,
  ActivityCardRow1,
  ActivityCardImg,
  ActivityCardRow2,
  ActivityCardP,
  ActivityCardHeader,
  ActivityCardWrapprt,
} from "../../../components/ActivityCardElements";
import Right from "../../../svg/rightsmall.svg";
const ActivityFirstSection = ({ header, sub, lasttag }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: false,
  };

  const slider = useRef(null);

  return (
    <>
      <ActivityFirstContainer>
        <ActivityFirstRow1>
          <ActivityFirstHeadWrapper>
            <ActivityFirstHeader>{header}</ActivityFirstHeader>
            <ActivityFirstSub>{sub}</ActivityFirstSub>
          </ActivityFirstHeadWrapper>
          <ActivityFirstNav>
            <ActivityIconWrapper>
              <ActivityFirstIcon onClick={() => slider?.current?.slickPrev()} />
              <ActivityFirstIcon2
                onClick={() => slider?.current?.slickNext()}
              />
            </ActivityIconWrapper>
          </ActivityFirstNav>
        </ActivityFirstRow1>
        <ActivityFirstRow2>
          <Slider {...settings} ref={slider}>
            {Cards.map((values, index) => {
              const { img, header, tag1, tag2, tag3, tag4 } = values;
              return (
                <>
                  <ActivityCardWrapprt>
                    <ActivityCardContainer key={index}>
                      <ActivityCardRow1>
                        <ActivityCardImg src={img} alt="drawing img" />
                      </ActivityCardRow1>
                      <ActivityCardRow2>
                        <ActivityCardHeader>{header}</ActivityCardHeader>
                        <ActivityCardP>{tag1}</ActivityCardP>
                        <ActivityCardP>{tag2}</ActivityCardP>
                        <ActivityCardP>{tag3}</ActivityCardP>
                        <ActivityCardP>{tag4}</ActivityCardP>
                      </ActivityCardRow2>
                    </ActivityCardContainer>
                  </ActivityCardWrapprt>
                </>
              );
            })}
          </Slider>
        </ActivityFirstRow2>
      </ActivityFirstContainer>

      {/* mobile */}

      <ActivityMContainer>
        <ActivityContent>
          <ActivityFirstHeader>{header}</ActivityFirstHeader>
          <ListContainer>
            {Cards.map((values, index) => {
              const { img, header, tag1, tag2, tag3, tag4 } = values;
              return (
                <>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <Wrapper>
                      <ListImg src={img} alt="img list" />
                      <h1>{header}</h1>
                    </Wrapper>

                    <span>
                      <ButtonImg src={Right} alt="right arrow" />
                    </span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{tag1}</p>
                      <p>{tag2}</p>
                      <p>{tag3}</p>
                      <p>{tag4}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
            <ListTag>{lasttag}</ListTag>
          </ListContainer>
        </ActivityContent>
      </ActivityMContainer>
    </>
  );
};

export default ActivityFirstSection;
