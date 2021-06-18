import React from 'react';
import { useState, useEffect } from 'react';
import { ProjectCreateAPI } from '../../Api/Project/Project';
import PortfolioEditor from '../../Components/PortfolioCreate/PortfolioEditor';
import Header from '../../Components/common/Header';
import { useSelector } from 'react-redux';

function PortfolioCreate() {
  const userId = useSelector((state) => state.userInfo.userInfo.userID);
  const token = useSelector((state) => state.auth.currentToken);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  // console.log(config);
  // useState 객체 형태로 .
  const [content, setContent] = useState({
    // 초기값 설정
    title: '',
  });
  // 구조분해할당.
  // title, date 에 각각 초기값이 먼저 들어감.
  // 값이 바뀌면 구조분해할당으로 title 값에 text 값이, date 값에 date 값이 들어간다.
  const { title } = content;
  // input 에 값이 입력될 때마다 함수 실행
  const handleChange = (e) => {
    const { value, name } = e.target;
    setContent({
      // 먼저 기존의 input 값 복사
      ...content,
      // 새롭게 바뀐 value 값으로 추가
      [name]: value,
    });
    // console.log({ title });
    // console.log({ date });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    // title = e.target.title.value;
    // date = e.target.date.value;
    // console.log({ title });
    ProjectCreateAPI(title, config, userId);
    // console.log(a);
  };
  // console.log({ a });
  return (
    <>
      <Header />
      {/* <p>{a}</p> */}
      <form onSubmit={handlesubmit}>
        <input
          name="title"
          placeholder="제목을 입력하세요."
          value={title}
          onChange={handleChange}
        />
        <input type="submit" value="저장" />
      </form>
      <PortfolioEditor />
    </>
  );
}

export default PortfolioCreate;
