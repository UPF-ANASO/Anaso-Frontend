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

import Test from '../../Assets/Images/test.jpeg';
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
  font-size: 1 rem;
  width: 100px;
  :hover {
    transition: 0.15s;
    cursor: pointer;
    color: ${PrimaryColor};
  }
`;

// 프로필 사진 관련 코드
const ProfileDiv = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* float: right; */
  display: inline-block;
  & > div:nth-child(1) {
    width: 100px;
  }
`;

const Name = styled.p`
  text-align: center;
  min-width: 100px;
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
  const [Token, setToken] = useState('');

  // 리덕스에서 username 가져오기
  const username = useSelector((state) => state.userInfo.userInfo.name);

  const handleLogout = (e) => {
    // 토큰/유저정보/로컬스토리지 토큰 삭제
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    dispatch(clearToken());
    dispatch(clearUserInfo());
    location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setToken(token);
    }
  }, []);

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
      <StyledLink to="/contests">
        <Subtitle>공모전</Subtitle>
      </StyledLink>
      <StyledLink to="/">
        <Subtitle>스터디</Subtitle>
      </StyledLink>
      <UserDiv>
        {!Token ? (
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
            <ProfileDiv>
              <Img src={Test} alt="image"></Img>
              <Name>{username}</Name>
              <StyledLink onClick={handleLogout}>
                <Subtitle>로그아웃</Subtitle>
              </StyledLink>
              {/* 현재 로그인된 유저의 Name 과 Image 출력  */}
            </ProfileDiv>
          </>
        )}
      </UserDiv>
    </HeaderDiv>
  );
}

export default Header;
