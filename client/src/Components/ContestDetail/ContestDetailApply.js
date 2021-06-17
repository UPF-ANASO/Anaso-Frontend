import React from 'react';
import styled from 'styled-components';

import Button from '../common/Button/Button';
import { PrimaryColor, ShadowColor } from '../../Assets/Color/Color';

const ApplyPanel = styled.div`
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
    margin-bottom: 30px;
  }
`;

const ApplyBox = styled.div`
  display: grid;
  grid-gap: 20px 0;
  overflow: visible;
  & span {
    padding-top: 10px;
  }
`;

const PositionBox = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr 1fr;
`;

const DisableButton = styled.button`
  width: 90px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-family: 'Spoqa-Regular';
  color: #fff;
  background-color: #888;
`;

const ContestDetailApply = ({ positions }) => {
  return (
    <ApplyPanel>
      <h2>포지션 별 신청하기</h2>
      <hr />
      <ApplyBox>
        {positions.map((position, index) => (
          <PositionBox key={index}>
            <span>{position.positionName}</span>
            <span>{position.recruitNumbers} 명</span>
            {position.recruitNumbers === position.confirmedNumbers ? (
              <DisableButton width="90px">인원 마감</DisableButton>
            ) : (
              <Button width="90px" text="신청하기" />
            )}
          </PositionBox>
        ))}
      </ApplyBox>
    </ApplyPanel>
  );
};

export default ContestDetailApply;
