import styled from "styled-components";

interface IWrapper {
  $isError: boolean;
}

export const StyledNotice = {
  Wrapper: styled.div<IWrapper>`
    background: ${({ $isError }) => ($isError ? "rgba(255, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.1)")};
    padding: 12px 16px;
    border-radius: 8px;
  `,
};
