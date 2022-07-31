import React, { useState } from "react";
import {
  ButtonWrapper,
  HomeButtonContainer,
  HomeButtonWrapper,
  HomeButtonImg,
  ButtonWrapperGreen,
  ButtonWrapperWhite,
  Btn1,
  BtnGray,
  BtnBlack,
  Btn2,
  BtnText,
  BtnBold,
  Btn3,
  BtnContainer,
  TxtSmall,
  HomeContentWrapper,
  AbsoluteContainer,
  LinkDiv,
} from "./HomeButtonElements";
import pic from "../../svg/GreenFlash.svg";
import chat from "../../svg/chatbutton.svg";

const HomeButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => setIsOn((prev) => !prev);

  return (
    <>
      <HomeButtonContainer toggle={isOn}>
        <AbsoluteContainer>
          <ButtonWrapper onClick={handleToggle}>
            <ButtonWrapperGreen>
              <ButtonWrapperWhite>
                <HomeButtonImg src={pic} toggle={isOn} alt="button logo" />
              </ButtonWrapperWhite>
            </ButtonWrapperGreen>
          </ButtonWrapper>
        </AbsoluteContainer>

        <HomeContentWrapper toggle={isOn}>
          <HomeButtonWrapper>
            <BtnContainer>
              <LinkDiv href="tel:8003733">
                <Btn1>
                  <BtnGray>Talk to an expert</BtnGray>
                  <BtnBlack>Call 800 FREE</BtnBlack>
                </Btn1>
              </LinkDiv>

              <Btn2>
                <HomeButtonImg src={chat} alt="chat logo" />
                <BtnText>
                  <BtnBold>Hello,</BtnBold> how can I help you?
                </BtnText>
              </Btn2>

              <LinkDiv
                href="https://goo.gl/maps/2YFPgMSXByczMdLJA"
                target="_blank"
              >
                <Btn3>
                  <BtnGray>Navigate to </BtnGray>
                  <BtnBlack third="true">Corporate Office</BtnBlack>
                </Btn3>
              </LinkDiv>
            </BtnContainer>
            <TxtSmall>
              Office No. 1006, 10th Floor, Marina Plaza, Dubai, UAE
            </TxtSmall>
          </HomeButtonWrapper>
        </HomeContentWrapper>
      </HomeButtonContainer>
    </>
  );
};

export default HomeButton;
