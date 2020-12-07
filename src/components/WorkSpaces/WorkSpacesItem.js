import React from "react";

import styled from "styled-components";

import sprite from "../../assets/icons/sprite.svg";

const WorkSpacesItemWrapper = styled.li`
  height: 32px;
  width: 32px;
  border-radius: 4px;
  border: 2px solid
    ${({ active, space }) => (active.id === space.id ? "#fff" : "transparent")};
  transition: all 0.2s;
  background-color: #9c919e;
  cursor: pointer;

  position: relative;

  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    border-color: #fff;
  }
`;

const WorkSpacesDeleteButton = styled.button`
  display: block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  position: absolute;
  top: -10px;
  right: -9px;
  z-index: 2;
`;

const WorkSpacesDeleteButtonIcon = styled.svg`
  height: 10px;
  width: 10px;
  display: inline-block;
  transform: rotate(45deg);
`;

const WorkSpacesItem = ({ ...props }) => {
  return (
    <WorkSpacesItemWrapper
      onClick={() => props.setActiveSpace(props.space)}
      {...props}
    >
      {props.active.id === props.space.id && (
        <WorkSpacesDeleteButton
          onClick={() => props.deleteSpace(props.space.id)}
        >
          <WorkSpacesDeleteButtonIcon>
            <use href={`${sprite}#plus`}></use>
          </WorkSpacesDeleteButtonIcon>
        </WorkSpacesDeleteButton>
      )}
    </WorkSpacesItemWrapper>
  );
};

export default WorkSpacesItem;
