import React from 'react';
import styled from 'styled-components';

const MyContestDiv = styled.div`
  width: 25%;
  min-width: 250px;
  height: 30%;
  box-shadow: 5px 5px 5px 5px #e4e4e4;
  padding: 20px;
  border-radius: 10px;
  & > p {
    font-family: 'Spoqa-Medium';
    font-size: 1.2rem;
  }
`;

function MyContest() {
  return (
    <MyContestDiv>
      <p>참여 중인 공모전</p>
    </MyContestDiv>
  );
}

export default MyContest;
