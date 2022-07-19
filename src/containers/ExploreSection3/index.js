import React, { useState } from "react";
import {
  ArrowDiv,
  ArrowRight,
  CardBox2,
  CardContainer,
  CardContainer2,
  CardContainer2Mob,
  CardData,
  CardHeader,
  CardHeaderMob,
  CardImg,
  CardImg2Mob,
  CardRow2,
  CardSource,
  CardText2,
  CardVid,
  CardVideo,
  CardWrapper,
  CardWrapperMob,
  LinkWrapper2,
  PoeContainer,
  PoeContent,
  PoeHeader,
  PoeHeaderMob,
  PoeSub,
  PoeWrapper,
} from "./PoeElement";
// import Navigation from "../../components/Navigation";
// import DataCard from "../../components/DataCard";
import arrow from "../../lotties/arrow.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const ExploreSection3 = ({
  mainheader,
  subheader,
  header,
  linkback,
  img1,
  img2,
  img4,
  header4,
  mobnone1,
  mobnone2,
  data2,
  data,
  header3,
  img3,
  data3,
  data4,
  header2,
  noextra,
  triple,
  img5,
  header5,
  img6,
  header6,
  data5,
  data6,
  triplewidth,
  vid,
  vid1,
  vid2,
  vid3,
  vid4,
  vid5,
  vid6,
}) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    focusOnSelect: true,
    dots: true,
  };

  return (
    <>
      <PoeContainer>
        <ArrowDiv
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <LinkWrapper2 to={linkback}>
            <ArrowRight animationData={arrow} />
          </LinkWrapper2>
        </ArrowDiv>
        <PoeContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <PoeHeader>{mainheader}</PoeHeader>
          <PoeSub>{subheader}</PoeSub>
          <PoeWrapper>
            <PoeHeaderMob>{mainheader}</PoeHeaderMob>
            <CardContainer>
              <CardWrapper hide={toggleState === 1 ? true : false}>
                <CardHeader>{header}</CardHeader>
                <CardImg src={img1} vid={vid} />
                <CardVideo vid={vid}>
                  <CardVid
                    controls
                    autoPlay={toggleState === 1 ? true : false}
                    muted={toggleState === 1 ? false : true}
                    playsInline
                  >
                    <CardSource src={vid1} type="video/mp4" />
                  </CardVid>
                </CardVideo>
                <CardData>{data}</CardData>
              </CardWrapper>
              <CardWrapper hide={toggleState === 2 ? true : false}>
                <CardHeader>{header2}</CardHeader>
                <CardImg src={img2} vid={vid} />
                <CardVideo vid={vid}>
                  <CardVid
                    controls
                    autoPlay={toggleState === 2 ? true : false}
                    playsInline
                    muted={toggleState === 2 ? false : true}
                  >
                    <CardSource src={vid2} type="video/mp4" />
                  </CardVid>
                </CardVideo>
                <CardData>{data2}</CardData>
              </CardWrapper>
              <CardWrapper hide={toggleState === 3 ? true : false}>
                <CardHeader>{header3}</CardHeader>
                <CardImg src={img3} vid={vid} />
                <CardVideo vid={vid}>
                  <CardVid
                    controls
                    autoPlay={toggleState === 3 ? true : false}
                    playsInline
                    muted={toggleState === 3 ? false : true}
                  >
                    <CardSource src={vid3} type="video/mp4" />
                  </CardVid>
                </CardVideo>
                <CardData>{data3}</CardData>
              </CardWrapper>
              <CardWrapper hide={toggleState === 4 ? true : false}>
                <CardHeader>{header4}</CardHeader>
                <CardImg src={img4} vid={vid} />
                <CardVideo vid={vid}>
                  <CardVid
                    controls
                    autoPlay={toggleState === 4 ? true : false}
                    playsInline
                    muted={toggleState === 4 ? false : true}
                  >
                    <CardSource src={vid4} type="video/mp4" />
                  </CardVid>
                </CardVideo>
                <CardData>{data4}</CardData>
              </CardWrapper>
              <CardWrapper hide={toggleState === 5 ? true : false}>
                <CardHeader>{header5}</CardHeader>
                <CardImg src={img5} vid={vid} />
                <CardVideo vid={vid}>
                  <CardVid
                    controls
                    autoPlay={toggleState === 5 ? true : false}
                    muted={toggleState === 5 ? false : true}
                    playsInline
                  >
                    <CardSource src={vid5} type="video/mp4" />
                  </CardVid>
                </CardVideo>
                <CardData>{data5}</CardData>
              </CardWrapper>
              <CardWrapper hide={toggleState === 6 ? true : false}>
                <CardHeader>{header6}</CardHeader>
                <CardImg src={img6} vid={vid} />
                <CardVideo vid={vid}>
                  <CardVid
                    controls
                    autoPlay={toggleState === 6 ? true : false}
                    muted={toggleState === 6 ? false : true}
                    playsInline
                  >
                    <CardSource src={vid6} type="video/mp4" />
                  </CardVid>
                </CardVideo>
                <CardData>{data6}</CardData>
              </CardWrapper>
            </CardContainer>
            <CardContainer2 triplewidth={triplewidth}>
              <CardRow2>
                <CardBox2
                  style={{
                    background: `url(${img1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  onClick={() => toggleTab(1)}
                  highlight={toggleState === 1 ? true : false}
                >
                  <CardText2>{header}</CardText2>
                </CardBox2>
                <CardBox2
                  style={{
                    background: `url(${img2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  onClick={() => toggleTab(2)}
                  highlight={toggleState === 2 ? true : false}
                >
                  <CardText2>{header2}</CardText2>
                </CardBox2>
                <CardBox2
                  noextra={triple}
                  style={{
                    background: `url(${img3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  onClick={() => toggleTab(3)}
                  highlight={toggleState === 3 ? true : false}
                >
                  <CardText2>{header3}</CardText2>
                </CardBox2>
              </CardRow2>
              <CardRow2>
                <CardBox2
                  style={{
                    background: `url(${img4})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  onClick={() => toggleTab(4)}
                  highlight={toggleState === 4 ? true : false}
                >
                  <CardText2>{header4}</CardText2>
                </CardBox2>
                <CardBox2
                  noextra={noextra}
                  style={{
                    background: `url(${img5})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  onClick={() => toggleTab(5)}
                  highlight={toggleState === 5 ? true : false}
                >
                  <CardText2>{header5}</CardText2>
                </CardBox2>
                <CardBox2
                  noextra={triple}
                  style={{
                    background: `url(${img6})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  onClick={() => toggleTab(6)}
                  highlight={toggleState === 6 ? true : false}
                >
                  <CardText2>{header6}</CardText2>
                </CardBox2>
              </CardRow2>
            </CardContainer2>
            <CardContainer2Mob>
              <Slider {...settings}>
                <CardWrapperMob>
                  <CardImg2Mob
                    highlight={toggleState === 1 ? true : false}
                    onClick={() => toggleTab(1)}
                    style={{
                      background: `url(${img1})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <CardHeaderMob>{header}</CardHeaderMob>
                  </CardImg2Mob>
                </CardWrapperMob>
                <CardWrapperMob>
                  <CardImg2Mob
                    highlight={toggleState === 2 ? true : false}
                    onClick={() => toggleTab(2)}
                    style={{
                      background: `url(${img2})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <CardHeaderMob>{header2}</CardHeaderMob>
                  </CardImg2Mob>
                </CardWrapperMob>
                <CardWrapperMob>
                  <CardImg2Mob
                    highlight={toggleState === 3 ? true : false}
                    onClick={() => toggleTab(3)}
                    style={{
                      background: `url(${img3})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <CardHeaderMob>{header3}</CardHeaderMob>
                  </CardImg2Mob>
                </CardWrapperMob>
                <CardWrapperMob>
                  <CardImg2Mob
                    highlight={toggleState === 4 ? true : false}
                    onClick={() => toggleTab(4)}
                    style={{
                      background: `url(${img4})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <CardHeaderMob>{header4}</CardHeaderMob>
                  </CardImg2Mob>
                </CardWrapperMob>
                <CardWrapperMob>
                  <CardImg2Mob
                    highlight={toggleState === 5 ? true : false}
                    onClick={() => toggleTab(5)}
                    style={{
                      background: `url(${img5})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <CardHeaderMob>{header5}</CardHeaderMob>
                  </CardImg2Mob>
                </CardWrapperMob>
                <CardWrapperMob>
                  <CardImg2Mob
                    highlight={toggleState === 6 ? true : false}
                    onClick={() => toggleTab(6)}
                    style={{
                      background: `url(${img6})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <CardHeaderMob>{header6}</CardHeaderMob>
                  </CardImg2Mob>
                </CardWrapperMob>
              </Slider>
            </CardContainer2Mob>
          </PoeWrapper>
        </PoeContent>
      </PoeContainer>
    </>
  );
};

export default ExploreSection3;
