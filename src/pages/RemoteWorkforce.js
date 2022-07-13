import React from "react";
import MenuSelectSection from "../containers/MenuSelectSection";
import { RemoteWorkData } from "../containers/MenuSelectSection/data";
const RemoteWorkforce = () => {
  return (
    <>
      <div>
        <MenuSelectSection {...RemoteWorkData} />
      </div>
    </>
  );
};

export default RemoteWorkforce;
