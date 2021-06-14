import React from 'react';
import styled from 'styled-components';
import { PrimaryColor } from '../../Assets/Color/Color';

const PortfolioTitle = styled.p`
  font-family: 'Spoqa-Regular';
`;

const PortfolioInfo = styled.p`
  font-family: 'Spoqa-Light';
`;

function MyPorfolio() {
  return (
    <>
      <PortfolioTitle>고양이 프로젝트</PortfolioTitle>
      <PortfolioInfo>고양아 야옹해봐 냥냥냥냥냥</PortfolioInfo>
    </>
  );
}

export default MyPorfolio;
