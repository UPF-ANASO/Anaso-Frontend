import React from 'react';
import styled from 'styled-components';

import ContestDetailPanel from '../../Components/ContestDetail/ContestDetailPanel';
import Header from '../../Components/common/Header';
import Footer from '../../Components/Main/Footer';
import ContestCategory from '../../Components/common/ContestCategory';

const ContestDetailPage = styled.div`
  margin: 60px 200px;
`;

const ContestDetail = ({ match, history }) => {
  return (
    <div>
      <Header />
      <ContestCategory />
      <ContestDetailPage>
        <ContestDetailPanel match={match} />
      </ContestDetailPage>
      <Footer />
    </div>
  );
};

export default ContestDetail;
