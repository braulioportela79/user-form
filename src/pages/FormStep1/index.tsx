import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { StyledButton } from "styles/buttons";
import { Theme } from "components/Theme";

export const FormStep1 = () => {
  const navigate = useNavigate();
  const handleNextStep = () => {
    navigate("/step2");
  };

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
      <StyledButton
        fontSize="md"
        buttonColor="purple"
        buttonSize="sm"
        onClick={handleNextStep}
      >
        <b>Próximo Passo</b>
      </StyledButton>
    </Theme>
  );
};
