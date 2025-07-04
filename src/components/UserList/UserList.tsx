import { useEffect, useState } from "react";
import { useFetchApi } from "../../hooks/useFetchApi.ts";
import type { User } from "../../types/user.ts";
import { UserSearch } from "../UserSearch/UserSearch.tsx";
import { USERS_ENDPOINT } from "./UserList.const.ts";
import { UserCard } from "../UserCard/UserCard.tsx";

export const UserList = () => {
  const { isLoading, data, error } = useFetchApi<User[]>(USERS_ENDPOINT);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<User[]>([]);

  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (!data) return;
    if (search) {
      setFilteredData(
        data.filter((user: User) => user.name.toLowerCase().includes(search.toLowerCase()))
      );
    } else {
      setFilteredData(data);
    }
  }, [data, search]);

  return (
    <div>
      <UserSearch onInput={onSearchInput} search={search} />
      <div>
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <>
            {(filteredData || []).map(({ name, phone, company }: User) => (
              <UserCard name={name} phone={phone} companyName={company.name} />
            ))}
            {error && <div>An error occurred</div>}
          </>
        )}
      </div>
    </div>
  );
};
