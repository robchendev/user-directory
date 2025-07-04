import styled from "styled-components";

export const StyledLoadingSpinner = {
  Wrapper: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    svg {
      animation: spin 1s linear infinite;
      transform-origin: center;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,
};
