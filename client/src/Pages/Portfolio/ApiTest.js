import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { instance } from '../../Api/Server';
import { ProjectCreateAPI, ProjectListAPI } from '../../Api/Project/Project';

const SS = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: blue;
`;

function ApiTest() {
  // 변수 state 초기값 설정.
  const [tests, setTests] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 컴포넌트가 화면에 나타날 때 실행할 함수 선언
    const fetchUsers = async () => {
      try {
        // 요청 시작 : error 와 tests 초기화
        setError(null);
        setTests(null);
        // loading 값 true
        setLoading(true);
        // 응답을 res 에 저장.
        const res = await axios.get('projects/lists');
        // console.log(res.data[0]);
        setTests(res.data);
      } catch (e) {
        // 만약 오류가 생기면 여기서 catch
        setError(e); // error : true
      }
      setLoading(false); // 응답 다 받았으면 loading 을 종료 (false 값으로 바꿔준다.)
    };
    // 함수 fetchUsers() 실행
    fetchUsers();
    // 프젝 생성 api 실행 ..
    const post = ProjectCreateAPI();
    // 프젝 리스트 api 실행 ..
    const list = ProjectListAPI();
    console.log(post);
    console.log(list);
    // console.log(tests);
  }, []);
  if (loading)
    return (
      <SS>
        <h1>로딩중..!!!!!!!!!!!</h1>
      </SS>
    ); // loading == true
  if (error) return <div>에러 발생</div>; // error == true
  if (!tests) return null; // tests == false
  return (
    <div>
      <p>api 테스트 페이지</p>
      <p>{tests.title}</p>
      <p>{tests.role}</p>
      <p>{tests.startDate}</p>
    </div>
  );
}

export default ApiTest;
