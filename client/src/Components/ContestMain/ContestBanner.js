import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import '../../Assets/CSS/ContestBanner.scss';
import { ReactComponent as Arrow } from '../../Assets/Images/icon-rightarrow.svg';
import { ReactComponent as Search } from '../../Assets/Images/icon-search.svg';
import { PrimaryColor } from '../../Assets/Color/Color';

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

const BannerCardShortcut = styled(Link)`
  width: 100%;
  margin: 5px 0 15px 0;

  text-align: left;
  text-decoration: none;
  & > span {
    margin-right: 6px;
    font-family: 'Spoqa-Bold';
    color: ${PrimaryColor};
  }
`;

const BannerCardBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
  & span {
    font-size: 0.7em;
  }
`;

const ContestBanner = () => {
  return (
    <BannerPanel>
      <BannerSearchBar>
        <Search />
        <input type="text" />
      </BannerSearchBar>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerCardShortcut to="/contestdetail">
            <span>Read More</span>
            <Arrow />
          </BannerCardShortcut>
          <img
            src="https://allforyoung-maycan-seoul.s3.ap-northeast-2.amazonaws.com/uploads/post_photos/2021/05/14/7f607877ec4844b3a4e22afd20c3cfb8.jpg"
            alt=""
          />
          <span>D-10</span>
          <span>2021 위핏 UX∙마케팅 아이디어 공모전 참여하실 분</span>
          <BannerCardBottom>
            <span>작성자 : 김율희</span>
            <span>조회수 100</span>
          </BannerCardBottom>
        </SwiperSlide>
        <SwiperSlide>
          <BannerCardShortcut>
            <span>Read More</span>
            <Arrow />
          </BannerCardShortcut>
          <img
            src="https://allforyoung-maycan-seoul.s3.ap-northeast-2.amazonaws.com/uploads/post_photos/2021/05/14/7f607877ec4844b3a4e22afd20c3cfb8.jpg"
            alt=""
          />
          <span>D-10</span>
          <span>2021 위핏 UX∙마케팅 아이디어 공모전 참여하실 분</span>
          <BannerCardBottom>
            <span>작성자 : 김율희</span>
            <span>조회수 100</span>
          </BannerCardBottom>
        </SwiperSlide>
        <SwiperSlide>
          <BannerCardShortcut>
            <span>Read More</span>
            <Arrow />
          </BannerCardShortcut>
          <img
            src="https://allforyoung-maycan-seoul.s3.ap-northeast-2.amazonaws.com/uploads/post_photos/2021/05/14/7f607877ec4844b3a4e22afd20c3cfb8.jpg"
            alt=""
          />
          <span>D-10</span>
          <span>2021 위핏 UX∙마케팅 아이디어 공모전 참여하실 분</span>
          <BannerCardBottom>
            <span>작성자 : 김율희</span>
            <span>조회수 100</span>
          </BannerCardBottom>
        </SwiperSlide>
      </Swiper>
    </BannerPanel>
  );
};

export default ContestBanner;
