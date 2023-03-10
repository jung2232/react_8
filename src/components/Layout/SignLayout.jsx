import styled from "styled-components";
import flex from "../../lib/flex";

const SignLayout = ({ children }) => {
  return (
    <StWrap flex={flex}>
      <StInnerWrap flex={flex}>
        <StInnerBox>{children}</StInnerBox>
      </StInnerWrap>
    </StWrap>
  );
};

export default SignLayout;

const StWrap = styled.section`
  width: 100wh;
  ${({ flex }) => flex({})}
`;

const StInnerWrap = styled.article`
  width: 800px;
  border-radius: 10px;
  padding: 5% 0;
  ${({ flex }) => flex({})}
  flex-direction: column;
  background-color: #f9f9f9;
`;

const StInnerBox = styled.div`
  width: 50%;
  h1 {
    text-align: center;
  }
`;
