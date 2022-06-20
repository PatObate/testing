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
} from "./ActivityFirstElements";
import Cards from "./cards";
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
} from "../../../components/ActivityCardElements";
import { BlogCardWrapper } from "../../Blog/BlogsFirstSection/BlogFirstElements";
import Right from "../../../svg/rightsmall.svg";
const ActivityFirstSection = ({
  header,
  sub,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  tag1,
  tag2,
  tag3,
  tag4,
  tag5,
  tag6,
  lasttag,
}) => {
  const [data] = useState(Cards);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
            {data.map((values) => {
              const { id, img, header, tag1, tag2, tag3, tag4 } = values;
              return (
                <>
                  <BlogCardWrapper>
                    <ActivityCardContainer key={id}>
                      <ActivityCardRow1>
                        <ActivityCardImg src={img} />
                      </ActivityCardRow1>
                      <ActivityCardRow2>
                        <ActivityCardHeader>{header}</ActivityCardHeader>
                        <ActivityCardP>{tag1}</ActivityCardP>
                        <ActivityCardP>{tag2}</ActivityCardP>
                        <ActivityCardP>{tag3}</ActivityCardP>
                        <ActivityCardP>{tag4}</ActivityCardP>
                      </ActivityCardRow2>
                    </ActivityCardContainer>
                  </BlogCardWrapper>
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
            <ListWrapper top="true">
              <ListColumn1>
                <ListImg src={img1} />
              </ListColumn1>
              <ListColumn2>
                <ListText>{tag1}</ListText>
                <ButtonImg src={Right} />
              </ListColumn2>
            </ListWrapper>
            <ListWrapper>
              <ListColumn1>
                <ListImg src={img2} />
              </ListColumn1>
              <ListColumn2>
                <ListText>{tag2}</ListText>
                <ButtonImg src={Right} />
              </ListColumn2>
            </ListWrapper>
            <ListWrapper>
              <ListColumn1>
                <ListImg src={img3} />
              </ListColumn1>
              <ListColumn2>
                <ListText>{tag3}</ListText>
                <ButtonImg src={Right} />
              </ListColumn2>
            </ListWrapper>
            <ListWrapper>
              <ListColumn1>
                <ListImg src={img4} />
              </ListColumn1>
              <ListColumn2>
                <ListText>{tag4}</ListText>
                <ButtonImg src={Right} />
              </ListColumn2>
            </ListWrapper>
            <ListWrapper>
              <ListColumn1>
                <ListImg src={img5} />
              </ListColumn1>
              <ListColumn2>
                <ListText>{tag5}</ListText>
                <ButtonImg src={Right} />
              </ListColumn2>
            </ListWrapper>
            <ListWrapper>
              <ListColumn1>
                <ListImg src={img6} />
              </ListColumn1>
              <ListColumn2>
                <ListText>{tag6}</ListText>
                <ButtonImg src={Right} />
              </ListColumn2>
            </ListWrapper>
            <ListTag>{lasttag}</ListTag>
          </ListContainer>
        </ActivityContent>
      </ActivityMContainer>
    </>
  );
};

export default ActivityFirstSection;
