import React, { useState, useRef } from "react";
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
  Wrap,
  HeaderIcon,
  Dropdown,
} from "./ModalGetElements";

import Form from "../../components/Form/";
import FormMob from "../Form/index2";

import Play from "../../svg/yellowplaybutton.svg";
import X from "../../svg/xblack.svg";
import White from "../../images/white icon.png";
import { items1, items2, items3 } from "./Data";
import add from "../../svg/blueplus.svg";
import minus from "../../svg/minuscircle.svg";

import video from "../../videos/DF.mp4";

const ModalGetStarted = ({ showModal2, setShowModal2 }) => {
  const [toggleState, setToggleState] = useState(1);
  const [isOn, setIsOn] = useState(false);
  const [clicked, setClicked] = useState(false);

  const vidRef = useRef(null);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleToggle = () => setIsOn((prev) => !prev);

  const pauseVideo = () => {
    // Pause as well
    vidRef.current.pause();
  };

  const playVideo = () => {
    // Pause as well
    vidRef.current.play();
  };

  return (
    <>
      <GetBackground toggle={showModal2}>
        <div onClick={pauseVideo}>
          <XPic
            src={X}
            alt="x icon"
            onClick={() => setShowModal2((prev) => !prev)}
          />
        </div>

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
              {items1.map((item, index) => {
                return (
                  <>
                    <Wrap onClick={() => toggle(index)} key={index}>
                      <h1>{item.question}</h1>
                      <span>
                        {clicked === index ? (
                          <HeaderIcon src={minus} alt="minus" />
                        ) : (
                          <HeaderIcon src={add} alt="add" />
                        )}
                      </span>
                    </Wrap>
                    {clicked === index ? (
                      <Dropdown>
                        <p>{item.answer}</p>
                      </Dropdown>
                    ) : null}
                  </>
                );
              })}
            </AccordionWrapper>
            <AccordionWrapper hide={toggleState === 2 ? true : false}>
              {items2.map((item2, index2) => {
                return (
                  <>
                    <Wrap onClick={() => toggle(index2)} key={index2}>
                      <h1>{item2.question}</h1>
                      <span>
                        {clicked === index2 ? (
                          <HeaderIcon src={minus} alt="minus" />
                        ) : (
                          <HeaderIcon src={add} alt="add" />
                        )}
                      </span>
                    </Wrap>
                    {clicked === index2 ? (
                      <Dropdown>
                        <p>{item2.answer}</p>
                      </Dropdown>
                    ) : null}
                  </>
                );
              })}
            </AccordionWrapper>
            <AccordionWrapper hide={toggleState === 3 ? true : false}>
              {items3.map((item3, index3) => {
                return (
                  <>
                    <Wrap onClick={() => toggle(index3)} key={index3}>
                      <h1>{item3.question}</h1>
                      <span>
                        {clicked === index3 ? (
                          <HeaderIcon src={minus} alt="minus" />
                        ) : (
                          <HeaderIcon src={add} alt="add" />
                        )}
                      </span>
                    </Wrap>
                    {clicked === index3 ? (
                      <Dropdown>
                        <p>{item3.answer}</p>
                      </Dropdown>
                    ) : null}
                  </>
                );
              })}
            </AccordionWrapper>
            <GetButton onClick={(handleToggle, playVideo)}>
              <GetButtonIcon>
                <GetButtonImg2 src={White} alt="white" />
              </GetButtonIcon>
              <GetButtonText>
                Get A Sneak Peek Of Our Digital World
              </GetButtonText>
              <GetButtonIcon>
                <GetButtonImg1 src={Play} alt="play" />
              </GetButtonIcon>
            </GetButton>
          </GetColumn>
          <GetColumn2>
            <Form />
          </GetColumn2>
          <GetVideo toggle={isOn}>
            <XIcon onClick={handleToggle} />
            <Video controls ref={vidRef}>
              <Source src={video} type="video/mp4" alt="video" />
            </Video>
          </GetVideo>
        </GetContainer>
        {/* mobile */}
        <GetContainerMob>
          <FormMob />
        </GetContainerMob>
      </GetBackground>
    </>
  );
};

export default ModalGetStarted;
