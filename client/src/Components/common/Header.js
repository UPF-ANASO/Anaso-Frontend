import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  top: 0;
  min-width: 50vw;
  width: 100%;
  height: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Subtitle = styled.p`
  display: inline-block;
  text-align: center;
  width: 80px;
`;

const UserDiv = styled.div`
  /* width: 10%; */
`;

function Header() {
  return (
    <HeaderDiv>
      <img alt="로고"></img>
      <Subtitle>포트폴리오</Subtitle>
      <Subtitle>공모전</Subtitle>
      <Subtitle>스터디</Subtitle>
      <UserDiv>
        <Subtitle>로그인</Subtitle>
        <Subtitle>회원가입</Subtitle>
      </UserDiv>
    </HeaderDiv>
  );
}

export default Header;
