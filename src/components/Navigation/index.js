import React, { useState } from "react";
import circle from "../../lotties/circle.json";
import {
  Circle,
  MenuNav,
  MenuNavWrapper,
  MenuSub1,
  MenuSub2,
  MenuSub3,
  MenuSub4,
  MenuSub5,
  MenuSub6,
  NavImg,
  NavImg2,
  NavImg3,
  NavImg4,
  NavImg5,
  NavImg6,
  TextImg1,
  TextImg2,
  TextImg3,
  TextImg4,
  TextImg5,
  TextImg6,
  Triangle1,
  Triangle2,
  Triangle3,
  Triangle4,
  Triangle5,
  Triangle6,
} from "./NavigationElements";
import HrTech from "../../svgs/hrTech";
import Expert from "../../svgs/expert";
import Outsourcing from "../../svgs/outsourcing";
import Peo from "../../svgs/peo";
import Remote from "../../svgs/remote";
import Staffing from "../../svgs/staffing";
import HrTechImg from "../../images/HRTechnologyCurve.png";
import ExpertImg from "../../images/ExpertConsultingCurve.png";
import OutsourcingImg from "../../images/HROutsourcingCurve.png";
import PeoImg from "../../images/PEO&EORServicesCurve.png";
import RemoteImg from "../../images/RemoteWorkforceCurve.png";
import StaffingImg from "../../images/StaffingServicesCurve.png";

const Navigation = () => {
  const [isOn, setIsOn] = useState(false);
  const [isOn2, setIsOn2] = useState(false);
  const [isOn3, setIsOn3] = useState(false);
  const [isOn4, setIsOn4] = useState(false);
  const [isOn5, setIsOn5] = useState(false);
  const [isOn6, setIsOn6] = useState(false);
  const [isOn7, setIsOn7] = useState(false);

  const handleToggle = () => setIsOn((prev) => !prev);
  const handleToggle2 = () => setIsOn2((prev) => !prev);
  const handleToggle3 = () => setIsOn3((prev) => !prev);
  const handleToggle4 = () => setIsOn4((prev) => !prev);
  const handleToggle5 = () => setIsOn5((prev) => !prev);
  const handleToggle6 = () => setIsOn6((prev) => !prev);
  const handleToggle7 = () => setIsOn7((prev) => !prev);

  return (
    <>
      <MenuNavWrapper onMouseEnter={handleToggle7} onMouseLeave={handleToggle7}>
        <Triangle1 toggle={isOn} to="/poeandeor" />
        <Triangle2 toggle={isOn2} to="/hroutsourcing" />
        <Triangle3 toggle={isOn3} to="/staffingservices" />
        <Triangle4 toggle={isOn4} to="/hrtechnology" />
        <Triangle5 toggle={isOn5} to="/remoteworkforce" />
        <Triangle6 toggle={isOn6} to="/expertconsulting" />
        <MenuSub1 toggle={isOn} toggle2={isOn7} to="/poeandeor">
          PEO & EOR Services
        </MenuSub1>
        <MenuSub2 toggle={isOn2} toggle2={isOn7} to="/hroutsourcing">
          HR Outsourcing
        </MenuSub2>
        <MenuSub3 toggle={isOn3} toggle2={isOn7} to="/staffingservices">
          Staffing Services
        </MenuSub3>
        <MenuSub4 toggle={isOn4} toggle2={isOn7} to="/hrtechnology">
          HR Technology
        </MenuSub4>
        <MenuSub5 toggle={isOn5} toggle2={isOn7} to="/remoteworkforce">
          Remote Workforce
        </MenuSub5>
        <MenuSub6 toggle={isOn6} toggle2={isOn7} to="/expertconsulting">
          Expert Consulting
        </MenuSub6>
        <MenuNav>
          <Circle animationData={circle} />
          <TextImg1 src={PeoImg} alt="pic" />
          <TextImg2 src={OutsourcingImg} alt="pic2" />
          <TextImg3 src={StaffingImg} alt="pic3" />
          <TextImg4 src={HrTechImg} alt="pic4" />
          <TextImg5 src={RemoteImg} alt="pic5" />
          <TextImg6 src={ExpertImg} alt="pic6" />
          <NavImg
            to="/hrtechnology"
            onMouseEnter={handleToggle4}
            onMouseLeave={handleToggle4}
          >
            <HrTech />
          </NavImg>
          <NavImg2
            to="/remoteworkforce"
            onMouseEnter={handleToggle5}
            onMouseLeave={handleToggle5}
          >
            <Remote />
          </NavImg2>
          <NavImg3
            to="/expertconsulting"
            onMouseEnter={handleToggle6}
            onMouseLeave={handleToggle6}
          >
            <Expert />
          </NavImg3>
          <NavImg4
            to="/poeandeor"
            onMouseEnter={handleToggle}
            onMouseLeave={handleToggle}
          >
            <Peo />
          </NavImg4>
          <NavImg5
            to="/hroutsourcing"
            onMouseEnter={handleToggle2}
            onMouseLeave={handleToggle2}
          >
            <Outsourcing />
          </NavImg5>
          <NavImg6
            to="/staffingservices"
            onMouseEnter={handleToggle3}
            onMouseLeave={handleToggle3}
          >
            <Staffing />
          </NavImg6>
        </MenuNav>
      </MenuNavWrapper>
    </>
  );
};

export default Navigation;
