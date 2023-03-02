import React, {Children} from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';

const Select = ({label, value, onChange, children}) => {
    const displayedValue = getDisplayedValue(value, children);
    return (
        <Wrapper>
            <SelectWrapper value={value} onChange={onChange}>
                {children}
            </SelectWrapper>
            <PresentationElement>{displayedValue}
                <IconWrapper style={{'--size': 24 + 'px'}}>
                    <Icon id="chevron-down" strokewidth={1} size={24}></Icon>
                </IconWrapper>
            </PresentationElement>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;

`

const SelectWrapper = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`
const PresentationElement = styled.div`
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 1rem;
  line-height: 19px;
  font-weight: 400;
  padding: 12px 52px 12px 16px;


  ${SelectWrapper}:hover + & {
    color: ${COLORS.black};
  }

  ${SelectWrapper}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
`
export default Select;
