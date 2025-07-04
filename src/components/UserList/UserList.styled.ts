import styled from "styled-components";

export const StyledUserList = {
  Wrapper: styled.div`
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px 24px;
    height: calc(100vh - 40px);
    gap: 16px;
  `,
  Results: styled.div`
    flex: 1;
    overflow: auto;
  `,
};
