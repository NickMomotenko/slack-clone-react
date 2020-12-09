import React from "react";

import styled from "styled-components";

import Name from "../User/Name";
import UserStatus from "../User/UserStatus";
import Chosen from "../User/Chosen";
import Avatar from "../User/Avatar";

import DetailsButton from "../Details/Button";

import ChatTextAreaWrapp from "../Form/ChatTextArea";

const ChatBoardWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ChatBoardHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChatBoardCol = styled.div``;

const ChatBoardRow = styled.div`
  display: flex;
  align-items: center;
`;

const ChatBoardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
`;

const ChatBoardAvatar = styled.div`
  margin-right: 10px;
`;

const ChatBoardName = styled(ChatBoardAvatar)``;

const ChatBoardChosen = styled(ChatBoardAvatar)``;

const ChatBoard = () => {
  return (
    <ChatBoardWrapper>
      <ChatBoardHeader>
        <ChatBoardCol>
          <ChatBoardRow>
            <ChatBoardAvatar>
              <Avatar />
            </ChatBoardAvatar>
            <ChatBoardName>
              <Name title="Tom Jerry" />
            </ChatBoardName>
            <ChatBoardChosen>
              <Chosen status={false} />
            </ChatBoardChosen>
          </ChatBoardRow>
          <ChatBoardRow></ChatBoardRow>
        </ChatBoardCol>
        <ChatBoardCol>
          <DetailsButton />
        </ChatBoardCol>
      </ChatBoardHeader>
      <ChatBoardContent>
        <ChatTextAreaWrapp placeholder="Send message to #chanel" />
      </ChatBoardContent>
    </ChatBoardWrapper>
  );
};

export default ChatBoard;
