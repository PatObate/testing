import React from "react";
import Navigation from "../../components/Navigation";
import {
  ArrowRight,
  LinkWrapper2,
  MenuContainer,
  MenuContent,
  MenuHeader,
  MenuSpan,
  MenuWrapper,
} from "./MenuSection";
import arrow from "../../lotties/arrow.json";
import menu from "../../music/menusong.mp3";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "2.60vw",
  },
  visible: {
    opacity: 1,
    y: "0vw",
    transition: { delay: 0.5, duration: 0.5 },
  },
  hidden2: {
    borderRadius: "3.28vw",
    scale: 0.5,
    padding: "5.21vw 7.29vw",
  },
  visible2: {
    opacity: 1,
    y: 0,
    padding: 0,
    scale: 1,
    transition: { delay: 1, duration: 0.5 },
  },
  hidden3: {
    background: "linear-gradient(89deg, #000b1e 0%, #002549c9 100%)",
  },
  visible3: {
    transition: { delay: 1, duration: 0.5 },
  },
  hidden4: {
    opacity: 0,
  },
  visible4: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
  exit2: {
    background: "#131820",
    transition: { duration: 0.5 },
  },
};

const MenuSection = () => {
  return (
    <>
      <audio autoPlay>
        <source type="audio/mpeg" src={menu} />
      </audio>
      <MenuContainer
        variants={containerVariants}
        initial="hidden3"
        animate="visible3"
      >
        <LinkWrapper2 to="/support">
          <ArrowRight animationData={arrow} />
        </LinkWrapper2>

        <MenuContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <MenuContent
            variants={containerVariants}
            initial="hidden2"
            animate="visible2"
            exit="exit"
          >
            <MenuWrapper>
              <MenuHeader>
                <MenuSpan>SERVICES</MenuSpan> DRIVEN BY{" "}
                <MenuSpan> TECHNOLOGY</MenuSpan> TO POWER YOUR BUSINESS
              </MenuHeader>
              <Navigation />
            </MenuWrapper>
          </MenuContent>
        </MenuContent>
      </MenuContainer>
    </>
  );
};

export default MenuSection;
