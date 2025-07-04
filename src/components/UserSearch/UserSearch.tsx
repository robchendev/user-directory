import { SEARCH_INPUT_PLACEHOLDER } from "./UserSearch.const";
import type { IUserSearch } from "./UserSearch.interface";

export const UserSearch = ({ onInput, search }: IUserSearch) => {
  return <input onChange={onInput} value={search} placeholder={SEARCH_INPUT_PLACEHOLDER} />;
};
