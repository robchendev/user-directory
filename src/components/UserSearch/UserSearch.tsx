import { SEARCH_INPUT_PLACEHOLDER } from "./UserSearch.const";
import type { IUserSearch } from "./UserSearch.interface";
import { StyledUserSearch as Styled } from "./UserSearch.styled";

export const UserSearch = ({ onInput, search }: IUserSearch) => {
  return <Styled.Input onChange={onInput} value={search} placeholder={SEARCH_INPUT_PLACEHOLDER} />;
};
