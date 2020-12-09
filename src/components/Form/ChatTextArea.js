import React from "react";

import styled from "styled-components";
import TextArea from "./TextArea";

import mentionIcon from "../../assets/icons/mention.svg";
import emojiIcon from "../../assets/icons/smile.svg";
import attachIcon from "../../assets/icons/paperclip.svg";
import sendIcon from "../../assets/icons/send.svg";

const ChatTextAreaWrapp = styled.div`
  margin: 0 20px;
  border-radius: 4px;
  border: 1px solid #c7c8cb;
`;

const ChatTextAreaOptions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-top: 1px solid #c7c8cb;
  background-color: #c7c8cb42;
`;

const ChatTextAreaOptionsCol = styled.div``;

const ChatTextAreaOptionsList = styled.ul`
  display: flex;
  align-items: center;
`;

const ChatTextAreaOptionsItem = styled.li`
  margin-right: 10px;

  &::last-child {
    margin-right: 0;
  }
`;

const ChatTextAreaOptionsButton = styled.button``;

const ChatTextAreaOptionsButtonIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: inline-block;
  height: 18px;
`;

const ChatTextArea = ({ placeholder }) => {
  const sendOptions = [
    {
      name: "mention",
      icon: mentionIcon,
      func: () => {},
    },
    {
      name: "emoji",
      icon: emojiIcon,
      func: () => {},
    },
    {
      name: "attach",
      icon: attachIcon,
      func: () => {},
    },
    {
      name: "send",
      icon: sendIcon,
      func: () => {},
    },
  ];

  const textOptions = [
    {
      name: "bold",
      icon: "",
      func: () => {},
    },
    {
      name: "italic",
      icon: "",
      func: () => {},
    },
    {
      name: "code",
      icon: "",
      func: () => {},
    },
  ];

  return (
    <ChatTextAreaWrapp>
      <TextArea
        borderColor="transparent"
        placeholder={placeholder}
      />
      <ChatTextAreaOptions>
        <ChatTextAreaOptionsCol>
          <ChatTextAreaOptionsList>
            {textOptions.map((item) => (
              <ChatTextAreaOptionsItem key={item.name}>
                <ChatTextAreaOptionsButton>
                  <ChatTextAreaOptionsButtonIcon url={item.icon} />
                </ChatTextAreaOptionsButton>
              </ChatTextAreaOptionsItem>
            ))}
          </ChatTextAreaOptionsList>
        </ChatTextAreaOptionsCol>
        <ChatTextAreaOptionsCol>
          <ChatTextAreaOptionsList>
            {sendOptions.map((item) => (
              <ChatTextAreaOptionsItem key={item.name}>
                <ChatTextAreaOptionsButton>
                  <ChatTextAreaOptionsButtonIcon url={item.icon} />
                </ChatTextAreaOptionsButton>
              </ChatTextAreaOptionsItem>
            ))}
          </ChatTextAreaOptionsList>
        </ChatTextAreaOptionsCol>
      </ChatTextAreaOptions>
    </ChatTextAreaWrapp>
  );
};

export default ChatTextArea;
