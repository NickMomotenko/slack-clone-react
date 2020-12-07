import React from "react";

import styled from "styled-components";

const ButtonWrapper = styled.button`
  font-size: 15px;
  color: ${({ color }) => (color ? color : "#fff")};
  background: ${({ bg }) => (bg ? bg : "#218952")};
  border-color: ${({ borderColor }) => (borderColor ? borderColor : "")};
  border-radius: 4px;
  font-weight: 900;

  padding: 7px 10px;

  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const Button = ({ label, onClick, ...props }) => {
  return (
    <ButtonWrapper onClick={onClick} {...props}>
      {label}
    </ButtonWrapper>
  );
};

export default Button;
