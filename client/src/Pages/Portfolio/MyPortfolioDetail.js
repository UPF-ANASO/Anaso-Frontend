import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/common/Header';
import CardDetail from '../../Components/PorfoliDetail/CardDetail';

function MyPortfolioDetail({ match }) {
  return (
    <>
      <Header />
      <CardDetail match={match} />
    </>
  );
}

export default MyPortfolioDetail;
