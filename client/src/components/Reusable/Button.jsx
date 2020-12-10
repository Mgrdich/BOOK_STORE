import React from 'react';
import styled from 'styled-components';

const Button = ({type, children, onClick}) => {
    return (
        <>
            <StyledButton type={type} onClick={onClick ? () => onClick() : null}>
                {children}
            </StyledButton>
        </>
    );
};

const StyledButton = styled.button`
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  outline: none;
  border: none;
  color: ${({theme}) => theme.button.color};
  background: ${({theme}) => theme.button.bgColor};
  &:focus {
    outline: none;
  }
  
`

export default Button;