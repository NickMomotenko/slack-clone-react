import React from "react";

import styled from "styled-components";

const LabelWrapper = styled.label`
  margin-bottom: 20px;
  display: block;

  &::last-child {
    margin-bottom: 0;
  }
`;

const Label = ({ children }) => {
  return <LabelWrapper>{children}</LabelWrapper>;
};

export default Label;
