import React from 'react';
import styled from 'styled-components';
import ContestCategory from '../../Components/common/ContestCategory';
import Header from '../../Components/common/Header';
import ContestCreateContainer from '../../Components/ContestCreate/ContestCreateContainer';
import Footer from '../../Components/Main/Footer';

const ContestCreatePanel = styled.div`
  margin: 50px 200px;
`;

const ContestCreate = () => {
  return (
    <>
      <Header />
      <ContestCategory />
      <ContestCreatePanel>
        <ContestCreateContainer />
      </ContestCreatePanel>
      <Footer />
    </>
  );
};

export default ContestCreate;
