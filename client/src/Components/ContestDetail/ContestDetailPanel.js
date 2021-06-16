import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loading from '../common/Loading/Loading';
import Error from '../common/Error/Error';

import { ContestDetailAPI } from '../../Api/Contest/Contest';

import ContestDetailContents from './ContestDetailContents';
import ContestDetailTitle from './ContestDetailTitle';

const ContestDetailPanel = ({ match, history }) => {
  const [contestDetailDatas, setContestDetailDatas] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContestDatas = async () => {
      try {
        // 값 초기화
        setError(null);
        setLoading(true);
        setContestDetailDatas(null);

        const contestDetailRes = await ContestDetailAPI();
        setContestDetailDatas(contestDetailRes.data);
      } catch (e) {
        setError(e); // error : true
        console.log(e);
      }
      setLoading(false); // 응답 다 받았으면 loading을 종료 (false 값으로 바꿔준다.)
    };
    fetchContestDatas();
  }, []);
  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!contestDetailDatas) return null;
  return (
    <>
      <ContestDetailTitle data={contestDetailDatas} />
      <ContestDetailContents data={contestDetailDatas} />
    </>
  );
};

export default ContestDetailPanel;
