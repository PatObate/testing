import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  ClientCard1,
  ClientCard2,
  ClientCard3,
  ClientCard4,
  ClientRow,
  ClientCardName,
  ClientCardOcc,
  ClientCardRate,
  ClientStar,
  ClientImg,
  ClientStarContainer,
  ClientColumn2,
} from "../../../components/ClientCards/CardsElements";

import { animateScroll as scroll } from "react-scroll";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ClientContainer,
  ClientContent,
  ClientHeader,
  ClientButton,
  ClientColumn,
  MClientContainer,
  MClientContent,
  CardWrapper,
} from "./ClientElements";

import {
  MCardHeader,
  MCardImg,
  MCardP,
  MCardName,
  MCardJob,
  MCardStarContainer,
  MCardStar,
} from "../../../components/MClientElements";

import img from "../../../images/younggirlsmall.png";

import { AiFillStar } from "react-icons/ai";
import HorizontalCard2 from "../../../components/ClientCards/HorizontalCard2";
import VerticalCard3 from "../../../components/ClientCards/VercialCard3";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Card";

const ClientSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [data] = useState(Cards);

  const handleToggle = () => setIsOn((prev) => !prev);

  gsap.registerPlugin(ScrollTrigger);

  const openMore = () => {
    setShowMore((prev) => !prev);
  };

  const useToggle = (initialState = false) => {
    // Initialize the state
    const [state, setState] = useState(initialState);

    // Define and memorize toggler function in case we pass down the component,
    // This function change the boolean value to it's opposite value
    const toggle = useCallback(() => setState((state) => !state), []);

    return [state, toggle];
  };

  useEffect(() => {
    window.addEventListener("click", useToggle);
  });

  const [isTextChanged, setIsTextChanged] = useToggle();

  const cardRef = useRef();
  const cardRef2 = useRef();
  const cardRef3 = useRef();

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.1,
      scrollTrigger: {
        trigger: cardRef.current,
      },
    });
    gsap.to(cardRef.current, {
      duration: 1,
      opacity: 1,
      delay: 0.1,
      scrollTrigger: {
        trigger: cardRef.current,
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(cardRef2.current, {
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: cardRef2.current,
      },
    });
    gsap.to(cardRef2.current, {
      duration: 1,
      opacity: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: cardRef2.current,
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(cardRef3.current, {
      opacity: 0,
      duration: 1,
      delay: 0.6,
      scrollTrigger: {
        trigger: cardRef3.current,
      },
    });
    gsap.to(cardRef3.current, {
      duration: 1,
      opacity: 1,
      delay: 0.6,
      scrollTrigger: {
        trigger: cardRef3.current,
      },
    });
  }, []);

  const toggleScroll = () => {
    scroll.scrollMore(120);
  };

  return (
    <>
      <ClientContainer id="client">
        <ClientHeader>Our Happy Clients</ClientHeader>

        <ClientContent scrollNav={isOn}>
          <ClientColumn ref={cardRef}>
            <ClientCard1>
              <ClientCardRate>
                “Dynamic Freelancer is a true Professional and master of its
                craft.”
              </ClientCardRate>
              <ClientCardName>Istiak Ahmed</ClientCardName>
              <ClientCardOcc>CEO, Avito</ClientCardOcc>
              <ClientStarContainer>
                <ClientStar>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </ClientStar>
              </ClientStarContainer>
            </ClientCard1>
            <VerticalCard3 showMore={showMore} setShowMore={setShowMore} />
          </ClientColumn>
          <ClientColumn ref={cardRef2}>
            <ClientCard3>
              <ClientCardRate>
                “Easy to work with. Process is clear, the team is very
                supportive and takes time to answer all questions along the way.
                Highly recommended !”
              </ClientCardRate>
              <ClientCardName>Aurelien BARREAU</ClientCardName>
              <ClientCardOcc>Artist, Oxylex</ClientCardOcc>
              <ClientStarContainer>
                <ClientStar>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </ClientStar>
              </ClientStarContainer>
            </ClientCard3>
            <ClientCard4>
              <ClientRow display="true">
                <ClientColumn2>
                  <ClientImg src={img} alt="young girl picture small" />
                </ClientColumn2>
                <ClientColumn2>
                  <ClientCardName>Aurelien </ClientCardName>
                  <ClientCardOcc>Artist, Oxylex</ClientCardOcc>
                  <ClientStarContainer>
                    <ClientStar>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </ClientStar>
                  </ClientStarContainer>
                </ClientColumn2>
              </ClientRow>
              <ClientRow>
                <ClientCardRate>
                  “Easy to work with. Process is clear, the team is very
                  supportive and takes time to answer all questions along the
                  way. Highly recommended !”
                </ClientCardRate>
              </ClientRow>
            </ClientCard4>
            <HorizontalCard2
              showMore={showMore}
              setShowMore={setShowMore}
              id="card"
            />
          </ClientColumn>
          <ClientColumn ref={cardRef3}>
            <ClientCard2>
              <ClientCardRate>
                “Amazing service ! 5 stars is not enough. Definitely the best HR
                company in Dubai. Highly recommend Dynamic Freelancer Thank you
                guys !”
              </ClientCardRate>
              <ClientCardName>Igor Plecas</ClientCardName>
              <ClientCardOcc>Photographer, XCamera</ClientCardOcc>
              <ClientStarContainer>
                <ClientStar>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </ClientStar>
              </ClientStarContainer>
            </ClientCard2>
            <VerticalCard3 showMore={showMore} setShowMore={setShowMore} />
          </ClientColumn>
        </ClientContent>
        <ClientButton
          onClick={() => {
            handleToggle();
            openMore();
            setIsTextChanged();
            toggleScroll();
          }}
        >
          {isTextChanged ? "Show Less" : "Show More"}
        </ClientButton>
      </ClientContainer>

      {/* mobile */}
      <MClientContainer>
        <MClientContent>
          <Slider {...settings}>
            {data.map((values) => {
              const { id, img, header, p, name, job } = values;
              return (
                <>
                  <CardWrapper key={id}>
                    <MCardHeader>{header}</MCardHeader>
                    <MCardImg src={img} />
                    <MCardP>{p}</MCardP>
                    <MCardName>{name}</MCardName>
                    <MCardJob>{job}</MCardJob>
                    <MCardStarContainer>
                      <MCardStar>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </MCardStar>
                    </MCardStarContainer>
                  </CardWrapper>
                </>
              );
            })}
          </Slider>
        </MClientContent>
        <div class="custom-shape-divider-bottom-1654770189">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </MClientContainer>
    </>
  );
};

export default ClientSection;
