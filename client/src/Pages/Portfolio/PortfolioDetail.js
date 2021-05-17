import React from 'react';
import styled from 'styled-components';
import MyContest from '../../Components/PorfoliDetail/MyContest';
import MyIntro from '../../Components/PorfoliDetail/MyIntro';
import MyPorfolio from '../../Components/PorfoliDetail/MyPorfolio';
import MyStudy from '../../Components/PorfoliDetail/MyStudy';
import Header from '../../Components/common/Header';

const PortfolioDetailDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  /* font-family: 'Spoqa-Light'; */
`;

function PortfolioDetail() {
  return (
    <>
      <Header />
      <PortfolioDetailDiv>
        <MyIntro />
        <MyContest />
        <MyStudy />
        <MyPorfolio />
      </PortfolioDetailDiv>
    </>
  );
}

export default PortfolioDetail;
