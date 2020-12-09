import React from "react";

import styled from "styled-components";
import ChatItem from "./ChatItem";

const ChatListWrapper = styled.ul``;

const ChatList = ({ list, type, ...rest }) => {
  return (
    <ChatListWrapper>
      {list &&
        list.map((item) => (
          <ChatItem key={item.id} listType={type} {...item} {...rest} />
        ))}
    </ChatListWrapper>
  );
};

export default ChatList;
