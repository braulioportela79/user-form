import * as S from "./styles";
import { Theme } from "../../components/Theme";
import { StyledButton } from "../../styles/buttons";

export const FormStep1 = () => {
  return (
    <Theme>
      <S.Form>
        <label id="name">
          Nome
          <input type="text" />
        </label>
        <label id="password">
          Senha
          <input type="password" />
        </label>
        <label id="confirmPassword">
          Confirmar Senha
          <input type="password" />
        </label>
        <label id="email">
          Email
          <input type="email" />
        </label>
        <label id="birthDate">
          Data de Nascimento
          <input type="text" />
        </label>
      </S.Form>
      <StyledButton fontSize="md" buttonColor="purple" buttonSize="sm">
        <b>Próximo Passo</b>
      </StyledButton>
    </Theme>
  );
};
