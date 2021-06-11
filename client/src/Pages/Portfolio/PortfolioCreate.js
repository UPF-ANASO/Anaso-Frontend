import React from 'react';
import { useState, useEffect } from 'react';
import { ProjectCreateAPI } from '../../Api/Project/Project';

function PortfolioCreate() {
  // useState 객체 형태로 .
  const [content, setContent] = useState({
    // 초기값 설정
    title: '',
    date: '',
  });
  // 구조분해할당.
  // title, date 에 각각 초기값이 먼저 들어감.
  // 값이 바뀌면 구조분해할당으로 title 값에 text 값이, date 값에 date 값이 들어간다.
  const { title, date } = content;
  // input 에 값이 입력될 때마다 함수 실행
  const handleChange = (e) => {
    const { value, name } = e.target;
    setContent({
      // 먼저 기존의 input 값 복사
      ...content,
      // 새롭게 바뀐 value 값으로 추가
      [name]: value,
    });
    console.log({ title });
    console.log({ date });

    const handlesubmit = (event) => {
      event.preventDefault();
      console.log('submit');
    };
  };
  return (
    <form onSubmit={handlesubmit}>
      <input
        name="title"
        placeholder="제목을 입력하세요."
        value={title}
        onChange={handleChange}
      />
      <input name="date" type="date" value={date} onChange={handleChange} />
      <p>
        <span>작성자: </span>
        <span>밈</span>
      </p>
      <p>이미지라고 치는 문구</p>
      <p>
        <span>역할:</span>
        <span>팀장</span>
      </p>
      <input type="button" value="저장" />
    </form>
  );
}

export default PortfolioCreate;
