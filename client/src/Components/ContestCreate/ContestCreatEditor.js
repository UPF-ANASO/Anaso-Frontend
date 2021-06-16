import React from 'react';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { PrimaryColor } from '../../Assets/Color/Color';

const SpanPanel = styled.div`
  margin: 50px 0 20px 0;
  & > span {
    text-align: right;
    font-family: 'Spoqa-Medium';
    color: ${PrimaryColor};
  }
`;

const QuillPanel = styled.div`
  & > * {
    font-family: 'Spoqa-Light';
  }
`;

const ContestCreatEditor = () => {
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
    <div>
      <SpanPanel>
        <span>상세 내용</span>
      </SpanPanel>
      <QuillPanel>
        <ReactQuill
          theme="snow"
          style={{ height: '500px' }}
          theme="snow"
          modules={modules}
          formats={formats}
        />
      </QuillPanel>
    </div>
  );
};

export default ContestCreatEditor;
