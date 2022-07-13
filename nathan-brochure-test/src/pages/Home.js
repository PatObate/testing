import React, { useEffect, useState } from "react";
import HeroSection from "../containers/HeroSection";
import Loading from "../components/Loading";
import { HeroData } from "../containers/HeroSection/data";

const Home = () => {
  const [preloader, setPreloader] = useState(true);
  const [preloader2, setPreloader2] = useState(true);

  useEffect(() => {
    setPreloader(true);
    setTimeout(() => {
      setPreloader(false);
    }, 6000);
  }, []);

  useEffect(() => {
    setPreloader2(true);
    setTimeout(() => {
      setPreloader2(false);
    }, 9000);
  }, []);
  return (
    <>
      <div>
        <Loading preloader={preloader} preloader2={preloader2} />
        <HeroSection {...HeroData} />
      </div>
    </>
  );
};

export default Home;
