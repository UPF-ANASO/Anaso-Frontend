import React from 'react';
import styled from 'styled-components';
import { PrimaryColor, TextColorGray } from '../../Assets/Color/Color';
const InputText = styled.input`
  border: 0;
  border-bottom: 2px solid ${PrimaryColor};
  width: ${(props) => props.width || '100%'};
  font-size: ${(props) => props.fontsize || '1rem'};
  :focus {
    transition: 0.3s;
    border-bottom: 2px solid ${TextColorGray};
    appearance: none;
    outline: none;
  }
`;

const Input = ({
  fontsize,
  accept,
  ref,
  onChange,
  type,
  width,
  placeholder,
}) => {
  return (
    <InputText
      fontsize={fontsize}
      accept={accept}
      ref={ref}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      width={width}
    />
  );
};

export default Input;
