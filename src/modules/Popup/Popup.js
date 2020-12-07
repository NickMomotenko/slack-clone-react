import React from "react";

import styled from "styled-components";

import Button from "../../components/Button/Button";
import Alert from "../Alert/Alert";

import Input from "../../components/Form/Input";
import SubTitle from "../../components/Form/SubTitle";
import Label from "../../components/Form/Label";
import TextArea from "../../components/Form/TextArea";
import Select from "../../components/Form/Select";

import crossButtonIcon from "../../assets/icons/cancel.svg";

const PopupWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #fff;
  box-shadow: 0 0 8px #c7c8cb;
  border-radius: 5px;
  border: 1px solid #c7c8cb;

  width: 500px;
  padding: 28px 35px;
  /* height: 500px; */
`;

const PopupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;

const PopupTitle = styled.div`
  color: #555459;
  font-size: 25px;
  font-weight: 900;
`;

const PopupButton = styled.button``;

const PopupCrossIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: inline-block;
  height: 15px;
  width: 15px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;

const PopupContent = styled.div``;

const PopupButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Popup = ({ children }) => {
  return (
    <PopupWrapper>
      <PopupHeader>
        <PopupTitle>Title</PopupTitle>
        <PopupButton>
          <PopupCrossIcon url={crossButtonIcon} />
        </PopupButton>
      </PopupHeader>
      <PopupContent>
        <Alert text="This message shows a very important information , a warning for the user about the effect of the action ." />
        <Label>
          <SubTitle text="Title" />
          <Input placeholder="Type in a text..." />
        </Label>
        <Label>
          <SubTitle text="Title" />
          <TextArea placeholder="Type in a text..." />
        </Label>
        {/* <Label>
          <SubTitle text="Title" />
          <Select options={["test", "test1"]} />
        </Label> */}
      </PopupContent>
      <PopupButtons>
        <Button
          label="Cancel"
          bg="#FBFBFA"
          color="#555459"
          borderColor="#C7C8CB"
        />
        <Button label="Action" />
      </PopupButtons>
    </PopupWrapper>
  );
};

export default Popup;
