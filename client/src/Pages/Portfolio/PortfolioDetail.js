import React from 'react';
import styled from 'styled-components';
import MyContest from '../../Components/PorfoliDetail/MyContest';
import MyIntro from '../../Components/PorfoliDetail/MyIntro';
import MyStudy from '../../Components/PorfoliDetail/MyStudy';

const PortfolioDetailDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

function PortfolioDetail() {
  return (
    <PortfolioDetailDiv>
      <MyIntro />
      <MyContest />
      <MyStudy />
    </PortfolioDetailDiv>
  );
}

export default PortfolioDetail;
