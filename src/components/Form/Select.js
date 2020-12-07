import React, { useState } from "react";

import styled from "styled-components";

const SelectWrapper = styled.div`
  width: 100%;

  border-radius: 4px;
  padding: 10px 13px;
  position: relative;
  cursor: pointer;
`;

const SelectList = styled.ul`
  height: 0;
  overflow: hidden;
  visibility: hidden;
`;

const SelectOption = styled(SelectWrapper)`
  display: block;
  border: 1px solid #c7c8cb;
`;

const SelectCurrent = styled(SelectOption)``;

const Select = ({ options }) => {
  const [active, setActive] = useState(options[0]);

  return (
    <SelectWrapper>
      <SelectCurrent>{active}</SelectCurrent>
      <SelectList>
        {options.map((option) => (
          <SelectOption as="li" key={option} active={active}>
            {option}
          </SelectOption>
        ))}
      </SelectList>
    </SelectWrapper>
  );
};

export default Select;
