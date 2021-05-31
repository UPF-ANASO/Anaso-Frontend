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
  overflow: visible;
`;

const PositionBox = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr 1fr;
`;

const testdata = [
  {
    id: 1,
    position: 'Back-End (Spring/Django/Python)',
    total: 3,
    available: true,
  },
  { id: 2, position: 'PM', total: 1, available: true },
  { id: 3, position: 'Front-End (ReactJS)', total: 2, available: false },
];

const ContestDetailApply = () => {
  return (
    <ApplyPanel>
      <h2>포지션 별 신청하기</h2>
      <hr />
      <ApplyBox>
        {/* 신청 가능 */}
        {testdata.map((data) => (
          <PositionBox key={data.id}>
            <span>{data.position}</span>
            <span>{data.total} 명</span>
            {data.available ? (
              <Button width="90px" text="신청하기" />
            ) : (
              <Button width="90px" text="신청마감" color="#d25b5b" />
            )}
          </PositionBox>
        ))}
      </ApplyBox>
    </ApplyPanel>
  );
};

export default ContestDetailApply;
