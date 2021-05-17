import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../Assets/Images/logo-en.svg';
import {
  TextColorBlack,
  ShadowColor,
  PrimaryColor,
} from '../../Assets/Color/Color';

import { Link } from 'react-router-dom';

const HeaderDiv = styled.div`
  top: 0;
  min-width: 50vw;
  width: 100vw;
  height: 30px;
  padding: 20px 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 8px 20px ${ShadowColor};
  color: ${TextColorBlack};
`;

const Subtitle = styled.p`
  display: inline-block;
  text-align: center;
  font-family: 'Spoqa-Regular';
  font-size: 1.2rem;
  width: 100px;
  :hover {
    transition: 0.15s;
    cursor: pointer;
    color: ${PrimaryColor};
  }
`;

const UserDiv = styled.div`
  /* width: 20%; */
`;

const LogoDiv = styled.div`
  /* padding-left: 20px; */
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: ${TextColorBlack};
  }
`;

function Header() {
  return (
    <HeaderDiv>
      <LogoDiv>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
      </LogoDiv>
      <StyledLink to="/portfoliolist">
        <Subtitle>포트폴리오</Subtitle>
      </StyledLink>
      <StyledLink to="/">
        <Subtitle>공모전</Subtitle>
      </StyledLink>
      <StyledLink to="/">
        <Subtitle>스터디</Subtitle>
      </StyledLink>
      <UserDiv>
        <StyledLink to="/">
          <Subtitle>로그인</Subtitle>
        </StyledLink>
        <StyledLink to="/">
          <Subtitle>회원가입</Subtitle>
        </StyledLink>
      </UserDiv>
    </HeaderDiv>
  );
}

export default Header;
