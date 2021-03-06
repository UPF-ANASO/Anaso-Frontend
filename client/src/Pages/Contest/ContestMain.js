import React from 'react';
import ContestCategory from '../../Components/common/ContestCategory';
import ContestBanner from '../../Components/ContestMain/ContestBanner';
import ContestCardList from '../../Components/ContestMain/ContestCardList';
import Header from '../../Components/common/Header';

const ContestMain = () => {
  return (
    <div>
      <Header />
      <ContestCategory />
      <ContestBanner />
      <ContestCardList />
    </div>
  );
};

export default ContestMain;
