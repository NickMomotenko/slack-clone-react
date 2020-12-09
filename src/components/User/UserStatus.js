import React from "react";

import styled from "styled-components";

import starIcon from "../../assets/icons/star.svg";

const UserStatusWrapp = styled.div``;

const UserStatusIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: inline-block;
  height: 10px;
  width: 10px;
`;

const UserStatus = ({ status }) => {
  return (
    <UserStatusWrapp>
      <UserStatusIcon url={starIcon} status={status} />
    </UserStatusWrapp>
  );
};

export default UserStatus;
