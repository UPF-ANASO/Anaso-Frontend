import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { UserContestAPI } from '../../Api/Project/Contest';
import Loading from '../common/Loading/Loading';
import Error from '../common/Error/Error';
import ContestCard from './ContestCard';

function MyContest({ match }) {
  const userId = match.params.id;
  // state 설정
  const [mycontest, setContest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const { userid } = match.params;
  useEffect(() => {
    // 컴포넌트가 화면에 나타날 때 실행할 함수
    const fetchMyContest = async () => {
      try {
        // Error, Porfol 빈값으로, Loading true 로 로딩화면 보이게
        setError(null);
        setLoading(true);
        // api 로부터 호출된 값 저장
        const result = (await UserContestAPI(userId)).data;
        // state에 저장
        setContest(result);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false); // 응답이 오면 Loading 종료
    };
    // 함수 fetchUsers 실행
    fetchMyContest();
  }, []);
  // 로딩 시
  if (loading)
    return (
      <>
        <Loading />
      </>
    );
  // 에러 발생 시
  if (error)
    return (
      <>
        <Error />
      </>
    );
  return (
    <>
      <ContestCard data={mycontest} />
    </>
  );
}

export default MyContest;
