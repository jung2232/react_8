import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Upload = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    imageUrl: "",
    name: "",
    desc: "",
    price: 0,
  });

  const { isLoading, error } = useSelector((state) => state.todo);

  const onSubmitHandler = async (todo) => {
    await axios.post("http://localhost:3001/todo", todo);
  };

  const onChangeImg = async (e) => {
    e.preventDefault();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      console.log(uploadFile);

      const formData = new FormData();
      formData.append("files", uploadFile);

      await axios({
        method: "post",
        url: "/todo",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  };

  // const onCickImageUpload = () => {
  //   imageInput.current.click();
  // };
  if (isLoading) {
    return <div>로딩 중....</div>;
  }
  //에러
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <SbLogo>
        {" "}
        <Link to="/"> 당근팔조 </Link>{" "}
      </SbLogo>
      <SbWrap>
        <form
          onSubmit={(e) => {
            // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
            e.preventDefault();
            if (
              (todo.name.trim() === "" ||
                todo.desc.trim() === "" ||
                todo.price.trim() === "",
              alert("등록 되었습니다."),
              navigate("/Main"))
            ) {
              return alert("모든 항목을 입력해주세요.");
            }
            setTodo({ name: "", desc: "", price: 0 });
            onSubmitHandler(todo);
          }}
        >
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
                value={todo.name}
                onChange={(ev) => {
                  const { value } = ev.target;
                  setTodo({ ...todo, name: value });
                }}
                required
              />
              <p style={{ magin: "20px", fontSize: "24px" }}>상품설명</p>
              <StTextarea
                type="text"
                placeholder="상품내용을 입력해 주세요."
                rows={20}
                cols={30}
                value={todo.desc}
                onChange={(ev) => {
                  const { value } = ev.target;
                  setTodo({ ...todo, desc: value });
                }}
                required
              />
              <div>
                <StNumber
                  type="number"
                  placeholder="금액을 입력해 주세요."
                  value={todo.price}
                  onChange={(ev) => {
                    const { value } = ev.target;
                    setTodo({ ...todo, price: value });
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
        </form>
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
const SbWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const StFile = styled.input``;

const SbLogo = styled.h2`
  font-size: 30px;
  color: #000;
  margin: 40px;
`;

///
