import React from 'react';
import styled from 'styled-components';
import { PrimaryColor, TextColorWhite } from '../../Assets/Color/Color';
import Button from '../common/Button/Button';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.h2`
  font-size: 3rem;
  font-family: 'Spoqa-Light';
  word-spacing: 3px;
  strong {
    color: ${PrimaryColor};
    font-family: 'Spoqa-Regular';
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10%;
  button:nth-child(1) {
    margin-right: 10px;
  }
`;

const Title = () => {
  return (
    <Container>
      <TitleText>
        <strong>안나소</strong>를 통해
        <br />
        팀원을
        <br />
        찾아보세요.
      </TitleText>
      <ButtonContainer>
        <Button text="로그인" />
        <Button text="회원가입" color={TextColorWhite} />
      </ButtonContainer>
    </Container>
  );
};

export default Title;
