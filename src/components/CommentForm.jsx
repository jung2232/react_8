import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import commentSlice, { __addComment } from "../redux/modules/commentSlice";

const CommentForm = () => {
  const [isShow, setisShow] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [comment, setComment] = useState({
    content: "",
  });

  const onAddCommentButtonHandler = (event) => {
    event.preventDefault();
    dispatch(__addComment({ produtId: id, ...comment }));
    setComment({
      content: "",
    });
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  return (
    <StContainer isShow={isShow}>
      <StToggleContainer
        onClick={() => {
          setisShow((isOpen) => !isOpen);
        }}
      >
        <h5>{isShow ? "눌러서 댓글내리기" : "눌러서 댓글보기"}</h5>
      </StToggleContainer>
      <form onSubmit={onAddCommentButtonHandler}>
        <input
          placeholder="댓글을 추가하세요. (100자 이내)"
          name="content"
          value={comment.content}
          type="text"
          maxLength={100}
          onChange={onChangeInputHandler}
          required
        />
        <button type="submit" onClick={onAddCommentButtonHandler}>
          추가하기
        </button>
      </form>
      <StCommentList>
        <Comment />
      </StCommentList>
    </StContainer>
  );
};

export default CommentForm;

///코멘트 css

const StContainer = styled.div`
  height: ${({ isShow }) => (isShow ? "400px" : "20px")};
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: #fff;
  transition: height 400ms ease-in-out;
`;

const StToggleContainer = styled.div`
  height: 50px;
  padding: 0 12px;
  border-top: 1px solid #eee;
`;

const StCommentList = styled.div`
  height: 350px;
  /* overflow: scroll; */
`;
