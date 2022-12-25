import { useEffect } from "react";
import * as S from "./styles";
import { StyledButton } from "styles/buttons";
import { Theme } from "components/Theme";
import { useForm } from "hooks/useForm";
import { FormActions } from "contexts/FormContext";
import { validateInfo } from "utils/validateInfo";

export const FormStep1 = () => {
  const { errors, state, dispatch, handleChange, handleNextStep } =
    useForm(validateInfo);

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, [dispatch]);

  return (
    <Theme>
      <S.Form>
        <label>
          Nome {errors.name && <span>{errors.name}</span>}
          <input
            type="text"
            value={state.user.name}
            onChange={handleChange}
            name="name"
          />
        </label>
        <S.InputContainer>
          <label>
            Senha {errors.password && <span>{errors.password}</span>}
            <input
              type="password"
              value={state.user.password}
              onChange={handleChange}
              name="password"
            />
          </label>
          <label>
            Confirmar Senha {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
            <input
              type="password"
              value={state.user.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
            />
          </label>
        </S.InputContainer>
        <S.InputContainer>
          <label id="email">
            Email {errors.email && <span>{errors.email}</span>}
            <input
              type="email"
              value={state.user.email}
              onChange={handleChange}
              name="email"
            />
          </label>
          <label id="birthDate">
            Data de Nascimento
            <input type="text" />
          </label>
        </S.InputContainer>
        <S.ButtonContainer>
          <StyledButton
            fontSize="md"
            buttonColor="purple"
            buttonSize="sm"
            onClick={() => handleNextStep("/step2")}
            type="button"
          >
            <b>Próximo Passo</b>
          </StyledButton>
        </S.ButtonContainer>
      </S.Form>
    </Theme>
  );
};
