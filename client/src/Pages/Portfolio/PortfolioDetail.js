import React from 'react';
import styled from 'styled-components';
import MyContest from '../../Components/PorfoliDetail/MyContest';
import MyIntro from '../../Components/PorfoliDetail/MyIntro';
import MyPorfolio from '../../Components/PorfoliDetail/MyPorfolio';
import MyStudy from '../../Components/PorfoliDetail/MyStudy';
import Header from '../../Components/common/Header';
import { PrimaryColor, TextColorBlack } from '../../Assets/Color/Color';

const PortfolioDetailDiv = styled.div`
  margin: 0 auto;
`;

const SmallTitle = styled.div`
  /* display: inline-block; */
  width: 80%;
  font-family: 'Spoqa-Light';
  color: ${TextColorBlack};
  font-size: 30px;
  display: flex;
  align-items: center;
  margin: 0 auto;

  &::after {
    content: '';
    flex-grow: 1;
    background: ${PrimaryColor};
    /* background: ${TextColorBlack}; */
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;

function PortfolioDetail({ match }) {
  // const { userId } = match.params.key;
  return (
    <>
      {/* <p>{match.params.id}</p> */}
      {/* <pre>{JSON.stringify(match, null, 2)}</pre> */}
      <Header />
      <PortfolioDetailDiv>
        <MyIntro match={match} />
        <SmallTitle>포트폴리오</SmallTitle>
        <MyPorfolio match={match} />
        <SmallTitle>참여 중인 공모전</SmallTitle>
        <MyContest match={match} />
      </PortfolioDetailDiv>
    </>
  );
}

export default PortfolioDetail;
