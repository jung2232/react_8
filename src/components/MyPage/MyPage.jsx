import React, { useEffect, useState } from "react";
import styled from "styled-components";

import flex from "../../lib/flex";

import { userApis } from "../../apis/userApis";

const MyPage = () => {
  const [userData, setUsetData] = useState({});

  useEffect(() => {
    userApis.getUserData().then((item) => setUsetData(item[0]));
  }, []);

  console.log(userData);
  return (
    <StMyPageWrap flex={flex}>
      <StMyPageBox>
        <StLi>이름 : {userData?.username} </StLi>
        <StLi>핸드폰번호 : {userData?.phone}</StLi>
        <StLi>주소 : {userData?.address}</StLi>
      </StMyPageBox>
    </StMyPageWrap>
  );
};

export default MyPage;

const StMyPageWrap = styled.section`
  ${({ flex }) => flex}
  height: 100vh;
  width: 100%;
  border: 10px solid black;
`;

const StMyPageBox = styled.ul`
  width: 800px;
  background-color: #f9f9f9;
  border-radius: 15px;
  padding: 2rem 1rem;
`;

const StLi = styled.li``;
