import React from "react";

import styled from "styled-components";

import starIcon from "../../assets/icons/star.svg";

const ChosenWrapp = styled.div``;

const ChosenIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: inline-block;
  height: 15px;
  width: 15px;
  cursor: pointer;
`;

const Chosen = ({ status }) => {
  return (
    <ChosenWrapp>
      <ChosenIcon url={starIcon} status={status} />
    </ChosenWrapp>
  );
};

export default Chosen;
