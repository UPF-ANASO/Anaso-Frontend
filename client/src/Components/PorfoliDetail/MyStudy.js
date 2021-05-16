import React from 'react';
import styled from 'styled-components';

const MyStudyDiv = styled.div`
  width: 25%;
  /* height: 25%; */
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px #e4e4e4;
  & > p {
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
