import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { GoogleIcon, KakaoIcon } from "../../assets/icon/socialLogin";
import flex from "../../lib/flex";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const idPwHandler = ({ target: { value, name } }) => {
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  return (
    <Stbox flex={flex}>
      <StinnerBox>
        <h1>Login</h1>
        <form>
          <StFont>아이디</StFont>
          <StInput
            value={login.username}
            type="text"
            name="username"
            onChange={idPwHandler}
          />
          <StFont>비밀번호</StFont>
          <StInput
            value={login.password}
            type="password"
            name="password"
            onChange={idPwHandler}
          />
          <Stbutton>
            <Button
              variant="dark"
              onClick={() => {
                navigate("/signup");
              }}
            >
              회원가입
            </Button>
            <Button
              variant="dark"
              onClick={() => {
                navigate("/main");
              }}
            >
              로그인
            </Button>
          </Stbutton>
          <SocialBtnBox>
            <SocialBtn bgColor="white">
              <GoogleIcon style={{ position: "absolute", left: "16px" }} />{" "}
              구글로 시작하기
            </SocialBtn>
            <SocialBtn bgColor="#FEE500">
              <KakaoIcon style={{ position: "absolute", left: "16px" }} />
              카카오로 시작하기
            </SocialBtn>
          </SocialBtnBox>
        </form>
      </StinnerBox>
    </Stbox>
  );
};

export default Login;

// 박스전체
const Stbox = styled.section`
  ${(props) => props.flex({})}
  width: 100wh;
  height: 100vh;
`;
// 중앙정렬
const StinnerBox = styled.div`
  width: 800px;
  height: 500px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f9f9f9;
`;

const StFont = styled.h4`
  font-size: 18px;
  margin-top: 20px;
`;

const StInput = styled.input`
  width: 385px;
  height: 40px;
  padding-left: 10px;
`;

const Stbutton = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  margin-top: 10px;
`;

const SocialBtnBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 20px;
`;

const SocialBtn = styled.button`
  border: none;
  border-radius: 15px;
  position: relative;
  margin: 0 auto;
  width: 300px;
  height: 46px;
  padding: 0 12px;
  padding-left: 48px;
  background-color: ${(props) => props.bgColor};
  position: relative;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

const Button = styled.button`
  padding: 10xp 50px;
  background: none;
`;
