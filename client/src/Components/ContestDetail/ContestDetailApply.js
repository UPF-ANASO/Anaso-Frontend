import React from 'react';
import styled from 'styled-components';

import Button from '../common/Button/Button';
import { PrimaryColor } from '../../Assets/Color/Color';

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
  grid-template-columns: 1fr 1fr;
  overflow: visible;
`;

const PositionBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  & span:first-of-type {
    min-width: 200px;
  }
`;

const ContestDetailApply = () => {
  return (
    <ApplyPanel>
      <h2>포지션 별 신청하기</h2>
      <hr />
      <ApplyBox>
        {/* 신청 가능 */}
        <PositionBox>
          <span>Back-End (Spring/Django/Python)</span>
          <span>3 명</span>
          <Button width="90px" text="신청하기" />
        </PositionBox>
        <PositionBox>
          <span>PM</span>
          <span>1 명</span>
          <Button width="90px" text="신청하기" />
        </PositionBox>
        {/* 신청 마감 */}
        <PositionBox>
          <span>Front-End (ReactJS)</span>
          <span>3 명</span>
          <Button width="90px" text="신청하기" color="#f57168" />
        </PositionBox>
      </ApplyBox>
    </ApplyPanel>
  );
};

export default ContestDetailApply;
