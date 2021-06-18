import React from 'react';
import { useState, useEffect } from 'react';
import { ProjectCreateAPI } from '../../Api/Project/Project';
// import PortfolioEditor from '../../Components/PortfolioCreate/PortfolioEditor';
import Header from '../../Components/common/Header';
import { useSelector } from 'react-redux';

function PortfolioCreate() {
  // redux 에서 userid, currentToken 받아오기
  const userId = useSelector((state) => state.userInfo.userInfo.userID);
  const token = useSelector((state) => state.auth.currentToken);
  // 헤더 부분 정의
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  };
  // useState 객체 형태로 .
  const [content, setContent] = useState({
    // 초기값 설정
    title: '',
    explanation: '',
    role: '',
    // thumbnail: null,
  });

  const [imageFile, setImgFile] = useState(null);
  // 구조분해할당.
  // title, date 에 각각 초기값이 먼저 들어감.
  // 값이 바뀌면 구조분해할당으로 title 값에 text 값이, date 값에 date 값이 들어간다.
  const { title, explanation, role } = content;
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
    // console.log({ role });
    // console.log({ thumbnail });
  };

  const handleChangeFile = (e) => {
    // let reader = new FileReader();
    const files = e.target.files[0];
    setImgFile(files);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('title', title);
    formdata.append('explanation', explanation);
    formdata.append('role', role);
    formdata.append('thumbnail', imageFile);
    formdata.append('config', config);
    formdata.append('user_id', userId);
    // title = e.target.title.value;
    // role = e.target.role.value;
    ProjectCreateAPI(formdata, config);
  };
  return (
    <>
      <Header />
      <form onSubmit={handlesubmit}>
        <input
          name="title"
          placeholder="제목을 입력하세요."
          value={title}
          onChange={handleChange}
        />
        <input
          name="explanation"
          placeholder="설명을 입력하세요."
          value={explanation}
          onChange={handleChange}
        />
        <input
          name="role"
          placeholder="역할을 입력하세요."
          value={role}
          onChange={handleChange}
        />
        <input
          // name="thumbnail"
          type="file"
          // value={thumbnail}
          onChange={handleChangeFile}
        />
        <input type="submit" value="저장" />
      </form>
      {/* <PortfolioEditor /> */}
    </>
  );
}

export default PortfolioCreate;
