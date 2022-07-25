import React, { useState } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Intro from "./pages/Intro";
import { AnimatePresence } from "framer-motion";
import Support from "./pages/Support";
import Special from "./pages/Special";
import Menu from "./pages/Menu";
import Peo from "./pages/Peo";
import HrOut from "./pages/HrOutsourcing";
import StaffingServices from "./pages/StaffingServices";
import HrTechnology from "./pages/HrTechnology";
import RemoteWorkforce from "./pages/RemoteWorkforce";
import ExpertConsolting from "./pages/ExpertConsulting";
import { Cursor } from "./css";
import Loading from "./pages/Loading";
import Hamburger from "./components/Hamburger";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Client from "./pages/Client";
import Sidebar from "./components/Sidebar";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Cursor
        innerSize={10}
        outerSize={10}
        color="244, 244, 244"
        outerAlpha={0.2}
        innerScale={2}
        outerScale={9}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Hamburger toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Intro />} />
          <Route path="/intro" element={<Loading />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/special" element={<Special />} />
          <Route path="/client" element={<Client />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/poeandeor" element={<Peo />} />
          <Route path="/hroutsourcing" element={<HrOut />} />
          <Route path="/staffingservices" element={<StaffingServices />} />
          <Route path="/hrtechnology" element={<HrTechnology />} />
          <Route path="/remoteworkforce" element={<RemoteWorkforce />} />
          <Route path="/expertconsulting" element={<ExpertConsolting />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
