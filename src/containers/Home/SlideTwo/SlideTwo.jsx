import { useEffect, useRef } from "react";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import addToRefs from "../../../service/addToRefs";
import {
  CardColumn1,
  CardColumn2,
  CardContainer,
  CardHeader,
  CardImg,
  CardP,
  CardWrapper,
  Platform2Column,
  Platform2Column2,
  Platform2Container,
  Platform2Container980,
  Platform2Content,
  PlatformHeader,
  PlatformImg,
} from "./Platform2Elements";
import pinkgirl from "../../../images/pink woman.png";
import pinkgirl2 from "../../../images/pinkgirlmobile.png";
import documentimg from "../../../images/documentimg.png";
import macsymbols from "../../../images/macsymbols.png";
import umbrella from "../../../images/umbrella.png";
import creditcard from "../../../images/creditcard.png";

const SlideTwo = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const data = [
    {
      id: 1,
      img: documentimg,
      title: "Freedom and Flexibility",
      p: "With a Freelance visa, create your own schedule and be in control of how much or how little time you want to dedicate to each project. Be your own boss!",
    },
    {
      id: 2,
      img: macsymbols,
      title: "Access to Freelancer Hub",
      p: "Get unlimited access to Freelancer Hub- UAE’s largest freelance community where we connect top talent to businesses across the UAE. Become the first to hear about ongoing opportunities and increase your odds of finding the most suitable role across industries",
    },
    {
      id: 3,
      img: macsymbols,
      title: "All-in-one Digital Platform",
      p: "Raise Invocies, track your payments, manage your client contracts, request for letters - all through our unique digital portal.",
    },
    {
      id: 4,
      img: umbrella,
      title: "Upgradeable Medical Insurance",
      p: "Eliminate higher premiums, extra costs and lack of support. We offer upgrades to the medical insurance under our Group policy.",
    },
    {
      id: 5,
      img: creditcard,
      title: "Exclusive Rewards Program",
      p: "Freelancers on our platform get exclusive access to discounts and offers across various lifestyle and leisure outlets.",
    },
  ];

  const sectionWrap = useRef(null);
  const panels = useRef([]);
  const dotPagination = useRef([]);
  const panelsContainer = useRef(null);

  function scrollAnimation() {
    const _numSections = panels.current.length - 1;
    const _snapVal = 1 / _numSections;
    let _lastIndex = 0;
    ScrollTrigger.matchMedia({
      "(min-width: 981px)": function () {
        gsap.to(panels.current, {
          yPercent: -100 * (panels.current.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: sectionWrap.current,
            pin: true,
            start: () => "top 1%",
            scrub: 1,
            snap: {
              snapTo: 1 / (panels.current.length - 1),
              inertia: false,
              duration: { min: 0.1, max: 0.1 },
            },
            end: () => "+=3000",
            // markers:true,
            onUpdate: (self) => {
              const newIndex = Math.round(self.progress / _snapVal);
              if (newIndex !== _lastIndex) {
                dotPagination.current[_lastIndex].classList.remove("is-active");
                dotPagination.current[newIndex].classList.add("is-active");
                _lastIndex = newIndex;
              }
            },
          },
        });
      },
    });
  }

  useEffect(() => {
    scrollAnimation();
  }, []);

  return (
    <>
      <div ref={sectionWrap}>
        {" "}
        <Platform2Container>
          <Platform2Content>
            <Platform2Column>
              <PlatformHeader>
                Get Started with the most comprehensive freelance platform in
                the UAE
              </PlatformHeader>
              <PlatformImg src={pinkgirl} alt="pink woman img" />
            </Platform2Column>
            <Platform2Column2>
              <div className="rightmargin">
                <div className="slide-two-col">
                  <div className="slide-2-wrap" ref={panelsContainer}>
                    {data.map((item) => (
                      <div
                        ref={(el) => addToRefs(el, panels)}
                        id={`slide-two-id-${item.id}`}
                        key={item.id}
                        className="py-1 slide-item"
                      >
                        <div className="sc h-100 w-100 h1 d-flex align-items-center justify-content-center">
                          <CardContainer>
                            <CardColumn1>
                              <CardImg src={item.img} alt="document art img" />
                            </CardColumn1>
                            <CardColumn2>
                              <CardHeader>{item.title}</CardHeader>
                              <CardP>{item.p}</CardP>
                            </CardColumn2>
                          </CardContainer>
                        </div>
                      </div>
                    ))}
                  </div>
                  <ul className="dot-pagination text-center mt-4 mt-lg-0">
                    {data.map((item) => (
                      <li className="d-lg-block" key={item.id}>
                        <a
                          ref={(el) => addToRefs(el, dotPagination)}
                          href={`#slide-two-id-${item.id}`}
                        ></a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Platform2Column2>
          </Platform2Content>
        </Platform2Container>
        {/* mobile */}
        <Platform2Container980>
          <Platform2Content>
            <PlatformHeader>
              Get Started with the most comprehensive freelance platform in the
              UAE
            </PlatformHeader>
            <PlatformImg src={pinkgirl2} alt="pink girl" />

            <CardContainer>
              <CardWrapper>
                <CardColumn1>
                  <CardImg src={documentimg} alt="document art img" />
                </CardColumn1>
                <CardColumn2>
                  <CardHeader>Freedom and Flexibility</CardHeader>
                </CardColumn2>
              </CardWrapper>
              <CardWrapper>
                <CardColumn1>
                  <CardImg src={macsymbols} alt="document art img" />
                </CardColumn1>
                <CardColumn2>
                  <CardHeader>All-in-one Digital Platform</CardHeader>
                </CardColumn2>
              </CardWrapper>
              <CardWrapper>
                <CardColumn1>
                  <CardImg src={umbrella} alt="document art img" />
                </CardColumn1>
                <CardColumn2>
                  <CardHeader>Upgradeable Medical Insurance</CardHeader>
                </CardColumn2>
              </CardWrapper>
              <CardWrapper secondary="true">
                <CardColumn1>
                  <CardImg src={creditcard} alt="document art img" />
                </CardColumn1>
                <CardColumn2>
                  <CardHeader>Exclusive Rewards Program</CardHeader>
                </CardColumn2>
              </CardWrapper>
            </CardContainer>
          </Platform2Content>
        </Platform2Container980>
      </div>
    </>
  );
};

export default SlideTwo;
