import React, { useState } from "react";
import circle from "../../lotties/circle.json";
import {
  Circle,
  MenuNav,
  MenuNavWrapper,
  NavImg,
  NavImg2,
  NavImg3,
  NavImg4,
  NavImg5,
  NavImg6,
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

const Navigation2 = () => {
  const [isOn, setIsOn] = useState(false);
  const [isOn2, setIsOn2] = useState(false);
  const [isOn3, setIsOn3] = useState(false);
  const [isOn4, setIsOn4] = useState(false);
  const [isOn5, setIsOn5] = useState(false);
  const [isOn6, setIsOn6] = useState(false);

  const handleToggle = () => setIsOn((prev) => !prev);
  const handleToggle2 = () => setIsOn2((prev) => !prev);
  const handleToggle3 = () => setIsOn3((prev) => !prev);
  const handleToggle4 = () => setIsOn4((prev) => !prev);
  const handleToggle5 = () => setIsOn5((prev) => !prev);
  const handleToggle6 = () => setIsOn6((prev) => !prev);

  return (
    <>
      <MenuNavWrapper>
        <Triangle1 toggle={isOn} to="/poeandeor" />
        <Triangle2 toggle={isOn2} to="/hroutsourcing" />
        <Triangle3 toggle={isOn3} to="/staffingservices" />
        <Triangle4 toggle={isOn4} to="/hrtechnology" />
        <Triangle5 toggle={isOn5} to="/remoteworkforce" />
        <Triangle6 toggle={isOn6} to="/expertconsulting" />
        <MenuNav>
          <Circle animationData={circle} />
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

export default Navigation2;
