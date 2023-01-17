import styled from "styled-components";
import flex from "../../lib/flex";

const SignLayout = ({ children }) => {
  return (
    <StWrap flex={flex}>
      <StInnerBox flex={flex}>{children}</StInnerBox>
    </StWrap>
  );
};

export default SignLayout;

const StWrap = styled.section`
  width: 100wh;
  height: 100vh;
  ${({ flex }) => flex({})}
`;

const StInnerBox = styled.div`
  width: 800px;
  border-radius: 10px;
  padding: 5% 0;
  ${({ flex }) => flex({})}
  flex-direction: column;
  background-color: #f9f9f9;
`;
