import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { PrimaryColor } from '../../Assets/Color/Color';
import Button from '../common/Button/Button';

const TitleInput = styled.div`
  margin-bottom: 30px;
  & input {
    width: 100%;
    font-size: 1.5em;
    font-family: 'Spoqa-Bold';
    padding: 0.4rem;
    border: none;
  }
  & hr {
    height: 1px;
    color: #d0d0d0;
    border-color: #d0d0d0;
    background-color: #d0d0d0;
    border: none;
  }
`;

const DetailInput = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px 0;
  align-items: center;
  & span {
    margin-right: 30px;
    font-family: 'Spoqa-Medium';
    color: ${PrimaryColor};
  }
  & input {
    width: 180px;
    margin-right: 30px;
    padding: 0.4rem;
    font-family: 'Spoqa-Medium';
    border: none;
    border-bottom: 1px solid #ededed;
  }
  & select {
    margin-right: 30px;
    padding: 0.4rem;
    font-family: 'Spoqa-Medium';
    font-size: 0.8rem;
    border: none;
  }
`;

const QuillPanel = styled.div`
  margin: 50px 0;
  & > * {
    font-family: 'Spoqa-Light';
  }
`;

const ButtonPanel = styled.div`
  width: 100%;
  padding: 10px 0 50px 0;
  display: flex;
  justify-content: center;
`;

const ContestCreateInputs = () => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];

  return (
    <>
      <TitleInput>
        <input type="text" placeholder="제목을 입력하세요" />
        <hr />
      </TitleInput>
      <DetailInput>
        <span>분야</span>
        <select name="">
          <option value="">기획/아이디어</option>
          <option value="">디자인/광고/마케팅</option>
          <option value="">사진/영상</option>
          <option value="">문학/수기/시나리오</option>
          <option value="">IT/소프트웨어</option>
        </select>
        <span>응모 대상</span>
        <input type="text" placeholder="" />
        <span>주최/주관</span>
        <input type="text" placeholder="" />
        <span>후원/협찬</span>
        <input type="text" placeholder="" />
        <span>접수기간</span>
        <input type="datetime-local" name="" id="" />
        <span>~</span>
        <input type="datetime-local" name="" id="" />
        <span>지원 규모</span>
        <input type="number" placeholder="" />
        <span>홈페이지</span>
        <input type="text" placeholder="" />
      </DetailInput>
      <QuillPanel>
        <ReactQuill
          theme="snow"
          style={{ height: '500px' }}
          theme="snow"
          modules={modules}
          formats={formats}
        />
      </QuillPanel>
      <ButtonPanel>
        <Button width="100%" text="등록" />
      </ButtonPanel>
    </>
  );
};

export default ContestCreateInputs;
