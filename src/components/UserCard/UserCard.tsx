import type { IUserCard } from "./UserCard.interface";

export const UserCard = ({ name, phone, companyName }: IUserCard) => {
  return (
    <div>
      <p>{name}</p>
      <p>{phone}</p>
      <p>{companyName}</p>
    </div>
  );
};
