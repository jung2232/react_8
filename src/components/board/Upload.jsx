import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __addBoard } from "../../redux/modules/boardSlice";

import { StInput } from "../../lib/signStyle";
const Upload = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    name: "상품이름입니다",
    price: 0,
  });

  const [iamgSrc, setimageSrc] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { image, title, description, price, name } = form;
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("name", name);
    formData.append("price", price);
    dispatch(__addBoard(formData));
    setForm({ image: "", title: "", description: "", price: 0 });
  };

  const onChangeImg = async (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setimageSrc(reader.result);
      };
      const uploadFile = e.target.files[0];
      const copy = { ...form, image: uploadFile };
      setForm(copy);
    }
  };

  return (
    <>
      <StWrap>
        <StForm onSubmit={onSubmitHandler}>
          <StImages>
            <div>
              <img src={iamgSrc} alt="" />
            </div>
            <label htmlFor="profile-upload">이미지 등록</label>
            <StInput
              style={{ display: "none" }}
              type="file"
              id="profile-upload"
              accept="image/*"
              onChange={onChangeImg}
            />
          </StImages>
          <StInputBox>
            <p>상품명</p>
            <StInput
              type="text"
              placeholder="상품명을 입력해 주세요."
              value={form.title}
              onChange={(ev) => {
                const { value } = ev.target;
                setForm({ ...form, title: value });
              }}
              required
            />
          </StInputBox>
          <StInputBox>
            <p>상품설명</p>
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
          </StInputBox>
          <StInputBox>
            <p>가격</p>
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
          </StInputBox>

          <StButton>등록하기</StButton>
        </StForm>
      </StWrap>
    </>
  );
};

export default Upload;

const StNumber = styled(StInput)`
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
  width: 100%;
`;

const StButton = styled.button`
  border: none;
  background: none;
  width: 100px;
  padding: 8px 0;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

const StImages = styled.div`
  width: 20%;
  img {
    width: 100%;
  }
`;
const StForm = styled.form`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StWrap = styled.div`
  width: 100%;
`;

const StInputBox = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  margin-bottom: 10px;
  p {
    width: 120px;
  }
  &:last-child {
  }
  input {
    width: 100%;
    flex: 1 1 0%;
  }
  textarea {
    flex: 1 1 0%;
  }
`;
