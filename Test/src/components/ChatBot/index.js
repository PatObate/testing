import React from "react";
import {
  ChatBotContainer,
  ChatBotLogo,
  ChatBotText,
  ChatBotTextBold,
} from "./ChatBotElements";
import logo from "../../svg/Chat.svg";

const ChatBot = () => {
  return (
    <>
      <ChatBotContainer>
          <ChatBotLogo src={logo} />
          <ChatBotText><ChatBotTextBold>Hello,</ChatBotTextBold> How can I help you?</ChatBotText>
      </ChatBotContainer>
    </>
  );
};

export default ChatBot;
