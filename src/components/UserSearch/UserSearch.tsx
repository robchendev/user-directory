import { useFetchApi } from "../../hooks/useFetchApi.ts";
import { USERS_ENDPOINT } from "./UserSearch.const.ts";

export const UserSearch = () => {
  const { isLoading, data, error } = useFetchApi(USERS_ENDPOINT);

  console.log("data updated:", data);
  return (
    <div>
      <p>isLoading: {isLoading ? "true" : "false"}</p>
      <p>error: {error ? "true" : "false"}</p>
    </div>
  );
};
