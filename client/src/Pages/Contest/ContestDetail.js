import React from 'react';
import styled from 'styled-components';

import ContestDetailTitle from '../../Components/ContestDetail/ContestDetailTitle';
import ContestDetailContents from '../../Components/ContestDetail/ContestDetailContents';

const ContestDetailPanel = styled.div`
  margin: 30px 200px;
`;

const ContestDetail = () => {
  return (
    <div>
      <ContestDetailPanel>
        <ContestDetailTitle />
        <ContestDetailContents />
      </ContestDetailPanel>
    </div>
  );
};

export default ContestDetail;
