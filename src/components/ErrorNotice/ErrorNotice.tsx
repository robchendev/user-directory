import { NOTICE_TEXT } from "./ErrorNotice.const";
import { StyledErrorNotice as Styled } from "./ErrorNotice.styled";

export const ErrorNotice = () => {
  return <Styled.Wrapper>{NOTICE_TEXT}</Styled.Wrapper>;
};
