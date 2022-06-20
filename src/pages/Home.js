import React, { useState } from "react";

import ClientSection from "../containers/Home/ClientSection";
import HeroSection from "../containers/Home/HeroSection";
import HowSection from "../containers/Home/HowSection";
import PlansSection from "../containers/Home/PlansSection";
import ConnectSection from "../containers/Home/ConnectSection";
import CommunitySection from "../containers/Home/CommunitySection";
import Sidebar from "../components/Sidebar";
import NavbarHome from "../components/NavbarHome";
import ModalGetStarted from "../components/ModalGetStarted";
import SlideOne from "../containers/Home/SlideOne/SlideOne";
import SlideTwo from "../containers/Home/SlideTwo/SlideTwo";
import HomeButton from "../components/HomeButton";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const openModal2 = () => {
    setShowModal2((prev) => !prev);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <HomeButton />
      <ModalGetStarted showModal2={showModal2} setShowModal2={setShowModal2} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarHome toggle={toggle} />
      <HeroSection toggleModal={openModal2} />
      <ClientSection />
      <SlideOne />
      <SlideTwo />
      <HowSection />
      <PlansSection toggleModal={openModal2} />
      <CommunitySection toggleModal={openModal2} />
      <ConnectSection />
    </>
  );
};

export default Home;
