import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import ContsetBannerCard from './ContsetBannerCard';

import '../../Assets/CSS/ContestBanner.css';
import { ReactComponent as Search } from '../../Assets/Images/icon-search.svg';

import { ContestListAPI } from '../../Api/Contest/Contest';
import Loading from '../common/Loading/Loading';
import Error from '../common/Error/Error';

// install Swiper modules
SwiperCore.use([Navigation]);

const BannerPanel = styled.div`
  width: 100%;
  padding-top: 30px;

  background-color: rgba(126, 219, 176, 0.3);
  box-shadow: inset 0px 0px 30px rgba(57, 40, 166, 0.15);

  /* display: flex; */
`;

const BannerSearchBar = styled.div`
  width: 400px;
  height: 25px;
  padding: 10px;
  margin: 0 auto;
  display: flex;

  background-color: white;
  border-radius: 5px;

  & input {
    width: 90%;
    font-family: 'Spoqa-Light';
    padding: 0.4rem;
    border: none;

    &::placeholder {
      color: black;
    }
  }

  & svg {
    padding: 4px 0 0 3px;
    margin-right: 10px;
  }
`;

const ContestBanner = () => {
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

        let contestRes = (await ContestListAPI()).data;
        // 조회수 높은 순으로 정렬한 뒤 3개 남기고 자르기
        contestRes.sort((a, b) => b.hitCount - a.hitCount).splice(3);
        setContestDatas(contestRes);
      } catch (e) {
        setError(e);
        console.log(e);
      }
      setLoading(false);
    };
    fetchContestDatas();
  }, []);
  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!contestDatas) return null;
  return (
    <BannerPanel>
      <BannerSearchBar>
        <Search />
        <input type="text" />
      </BannerSearchBar>
      <Swiper
        initialSlide={1}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        className="mySwiper"
      >
        {contestDatas.map((data) => (
          <SwiperSlide>
            <ContsetBannerCard data={data} key={data._id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </BannerPanel>
  );
};

export default ContestBanner;
