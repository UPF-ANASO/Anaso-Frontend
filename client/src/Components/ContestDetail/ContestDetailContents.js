import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ContestDetailApply from './ContestDetailApply';
import Loading from '../common/Loading/Loading';
import Error from '../common/Error/Error';

import { PrimaryColor } from '../../Assets/Color/Color';

import { ContestDetailAPI } from '../../Api/Contest/Contest';

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

const testdata = {
  comments:
    '저는 프론트엔드고 백엔드를 모집중입니다. 같이 상 타실정도로 열심히 하실 분들 구합니다. 추가적으로 기획 및 PM도 모집합니다.',
  details:
    'Praesent tristique felis, quis pharetra, viverra. Laoreet est nunc fermentum vulputate risus odio ipsum diam. Nulla id et, feugiat ultrices tortor lacus non facilisi. Enim dui, id in id at morbi. Mattis ac tempor, vestibulum ac dapibus rhoncus, justo posuere. Et vel pretium et adipiscing. Libero ut tristique pharetra, aliquam.',
};

const ContestDetailContents = ({ match, history }) => {
  const [contestDatas, setContestDatas] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContestDatas = async () => {
      try {
        // 값 초기화
        setError(null);
        setLoading(true);
        setContestDatas(null);

        const contestRes = (await ContestDetailAPI(match.params.id)).data;
        setContestDatas(contestRes);
      } catch (e) {
        // 만약 오류가 생기면 여기서 catch
        setError(e); // error : true
        console.log(match.params.id);
        console.log(e);
      }
      setLoading(false); // 응답 다 받았으면 loading을 종료 (false 값으로 바꿔준다.)
    };
    fetchContestDatas();
  }, []);
  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!contestDatas) return null;
  return (
    <ContentsPanel>
      <TextBox>
        <h2>팀장의 한 마디</h2>
        <hr />
        <p>{testdata.comments}</p>
      </TextBox>
      <ContestDetailApply />
      <TextBox>
        <h2>상세 내용</h2>
        <hr />
        <p>{testdata.details}</p>
      </TextBox>
    </ContentsPanel>
  );
};

export default ContestDetailContents;
