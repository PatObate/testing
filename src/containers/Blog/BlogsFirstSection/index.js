import React, { useState } from "react";
// import BlogCard from "../../../components/BlogCard";
import {
  BlogFirstContainer,
  BlogFirstHeader,
  BlogFirstNav,
  BlogFirstRow1,
  BlogFirstRow2,
  GetItem,
  GetMenu,
  BlogCardWrapper,
  BlogMobile,
} from "./BlogFirstElements";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Categories from "./Categories";
import "./index.css";

import {
  BlogCardContainer,
  RedRow,
  RedTag,
  WordRow,
  CardHeader,
  Line,
  Date,
} from "../../../components/BlogCardElements";

// import { Card1, Card2, Card3, Card4 } from "./Data";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
};

const BlogFirstSection = ({ header, menu1, menu2, menu3, menu4 }) => {
  const [data, setData] = useState(Categories);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const filterResult = (catItem) => {
    const result = Categories.filter((curDate) => {
      return curDate.category === catItem;
    });
    setData(result);
  };
  return (
    <>
      <BlogFirstContainer>
        <BlogFirstRow1>
          <BlogFirstHeader>{header}</BlogFirstHeader>
          <BlogFirstNav>
            <GetItem onClick={() => toggleTab(1)}>
              <GetMenu
                onClick={() => setData(Categories)}
                highlight={toggleState === 1 ? true : false}
              >
                {menu1}
              </GetMenu>
            </GetItem>
            <GetItem onClick={() => toggleTab(2)}>
              <GetMenu
                onClick={() => filterResult("Travel")}
                highlight={toggleState === 2 ? true : false}
              >
                {menu2}
              </GetMenu>
            </GetItem>
            <GetItem onClick={() => toggleTab(3)}>
              <GetMenu
                onClick={() => filterResult("Visa")}
                highlight={toggleState === 3 ? true : false}
              >
                {menu3}
              </GetMenu>
            </GetItem>
            <GetItem onClick={() => toggleTab(4)}>
              <GetMenu
                onClick={() => filterResult("Freelance")}
                highlight={toggleState === 4 ? true : false}
              >
                {menu4}
              </GetMenu>
            </GetItem>
          </BlogFirstNav>
        </BlogFirstRow1>
        <BlogFirstRow2>
          <Slider {...settings}>
            {data.map((values) => {
              const { id, cardHeader, date, red, img, links } = values;
              return (
                <>
                  <BlogCardWrapper>
                    <BlogCardContainer
                      style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.7315301120448179) 0%, rgba(255,255,255,0.1516981792717087) 100%), url(${img})`,
                      }}
                      key={id}
                      to={links}
                    >
                      <RedRow>
                        <RedTag>{red}</RedTag>
                      </RedRow>
                      <WordRow>
                        <CardHeader>{cardHeader}</CardHeader>
                        <Line />
                        <Date>{date}</Date>
                      </WordRow>
                    </BlogCardContainer>
                  </BlogCardWrapper>
                </>
              );
            })}
          </Slider>
        </BlogFirstRow2>
      </BlogFirstContainer>

      {/* Mobile */}
      <BlogMobile>
        <BlogFirstHeader>{header}</BlogFirstHeader>
        <BlogFirstNav>
          <GetItem onClick={() => toggleTab(1)}>
            <GetMenu
              onClick={() => setData(Categories)}
              highlight={toggleState === 1 ? true : false}
            >
              {menu1}
            </GetMenu>
          </GetItem>
          <GetItem onClick={() => toggleTab(2)}>
            <GetMenu
              onClick={() => filterResult("Travel")}
              highlight={toggleState === 2 ? true : false}
            >
              {menu2}
            </GetMenu>
          </GetItem>
          <GetItem onClick={() => toggleTab(3)}>
            <GetMenu
              onClick={() => filterResult("Visa")}
              highlight={toggleState === 3 ? true : false}
            >
              {menu3}
            </GetMenu>
          </GetItem>
          <GetItem onClick={() => toggleTab(4)}>
            <GetMenu
              onClick={() => filterResult("Freelance")}
              highlight={toggleState === 4 ? true : false}
            >
              {menu4}
            </GetMenu>
          </GetItem>
        </BlogFirstNav>
        {data.map((values) => {
          const { id, cardHeader, date, red, img, links } = values;
          return (
            <>
              <BlogCardWrapper>
                <BlogCardContainer
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.7315301120448179) 0%, rgba(255,255,255,0.1516981792717087) 100%), url(${img})`,
                  }}
                  key={id}
                  to={links}
                >
                  <RedRow>
                    <RedTag>{red}</RedTag>
                  </RedRow>
                  <WordRow>
                    <CardHeader>{cardHeader}</CardHeader>
                    <Line />
                    <Date>{date}</Date>
                  </WordRow>
                </BlogCardContainer>
              </BlogCardWrapper>
            </>
          );
        })}
      </BlogMobile>
    </>
  );
};

export default BlogFirstSection;
