import { AiOutlineLoading } from "react-icons/ai";
import { StyledLoadingSpinner as Styled } from "./LoadingSpinner.styled";

export const LoadingSpinner = () => {
  return (
    <Styled.Wrapper>
      <AiOutlineLoading />
    </Styled.Wrapper>
  );
};
