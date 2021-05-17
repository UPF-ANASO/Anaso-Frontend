import React from 'react';
import styled from 'styled-components';

import ContestDetailApply from './ContestDetailApply';

import { PrimaryColor } from '../../Assets/Color/Color';

const ContentsPanel = styled.div`
  margin: 100px 0;
`;

const TextBox = styled.div`
  margin-bottom: 100px;
  h2 {
    font-family: 'Spoqa-Bold';
    font-size: 1.1em;
    color: ${PrimaryColor};
  }
  hr {
    height: 1px;
    color: #d0d0d0;
    border-color: #d0d0d0;
    background-color: #d0d0d0;
    border: none;
  }
  p {
    margin-top: 30px;
  }
`;

const ContestDetailContents = () => {
  return (
    <ContentsPanel>
      <TextBox>
        <h2>팀장의 한 마디</h2>
        <hr />
        <p>
          저는 프론트엔드고 백엔드를 모집중입니다. 같이 상 타실정도로 열심히
          하실 분들 구합니다. 추가적으로 기획 및 PM도 모집합니다.
        </p>
      </TextBox>
      <ContestDetailApply />
      <TextBox>
        <h2>상세 내용</h2>
        <hr />
        <p>
          Praesent tristique felis, quis pharetra, viverra. Laoreet est nunc
          fermentum vulputate risus odio ipsum diam. Nulla id et, feugiat
          ultrices tortor lacus non facilisi. Enim dui, id in id at morbi.
          Mattis ac tempor, vestibulum ac dapibus rhoncus, justo posuere. Et vel
          pretium et adipiscing. Libero ut tristique pharetra, aliquam.
          Fringilla dictum scelerisque vitae imperdiet sed tellus, etiam varius
          habitant. Montes, nullam euismod auctor tellus sed tincidunt risus ut
          mauris. A velit egestas justo, egestas a nec viverra amet, venenatis.
        </p>
      </TextBox>
    </ContentsPanel>
  );
};

export default ContestDetailContents;
