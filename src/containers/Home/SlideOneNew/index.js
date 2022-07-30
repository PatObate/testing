import React, { useState } from "react";
import Play from "../../../svg/yellowplaybutton.svg";
import {
  ButtonIcon,
  ButtonText,
  StartButton,
  ButtonImg,
  ButtonImg2,
} from "../../../components/ButtonElements";
import {
  CardColumn,
  CardColumnPic,
  CardContainer,
  CardImg,
  CardImg2,
  CardItem,
  CardList,
  CardMenu,
  CardMobWrapper,
  CardNav,
  ContainerDiv,
  ItemContainer,
  Platform1Container,
  Platform1Container980,
  PlatformHeader,
} from "./PlatformElements";
import DigitalClientImg from "../../../images/client1.png";
import DigitalClientImg2 from "../../../images/client2.png";

// to remove
import Right from "../../../svg/rightsmall.svg";
import passport from "../../../images/passport.png";
import greyblob from "../../../images/greyblob.png";
import mathstuff from "../../../images/mathstuff.png";
import laptop from "../../../images/laptop.png";

const SlideOne = ({ toggleModal2 }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <Platform1Container>
        <PlatformHeader>Our Freelance Platform Provides</PlatformHeader>
        <CardContainer>
          <CardMenu>
            <CardNav
              onClick={() => toggleTab(1)}
              highlight={toggleState === 1 ? true : false}
            >
              Visa
            </CardNav>
            <CardNav
              onClick={() => toggleTab(2)}
              highlight={toggleState === 2 ? true : false}
            >
              Invoicing
            </CardNav>
            <CardNav
              onClick={() => toggleTab(3)}
              highlight={toggleState === 3 ? true : false}
            >
              Platform
            </CardNav>
          </CardMenu>

          <ContainerDiv hide={toggleState === 1 ? true : false}>
            <CardColumn>
              <CardList>
                <ItemContainer>
                  <CardItem>• 2 year Onshore Employment Visa</CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem>• Emirates ID</CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem>• Work Permit</CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem></CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem></CardItem>
                </ItemContainer>
              </CardList>
              <StartButton secondary="true" low="true" onClick={toggleModal2}>
                <ButtonIcon secondary="true">
                  <ButtonImg2
                    src={DigitalClientImg}
                    medium="true"
                    small="true"
                    alt="client img"
                  />
                  <ButtonImg
                    src={DigitalClientImg2}
                    medium="true"
                    small="true"
                    alt="client img"
                  />
                </ButtonIcon>
                <ButtonText blue="true" medium="true" small="true">
                  Listen To Our Freelancer Story
                </ButtonText>
                <ButtonIcon>
                  <ButtonImg src={Right} secondary="true" alt="client img" />
                </ButtonIcon>
              </StartButton>
            </CardColumn>
            <CardColumnPic>
              <CardImg src={passport} alt="drawing image" />
              <CardImg2 src={greyblob} alt="blob" />
            </CardColumnPic>
          </ContainerDiv>
          <ContainerDiv hide={toggleState === 2 ? true : false}>
            <CardColumn>
              <CardList>
                <ItemContainer>
                  <CardItem>• New Client Registration</CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem>• Rapd Fund Transfer</CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem>• VAT Filings</CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem></CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem></CardItem>
                </ItemContainer>
              </CardList>
              <StartButton secondary="true" low="true" onClick={toggleModal2}>
                <ButtonIcon secondary="true">
                  <ButtonImg2
                    src={DigitalClientImg}
                    medium="true"
                    small="true"
                    alt="client img"
                  />
                  <ButtonImg
                    src={DigitalClientImg2}
                    medium="true"
                    small="true"
                    alt="client img"
                  />
                </ButtonIcon>
                <ButtonText blue="true" medium="true" small="true">
                  Listen To Our Freelancer Story
                </ButtonText>
                <ButtonIcon>
                  <ButtonImg src={Right} secondary="true" alt="client img" />
                </ButtonIcon>
              </StartButton>
            </CardColumn>
            <CardColumnPic>
              <CardImg src={mathstuff} alt="drawing image" />
              <CardImg2 src={greyblob} alt="blob" />
            </CardColumnPic>
          </ContainerDiv>
          <ContainerDiv hide={toggleState === 3 ? true : false}>
            <CardColumn>
              <CardList>
                <ItemContainer>
                  <CardItem>• Track Your Visa Status</CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem>• Raise Invoices & Store them</CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem>• Monitor & Track Payments</CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem>• Raise Letter Request</CardItem>
                </ItemContainer>
                <ItemContainer>
                  <CardItem>• Track Old & New Clients</CardItem>
                </ItemContainer>
              </CardList>
              <StartButton secondary="true" low="true" onClick={toggleModal2}>
                <ButtonIcon secondary="true" none="true">
                  <ButtonImg2
                    src={DigitalClientImg}
                    medium="true"
                    small="true"
                    alt="client img"
                  />
                  <ButtonImg
                    src={DigitalClientImg2}
                    medium="true"
                    small="true"
                    alt="client img"
                  />
                </ButtonIcon>
                <ButtonText blue="true" medium="true" small="true">
                  Get A Sneak Peek Of Our Digital World
                </ButtonText>
                <ButtonIcon>
                  <ButtonImg src={Play} alt="client img" />
                </ButtonIcon>
              </StartButton>
            </CardColumn>
            <CardColumnPic>
              <CardImg src={laptop} alt="drawing image" />
              <CardImg2 src={greyblob} alt="blob" />
            </CardColumnPic>
          </ContainerDiv>
        </CardContainer>
      </Platform1Container>

      <Platform1Container980>
        <PlatformHeader>Our Freelance Platform Provides</PlatformHeader>
        <CardContainer>
          <CardMenu>
            <CardNav
              onClick={() => toggleTab(1)}
              highlight={toggleState === 1 ? true : false}
            >
              Visa
            </CardNav>
            <CardNav
              onClick={() => toggleTab(2)}
              highlight={toggleState === 2 ? true : false}
            >
              Invoicing
            </CardNav>
            <CardNav
              onClick={() => toggleTab(3)}
              highlight={toggleState === 3 ? true : false}
            >
              Platform
            </CardNav>
          </CardMenu>
          <CardMobWrapper hide={toggleState === 1 ? true : false}>
            <CardColumnPic>
              <CardImg src={passport} alt="drawing image" />
              <CardImg2 src={greyblob} alt="blob" />
            </CardColumnPic>
            <CardColumn>
              <ItemContainer>
                <CardItem>• 2 year OnShore Employment Visa</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>• Emirates ID</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>• Work Permit</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>• Basic Medical Insurance</CardItem>
              </ItemContainer>
            </CardColumn>
            <StartButton secondary="true" low="true" onClick={toggleModal2}>
              <ButtonIcon secondary="true">
                <ButtonImg2
                  src={DigitalClientImg}
                  medium="true"
                  small="true"
                  alt="client img"
                />
                <ButtonImg
                  src={DigitalClientImg2}
                  medium="true"
                  small="true"
                  alt="client img"
                />
              </ButtonIcon>
              <ButtonText blue="true" medium="true" small="true">
                Our Freelancer Story
              </ButtonText>
              <ButtonIcon>
                <ButtonImg src={Right} secondary="true" alt="client img" />
              </ButtonIcon>
            </StartButton>
          </CardMobWrapper>
          <CardMobWrapper hide={toggleState === 2 ? true : false}>
            <CardColumnPic>
              <CardImg src={mathstuff} alt="drawing image" />
              <CardImg2 src={greyblob} alt="blob" />
            </CardColumnPic>
            <CardColumn>
              <ItemContainer>
                <CardItem>• New Client Registration</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>• Rapd Fund Transfer</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>• VAT Filings</CardItem>
              </ItemContainer>
            </CardColumn>
            <StartButton secondary="true" low="true" onClick={toggleModal2}>
              <ButtonIcon secondary="true">
                <ButtonImg2
                  src={DigitalClientImg}
                  medium="true"
                  small="true"
                  alt="client img"
                />
                <ButtonImg
                  src={DigitalClientImg2}
                  medium="true"
                  small="true"
                  alt="client img"
                />
              </ButtonIcon>
              <ButtonText blue="true" medium="true" small="true">
                Our Freelancer Story
              </ButtonText>
              <ButtonIcon>
                <ButtonImg src={Right} secondary="true" alt="client img" />
              </ButtonIcon>
            </StartButton>
          </CardMobWrapper>
          <CardMobWrapper hide={toggleState === 3 ? true : false}>
            <CardColumnPic>
              <CardImg src={laptop} alt="drawing image" />
              <CardImg2 src={greyblob} alt="blob" />
            </CardColumnPic>
            <CardColumn>
              <ItemContainer>
                <CardItem>• Track your Visa Status</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>• Raise Invoices & Store them</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>• Monitor & Track Payments</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>• Raise Letter Request</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CardItem>• Track Old & New Clients</CardItem>
              </ItemContainer>
            </CardColumn>
            <StartButton secondary="true" low="true" onClick={toggleModal2}>
              <ButtonIcon secondary="true">
                <ButtonImg2
                  src={DigitalClientImg}
                  medium="true"
                  small="true"
                  alt="client img"
                />
                <ButtonImg
                  src={DigitalClientImg2}
                  medium="true"
                  small="true"
                  alt="client img"
                />
              </ButtonIcon>
              <ButtonText blue="true" medium="true" small="true">
                Our Freelancer Story
              </ButtonText>
              <ButtonIcon>
                <ButtonImg src={Right} secondary="true" alt="client img" />
              </ButtonIcon>
            </StartButton>
          </CardMobWrapper>
        </CardContainer>
      </Platform1Container980>
    </>
  );
};

export default SlideOne;
