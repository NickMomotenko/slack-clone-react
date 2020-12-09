import React, { useState } from "react";

import styled from "styled-components";

import messagesData from "../../data/messages.json";

import ChatLabel from "../Chat/ChatLabel";
import ChatList from "../Chat/ChatList";

import Input from "../Form/Input";

const ChatMenusWrapper = styled.div`
  padding: 10px 10px 0;
  background-color: #4d394b;
  width: 250px;
  border-left: 1px solid #645a5a;
`;

const ChatMenusHeader = styled.div``;

const ChatMenusContent = styled.div``;

const ChatMenusContenData = styled.div``;

const ChatMenus = () => {
  const [menuList, setMenuList] = useState([
    {
      id: 1,
      label: "Channels",
      type: "channels",
      channels: [
        {
          id: 1,
          name: "random",
          type: "public",
        },
        {
          id: 2,
          name: "private-room-dev",
          type: "private",
        },
      ],
      messages: [],
    },
    {
      id: 2,
      label: "Direct Messages",
      type: "direct",
      channels: [],
      messages: messagesData,
    },
  ]);

  return (
    <ChatMenusWrapper>
      <ChatMenusHeader>
        <Input placeholder="Jump to..." />
      </ChatMenusHeader>
      <ChatMenusContent>
        {menuList.map(({ id, label, type, channels, messages, ...rest }) => (
          <ChatMenusContenData key={id}>
            <ChatLabel label={label} />
            <ChatList
              list={type === "direct" ? messages.data : channels}
              type={type}
              active={channels.length && channels[0]}
              {...rest}
            />
          </ChatMenusContenData>
        ))}
      </ChatMenusContent>
    </ChatMenusWrapper>
  );
};

export default ChatMenus;
