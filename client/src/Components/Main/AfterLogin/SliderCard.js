import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Slider1 from '../../../Assets/Images/slide-1.png';
import Slider2 from '../../../Assets/Images/slide-2.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderContainer = styled.div`
  width: 700px;
  height: 250px;
`;

const SliderItem = styled.img`
  width: 700px;
  height: 250px;
  object-fit: cover;
`;

const settings = {
  dots: false, // 점은 안 보이게
  infinite: true, // 무한으로 즐기게
  speed: 500,
  slidesToShow: 1, //1장씩 보이게 해주세요
  slidesToScroll: 1, //1장씩 넘어가세요
  autoplay: true, // 로고 자동 슬라이드
  autoplaySpeed: 1500,
};
const SliderCard = () => {
  return (
    <SliderContainer>
      <Slider {...settings}>
        <SliderItem src={Slider1} />
        <SliderItem src={Slider2} />
      </Slider>
    </SliderContainer>
  );
};

export default SliderCard;
