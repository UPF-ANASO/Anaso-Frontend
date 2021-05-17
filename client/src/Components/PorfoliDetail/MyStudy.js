import React from 'react';
import styled from 'styled-components';
import { PrimaryColor, TextColorBlack } from '../../Assets/Color/Color';

const MyStudyDiv = styled.div`
  width: 25%;
  min-width: 250px;
  height: 30%;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 5px 5px 5px 5px #e4e4e4;
  & > p {
    font-family: 'Spoqa-Medium';
    font-size: 1.2rem;
  }
`;

function MyStudy() {
  return (
    <MyStudyDiv>
      <p>참여 중인 스터디</p>
    </MyStudyDiv>
  );
}

export default MyStudy;
