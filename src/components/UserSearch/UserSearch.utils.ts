import type { User } from "../../types/user";

export const searchUserName = (user: User, search: string) => {
  const searchTerm = search.toLowerCase();
  return user.name.toLowerCase().includes(searchTerm);
};
