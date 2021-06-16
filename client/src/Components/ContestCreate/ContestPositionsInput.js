import React from 'react';
import styled from 'styled-components';
import { PrimaryColor, PointColor } from '../../Assets/Color/Color';

import Button from '../common/Button/Button';

const PositionPanel = styled.div`
  margin: 40px 0 30px 0;
`;

const TextandButtonPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  & > span {
    font-family: 'Spoqa-Medium';
    color: ${PrimaryColor};
    margin-right: 20px;
  }

  & > button {
    font-size: 0.8em;
    font-family: 'Spoqa-Medium';
  }
`;

const PositionsBox = styled.div`
  display: grid;
  grid-gap: 15px 10px;
  padding: 20px 0;
  justify-content: stretch;

  height: 150px;
  margin-top: 15px;
  border: 1px solid #ededed;

  overflow-y: scroll;
`;

const PositionBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr 1fr 1fr;
  align-items: center;

  & span {
    text-align: right;
    font-family: 'Spoqa-Medium';
    margin-right: 30px;
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
    width: 500px;
  }

  & input:last-of-type {
    width: 50px;
  }

  & button {
    margin-left: 10px;
  }
`;

const ContestPositionsInput = () => {
  return (
    <PositionPanel>
      <TextandButtonPanel>
        <span>모집할 포지션 설정</span>
        <Button width="145px" text="새로운 포지션 추가" />
      </TextandButtonPanel>
      <PositionsBox>
        <PositionBox>
          <span>포지션</span>
          <input
            type="text"
            placeholder="어떤 포지션인지 적어주세요. 예시: Back-End(Django/AWS)"
          />
          <span>인원 수</span>
          <input type="number" name="" id="" min="1" value="1" />
          <Button width="70px" text="삭제" color="#da4b4b" />
        </PositionBox>
        <PositionBox>
          <span>포지션</span>
          <input
            type="text"
            placeholder="어떤 포지션인지 적어주세요. 예시: Back-End(Django/AWS)"
          />
          <span>인원 수</span>
          <input type="number" name="" id="" min="1" value="1" />
          <Button width="70px" text="삭제" color="#da4b4b" />
        </PositionBox>
        <PositionBox>
          <span>포지션</span>
          <input
            type="text"
            placeholder="어떤 포지션인지 적어주세요. 예시: Back-End(Django/AWS)"
          />
          <span>인원 수</span>
          <input type="number" name="" id="" min="1" value="1" />
          <Button width="70px" text="삭제" color="#da4b4b" />
        </PositionBox>
      </PositionsBox>
    </PositionPanel>
  );
};

export default ContestPositionsInput;
