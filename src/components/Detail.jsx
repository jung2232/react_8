import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Comment from "./comment";

const Detail = () => {
  const [isShow, setisShow] = useState(false);
  return (
    <Wrap>
      <div>
        <SbLogo>
          <Link to="/main">당근팔조</Link>
        </SbLogo>
      </div>
      <SbWrap>
        <StImages>사진</StImages>
        <StUser>
          <div>
            <h1>상품명</h1>
          </div>
          <div>
            <p>상품설명</p>
          </div>
          <div>
            <p>가격:120000</p>
          </div>
        </StUser>
      </SbWrap>
      <StContainer isShow={isShow}>
        <StToggleContainer
          onClick={() => {
            setisShow((isOpen) => !isOpen);
          }}
        >
          <h5>{isShow ? "눌러서 댓글내리기" : "눌러서 댓글보기"}</h5>
        </StToggleContainer>
        <form>
          <div>
            <input
              placeholder="이름 (5자 이내)"
              type="text"
              name="username"
              maxLength={5}
            />
          </div>
          <input
            placeholder="댓글을 추가하세요. (100자 이내)"
            name="content"
            type="text"
            maxLength={100}
          />
          <button type="submit">추가하기</button>
        </form>
        <StCommentList>
          <Comment />
        </StCommentList>
      </StContainer>
    </Wrap>
  );
};

export default Detail;

const Wrap = styled.div`
  position: relative;
`;
const StUser = styled.div`
  width: 500px;
  height: 1000px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const SbWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: #000;
  margin-top: 40px;
`;
const SbLogo = styled.div`
  font-size: 30px;
  color: #000;
  margin: 40px;
`;

const StImages = styled.div`
  margin: 20px;
  display: flex;
  justify-items: center;
  align-items: center;
`;

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
