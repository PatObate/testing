import React from "react";
import Lottie from "lottie-react";

import {
  ConnectContainer,
  ConnectContent,
  ConnectColumn,
  ConnectColumn2,
  ConnectSub,
  ConnectHeader,
  ConnectKeys,
  ConnectIcon,
  ConnectText,
  ConnectTinySpan,
} from "./ConnectElements";

import phone from "../../../images/call.png";
import map from "../../../images/map.png";
import mail from "../../../images/mail.png";

import { Blob1 } from "../../../components/BlobElements";

import Blob from "../../../lotties/BlobRight.json";
import Form from "../../../components/Form";

const ConnectSection = () => {
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.29, 1.0],
        type: "seek",
        frames: [0, 120],
      },
    ],
  };
  return (
    <>
      <ConnectContainer id="contact">
        <ConnectContent>
          <ConnectColumn>
            <ConnectHeader>Get in Touch</ConnectHeader>
            <ConnectSub>
              Give feedback, ask questions, or start a discussion in the
              comments.
            </ConnectSub>
            <ConnectKeys>
              <ConnectIcon src={phone} alt="phone icon" />
              <ConnectTinySpan>
                Phone Number <ConnectText> +971 4354 4466</ConnectText>
              </ConnectTinySpan>
            </ConnectKeys>
            <ConnectKeys>
              <ConnectIcon src={map} alt="map icon" />
              <ConnectTinySpan>
                Location
                <ConnectText>
                  Office No. 1006, 10th Floor, Marina Plaza, Dubai, UAE
                </ConnectText>
              </ConnectTinySpan>
            </ConnectKeys>
            <ConnectKeys>
              <ConnectIcon src={mail} alt="mail icon" />
              <ConnectTinySpan>
                Email <ConnectText> info@dynamicfreelancer.ae</ConnectText>
              </ConnectTinySpan>
            </ConnectKeys>
          </ConnectColumn>
          <ConnectColumn2>
            <Form />
          </ConnectColumn2>
        </ConnectContent>
        <Blob1>
          <Lottie animationData={Blob} interactivity={interactivity} />
        </Blob1>
      </ConnectContainer>
    </>
  );
};

export default ConnectSection;
