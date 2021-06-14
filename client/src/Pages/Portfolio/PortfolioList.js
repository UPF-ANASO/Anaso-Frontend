import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/common/Header';
import Search from '../../Components/PortfolioList/Search';
import SearchOutput from '../../Components/PortfolioList/SearchOutput';
import { useState, useEffect } from 'react';
import { ProjectListAPI } from '../../Api/Project/Project';

const PortfolioListDiv = styled.div`
  padding: 10px;
  display: flex;
`;

function PortfolioList() {
  const [porfols, setPorfols] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPorfols = async () => {
      try {
        // 값 초기화
        setPorfols(null);
        setLoading(true);
        setError(null);

        const porfolRes = ProjectListAPI();
        setPorfols(porfolRes.data);
        console.log(porfolRes.data);
      } catch (e) {
        setError(e);
      }
    };
  });
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
