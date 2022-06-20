import React, { useState } from "react";
import Accordion from "../../components/Accordion";
import {
  items,
  items2,
  items3,
  items4,
  items5,
  items6,
  items7,
  items8,
  twoItems,
  twoItems2,
  twoItems3,
  twoItems4,
  twoItems5,
  twoItems6,
  twoItems7,
  twoItems8,
  threeItems,
  threeItems2,
  threeItems3,
  threeItems4,
  threeItems5,
  threeItems6,
  threeItems7,
  threeItems8,
} from "./Data";
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
} from "./FAQelements";

const FAQsection = ({ header, menu1, menu2, menu3, highlight }) => {
  const [toggleState, setToggleState] = useState(1);

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
            <AccordionWrapper hide={toggleState === 1 ? true : false}>
              <Accordion items={items} />
              <Accordion items={items2} />
              <Accordion items={items3} />
              <Accordion items={items4} />
              <Accordion items={items5} />
              <Accordion items={items6} />
              <Accordion items={items7} />
              <Accordion items={items8} />
            </AccordionWrapper>
            <AccordionWrapper hide={toggleState === 2 ? true : false}>
              <Accordion items={twoItems} />
              <Accordion items={twoItems2} />
              <Accordion items={twoItems3} />
              <Accordion items={twoItems4} />
              <Accordion items={twoItems5} />
              <Accordion items={twoItems6} />
              <Accordion items={twoItems7} />
              <Accordion items={twoItems8} />
            </AccordionWrapper>
            <AccordionWrapper hide={toggleState === 3 ? true : false}>
              <Accordion items={threeItems} />
              <Accordion items={threeItems2} />
              <Accordion items={threeItems3} />
              <Accordion items={threeItems4} />
              <Accordion items={threeItems5} />
              <Accordion items={threeItems6} />
              <Accordion items={threeItems7} />
              <Accordion items={threeItems8} />
            </AccordionWrapper>
          </FAQRow2>
        </FAQContent>
      </FAQContainer>
    </>
  );
};

export default FAQsection;
