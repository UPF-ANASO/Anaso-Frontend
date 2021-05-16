import React from 'react';
import ContestCard from './ContestCard';
import styled from 'styled-components';

const CardListPanel = styled.div`
  width: 100%;
  padding: 5% 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33%, auto));
  grid-gap: 3% 0;
  justify-items: center;
`;

const ContestCardList = () => {
  return (
    <CardListPanel>
      <ContestCard />
      <ContestCard />
      <ContestCard />
      <ContestCard />
      <ContestCard />
      <ContestCard />
      <ContestCard />
      <ContestCard />
      <ContestCard />
    </CardListPanel>
  );
};

export default ContestCardList;
