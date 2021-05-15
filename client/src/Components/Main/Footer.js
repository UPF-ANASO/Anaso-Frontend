import React from 'react';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { TextColorGray } from '../../Assets/Color/Color';
import { ReactComponent as LogoWhite } from '../../Assets/Images/logo-en-white.svg';

const Container = styled.div`
  width: 100%;
  min-width: 1000px;
  height: 125px;
  color: #87898c;
  background-color: ${TextColorGray};
`;

const NavContainer = styled.div`
  width: 80%;
  height: 50%;
  margin: 0 auto;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;

const NavList = styled.ul`
  width: 50%;
  height: 100%;
  margin: 0 auto;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
  }
`;

const Item = styled.li``;

const DescriptionContainer = styled.div`
  width: 80%;
  height: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Description = styled.p`
  font-size: 12px;
`;

// const NavLink = styled(NavLink)`
//   font-size: 15px;
// `;

const Footer = () => {
  return (
    <Container>
      <NavContainer>
        <LogoWhite width={150} height={50} />
        <NavList>
          <Item>이용 약관</Item>
          <Item>개인정보 처리방침</Item>
          <Item>고객 센터</Item>
        </NavList>
      </NavContainer>
      <DescriptionContainer>
        <Description>
          순천향대학교 멋쟁이사자처럼 | 이남준 최민석 장하얀 하유민 최세환
        </Description>
      </DescriptionContainer>
    </Container>
  );
};

export default Footer;
