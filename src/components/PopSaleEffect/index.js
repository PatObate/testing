import React, { useState, useEffect } from "react";
import {
  PopSaleNotif100,
  PopSaleIcon,
  PopSaleImg,
  PopSaleText,
  PopSaleTextBold,
} from "../PopSaleElements";
import ModalGetStarted from "../ModalGetStarted";

import sale from "../../svg/saleicon.svg";
import right from "../../svg/rightbig.svg";

const PopSaleEffect = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const openModal2 = () => {
    setShowModal2((prev) => !prev);
  };

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <ModalGetStarted showModal2={showModal2} setShowModal2={setShowModal2} />
      <PopSaleNotif100 scrollNav={scrollNav} onClick={openModal2}>
        <PopSaleIcon>
          <PopSaleImg src={sale} alt="sale" />
        </PopSaleIcon>
        <PopSaleText>
          <PopSaleTextBold>SALE!</PopSaleTextBold> Save up to AED 1,000 on
          signing up today!
        </PopSaleText>
        <PopSaleIcon>
          <PopSaleImg src={right} alt="right" />
        </PopSaleIcon>
      </PopSaleNotif100>
    </>
  );
};

export default PopSaleEffect;
