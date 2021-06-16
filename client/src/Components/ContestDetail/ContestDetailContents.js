import React from 'react';
import styled from 'styled-components';

import ContestDetailApply from './ContestDetailApply';

import { PrimaryColor } from '../../Assets/Color/Color';

const ContentsPanel = styled.div`
  margin: 100px 0;
`;

const TextBox = styled.div`
  margin-bottom: 100px;
  h2 {
    font-family: 'Spoqa-Bold';
    font-size: 1.1em;
    color: ${PrimaryColor};
  }
  hr {
    height: 1px;
    color: #d0d0d0;
    border-color: #d0d0d0;
    background-color: #d0d0d0;
    border: none;
  }
  p {
    margin-top: 30px;
  }
`;

const ContestDetailContents = ({ data }) => {
  return (
    <ContentsPanel>
      <TextBox>
        <h2>상세 내용</h2>
        <hr />
        <p>{data.detail}</p>
      </TextBox>
      <ContestDetailApply />
    </ContentsPanel>
  );
};

export default ContestDetailContents;
