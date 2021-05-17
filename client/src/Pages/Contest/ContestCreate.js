import React from 'react';
import styled from 'styled-components';
import ContestCreateInputs from '../../Components/ContestCreate/ContestCreateInputs';

const ContestCreatePanel = styled.div`
  margin: 30px 200px;
`;

const ContestCreate = () => {
  return (
    <ContestCreatePanel>
      <ContestCreateInputs />
    </ContestCreatePanel>
  );
};

export default ContestCreate;
