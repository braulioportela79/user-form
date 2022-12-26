import { useEffect } from "react";
import * as S from "styles/common";
import { StyledButton } from "styles/buttons";
import { Theme } from "components/Theme";
import { useForm } from "hooks/useForm";
import { FormActions } from "contexts/FormContext";
import { validateInfo } from "utils/validateInfo";
import { useNavigate } from "react-router-dom";
import { Input } from "components/InputMask";
// import { KeyboardEvent } from "react";
import { isNumberKey } from 'utils/masks';

export const FormStep2 = () => {
  const { errors, state, dispatch, handleChange, handleNextStep } =
    useForm(validateInfo);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  }, [dispatch]);

  const handleBackStep = () => {
    navigate("/");
  };

  return (
    <Theme>
      <S.Form>
        <S.InputContainer>
          <label>
            CEP
            <Input
              type="text"
              name="zipCode"
              mask="zipCode"
              onChange={handleChange}
              value={state.user.address.zipCode}
              onKeyDown={isNumberKey}
            />
            <S.Validation>
              {errors.address.zipCode && <span>{errors.address.zipCode}</span>}
            </S.Validation>
          </label>
          <label>
            Rua
            <input
              type="text"
              value={state.user.address.street}
              onChange={handleChange}
              name="street"
            />
            <S.Validation>
              {errors.address.street && <span>{errors.address.street}</span>}
            </S.Validation>
          </label>
        </S.InputContainer>
        <S.InputContainer>
          <S.InputWrapper>
            <label>
              Número
              <input
                type="number"
                value={state.user.address.number}
                onChange={handleChange}
                name="number"
              />
              <S.Validation>
                {errors.address.number && <span>{errors.address.number}</span>}
              </S.Validation>
            </label>
            <label>
              Bairro
              <input
                type="text"
                value={state.user.address.neighborhood}
                onChange={handleChange}
                name="neighborhood"
              />
              <S.Validation>
                {errors.address.neighborhood && (
                  <span>{errors.address.neighborhood}</span>
                )}
              </S.Validation>
            </label>
          </S.InputWrapper>
          <label>
            Cidade
            <input
              type="text"
              value={state.user.address.city}
              onChange={handleChange}
              name="city"
            />
            <S.Validation>
              {errors.address.city && <span>{errors.address.city}</span>}
            </S.Validation>
          </label>
        </S.InputContainer>
        <label>
          Ponto de Referência
          <input
            type="text"
            value={state.user.address.reference}
            onChange={handleChange}
            name="reference"
          />
          <S.Validation>
            {errors.address.reference && (
              <span>{errors.address.reference}</span>
            )}
          </S.Validation>
        </label>
        <S.ButtonContainer>
          <StyledButton
            fontSize="md"
            buttonColor="grey"
            buttonSize="sm"
            onClick={handleBackStep}
            type="button"
          >
            <b>Anterior</b>
          </StyledButton>
          <StyledButton
            fontSize="md"
            buttonColor="purple"
            buttonSize="sm"
            onClick={() => handleNextStep("/step3")}
            type="button"
          >
            <b>Próximo Passo</b>
          </StyledButton>
        </S.ButtonContainer>
      </S.Form>
    </Theme>
  );
};
