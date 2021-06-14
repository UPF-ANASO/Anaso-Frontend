import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../Assets/Images/logo-en.svg';
import {
  TextColorBlack,
  ShadowColor,
  BackgroundColor,
  PrimaryColor,
} from '../../Assets/Color/Color';

import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { CLEAR_TOKEN, CLEAR_USER_INFO } from '../../Redux/actions/types';
import {
  clearToken,
  setCurrentAuthToken,
} from '../../Redux/actions/auth_action';
import {
  clearUserInfo,
  setCurrentUserInfo,
} from '../../Redux/actions/userInfo_action';

const HeaderDiv = styled.div`
  top: 0;
  z-index: 99;
  min-width: 50vw;
  width: 100%;

  /* 민석 - 추가한 코드[고정시키기] */
  background-color: white;
  height: 30px;
  top: 0;
  position: sticky;
  /* --------------- */
  padding: 20px 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid ${BackgroundColor};
  box-shadow: 0 3px 10px ${ShadowColor};
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
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => {
    state.auth.currentToken;
  }, shallowEqual);
  const handleLogout = (e) => {
    // 토큰/유저정보/로컬스토리지 토큰 삭제
    localStorage.removeItem('token');
    dispatch(clearToken());
    dispatch(clearUserInfo());
    history.replace('/');
  };

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
      <StyledLink to="/contestmain">
        <Subtitle>공모전</Subtitle>
      </StyledLink>
      <StyledLink to="/">
        <Subtitle>스터디</Subtitle>
      </StyledLink>
      <UserDiv>
        {!token ? (
          <>
            <StyledLink to="/login">
              <Subtitle>로그인</Subtitle>
            </StyledLink>
            <StyledLink to="/signup">
              <Subtitle>회원가입</Subtitle>
            </StyledLink>
          </>
        ) : (
          <>
            <StyledLink onClick={handleLogout}>
              <Subtitle>로그아웃</Subtitle>
            </StyledLink>
          </>
        )}
      </UserDiv>
    </HeaderDiv>
  );
}

export default Header;
