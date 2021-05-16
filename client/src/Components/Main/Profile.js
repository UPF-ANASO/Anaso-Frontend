import React from 'react';
import styled from 'styled-components';
import { ShadowColor } from '../../Assets/Color/Color';
import Test from '../../Assets/Images/Test.png';

const Container = styled.div`
  width: 85%;
  height: 100%;
  padding: 0 2.5%;
  display: flex;
  border-radius: 10px;
  box-shadow: 1px 2px 3px ${ShadowColor};
`;

const ImgSession = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  img {
    width: 100%;
    height: 50%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const InfoSession = styled.div`
  width: 50%;
  height: 100%;
  p {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Profile = () => {
  return (
    <Container>
      <ImgSession>
        <img src={Test} />
      </ImgSession>
      <InfoSession>
        <p>ㅎㅇㄹ</p>
      </InfoSession>
    </Container>
  );
};

export default Profile;
