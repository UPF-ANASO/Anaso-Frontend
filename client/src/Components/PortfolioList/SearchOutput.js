import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ShadowColor, PrimaryColor2 } from '../../Assets/Color/Color';
import OutputCard from './OutputCard';
import Loading from '../common/Loading/Loading';
import Error from '../common/Error/Error';
import { UserListAPI } from '../../Api/Project/Project';
const SearchOuputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 80vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 15px;
    height: 50px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${ShadowColor};
    border-radius: 15px;
  }
  &::-webkit-scrollbar-thumb:hover {
    transition: 1s;
    background-color: ${PrimaryColor2};
    border-radius: 15px;
  }
`;

function SearchOutput() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchOutput = async () => {
      try {
        setError(null);
        setLoading(true);

        const result = (await UserListAPI()).data;
        console.log(result);
        setUsers(result);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchSearchOutput();
  }, []);
  if (loading) return <Loading />;
  if (error) return <Error />;
  // map 함수 설정
  // const testMap = testdata.map((test, index) => {
  //   // console.log(test.username);
  //   // 컨텐트 값 하나씩 리턴
  //   return (
  //     <Fade bottom>
  //       <OutputContent>
  //         <img src={Test} width="140px" height="140px" />
  //         <TextDiv>
  //           <p key={index}>{test.username}</p>
  //           <p key={index}>{test.info}</p>
  //           <Link to="/portfoliodetail">
  //             <button>자세히 보기</button>
  //           </Link>
  //         </TextDiv>
  //       </OutputContent>
  //     </Fade>
  //   );
  // });
  // console.log(data);
  // console.log(data.username);

  // 받아온 데이터 뿌리기
  return (
    <SearchOuputDiv>
      <OutputCard data={users} />
    </SearchOuputDiv>
  );
}

export default SearchOutput;
