import React from "react";

import styled from "styled-components";

import Popup from "./modules/Popup/Popup";

import ChatBoard from "./components/ChatBoard/ChatBoard";
import WorkSpaces from "./components/WorkSpaces/WorkSpaces";

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  return (
    <AppWrapper>
      <ChatBoard>
        <WorkSpaces />
      </ChatBoard>
      {/* <Popup /> */}
    </AppWrapper>
  );
};

export default App;
