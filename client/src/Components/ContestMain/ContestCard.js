import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../Assets/Images/icon-rightarrow.svg';

import { PrimaryColor } from '../../Assets/Color/Color';

const CardPanel = styled.div`
  width: 300px;
  height: 480px;
  padding: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;

  box-shadow: 0px 0px 30px rgba(57, 40, 166, 0.15);
  border-radius: 20px;
  & > img {
    width: 300px;
    height: 350px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const CardTitle = styled.div`
  width: 100%;
  margin: 15px 0 10px 0;

  display: flex;
  justify-content: space-between;
  & > span {
    font-family: 'Spoqa-Bold';
    display: block;
  }
  & > span:first-of-type {
    width: 100%;
    padding-top: 4px;
    max-width: 230px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  & > span:last-of-type {
    padding: 5px 8px;

    font-size: 0.8rem;

    border-radius: 10px;
    background-color: #f57168;
    color: white;
  }
`;

const CardContent = styled.div`
  margin: 5px 0 10px 0;

  & > p {
    text-align: justify;
    font-size: 0.9em;
  }
`;

const CardBottom = styled.div`
  width: 100%;
  margin-top: 10px;

  display: flex;
  justify-content: space-between;
  & > div {
    cursor: pointer;
  }
  & > div > span {
    margin-right: 6px;
    font-family: 'Spoqa-Bold';
    color: ${PrimaryColor};
  }
  & > span {
    font-size: 0.9em;
  }
`;

const ContestCard = () => {
  return (
    <CardPanel>
      <img
        src="https://allforyoung-maycan-seoul.s3.ap-northeast-2.amazonaws.com/uploads/post_photos/2021/05/14/7f607877ec4844b3a4e22afd20c3cfb8.jpg"
        alt=""
      />
      <CardTitle>
        <span>2021 위핏 UX∙마케팅 아이디어 공모전</span>
        <span>D-3</span>
      </CardTitle>
      <CardContent>
        <p>
          {/* 여기도 말줄임 필요한데 어케 해야될지 몰겠다... */}
          고려대학교에서 주최하는 대학생 언택트 서비스를 주제로 해커톤을
          진행합니다.
        </p>
      </CardContent>
      <CardBottom>
        {/* 나중에 링크 처리해줘야 하는 곳 */}
        <div>
          <span>자세히 보기</span>
          <Arrow />
        </div>
        <span>조회수 1</span>
      </CardBottom>
    </CardPanel>
  );
};

export default ContestCard;
