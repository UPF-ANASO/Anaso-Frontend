import React from 'react';
import styled from 'styled-components';
import Test from '../../Assets/Images/test.jpeg';

const MyIntroDiv = styled.div`
  padding: 30px 0;
  margin: 0 auto;
  display: flex;
  width: 35%;
  justify-content: space-between;
  align-items: center;
`;

const MyInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const Name = styled.p`
  font-family: 'Spoqa-Medium';
  font-size: 1.3rem;
`;

const Info = styled.p`
  font-family: 'Spoqa-Light';
`;
function MyIntro() {
  return (
    <MyIntroDiv>
      <ProfileImg src={Test} />
      <MyInfoDiv>
        <Name>하유민</Name>
        <Info>안녕하세요. 고양이가 최고라고 생각합니다.</Info>
      </MyInfoDiv>
    </MyIntroDiv>
  );
}

export default MyIntro;
