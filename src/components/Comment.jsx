import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   __deleteComment,
//   __updateComment,
// } from "../redux/modules/commentsSlice";
// import {
//   clearComment,
//   globalEditModeToggle,
//   __getComment,
// } from "../redux/modules/commentSlice";

const Comment = () => {
  // const { id } = useParams();
  // const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  // const [updatedComment, setUpdatedComment] = useState("");

  // const { content } = useSelector((state) => state.comment.data);
  // const { isGlobalEditmode } = useSelector((state) => state.comment);

  // const onDeleteButtonHandler = () => {
  //   const result = window.confirm("삭제하시겠습니까?");
  //   if (result) {
  //     dispatch(__deleteComment(comment.id));
  //   } else {
  //     return;
  //   }
  // };

  // const onUpdateButtonHandler = () => {
  //   dispatch(
  //     __updateComment({
  //       id: comment.id,
  //       content: updatedComment,
  //       username: comment.username,
  //       todoId: id,
  //     })
  //   );
  //   setIsEdit(false);
  //   dispatch(globalEditModeToggle(false));
  // };

  // const onChangeEditButtonHandler = () => {
  //   setIsEdit(true);
  //   dispatch(__getComment(comment.id));
  //   dispatch(globalEditModeToggle(true));
  // };

  // const onCancelButtonHandler = () => {
  //   setIsEdit(false);
  //   dispatch(clearComment());
  //   dispatch(globalEditModeToggle(false));
  // };

  // useEffect(() => {
  //   setUpdatedComment(content);
  // }, [content]);

  return (
    <div>
      {isEdit ? (
        <>
          <div>
            <input type="text" maxlength={100} />
          </div>
          <div>
            <button>
              <h5>취소</h5>
            </button>
            <button>
              <h5>저장</h5>
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <div>유저네임</div>
            <div>코멘트</div>
          </div>

          <div>
            <button>삭제</button>
            <button>수정</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Comment;
