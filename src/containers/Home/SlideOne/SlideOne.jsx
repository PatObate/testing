import { useEffect, useRef, useState } from "react";
import { gsap, Expo } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import addToRefs from "../../../service/addToRefs";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CardColumn,
  CardColumnPic,
  CardList,
  CardItem,
  CardImg,
  ItemContainer,
  CheckIcon,
  CardImg2,
  CardContainer,
  Platform1Container,
  Platform1Container980,
  PlatformHeader,
  CardMenu,
  CardNav,
  CardSelect,
  CardMobWrapper,
} from "./SlideOneElement";
import {
  ButtonIcon,
  ButtonText,
  StartButton,
  ButtonImg,
  ButtonImg2,
} from "../../../components/ButtonElements";
import Right from "../../../svg/rightsmall.svg";
import DigitalClientImg from "../../../images/client1.png";
import DigitalClientImg2 from "../../../images/client2.png";
import passport from "../../../images/passport.png";
import greyblob from "../../../images/greyblob.png";
import mathstuff from "../../../images/mathstuff.png";
import laptop from "../../../images/laptop.png";

import { AiFillCheckCircle } from "react-icons/ai";

const SlideOne = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const data = [
    {
      id: 1,
      navbar: "Visa we Offer",
      tag1: "2 year Onshore Employment Visa",
      tag2: "Emirates ID",
      tag3: "Work Permit",
      tag4: "Basic Medial Insurance",
      img1: passport,
      img2: greyblob,
    },
    {
      id: 2,
      navbar: "Invoicing Supports",
      tag1: "New Client Registration",
      tag2: "Rapd Fund Transfer",
      tag3: "VAT Filings",
      tag4: "",
      img1: mathstuff,
      img2: greyblob,
    },
    {
      id: 3,
      navbar: "Digital Platform",
      tag1: "Track Your Visa Status",
      tag2: "Raise Invoices & Store them",
      tag3: "Monitor & Track Payments",
      tag4: "Raise Letter Request",
      img1: laptop,
      img2: greyblob,
    },
  ];

  const sectionWrap = useRef(null);
  const panels = useRef([]);
  const navLinks = useRef([]);
  const dotPagination = useRef([]);
  const panelsContainer = useRef(null);
  let page;
  let mql = window.matchMedia("(max-width: 690px)");

  const scrollNav = (e) => {
    e.preventDefault();
    let targetElem = document.querySelector(e.target.getAttribute("href")),
      y = targetElem;

    if (
      targetElem &&
      panelsContainer.current.isSameNode(targetElem.parentElement)
    ) {
      let totalScroll = page.scrollTrigger.end - page.scrollTrigger.start,
        totalMovement = (panels.current.length - 1) * targetElem.offsetWidth;

      y = Math.round(
        page.scrollTrigger.start +
          (targetElem.offsetLeft / totalMovement) * totalScroll
      );
    }

    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: false,
      },
      duration: 0.6,
      ease: Expo.easeInOut,
    });
  };

  const scrollAnimation = () => {
    navLinks.current[0].classList.add("is-active");
    dotPagination.current[0].classList.add("is-active");

    const _numSections = panels.current.length - 1;
    const _snapVal = 1 / _numSections;
    let _lastIndex = 0;

    page = gsap.to(panels.current, {
      xPercent: -100 * (panels.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionWrap.current,
        pin: true,
        start: () => "top 1%",
        scrub: 0.4,
        snap: {
          snapTo: 1 / (panels.current.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => "+=4000",
        // markers:true,
        onUpdate: (self) => {
          const newIndex = Math.round(self.progress / _snapVal);
          if (newIndex !== _lastIndex) {
            navLinks.current[_lastIndex].classList.remove("is-active");
            navLinks.current[newIndex].classList.add("is-active");
            dotPagination.current[_lastIndex].classList.remove("is-active");
            dotPagination.current[newIndex].classList.add("is-active");
            _lastIndex = newIndex;
          }
        },
      },
    });
  };

  useEffect(() => {
    if (window.matchMedia("(max-width: 690px)").matches) {
    } else {
      scrollAnimation();
    }
  }, []);

  return (
    <>
      <Platform1Container ref={sectionWrap}>
        <div className="container">
          <h2 className="title text-center mb-5">
            Our Freelance Platform Provides
          </h2>
          <div ref={panelsContainer} className="slide-wrap d-flex">
            <ul className="navbar_nav d-flex align-items-center">
              {data.map((item) => (
                <li key={item.id} className="nav-item">
                  <a
                    onClick={scrollNav}
                    ref={(el) => addToRefs(el, navLinks)}
                    href={`#slide-one-id-${item.id}`}
                    className="nav-link "
                  >
                    {item.navbar}
                  </a>
                </li>
              ))}
            </ul>
            {data.map((item) => (
              <div
                ref={(el) => addToRefs(el, panels)}
                id={`slide-one-id-${item.id}`}
                className="slide-item px-lg-3 px-2"
                key={item.id}
              >
                <div class="slide-con d-flex align-items-center justify-content-center h1">
                  <CardContainer>
                    <CardColumn>
                      <CardList>
                        <ItemContainer>
                          <CheckIcon>
                            <AiFillCheckCircle style={{ display: "block" }} />
                          </CheckIcon>
                          <CardItem>{item.tag1}</CardItem>
                        </ItemContainer>
                        <ItemContainer>
                          <CheckIcon>
                            <AiFillCheckCircle style={{ display: "block" }} />
                          </CheckIcon>
                          <CardItem>{item.tag2}</CardItem>
                        </ItemContainer>
                        <ItemContainer>
                          <CheckIcon>
                            <AiFillCheckCircle style={{ display: "block" }} />
                          </CheckIcon>
                          <CardItem>{item.tag3}</CardItem>
                        </ItemContainer>
                        <ItemContainer>
                          <CheckIcon>
                            <AiFillCheckCircle style={{ display: "block" }} />
                          </CheckIcon>
                          <CardItem>{item.tag4}</CardItem>
                        </ItemContainer>
                      </CardList>
                      <StartButton secondary="true" low="true">
                        <ButtonIcon secondary="true">
                          <ButtonImg2
                            src={DigitalClientImg}
                            medium="true"
                            small="true"
                          />
                          <ButtonImg
                            src={DigitalClientImg2}
                            medium="true"
                            small="true"
                          />
                        </ButtonIcon>
                        <ButtonText blue="true" medium="true" small="true">
                          Listen To Our Freelancer Story
                        </ButtonText>
                        <ButtonIcon>
                          <ButtonImg src={Right} secondary="true" />
                        </ButtonIcon>
                      </StartButton>
                    </CardColumn>
                    <CardColumnPic>
                      <CardImg src={item.img1} alt="passport drawing image" />
                      <CardImg2 src={item.img2} alt="blob" />
                    </CardColumnPic>
                  </CardContainer>
                </div>
              </div>
            ))}
          </div>
          <ul className="dot-pagination text-center mt-5">
            {data.map((item) => (
              <li key={item.id}>
                <a
                  onClick={scrollNav}
                  ref={(el) => addToRefs(el, dotPagination)}
                  href={`#slide-one-id-${item.id}`}
                ></a>
              </li>
            ))}
          </ul>
        </div>
      </Platform1Container>

      {/* Mobile */}
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
              <CardImg src={passport} alt="passport drawing image" />
              <CardImg2 src={greyblob} alt="blob" />
            </CardColumnPic>
            <CardColumn>
              <ItemContainer>
                <CheckIcon>
                  <AiFillCheckCircle style={{ display: "block" }} />
                </CheckIcon>
                <CardItem>2 year OnShore Employment Visa</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CheckIcon>
                  <AiFillCheckCircle style={{ display: "block" }} />
                </CheckIcon>
                <CardItem>Emirates ID</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CheckIcon>
                  <AiFillCheckCircle style={{ display: "block" }} />
                </CheckIcon>
                <CardItem>Work Permit</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CheckIcon>
                  <AiFillCheckCircle style={{ display: "block" }} />
                </CheckIcon>
                <CardItem> Basic Medical Insurance</CardItem>
              </ItemContainer>
            </CardColumn>
            <StartButton secondary="true" low="true">
              <ButtonIcon secondary="true">
                <ButtonImg2 src={DigitalClientImg} medium="true" small="true" />
                <ButtonImg src={DigitalClientImg2} medium="true" small="true" />
              </ButtonIcon>
              <ButtonText blue="true" medium="true" small="true">
                Our Freelancer Story
              </ButtonText>
              <ButtonIcon>
                <ButtonImg src={Right} secondary="true" />
              </ButtonIcon>
            </StartButton>
          </CardMobWrapper>
          <CardMobWrapper hide={toggleState === 2 ? true : false}>
            <CardColumnPic>
              <CardImg src={mathstuff} alt="passport drawing image" />
              <CardImg2 src={greyblob} alt="blob" />
            </CardColumnPic>
            <CardColumn>
              <ItemContainer>
                <CheckIcon>
                  <AiFillCheckCircle style={{ display: "block" }} />
                </CheckIcon>
                <CardItem>New Client Registration</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CheckIcon>
                  <AiFillCheckCircle style={{ display: "block" }} />
                </CheckIcon>
                <CardItem>Rapd Fund Transfer</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CheckIcon>
                  <AiFillCheckCircle style={{ display: "block" }} />
                </CheckIcon>
                <CardItem>VAT Filings</CardItem>
              </ItemContainer>
            </CardColumn>
            <StartButton secondary="true" low="true">
              <ButtonIcon secondary="true">
                <ButtonImg2 src={DigitalClientImg} medium="true" small="true" />
                <ButtonImg src={DigitalClientImg2} medium="true" small="true" />
              </ButtonIcon>
              <ButtonText blue="true" medium="true" small="true">
                Our Freelancer Story
              </ButtonText>
              <ButtonIcon>
                <ButtonImg src={Right} secondary="true" />
              </ButtonIcon>
            </StartButton>
          </CardMobWrapper>
          <CardMobWrapper hide={toggleState === 3 ? true : false}>
            <CardColumnPic>
              <CardImg src={laptop} alt="passport drawing image" />
              <CardImg2 src={greyblob} alt="blob" />
            </CardColumnPic>
            <CardColumn>
              <ItemContainer>
                <CheckIcon>
                  <AiFillCheckCircle style={{ display: "block" }} />
                </CheckIcon>
                <CardItem>Track your Visa Status</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CheckIcon>
                  <AiFillCheckCircle style={{ display: "block" }} />
                </CheckIcon>
                <CardItem>Raise Invoices & Store them</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CheckIcon>
                  <AiFillCheckCircle style={{ display: "block" }} />
                </CheckIcon>
                <CardItem>Monitor & Track Payments</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CheckIcon>
                  <AiFillCheckCircle style={{ display: "block" }} />
                </CheckIcon>
                <CardItem>Raise Letter Request</CardItem>
              </ItemContainer>
              <ItemContainer>
                <CheckIcon>
                  <AiFillCheckCircle style={{ display: "block" }} />
                </CheckIcon>
                <CardItem>Track Old & New Clients</CardItem>
              </ItemContainer>
            </CardColumn>
            <StartButton secondary="true" low="true">
              <ButtonIcon secondary="true">
                <ButtonImg2 src={DigitalClientImg} medium="true" small="true" />
                <ButtonImg src={DigitalClientImg2} medium="true" small="true" />
              </ButtonIcon>
              <ButtonText blue="true" medium="true" small="true">
                Our Freelancer Story
              </ButtonText>
              <ButtonIcon>
                <ButtonImg src={Right} secondary="true" />
              </ButtonIcon>
            </StartButton>
          </CardMobWrapper>
        </CardContainer>
      </Platform1Container980>
    </>
  );
};

export default SlideOne;
