import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeField,
  initialize,
} from '../../Redux/reducers/contest_create_reducer';

import ContestCreateInputs from './ContestCreateInputs';
import ContestCreatEditor from './ContestCreatEditor';
import ContestPositionsInput from './ContestPositionsInput';

import Button from '../../Components/common/Button/Button';
import { PointColor } from '../../Assets/Color/Color';

const ButtonPanel = styled.div`
  width: 100%;
  margin: 50px 0;
  display: flex;
  justify-content: center;

  & > button {
    font-size: 1rem;
    font-family: 'Spoqa-Bold';
  }
`;

const ContestCreateContainer = () => {
  const dispatch = useDispatch();
  const {
    contestName,
    title,
    deadLine,
    homepage,
    detail,
    poster,
    category,
    organizer,
    totalMembers,
    positions,
  } = useSelector(({ contestCreate }) => ({
    contestName: contestCreate.contestName,
    title: contestCreate.title,
    deadLine: contestCreate.deadLine,
    detail: contestCreate.detail,
    poster: contestCreate.poster,
    category: contestCreate.category,
    organizer: contestCreate.organizer,
    totalMembers: contestCreate.totalMembers,
    positions: contestCreate.applyStatus.positions,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  // 언마운트 될 때 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <>
      <ContestCreateInputs
        onChangeField={onChangeField}
        title={title}
        category={category}
        contestName={contestName}
        deadLine={deadLine}
        poster={poster}
        organizer={organizer}
        totalMembers={totalMembers}
        homepage={homepage}
      />
      <ContestPositionsInput
        onChangeField={onChangeField}
        positions={positions}
      />
      <ContestCreatEditor onChangeField={onChangeField} detail={detail} />
      <ButtonPanel>
        <Button width="1025px" text="등록" color={PointColor} />
      </ButtonPanel>
    </>
  );
};

export default ContestCreateContainer;
