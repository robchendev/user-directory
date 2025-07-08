import { useFetchApi } from "../../hooks/useFetchApi.ts";
import type { User } from "../../types/user.ts";
import { UserSearch } from "../UserSearch/UserSearch.tsx";
import { ERROR_TEXT, NO_RESULTS_TEXT, TITLE, USERS_ENDPOINT } from "./UserList.const.ts";
import { UserCard } from "../UserCard/UserCard.tsx";
import { useSearchFilter } from "../../hooks/useSearchFilter.ts";
import { searchUserName } from "../UserSearch/UserSearch.utils.ts";
import { StyledUserList as Styled } from "./UserList.styled.ts";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner.tsx";
import { Notice } from "../Notice/Notice.tsx";

export const UserList = () => {
  const { isLoading, data, error } = useFetchApi<User[]>(USERS_ENDPOINT);
  const { filteredData, search, setSearch } = useSearchFilter<User>(data, searchUserName);

  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Styled.Wrapper>
      <Styled.Title>{TITLE}</Styled.Title>
      {!error && <UserSearch onInput={onSearchInput} search={search} />}
      <button onClick={() => setSearch("")}>Clear Search</button>
      <Styled.Results>
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <Notice text={ERROR_TEXT} isError />
        ) : (
          <Styled.ResultsList>
            {filteredData.map(({ name, phone, company }: User, index) => (
              <UserCard key={index} name={name} phone={phone} companyName={company.name} />
            ))}
            {data?.length && !filteredData.length && search !== "" && <Notice text={NO_RESULTS_TEXT} />}
          </Styled.ResultsList>
        )}
      </Styled.Results>
    </Styled.Wrapper>
  );
};
