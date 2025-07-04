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
  Title: styled.h1`
    font-size: 24px;
    text-align: center;
  `,
  Results: styled.div`
    flex: 1;
    overflow: auto;
  `,
  ResultsList: styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
};
