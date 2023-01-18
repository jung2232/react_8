import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
const Upload = () => {
  const imageInput = useRef();
  const onCickImageUpload = () => {
    imageInput.current.click();
  };
  const navigate = useNavigate();
  return (
    <>
      <SbLogo>
        {" "}
        <Link to="/"> 당근팔조 </Link>{" "}
      </SbLogo>
      <SbWrap>
        <StFrom>
          <StImages>
            <StFile type="file" style={{ display: "none" }} ref={imageInput} />
            <button onClick={onCickImageUpload}>이미지업로드</button>
          </StImages>
          <StUser>
            <StFont>
              <p style={{ magin: "20px", fontSize: "24px" }}>상품명</p>
              <br />
              <input
                type="text"
                placeholder="상품명을 입력해 주세요."
                required
              />
              <p style={{ magin: "20px", fontSize: "24px" }}>상품설명</p>
              <StTextarea
                type="text"
                placeholder="상품내용을 입력해 주세요."
                rows={20}
                cols={30}
                required
              />
              <div>
                <StNumber
                  type="number"
                  placeholder="금액을 입력해 주세요."
                  required
                />
                <span style={{ maginLeft: "20px", fontSize: "20px" }}>
                  가격
                </span>
              </div>
            </StFont>
          </StUser>
          <StUpload>
            <StButton
              onClick={() => {
                navigate("/main");
              }}
            >
              등록하기
            </StButton>
          </StUpload>
        </StFrom>
      </SbWrap>
    </>
  );
};

export default Upload;

const StNumber = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const StTextarea = styled.textarea`
  resize: none;
`;

const StUpload = styled.div`
  position: absolute;
  bottom: 50px;

  text-align: center;
`;

const StButton = styled.button`
  width: 100px;
  height: 40px;
  background: orange;
  text-align: center;
  cursor: pointer;
`;

const StFont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StImages = styled.div``;
const StUser = styled.div`
  width: 500px;
  height: 1000px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
const SbWrap = styled.div``;
const StFrom = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const StFile = styled.input``;

const SbLogo = styled.h2`
  font-size: 30px;
  color: #000;
  margin: 40px;
`;

///
