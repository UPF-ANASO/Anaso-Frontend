import React from 'react';
import ContestCategory from '../../Components/ContestMain/ContestCategory';
import ContestBanner from '../../Components/ContestMain/ContestBanner';
import ContestCardList from '../../Components/ContestMain/ContestCardList';

const ContestMain = () => {
  return (
    <div>
      <ContestCategory />
      <ContestBanner />
      <ContestCardList />
    </div>
  );
};

export default ContestMain;
