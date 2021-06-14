import React, { useState, useEffect } from 'react';
import ContestCard from './ContestCard';
import styled from 'styled-components';

import Button from '../common/Button/Button';
import { Link } from 'react-router-dom';

import { ContestListAPI } from '../../Api/Contest/Contest';
import Loading from '../common/Loading/Loading';
import { PointColor } from '../../Assets/Color/Color';

const CardListPanel = styled.div`
  width: 100%;
  margin: 60px 0 10% 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33%, auto));
  grid-gap: 60px 0;
  justify-items: center;
`;

const FilterAndButtonPanel = styled.div`
  width: 95%;
  height: fit-content;
  margin: 30px auto;

  display: flex;
  justify-content: space-between;
`;

const FilterDropDowns = styled.div`
  & select {
    width: 115px;
    height: 40px;
    padding: 4px 3px;
    font-family: 'Spoqa-Regular';

    font-size: 0.8em;
    color: #777;
    border: 1px solid #e6e6e6;
  }
`;

const ContestCardList = () => {
  const [contestDatas, setcontestDatas] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContestDatas = async () => {
      try {
        // 값 초기화
        setError(null);
        setLoading(true);
        setcontestDatas(null);

        const contestRes = (await ContestListAPI()).data;
        setcontestDatas(contestRes);
      } catch (e) {
        // 만약 오류가 생기면 여기서 catch
        setError(e); // error : true
        console.log(e);
      }
      setLoading(false); // 응답 다 받았으면 loading을 종료 (false 값으로 바꿔준다.)
    };
    // 함수 fetchUsers() 실행
    fetchContestDatas();
  }, []);
  if (loading) return <Loading />;
  if (error) return <div>에러 발생</div>;
  if (!contestDatas) return null;
  return (
    <>
      <FilterAndButtonPanel>
        <FilterDropDowns>
          <select name="" id="">
            <option value="" value="default">
              마감 기한순
            </option>
            <option value="">조회 많은순</option>
            <option value="">조회 적은순</option>
          </select>
        </FilterDropDowns>
        <Link to="/contestcreate">
          <Button width="80px" text="새 글 쓰기" color={PointColor} />
        </Link>
      </FilterAndButtonPanel>
      <CardListPanel>
        {contestDatas.map((data, index) => (
          <ContestCard data={data} key={index} />
        ))}
      </CardListPanel>
    </>
  );
};

export default ContestCardList;
