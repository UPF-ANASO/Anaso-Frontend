import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SS = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: blue;
`;

function ApiTest() {
  // 변수 state 초기값 설정.
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 컴포넌트가 화면에 나타날 때 실행할 함수 선언
    const fetchUsers = async () => {
      try {
        // 요청 시작 : error 와 users 초기화
        setError(null);
        setUsers(null);
        // loading 값 true
        setLoading(true);
        // 응답을 res 에 저장.
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        );
        // users 에 res 안에 있는 data 를 저장.
        setUsers(res.data);
      } catch (e) {
        // 만약 오류가 생기면 여기서 catch
        setError(e); // error : true
      }
      setLoading(false); // 응답 다 받았으면 loading 을 종료 (false 값으로 바꿔준다.)
    };
    // 함수 fetchUsers() 실행
    fetchUsers();
  }, []);
  if (loading)
    return (
      <SS>
        <h1>로딩중..!!!!!!!!!!!</h1>
      </SS>
    ); // loading == true
  if (error) return <div>에러 발생</div>; // error == true
  if (!users) return null; // users == false
  return (
    <div>
      <p>api 테스트 페이지</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApiTest;
