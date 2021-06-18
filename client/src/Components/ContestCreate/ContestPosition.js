import React from 'react';
import styled from 'styled-components';
import { PrimaryColor, PointColor } from '../../Assets/Color/Color';

import Button from '../common/Button/Button';

const PositionBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr 1fr 1fr;
  align-items: center;

  & span {
    text-align: right;
    font-family: 'Spoqa-Medium';
    margin-right: 20px;
    color: ${PrimaryColor};
  }

  & input {
    padding: 0.4rem;
    font-size: 0.8rem;
    font-family: 'Spoqa-Medium';
    border: none;
    border-bottom: 1px solid #ededed;
  }

  & input:first-of-type {
    width: 600px;
  }

  & input:last-of-type {
    width: 50px;
  }

  & button {
    margin-left: 10px;
  }
`;

const ContestPosition = ({ onRemove, id, positions, onChangePositions }) => {
  return (
    <PositionBox>
      <span>포지션</span>
      <input
        type="text"
        placeholder="어떤 포지션인지 적어주세요. 예시: Back-End(Django/AWS)"
      />
      <span>인원 수</span>
      <input type="number" name="" id="" min="1" defaultValue="1" />
      <Button
        onClick={() => onRemove(id)}
        width="70px"
        text="삭제"
        color="#da4b4b"
      />
    </PositionBox>
  );
};

export default ContestPosition;
