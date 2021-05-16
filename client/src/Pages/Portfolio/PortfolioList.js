import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/common/Header';
import Search from '../../Components/PortfolioList/Search';
import SearchOutput from '../../Components/PortfolioList/SearchOutput';

const PortfolioListDiv = styled.div`
  padding: 10px;
  display: flex;
`;

function PortfolioList() {
  return (
    <>
      <Header />
      <PortfolioListDiv>
        <Search />
        <SearchOutput />
      </PortfolioListDiv>
    </>
  );
}

export default PortfolioList;
