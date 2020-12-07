import React, { useState } from "react";

import styled from "styled-components";

import buttonAddIcon from "../../assets/icons/plus.svg";

import WorkSpacesItem from "./WorkSpacesItem";

const WorkSpacesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 60px;
  padding: 10px 10px 0;
  background-color: #261e25;
`;

const WorkSpacesList = styled(WorkSpacesWrapper)`
  margin-bottom: 10px;
  height: initial;

  &:last-child {
    margin-bottom: 0;
  }
`;

const WorkSpacesButtonAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 32px;
  width: 32px;
  border-radius: 4px;
  border: 2px solid transparent;
  transition: all 0.2s;
  background-color: #9c919e;

  &:hover {
    border-color: #fff;
  }
`;

const WorkSpacesButtonIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: inline-block;
  height: 18px;
  width: 18px;
`;

const WorkSpaces = () => {
  const [spaces, setSpaces] = useState([
    {
      id: 1,
      name: "Test",
      icon: "test.png",
      path: "/test",
    },
    {
      id: 2,
      name: "Test 2",
      icon: "test.png",
      path: "/test",
    },
    {
      id: 4,
      name: "Test 2",
      icon: "test.png",
      path: "/test",
    },
  ]);
  const [activeSpace, setActiveSpace] = useState(spaces[0]);

  const addSpace = () => {
    setSpaces([
      ...spaces,
      {
        id: 3,
        name: "fafafas",
        icon: "test3.png",
        path: "/test3",
      },
    ]);
  };

  const deleteSpace = (id) => {
    setSpaces(spaces.filter((x) => x.id !== id));
  };

  return (
    <WorkSpacesWrapper>
      <WorkSpacesList as="ul">
        {spaces.map((space) => (
          <WorkSpacesItem
            key={space.id}
            active={activeSpace}
            setActiveSpace={setActiveSpace}
            deleteSpace={deleteSpace}
            space={space}
          />
        ))}
      </WorkSpacesList>
      <WorkSpacesButtonAdd as="button" onClick={addSpace}>
        <WorkSpacesButtonIcon url={buttonAddIcon} />
      </WorkSpacesButtonAdd>
    </WorkSpacesWrapper>
  );
};

export default WorkSpaces;
