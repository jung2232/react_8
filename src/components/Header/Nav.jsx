import styled from "styled-components";
import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { userApis } from "../../apis/userApis";

const Nav = () => {
  const [userName, setUserName] = useState("");
  const token = localStorage.getItem("token");

  useLayoutEffect(() => {
    if (token) {
      userApis.getUserInfo().then(({ data }) => setUserName(data.username));
      return;
    }
  }, [token]);

  return (
    <StNav>
      <Link to="/">
        <StLogo>당근팔조</StLogo>
      </Link>
      <div>
        {token ? (
          <StBox>
            <Link to="Upload">글쓰기</Link>
            <Link to="mypage">마이페이지</Link>
            <p>
              <span>{`${userName ?? "사용자"}`}</span> 님 반갑습니다!
            </p>
            <p
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
              style={{ cursor: "pointer" }}
            >
              로그아웃
            </p>
          </StBox>
        ) : (
          <StBox>
            <Link to="signIn">로그인</Link>
            <Link to="signUp">회원가입</Link>
          </StBox>
        )}
      </div>
    </StNav>
  );
};

export default Nav;

const StNav = styled.nav`
  max-width: 1200px;
  margin: auto;
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StLogo = styled.h1``;

const StBox = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: 2rem;
  span {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
