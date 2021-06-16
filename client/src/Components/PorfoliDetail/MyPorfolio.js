import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProjectListAPI, TestAPI } from '../../Api/Project/Project';
import { PrimaryColor } from '../../Assets/Color/Color';
import Loading from '../common/Loading/Loading';
import Error from '../common/Error/Error';

const PortfolioTitle = styled.p`
  font-family: 'Spoqa-Regular';
`;

const PortfolioInfo = styled.p`
  font-family: 'Spoqa-Light';
`;

function MyPorfolio() {
  // state 설정
  const [porfols, setPorfols] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 컴포넌트가 화면에 나타날 때 실행할 함수
    const fetchOutputs = async () => {
      try {
        // Error, Porfol 빈값으로, Loading true 로 로딩화면 보이게
        setError(null);
        setPorfols(null);
        setLoading(true);
        // api 로부터 호출된 값 저장
        const result = (await ProjectListAPI()).data;
        // console.log(a);
        // state에 저장
        setPorfols(result);
        console.log(result);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false); // 응답이 오면 Loading 종료
    };
    // 함수 fetchUsers 실행
    fetchOutputs();
    // console.log(porfols);
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
      {porfols.map((porfol) => (
        <p key={porfols._id}>{porfols.title}</p>
      ))}
    </>
  );
}

export default MyPorfolio;
