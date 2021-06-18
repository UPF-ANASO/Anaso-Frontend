import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserProjectAPI } from '../../Api/Project/Project';
import { PrimaryColor } from '../../Assets/Color/Color';
import Loading from '../common/Loading/Loading';
import Error from '../common/Error/Error';
import PortfolioCard from './PortfolioCard';

function MyPorfolio({ match }) {
  const userId = match.params.id;
  // state 설정
  const [porfols, setPorfols] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const { userid } = match.params;
  useEffect(() => {
    // 컴포넌트가 화면에 나타날 때 실행할 함수
    const fetchOutputs = async () => {
      try {
        // Error, Porfol 빈값으로, Loading true 로 로딩화면 보이게
        setError(null);
        setLoading(true);
        // api 로부터 호출된 값 저장
        const result = (await UserProjectAPI(userId)).data;
        // state에 저장
        setPorfols(result);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false); // 응답이 오면 Loading 종료
    };
    // 함수 fetchUsers 실행
    fetchOutputs();
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
    // props 로 data 전달
    <>
      <PortfolioCard data={porfols} />
    </>
  );
}

export default MyPorfolio;
