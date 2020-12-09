import React from "react";

import styled from "styled-components";

const ChatWrapperStyles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const ChatWrapper = ({ children }) => {
  return <ChatWrapperStyles>{children}</ChatWrapperStyles>;
};

export default ChatWrapper;
