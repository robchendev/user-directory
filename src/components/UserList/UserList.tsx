import { useFetchApi } from "../../hooks/useFetchApi.ts";
import type { User } from "../../types/user.ts";
import { USERS_ENDPOINT } from "./UserList.const.ts";

export const UserList = () => {
  const { isLoading, data, error } = useFetchApi(USERS_ENDPOINT);

  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          {(data || []).map((user: User) => (
            <div>
              <p>{user.name}</p>
              <p>{user.phone}</p>
              <p>{user.company.name}</p>
            </div>
          ))}
          {error && <div>An error occurred</div>}
        </>
      )}
    </div>
  );
};
