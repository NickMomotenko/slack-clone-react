import React from "react";

import styled from "styled-components";

const NameWrapp = styled.div`
  color: #030303;
  font-size: 18px;
  font-weight: 700;
`;

const Name = ({ title }) => {
  return <NameWrapp>{title}</NameWrapp>;
};

export default Name;
