import type { INotice } from "./Notice.interface";
import { StyledNotice as Styled } from "./Notice.styled";

export const Notice = ({ text, isError = false }: INotice) => {
  return <Styled.Wrapper $isError={isError}>{text}</Styled.Wrapper>;
};
