import { useEffect } from "react";
import * as S from "styles/common";
import { StyledButton } from "styles/buttons";
import { Theme } from "components/Theme";
import { useForm } from "hooks/useForm";
import { FormActions } from "contexts/FormContext";
import { validateInfo } from "utils/validateInfo";

export const FormStep1 = () => {
  const { errors, state, dispatch, handleChange, handleNextStep } =
    useForm(validateInfo);
  const today = new Date().toISOString().split("T")[0];

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
          Nome
          <input
            type="text"
            value={state.user.name}
            onChange={handleChange}
            name="name"
          />
          <S.Validation>
            {errors.name && <span>{errors.name}</span>}
          </S.Validation>
        </label>
        <S.InputContainer>
          <label>
            Senha
            <input
              type="password"
              value={state.user.password}
              onChange={handleChange}
              name="password"
            />
            <S.Validation>
              {errors.password && <span>{errors.password}</span>}
            </S.Validation>
          </label>
          <label>
            Confirmar Senha
            <input
              type="password"
              value={state.user.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
            />
            <S.Validation>
              {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
            </S.Validation>
          </label>
        </S.InputContainer>
        <S.InputContainer>
          <label>
            Email
            <input
              type="email"
              value={state.user.email}
              onChange={handleChange}
              name="email"
            />
            <S.Validation>
              {errors.email && <span>{errors.email}</span>}
            </S.Validation>
          </label>
          <label>
            Data de Nascimento
            <input
              type="date"
              value={state.user.birthDate}
              onChange={handleChange}
              name="birthDate"
              max={today}
            />
            <S.Validation>
              {errors.birthDate && <span>{errors.birthDate}</span>}
            </S.Validation>
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
