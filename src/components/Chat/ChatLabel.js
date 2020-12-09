import React from "react";

import styled from "styled-components";

import addIcon from "../../assets/icons/add.svg";

const ChatLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const ChatLabelTitle = styled.div`
  color: #ab9ba9;
  font-weight: 500;
  font-size: 15px;
`;

const ChatLabelButtonAdd = styled.button`
  display: inline-block;
`;

const ChatLabelButtonAddIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: block;
  height: 14px;
  width: 14px;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const ChatLabel = ({ label }) => {
  return (
    <ChatLabelWrapper>
      <ChatLabelTitle>{label}</ChatLabelTitle>
      <ChatLabelButtonAdd>
        <ChatLabelButtonAddIcon url={addIcon} />
      </ChatLabelButtonAdd>
    </ChatLabelWrapper>
  );
};

export default ChatLabel;
