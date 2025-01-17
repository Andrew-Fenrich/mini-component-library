import React from 'react';
import styled from 'styled-components';
import {COLORS} from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
    small: {
        borderThickness: 1,
        height: 24,
        fontSize: 14,
        iconSize: 16,
    },
    large: {
        borderThickness: 2,
        height: 36,
        fontSize: 18,
        iconSize: 24,
    },
};

const IconInput = ({
    label,
    icon,
    width = 250,
    size,
    ...delegated
}) => {
    const styles = STYLES[size];

    return (
        <Wrapper>
            <VisuallyHidden>{label}</VisuallyHidden>
            <IconWrapper>
                <Icon id={icon} size={styles.iconSize}/>
            </IconWrapper>
            <TextInput
                {...delegated}
                style={{
                    '--width': width + 'px',
                    '--height': styles.height / 16 + 'rem',
                    '--border-thickness': styles.borderThickness + 'px',
                    '--font-size': styles.fontSize / 16 + 'rem',
                }}
            />
        </Wrapper>

    );
};

const Wrapper = styled.div`
  display: block;
  position: relative;
  //Set colour here for icon to inherit 
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

\`        ;

`

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

export default IconInput;
