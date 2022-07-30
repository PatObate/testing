import React, { useState,  } from "react";

import HeroSection from "../containers/Home/HeroSection";
import HowSection from "../containers/Home/HowSection";
import PlansSection from "../containers/Home/PlansSection";
import ConnectSection from "../containers/Home/ConnectSection";
import CommunitySection from "../containers/Home/CommunitySection";
import Sidebar from "../components/Sidebar";
import NavbarHome from "../components/NavbarHome";
import ModalGetStarted from "../components/ModalGetStarted";
import SlideTwo from "../containers/Home/SlideTwo/SlideTwo";
import HomeButton from "../components/HomeButton";
import ModalVideo from "../components/ModalVideo";
import ClientSection from "../containers/Home/ClientSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const openModal2 = () => {
    setShowModal2((prev) => !prev);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <HomeButton />
        <ModalGetStarted
          showModal2={showModal2}
          setShowModal2={setShowModal2}
        />
        <ModalVideo showModal={showModal} setShowModal={setShowModal} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavbarHome toggle={toggle} />
        <HeroSection toggleModal={openModal2} toggleModal2={openModal} />
        <ClientSection toggleModal2={openModal} />
        <SlideTwo />
        <HowSection />
        <PlansSection toggleModal={openModal2} />
        <CommunitySection toggleModal={openModal2} />
        <ConnectSection />
      </div>
    </>
  );
};

export default Home;
