import React from "react";

import styled from "styled-components";

const LabelText = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: #2c2d30;
  margin-bottom: 4px;
`;

const Label = ({ text }) => {
  return <LabelText>{text}</LabelText>;
};

export default Label;
