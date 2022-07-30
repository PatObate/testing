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
      <ChatBotContainer
        href="https://web.whatsapp.com/send?phone=971502850833&text="
        target="_blank"
      >
        <ChatBotLogo src={logo} alt="logo" />
        <ChatBotText>
          <ChatBotTextBold>Hello,</ChatBotTextBold> How can I help you?
        </ChatBotText>
      </ChatBotContainer>
    </>
  );
};

export default ChatBot;
