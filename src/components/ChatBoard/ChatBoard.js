import React from "react";

import styled from "styled-components";

const ChatBoardWrapper = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: red; */
`;

const ChatBoard = ({ children }) => {
  return <ChatBoardWrapper>{children}</ChatBoardWrapper>;
};

export default ChatBoard;
