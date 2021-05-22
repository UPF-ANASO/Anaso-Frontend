import React from 'react';
import ContestCard from './ContestCard';
import styled from 'styled-components';

import Button from '../common/Button/Button';

const CardListPanel = styled.div`
  width: 100%;
  margin: 3% 0 10% 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33%, auto));
  grid-gap: 3% 0;
  justify-items: center;
`;

const ButtonsPanel = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
`;

const FilterButtonsPanel = styled.div`
  & button:first-of-type {
    margin-right: 10px;
  }
`;

const ContestCardList = () => {
  return (
    <>
      <ButtonsPanel>
        <FilterButtonsPanel>
          <Button width="80px" text="마감기한 순" />
          <Button width="100px" text="조회수 높은 순" color="#7d7d7d" />
        </FilterButtonsPanel>
        <div>
          <Button width="80px" text="새 글 쓰기" />
        </div>
      </ButtonsPanel>
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
    </>
  );
};

export default ContestCardList;
