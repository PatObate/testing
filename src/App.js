import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
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
import PoeExplore from "./pages/PoeExplore";
import HrOutExplore from "./pages/HrOutExplore";
import StaffingServExplore from "./pages/StaffingServExplore";
import HrTechExplore from "./pages/HrTechExplore";
import RemoteWorkExplore from "./pages/RemoteWorkExplore";
import ExpertConstExplore from "./pages/ExpertConstExplore";
import { Cursor } from "./css";

function App() {
  const location = useLocation();

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
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Intro />} />
          <Route path="/landing" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/special" element={<Special />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/poeandeor" element={<Peo />} />
          <Route path="/hroutsourcing" element={<HrOut />} />
          <Route path="/staffingservices" element={<StaffingServices />} />
          <Route path="/hrtechnology" element={<HrTechnology />} />
          <Route path="/remoteworkforce" element={<RemoteWorkforce />} />
          <Route path="/expertconsulting" element={<ExpertConsolting />} />
          <Route path="/poeandeor/explore" element={<PoeExplore />} />
          <Route path="/hroutsourcing/explore" element={<HrOutExplore />} />
          <Route
            path="/staffingservices/explore"
            element={<StaffingServExplore />}
          />
          <Route path="/hrtechnology/explore" element={<HrTechExplore />} />
          <Route
            path="/remoteworkforce/explore"
            element={<RemoteWorkExplore />}
          />
          <Route
            path="/expertconsulting/explore"
            element={<ExpertConstExplore />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
