import type { IUserCard } from "./UserCard.interface";
import { StyledUserCard as Styled } from "./UserCard.styled";
import { BsBriefcaseFill, BsFillTelephoneFill } from "react-icons/bs";

export const UserCard = ({ name, phone, companyName }: IUserCard) => {
  return (
    <Styled.Wrapper>
      <Styled.Name>{name}</Styled.Name>
      <Styled.Divider />
      <Styled.Details>
        <BsFillTelephoneFill />
        {phone}
      </Styled.Details>
      <Styled.Details>
        <BsBriefcaseFill />
        {companyName}
      </Styled.Details>
    </Styled.Wrapper>
  );
};
