import React from "react";

import styled from "styled-components";

import Popup from "./modules/Popup/Popup";

import ChatWrapper from "./components/ChatWrapper/ChatWrapper";
import ChatBoard from "./components/ChatBoard/ChatBoard";
import WorkSpaces from "./components/WorkSpaces/WorkSpaces";
import ChatMenus from "./components/ChatMenus/ChatMenus";

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  return (
    <AppWrapper>
      <ChatWrapper>
        <WorkSpaces />
        <ChatMenus />
        <ChatBoard />
      </ChatWrapper>
      {/* <Popup /> */}
    </AppWrapper>
  );
};

export default App;