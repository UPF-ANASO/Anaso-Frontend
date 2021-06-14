import React from 'react';
import { PrimaryColor, TextColorWhite } from '../../../Assets/Color/Color';
import styled from 'styled-components';

const CustomButton = styled.button`
  width: ${(props) => props.width || '150px'};
  height: 40px;
  border: 2px solid
    ${(props) => (props.color === TextColorWhite ? PrimaryColor : props.color)};
  border-radius: 5px;
  color: ${(props) =>
    props.color === TextColorWhite ? PrimaryColor : TextColorWhite};
  background-color: ${(props) => props.color || PrimaryColor};
  font-family: 'Spoqa-Regular';
  :hover {
    cursor: pointer;
    transition: 0.3s;
    color: ${(props) => (props.color ? props.color : PrimaryColor)};
    background-color: ${TextColorWhite};
  }
`;

const Button = ({ width, color, text, onClick }) => {
  return (
    <CustomButton width={width} onClick={onClick} color={color}>
      {text}
    </CustomButton>
  );
};

export default Button;
