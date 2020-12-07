import React from "react";

import styled from "styled-components";

const InputWrapper = styled.input`
  border-color: #c7c8cb;
  border-radius: 4px;
  width: 100%;
  max-width: 100%;
  padding: 10px 13px;
  transition: border 0.4s;

  &:focus {
    border-color: #4794fd;

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

const Input = ({ ...props }) => {
  return <InputWrapper {...props}></InputWrapper>;
};

export default Input;
