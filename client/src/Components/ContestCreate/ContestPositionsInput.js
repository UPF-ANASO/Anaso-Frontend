import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { PrimaryColor, PointColor } from '../../Assets/Color/Color';

import Button from '../common/Button/Button';
import ContestPosition from './ContestPosition';

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
  grid-gap: 15px 0;
  justify-content: stretch;

  height: 150px;
  margin-top: 15px;
  border: 1px solid #ededed;

  overflow-y: scroll;
`;

const ContestPositionsInput = () => {
  const [positions, setPositions] = useState([{ id: 1 }]);

  const nextId = useRef(2);

  const onInsert = useCallback(() => {
    const position = { id: nextId.current };
    setPositions(positions.concat(position));
    nextId.current += 1;
  }, [positions]);

  const onRemove = useCallback(
    (id) => {
      setPositions(positions.filter((position) => position.id !== id));
    },
    [positions],
  );

  return (
    <PositionPanel>
      <TextandButtonPanel>
        <span>모집할 포지션 설정</span>
        <Button onClick={onInsert} width="145px" text="새로운 포지션 추가" />
      </TextandButtonPanel>
      <PositionsBox>
        {positions.map((position) => (
          <ContestPosition
            key={position.id}
            onRemove={onRemove}
            id={position.id}
          />
        ))}
      </PositionsBox>
    </PositionPanel>
  );
};

export default ContestPositionsInput;
