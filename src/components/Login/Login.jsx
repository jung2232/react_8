import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  console.log(login);

  const idPwhandler = ({ target: { value, name } }) => {
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  return (
    <Stbox>
      <StinnerBox>
        <h1>Logo</h1>
        <form>
          <StFont>아이디</StFont>
          <StInput
            value={login.username}
            type="text"
            name="username"
            onChange={idPwhandler}
          />
          <StFont>비밀번호</StFont>
          <StNumber
            value={login.password}
            type="password"
            name="password"
            onChange={idPwhandler}
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
          <StNetwork>
            <Button>구글로그인</Button>
            <Button>카카오로그인</Button>
          </StNetwork>
        </form>
      </StinnerBox>
    </Stbox>
  );
};

export default Login;

// 박스전체
const Stbox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffa500;
`;
// 중앙정렬
const StinnerBox = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StFont = styled.h4`
  font-size: 18px;
  margin-top: 20px;
`;

const StInput = styled.input`
  width: 385px;
  height: 40px;
`;

const StNumber = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  width: 385px;
  height: 40px;
`;

const Stbutton = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  margin-top: 10px;
`;

const StNetwork = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
`;
