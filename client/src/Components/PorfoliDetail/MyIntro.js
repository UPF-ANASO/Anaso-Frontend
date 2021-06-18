import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Test from '../../Assets/Images/test.jpeg';
import Button from '../common/Button/Button';
import { Link, useHistory } from 'react-router-dom';
import { TextColorBlack } from '../../Assets/Color/Color';
import { UserDetailAPI } from '../../Api/Project/Project';
import Loading from '../common/Loading/Loading';
import Error from '../common/Error/Error';
import { useSelector } from 'react-redux';

const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: ${TextColorBlack};
  }
`;

const MyIntroDiv = styled.div`
  padding: 30px 0;
  margin: 0 auto;
  display: flex;
  width: 35%;
  justify-content: space-between;
  align-items: center;
`;

const MyInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;
const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
`;

const Name = styled.span`
  font-family: 'Spoqa-Medium';
  font-size: 1.3rem;
  display: inline-block;
  /* margin-right: 5px; */
  margin-bottom: 20px;
`;

const Info = styled.p`
  margin: 10px 0;
  font-family: 'Spoqa-Light';
`;
function MyIntro({ match }) {
  const userId = useSelector((state) => state.userInfo.userInfo.userID);
  const ProfileId = match.params.id;
  // const result = async () => {
  //   const a = (await UserDetailAPI(ProfileId)).data;
  //   console.log(a);
  // };
  // result();

  // // console.log(ProfileId);
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileOutput = async () => {
      try {
        setError(null);
        setLoading(true);

        const result = (await UserDetailAPI(ProfileId)).data.info;
        // console.log(result);
        setProfile(result);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchProfileOutput();
  }, []);
  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <>
      <MyIntroDiv>
        <ProfileImg alt={profile.profileImg} src={profile.profileImg} />
        <MyInfoDiv>
          <Name>{profile.name}</Name>
          <p>
            <span>{profile.university}</span>
            <span>{profile.major}</span>
          </p>
          <Info>{profile.description}</Info>
          <StyledLink match={match} to="/portfolioCreate">
            <>
              {ProfileId === userId ? (
                <Button
                  width="140px"
                  text="나의 포트폴리오 생성"
                  color="#ffb100"
                />
              ) : (
                <></>
              )}
            </>
          </StyledLink>
        </MyInfoDiv>
      </MyIntroDiv>
    </>
  );
}

export default MyIntro;
