import React from "react";
import FAQsection from "../containers/FAQ";
import { FAQOne } from "../containers/FAQ/Data";

const FAQ = () => {
  return (
    <>
      <FAQsection {...FAQOne} />
    </>
  );
};

export default FAQ;
