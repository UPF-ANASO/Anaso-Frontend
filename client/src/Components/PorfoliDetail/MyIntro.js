import React from 'react';
import styled from 'styled-components';
import Test from '../../Assets/Images/test.jpeg';

const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

function MyIntro() {
  return (
    <>
      <ProfileImg src={Test} />
    </>
  );
}

export default MyIntro;
