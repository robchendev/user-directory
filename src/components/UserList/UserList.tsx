import { useFetchApi } from "../../hooks/useFetchApi.ts";
import type { User } from "../../types/user.ts";
import { UserSearch } from "../UserSearch/UserSearch.tsx";
import { USERS_ENDPOINT } from "./UserList.const.ts";
import { UserCard } from "../UserCard/UserCard.tsx";
import { useSearchFilter } from "../../hooks/useSearchFilter.ts";
import { searchUserName } from "../UserSearch/UserSearch.utils.ts";
import { StyledUserList as Styled } from "./UserList.styled.ts";

export const UserList = () => {
  const { isLoading, data, error } = useFetchApi<User[]>(USERS_ENDPOINT);
  const { filteredData, search, setSearch } = useSearchFilter<User>(data, searchUserName);

  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Styled.Wrapper>
      <UserSearch onInput={onSearchInput} search={search} />
      <Styled.Results>
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <>
            <Styled.ResultsList>
              {filteredData.map(({ name, phone, company }: User) => (
                <UserCard name={name} phone={phone} companyName={company.name} />
              ))}
            </Styled.ResultsList>
            {error && <div>An error occurred</div>}
          </>
        )}
      </Styled.Results>
    </Styled.Wrapper>
  );
};
