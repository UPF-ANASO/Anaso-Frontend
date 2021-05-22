import React from 'react';
import styled from 'styled-components';
import ContestCategory from '../../Components/common/ContestCategory';
import Header from '../../Components/common/Header';
import ContestCreateInputs from '../../Components/ContestCreate/ContestCreateInputs';
import Footer from '../../Components/Main/Footer';

import Button from '../../Components/common/Button/Button';

const ContestCreatePanel = styled.div`
  margin: 50px 200px;
`;

const ButtonPanel = styled.div`
  width: 100%;
  padding: 10px 0 50px 0;
  display: flex;
  justify-content: center;
`;

const ContestCreate = () => {
  return (
    <>
      <Header />
      <ContestCategory />
      <ContestCreatePanel>
        <ContestCreateInputs />
      </ContestCreatePanel>
      <ButtonPanel>
        <Button width="1025px" text="등록" />
      </ButtonPanel>
      <Footer />
    </>
  );
};

export default ContestCreate;
