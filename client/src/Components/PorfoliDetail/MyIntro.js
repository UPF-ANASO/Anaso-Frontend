import React from 'react';
import styled from 'styled-components';
import Test from '../../Assets/Images/test.jpeg';
import Button from '../common/Button/Button';
import { Link, useHistory } from 'react-router-dom';
import { TextColorBlack } from '../../Assets/Color/Color';

const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: ${TextColorBlack};
  }
`;

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
  align-content: space-between;
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  /* border-radius: 50%; */
`;

const Name = styled.p`
  font-family: 'Spoqa-Medium';
  font-size: 1.3rem;
`;

const Info = styled.p`
  margin: 10px 0;
  font-family: 'Spoqa-Light';
`;
function MyIntro({ match }) {
  // console.log({ match.params.id });
  return (
    <>
      <p>{match.params.id}</p>
      <MyIntroDiv>
        <ProfileImg src={Test} />
        <MyInfoDiv>
          <Name>하유민</Name>
          <Info>안녕하세요. 고양이가 최고라고 생각합니다.</Info>
          <StyledLink to="/portfolioCreate">
            <Button width="140px" text="나의 포트폴리오 생성" color="#ffb100" />
          </StyledLink>
        </MyInfoDiv>
      </MyIntroDiv>
    </>
  );
}

export default MyIntro;
