import { StyledTitle } from "styles/typograghy";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container>
      <StyledTitle fontSize="lg" fontWeight={500} tag="h1">
        Criação de Usuário
      </StyledTitle>
    </S.Container>
  );
};
