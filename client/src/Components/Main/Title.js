import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  PrimaryColor,
  TextColorWhite,
  TextColorBlack,
} from '../../Assets/Color/Color';
import Button from '../common/Button/Button';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: ${TextColorBlack};
  }
`;

const TitleText = styled.h2`
  font-size: 2.6rem;
  line-height: 60px;
  font-family: 'Spoqa-Regular';
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
        <StyledLink to="/login">
          <Button text="로그인" />
        </StyledLink>
        <StyledLink to="/signup">
          <Button text="회원가입" color={TextColorWhite} />
        </StyledLink>
      </ButtonContainer>
    </Container>
  );
};

export default Title;
