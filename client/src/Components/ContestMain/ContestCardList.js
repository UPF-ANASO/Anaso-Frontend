import React, { useState, useEffect } from 'react';
import ContestCard from './ContestCard';
import styled from 'styled-components';

import Button from '../common/Button/Button';
import { Link } from 'react-router-dom';

import { ContestListAPI } from '../../Api/Contest/Contest';
import Loading from '../common/Loading/Loading';
import Error from '../common/Error/Error';
import { PointColor } from '../../Assets/Color/Color';

const CardListPanel = styled.div`
  width: 100%;
  margin: 60px 0 10% 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33%, auto));
  grid-gap: 100px 0;
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

        const contestRes = (await ContestListAPI()).data;
        setContestDatas(contestRes);
      } catch (e) {
        // 만약 오류가 생기면 여기서 catch
        setError(e); // error : true
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
        <Link to="/contests/create">
          <Button width="80px" text="새 글 쓰기" color={PointColor} />
        </Link>
      </FilterAndButtonPanel>
      <CardListPanel>
        {contestDatas.map((data) => (
          <ContestCard data={data} key={data._id} />
        ))}
      </CardListPanel>
    </>
  );
};

export default ContestCardList;
