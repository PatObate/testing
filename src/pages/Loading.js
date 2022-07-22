import React, { useEffect } from "react";
import LoadingSection from "../containers/LoadingSection";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/landing");
    }, 6000);
  }, []);

  return (
    <>
      <div>
        <LoadingSection />
      </div>
    </>
  );
};

export default Loading;
