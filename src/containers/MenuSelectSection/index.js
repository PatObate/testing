import React, { useState } from "react";
import {
  ArrowRight,
  ButtonText,
  CardButton,
  CardContainer,
  CardData,
  CardHeader,
  CardSource,
  CardVideo,
  CardVideoWrapper,
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

const MenuSelectSection = ({ head, header, vid, data, link, img, poster }) => {
  const [showModal, setShowModal] = useState(false);

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
            <PoeContentNone
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <PoeHeader>{head}</PoeHeader>
              <CardContainer>
                <CardWrapper>
                  <CardHeader>{header}</CardHeader>
                  <CardVideoWrapper>
                    <CardVideo controls autoPlay playsInline>
                      <CardSource src={vid} type="audio/mpeg" poster={poster} />
                    </CardVideo>
                  </CardVideoWrapper>
                  <CardData>{data}</CardData>
                </CardWrapper>
                <CardButton to={link}>
                  <ButtonText>Explore</ButtonText>
                </CardButton>
              </CardContainer>
            </PoeContentNone>
          </PoeRow>
          <MenuNavWrapper>
            <Navigation2 />
          </MenuNavWrapper>
          <MenuButton showModal={showModal} setShowModal={setShowModal} />
        </PoeContent>
      </PoeContainer>
    </>
  );
};

export default MenuSelectSection;
