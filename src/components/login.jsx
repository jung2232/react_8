import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
const Login = () => {
  const navigate = useNavigate();
  return (
    <Stbox>
      <StinnerBox>
        <h1>Logo</h1>
        <from>
          <StFont>아이디</StFont>
          <StInput type="text" />
          <StFont>비밀번호</StFont>
          <StNumber type="Number" />
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
        </from>
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
