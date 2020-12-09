import React from "react";

import styled from "styled-components";

import detailsIcon from "../../assets/icons/details.svg";

const DetailsButtonWrapp = styled.button``;

const DetailsButtonIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: inline-block;
  width: 20px;
  height: 20px;
`;

const DetailsButton = () => {
  return (
    <DetailsButtonWrapp>
      <DetailsButtonIcon url={detailsIcon} />
    </DetailsButtonWrapp>
  );
};

export default DetailsButton;
