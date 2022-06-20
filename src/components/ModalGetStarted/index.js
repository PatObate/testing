import React, { useState } from "react";
import {
  GetBackground,
  GetContainer,
  GetColumn,
  GetColumn2,
  GetHeader,
  GetNavbar,
  GetItem,
  GetMenu,
  GetButton,
  GetButtonText,
  GetButtonIcon,
  GetButtonImg1,
  AccordionWrapper,
  XPic,
  GetButtonImg2,
  GetContainerMob,
  GetVideo,
  Video,
  Source,
  XIcon,
} from "./ModalGetElements";
import Accordion2 from "../../components/Accordion2";

import Form from "../../components/Form/";
import FormMob from "../Form/index2";

import Play from "../../svg/yellowplaybutton.svg";
import X from "../../svg/xblack.svg";
import White from "../../images/white icon.png";
import {
  items,
  items2,
  items3,
  items4,
  items5,
  items6,
  items7,
  items8,
  items9,
} from "./Data";

import video from "../../videos/DF.mp4";

const ModalGetStarted = ({ showModal2, setShowModal2 }) => {
  const [toggleState, setToggleState] = useState(1);
  const [isOn, setIsOn] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleToggle = () => setIsOn((prev) => !prev);

  return (
    <>
      {showModal2 ? (
        <GetBackground>
          <XPic src={X} onClick={() => setShowModal2((prev) => !prev)} />
          <GetContainer>
            <GetColumn>
              <GetHeader>Get Started with Your Freelance Journey</GetHeader>
              <GetNavbar>
                <GetItem onClick={() => toggleTab(1)}>
                  <GetMenu highlight={toggleState === 1 ? true : false}>
                    General
                  </GetMenu>
                </GetItem>
                <GetItem onClick={() => toggleTab(2)}>
                  <GetMenu highlight={toggleState === 2 ? true : false}>
                    Payment
                  </GetMenu>
                </GetItem>
                <GetItem onClick={() => toggleTab(3)}>
                  <GetMenu highlight={toggleState === 3 ? true : false}>
                    Service
                  </GetMenu>
                </GetItem>
              </GetNavbar>
              <AccordionWrapper hide={toggleState === 1 ? true : false}>
                <Accordion2 items={items} />
                <Accordion2 items={items2} />
                <Accordion2 items={items3} />
              </AccordionWrapper>
              <AccordionWrapper hide={toggleState === 2 ? true : false}>
                <Accordion2 items={items4} />
                <Accordion2 items={items5} />
                <Accordion2 items={items6} />
              </AccordionWrapper>
              <AccordionWrapper hide={toggleState === 3 ? true : false}>
                <Accordion2 items={items7} />
                <Accordion2 items={items8} />
                <Accordion2 items={items9} />
              </AccordionWrapper>
              <GetButton onClick={handleToggle}>
                <GetButtonIcon>
                  <GetButtonImg2 src={White} />
                </GetButtonIcon>
                <GetButtonText>
                  Get A Sneak Peek Of Our Digital World
                </GetButtonText>
                <GetButtonIcon>
                  <GetButtonImg1 src={Play} />
                </GetButtonIcon>
              </GetButton>
            </GetColumn>
            <GetColumn2>
              <Form />
            </GetColumn2>
            <GetVideo toggle={isOn}>
              <XIcon onClick={handleToggle} />
              <Video autoplay="autoplay" controls>
                <Source src={video} type="video/mp4" />
              </Video>
            </GetVideo>
          </GetContainer>

          {/* mobile */}
          <GetContainerMob>
            <FormMob />
          </GetContainerMob>
        </GetBackground>
      ) : null}
    </>
  );
};

export default ModalGetStarted;
