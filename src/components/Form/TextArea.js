import React, { forwardRef } from "react";

import styled from "styled-components";

const TextAreaWrapper = styled.textarea`
  border-color: ${({ borderColor }) => (borderColor ? borderColor : "#c7c8cb")};
  border-radius: 4px;
  width: 100%;
  max-width: 100%;
  padding: 10px 13px;
  transition: border 0.4s;
  resize: none;

  &:focus {
    border-color: ${({ borderColor }) =>
      borderColor ? borderColor : "#4794fd"};

    ::placeholder {
      color: #2c2d30;
    }
  }

  ::placeholder {
    transition: 0.4s;
    color: #9e9ea6;
    font-size: 15px;
    font-weight: 400;
  }
`;

const TextArea = ({ ...props }) => {
  return <TextAreaWrapper {...props}></TextAreaWrapper>;
};
export default TextArea;
