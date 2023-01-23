import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __addBoard } from "../../redux/modules/boardSlice";
const Upload = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    name: "상품이름입니다",
    price: 0,
  });

  //이미지 보내기
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { image, title, description, price } = form;
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    dispatch(__addBoard(formData));
    setForm({ image: "", title: "", description: "", price: 0 });
  };

  //미리보기
  const onChangeImg = async (e) => {
    e.preventDefault();
    if (e.target.files) {
      const uploadFile = e.target.files[0];
      const copy = { ...form, image: uploadFile };
      setForm(copy);
    }
  };

  // const onCickImageUpload = () => {
  //   imageInput.current.click();
  // };
  // if (isLoading) {
  //   return <div>로딩 중....</div>;
  // }
  // //에러
  // if (error) {
  //   return <div>{error.message}</div>;
  // }
  return (
    <>
      <SbWrap>
        <StForm onSubmit={onSubmitHandler}>
          <StImages>
            <label htmlFor="profile-upload" />
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              onChange={onChangeImg}
            />
          </StImages>
          <StUser>
            <StFont>
              <p style={{ magin: "20px", fontSize: "24px" }}>상품명</p>
              <br />
              <input
                type="text"
                placeholder="상품명을 입력해 주세요."
                value={form.title}
                onChange={(ev) => {
                  const { value } = ev.target;
                  setForm({ ...form, title: value });
                }}
                required
              />
              <p style={{ magin: "20px", fontSize: "24px" }}>상품설명</p>
              <StTextarea
                type="text"
                placeholder="상품내용을 입력해 주세요."
                rows={20}
                cols={30}
                value={form.description}
                q
                onChange={(ev) => {
                  const { value } = ev.target;
                  setForm({ ...form, description: value });
                }}
                required
              />
              <div>
                <StNumber
                  type="number"
                  placeholder="금액을 입력해 주세요."
                  value={form.price}
                  onChange={(ev) => {
                    const { value } = ev.target;
                    setForm({ ...form, price: value });
                  }}
                  required
                />
                <span style={{ maginLeft: "20px", fontSize: "20px" }}>
                  가격
                </span>
              </div>
            </StFont>
          </StUser>
          <StButton>등록하기</StButton>
        </StForm>
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

const StButton = styled.button`
  width: 100px;
  height: 40px;
  background: orange;
  text-align: center;
  cursor: pointer;
  position: absolute;
  bottom: 50px;
  text-align: center;
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
const StForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StFile = styled.input``;
const SbWrap = styled.div``;
const SbLogo = styled.h2`
  font-size: 30px;
  color: #000;
  margin: 40px;
`;

///
