import React from 'react';
import styled from 'styled-components';
import MyContest from '../../Components/PorfoliDetail/MyContest';
import MyIntro from '../../Components/PorfoliDetail/MyIntro';
import MyPorfolio from '../../Components/PorfoliDetail/MyPorfolio';
import MyStudy from '../../Components/PorfoliDetail/MyStudy';
import Header from '../../Components/common/Header';

const PortfolioDetailDiv = styled.div`
  position: relative;
  /* width: 100vw;
  height: 100vh; */
  /* font-family: 'Spoqa-Light'; */
`;

const SmallTitle = styled.div`
  /* display: inline-block; */
  font-family: 'Spoqa-Regular';
  font-size: 30px;
  /* background-color: white; */
  display: flex;
  /* flex-basis: 100%; */
  align-items: center;
  /* color: rgba(0, 0, 0, 0.35); */
  /* font-size: 12px; */
  margin: 8px 0px;

  &::before,
  &::after {
    content: '';
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;

function PortfolioDetail() {
  return (
    <>
      <Header />
      <PortfolioDetailDiv>
        <MyIntro />
        <SmallTitle>포트폴리오</SmallTitle>
        <MyPorfolio />
        <SmallTitle>공모전</SmallTitle>
      </PortfolioDetailDiv>
    </>
  );
}

export default PortfolioDetail;
