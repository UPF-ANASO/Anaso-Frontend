import React from 'react';
import styled from 'styled-components';

import Header from '../../Components/common/Header';
import ContestCategory from '../../Components/common/ContestCategory';
import Footer from '../../Components/Main/Footer';
import ContestEditInputs from '../../Components/ContestEdit/ContestEditInputs';
import ContestEditEditor from '../../Components/ContestEdit/ContestEditEditor';

import Button from '../../Components/common/Button/Button';
import { PointColor } from '../../Assets/Color/Color';

const ContestEditPanel = styled.div`
  margin: 50px 200px;
`;

const ButtonPanel = styled.div`
  width: 100%;
  padding: 10px 0 50px 0;
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
      <ContestEditPanel>
        <ContestEditInputs />
        <ContestEditEditor />
      </ContestEditPanel>
      <ButtonPanel>
        <Button width="1025px" text="수정" color={PointColor} />
      </ButtonPanel>
      <Footer />
    </>
  );
};

export default ContestCreate;
