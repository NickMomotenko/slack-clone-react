import React from "react";

import styled from "styled-components";

const AlertWrapper = styled.div`
  border-radius: 4px;
  background-color: #fff4e6;
  border: 2px solid #ffcc8f;

  color: #2c2d30;
  font-weight: 700;
  font-size: 11px;
  padding: 6px 12px;
  margin-bottom:15px;
`;

const Alert = ({ text }) => {
  return <AlertWrapper>{text}</AlertWrapper>;
};

export default Alert;
