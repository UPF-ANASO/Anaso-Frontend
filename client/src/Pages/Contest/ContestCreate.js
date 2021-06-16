import React from 'react';
import styled from 'styled-components';
import ContestCategory from '../../Components/common/ContestCategory';
import Header from '../../Components/common/Header';
import ContestCreateInputs from '../../Components/ContestCreate/ContestCreateInputs';
import ContestPositionsInput from '../../Components/ContestCreate/ContestPositionsInput';
import Footer from '../../Components/Main/Footer';

import Button from '../../Components/common/Button/Button';
import ContestCreatEditor from '../../Components/ContestCreate/ContestCreatEditor';
import { PointColor } from '../../Assets/Color/Color';

const ContestCreatePanel = styled.div`
  margin: 50px 200px;
`;

const ButtonPanel = styled.div`
  width: 100%;
  padding: 10px 0 50px 0;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;

  & > button {
    font-size: 1rem;
    font-family: 'Spoqa-Bold';
  }
`;

const ContestCreate = () => {
  return (
    <>
      <Header />
      <ContestCategory />
      <ContestCreatePanel>
        <ContestCreateInputs />
        <ContestPositionsInput />
        <ContestCreatEditor />
      </ContestCreatePanel>
      <ButtonPanel>
        <Button width="1025px" text="등록" color={PointColor} />
      </ButtonPanel>
      <Footer />
    </>
  );
};

export default ContestCreate;
