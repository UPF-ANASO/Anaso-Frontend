import React from 'react';
import styled from 'styled-components';
import { PrimaryColor } from '../../Assets/Color/Color';

const TitleText = styled.h2`
  font-size: 3rem;
  font-family: 'Spoqa-Light';
  strong {
    color: ${PrimaryColor};
    font-family: 'Spoqa-Regular';
  }
`;

const Title = () => {
  return (
    <TitleText>
      <strong>안나소</strong>를 통해
      <br />
      팀원을
      <br />
      찾아보세요.
    </TitleText>
  );
};

export default Title;
