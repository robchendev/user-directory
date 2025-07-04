import styled from "styled-components";

export const StyledUserCard = {
  Wrapper: styled.li`
    border-radius: 8px;
    border: 1px solid #bbb;
    padding: 6px 10px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
  Divider: styled.hr`
    border-top: 1px solid #bbb;
    margin: 0;
  `,
  Name: styled.h2`
    font-size: 20px;
  `,
  Details: styled.p`
    display: flex;
    align-items: center;
    gap: 6px;
  `,
};
