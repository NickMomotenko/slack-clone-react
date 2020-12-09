import React from "react";

import styled from "styled-components";

import avatarIcon from "../../assets/friends/1.jpg";

const AvatarWrapp = styled.div`
  display: inline-block;
  height: 25px;
  width: 25px;
  border-radius: 5px;
  overflow: hidden;
`;

const AvatarIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Avatar = () => {
  return (
    <AvatarWrapp>
      <AvatarIcon url={avatarIcon} />
    </AvatarWrapp>
  );
};

export default Avatar;
