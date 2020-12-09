import React, { useState } from "react";

import styled from "styled-components";

import privateIcon from "../../assets/icons/private.svg";
import publicIcon from "../../assets/icons/public.svg";

const ChatItemTitle = styled.div`
  color: #ab9ba9;
  font-weight: 500;
  font-size: 14px;
  transition: color 0.4s;
`;

const ChatItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s;
  cursor: pointer;
  padding: 5px 0;
  border-radius: 4px;
  background-color: ${({ activeId, id }) =>
    activeId === id ? "#499689" : "transparent"};

  ${ChatItemTitle} {
    color: ${({ activeId, id }) => (activeId === id ? "#fff" : "#ab9ba9")};
  }

  &:hover {
    background-color: #499689;

    ${ChatItemTitle} {
      color: #fff;
    }
  }
`;

const ChatItemCol = styled.div`
  display: flex;
  align-items: center;
`;

const ChatItemIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: inline-block;
  height: 17px;
  margin-right: 3px;
`;

const ChatItemOnline = styled.div`
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${({ status }) => status ? "#fff" : "#3F948C"};
`;

const ChatItemUnreadValue = styled.div`
  background-color: #e15863;
  padding: 1px 3px;
  border-radius: 7px;
  display: inline-block;
  min-width: 22px;

  color: #fff;
  font-weight: 700;
  font-size: 10px;
  text-align: center;
`;

const ChatItem = ({ id, listType, name, online, type, active, unread }) => {
  const [activeChanel, setActiveChanel] = useState(active);

  return (
    <ChatItemWrapper activeId={activeChanel.id} id={id}>
      <ChatItemCol>
        {type && (
          <ChatItemIcon url={type === "public" ? publicIcon : privateIcon} />
        )}
        {listType === "direct" && (
          <ChatItemOnline status={online} />
        )}
        <ChatItemTitle>{name}</ChatItemTitle>
      </ChatItemCol>
      {listType === "direct" && unread.length !== 0 && (
        <ChatItemUnreadValue>{unread.length}</ChatItemUnreadValue>
      )}
    </ChatItemWrapper>
  );
};

export default ChatItem;
