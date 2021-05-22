import React from 'react';
import styled from 'styled-components';

import ContestDetailTitle from '../../Components/ContestDetail/ContestDetailTitle';
import ContestDetailContents from '../../Components/ContestDetail/ContestDetailContents';
import Header from '../../Components/common/Header';
import Footer from '../../Components/Main/Footer';
import ContestCategory from '../../Components/common/ContestCategory';

const ContestDetailPanel = styled.div`
  margin: 60px 200px;
`;

const ContestDetail = () => {
  return (
    <div>
      <Header />
      <ContestCategory />
      <ContestDetailPanel>
        <ContestDetailTitle />
        <ContestDetailContents />
      </ContestDetailPanel>
      <Footer />
    </div>
  );
};

export default ContestDetail;
