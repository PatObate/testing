import React, { useState } from "react";
import {
  ArrowRight,
  ButtonText,
  CardBox2,
  CardButton,
  CardButtonWrapper,
  CardContainer,
  CardContainer2,
  CardData,
  CardHeader,
  CardImg,
  CardMobOption1,
  CardMobOption2,
  CardMobOption3,
  CardMobOption4,
  CardMobOption5,
  CardMobWrapper,
  CardRow2,
  CardSource,
  CardText2,
  CardVid,
  CardVideo,
  CardVideoMain,
  CardWrapper,
  LinkWrapper2,
  MenuNavWrapper,
  PoeContainer,
  PoeContent,
  PoeContentNone,
  PoeHeader,
  PoeRow,
} from "./PoeElement";
import arrow from "../../lotties/arrow.json";
import MenuButton from "../../components/MenuButton";
import NavModal from "../../components/NavModal";
import Navigation2 from "../../components/Navigation copy";

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

const MenuSelectSection = ({
  head,
  header,
  vid,
  data,
  img,
  header1,
  vid1,
  vid2,
  noextra,
  triplewidth,
  vid3,
  vid4,
  vid5,
  vid6,
  img1,
  data1,
  img2,
  img3,
  img4,
  img5,
  img6,
  data2,
  data3,
  data4,
  data5,
  data6,
  header2,
  triple,
  header3,
  quadra,
  header4,
  penta,
  vid0,
  header5,
  poster,
  hexa,
  header6,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <NavModal showModal={showModal} setShowModal={setShowModal} />
      <PoeContainer
        style={{
          background: `  linear-gradient(89deg, #14161a 0%, #0e264cc7 100%), url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <PoeContentNone
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <LinkWrapper2 to="/menu">
            <ArrowRight animationData={arrow} />
          </LinkWrapper2>
        </PoeContentNone>

        <PoeContent>
          <PoeRow>
            <PoeHeader>{head}</PoeHeader>
            <PoeContentNone
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <CardContainer more={showMore}>
                <CardWrapper hide={toggleState === 1 ? true : false}>
                  <CardHeader>{header}</CardHeader>
                  <CardVideoMain more={showMore}>
                    <CardVid
                      controls
                      autoPlay={toggleState === 1 ? true : false}
                      muted={toggleState === 1 ? false : true}
                      playsInline
                    >
                      <CardSource src={vid1} type="video/mp4" />
                    </CardVid>
                  </CardVideoMain>
                  <CardData>{data}</CardData>
                </CardWrapper>
                <CardWrapper hide={toggleState === 2 ? true : false}>
                  <CardHeader>{header1}</CardHeader>
                  <CardImg src={img1} vid={vid} />
                  <CardVideo vid={vid}>
                    <CardVid
                      controls
                      autoPlay={toggleState === 2 ? true : false}
                      muted={toggleState === 2 ? false : true}
                      playsInline
                      poster={poster}
                    >
                      <CardSource src={vid0} type="video/mp4" />
                    </CardVid>
                  </CardVideo>
                  <CardData>{data1}</CardData>
                </CardWrapper>
                <CardWrapper hide={toggleState === 3 ? true : false}>
                  <CardHeader>{header2}</CardHeader>
                  <CardImg src={img2} vid={vid} />
                  <CardVideo vid={vid}>
                    <CardVid
                      controls
                      autoPlay={toggleState === 3 ? true : false}
                      muted={toggleState === 3 ? false : true}
                      playsInline
                    >
                      <CardSource src={vid2} type="video/mp4" />
                    </CardVid>
                  </CardVideo>
                  <CardData>{data2}</CardData>
                </CardWrapper>
                <CardWrapper hide={toggleState === 4 ? true : false}>
                  <CardHeader>{header3}</CardHeader>
                  <CardImg src={img3} vid={vid} />
                  <CardVideo vid={vid}>
                    <CardVid
                      controls
                      autoPlay={toggleState === 4 ? true : false}
                      muted={toggleState === 4 ? false : true}
                      playsInline
                    >
                      <CardSource src={vid3} type="video/mp4" />
                    </CardVid>
                  </CardVideo>
                  <CardData>{data3}</CardData>
                </CardWrapper>
                <CardWrapper hide={toggleState === 5 ? true : false}>
                  <CardHeader>{header4}</CardHeader>
                  <CardImg src={img4} vid={vid} />
                  <CardVideo vid={vid}>
                    <CardVid
                      controls
                      autoPlay={toggleState === 5 ? true : false}
                      muted={toggleState === 5 ? false : true}
                      playsInline
                    >
                      <CardSource src={vid4} type="video/mp4" />
                    </CardVid>
                  </CardVideo>
                  <CardData>{data4}</CardData>
                </CardWrapper>
                <CardWrapper hide={toggleState === 6 ? true : false}>
                  <CardHeader>{header5}</CardHeader>
                  <CardImg src={img5} vid={vid} />
                  <CardVideo vid={vid}>
                    <CardVid
                      controls
                      autoPlay={toggleState === 6 ? true : false}
                      muted={toggleState === 6 ? false : true}
                      playsInline
                    >
                      <CardSource src={vid5} type="video/mp4" />
                    </CardVid>
                  </CardVideo>
                  <CardData>{data5}</CardData>
                </CardWrapper>
                <CardWrapper hide={toggleState === 7 ? true : false}>
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
                <CardMobWrapper more={showMore}>
                  <CardMobOption1
                    onClick={() => toggleTab(2)}
                    highlight={toggleState === 2 ? true : false}
                  >
                    <CardText2>{header1}</CardText2>
                  </CardMobOption1>
                  <CardMobOption2
                    onClick={() => toggleTab(3)}
                    highlight={toggleState === 3 ? true : false}
                  >
                    <CardText2>{header2}</CardText2>
                  </CardMobOption2>
                  <CardMobOption2
                    onClick={() => toggleTab(4)}
                    highlight={toggleState === 4 ? true : false}
                    noextra={triple}
                  >
                    <CardText2>{header3}</CardText2>
                  </CardMobOption2>
                  <CardMobOption3
                    onClick={() => toggleTab(5)}
                    highlight={toggleState === 5 ? true : false}
                    fourfivextra={quadra}
                    triplewidth
                  >
                    <CardText2>{header4}</CardText2>
                  </CardMobOption3>
                  <CardMobOption4
                    onClick={() => toggleTab(6)}
                    highlight={toggleState === 6 ? true : false}
                    fiveextra={penta}
                  >
                    <CardText2>{header5}</CardText2>
                  </CardMobOption4>
                  <CardMobOption5
                    onClick={() => toggleTab(7)}
                    highlight={toggleState === 7 ? true : false}
                    sixextra={hexa}
                  >
                    <CardText2>{header6}</CardText2>
                  </CardMobOption5>
                </CardMobWrapper>
                <CardButtonWrapper onClick={() => toggleTab(1)}>
                  <CardButton onClick={() => setShowMore((prev) => !prev)}>
                    <ButtonText>Explore</ButtonText>
                  </CardButton>
                </CardButtonWrapper>
              </CardContainer>
              <CardContainer2 more={showMore} triplewidth={triplewidth}>
                <CardRow2>
                  <CardBox2
                    style={{
                      background: `url(${img1})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    onClick={() => toggleTab(2)}
                    highlight={toggleState === 2 ? true : false}
                  >
                    <CardText2>{header1}</CardText2>
                  </CardBox2>
                  <CardBox2
                    style={{
                      background: `url(${img2})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    onClick={() => toggleTab(3)}
                    highlight={toggleState === 3 ? true : false}
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
                    onClick={() => toggleTab(4)}
                    highlight={toggleState === 4 ? true : false}
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
                    onClick={() => toggleTab(5)}
                    highlight={toggleState === 5 ? true : false}
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
                    onClick={() => toggleTab(6)}
                    highlight={toggleState === 6 ? true : false}
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
                    onClick={() => toggleTab(7)}
                    highlight={toggleState === 7 ? true : false}
                  >
                    <CardText2>{header6}</CardText2>
                  </CardBox2>
                </CardRow2>
              </CardContainer2>
            </PoeContentNone>
          </PoeRow>
          <MenuNavWrapper more={showMore}>
            <Navigation2 />
          </MenuNavWrapper>
          <MenuButton showModal={showModal} setShowModal={setShowModal} />
        </PoeContent>
      </PoeContainer>
    </>
  );
};

export default MenuSelectSection;
