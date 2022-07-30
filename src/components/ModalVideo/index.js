import React, { useRef } from "react";
import {
  Background,
  CloseModalButton,
  ModalWrapper,
  Source,
  Video,
} from "./ModalVideoElements";
import video from "../../videos/DF.mp4";

export const ModalVideo = ({ showModal, setShowModal }) => {
  const vidRef = useRef(null);
  const pauseVideo = () => {
    // Pause as well
    vidRef.current.pause();
  };
  return (
    <>
      <Background toggle={showModal}>
        <ModalWrapper>
          <div onClick={pauseVideo}>
            <CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
          </div>
          <Video autoplay="autoplay" controls ref={vidRef}>
            <Source src={video} type="video/mp4" alt="video" />
          </Video>
        </ModalWrapper>
      </Background>
    </>
  );
};

export default ModalVideo;
