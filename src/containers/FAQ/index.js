import React, { useState } from "react";
import { items1, items2, items3 } from "./Data";
import add from "../../svg/blueplus.svg";
import minus from "../../svg/minuscircle.svg";
import {
  FAQContainer,
  FAQHeader,
  FAQContent,
  FAQRow,
  FAQRow2,
  FAQNav,
  FAQItem,
  FAQMenu,
  AccordionWrapper,
  AccordionContainerMob,
  Wrap,
  Dropdown,
  HeaderIcon,
} from "./FAQelements";

const FAQsection = ({ header, menu1, menu2, menu3, highlight }) => {
  const [toggleState, setToggleState] = useState(1);
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <FAQContainer id="/faq">
        <FAQHeader>{header}</FAQHeader>
        <FAQContent>
          <FAQRow>
            <FAQNav>
              <FAQItem onClick={() => toggleTab(1)}>
                <FAQMenu highlight={toggleState === 1 ? true : false}>
                  {menu1}
                </FAQMenu>
              </FAQItem>
              <FAQItem onClick={() => toggleTab(2)}>
                <FAQMenu highlight={toggleState === 2 ? true : false}>
                  {menu2}
                </FAQMenu>
              </FAQItem>
              <FAQItem onClick={() => toggleTab(3)}>
                <FAQMenu highlight={toggleState === 3 ? true : false}>
                  {menu3}
                </FAQMenu>
              </FAQItem>
            </FAQNav>
          </FAQRow>
          <FAQRow2>
            <AccordionContainerMob>
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
            </AccordionContainerMob>
          </FAQRow2>
        </FAQContent>
      </FAQContainer>
    </>
  );
};

export default FAQsection;
