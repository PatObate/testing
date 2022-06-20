import React from "react";
import {
  Background,
  CloseModalButton,
  ModalWrapper,
  Source,
  Video,
} from "./ModalVideoElements";
import video from "../../videos/DF.mp4";

export const ModalVideo = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper>
            <CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
            <Video autoplay="autoplay" controls>
              <Source src={video} type="video/mp4" />
            </Video>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default ModalVideo;
