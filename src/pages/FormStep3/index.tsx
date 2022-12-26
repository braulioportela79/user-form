import { useNavigate } from "react-router-dom";
import { Theme } from "components/Theme";
import { FormActions } from "contexts/FormContext";
import { useForm } from "hooks/useForm";
import { useEffect } from "react";
import { StyledButton } from "styles/buttons";
import * as S from "styles/common";
import { validateInfo } from "utils/validateInfo";

export const FormStep3 = () => {
  const { errors, state, dispatch, handleChange, handleNextStep } =
    useForm(validateInfo);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    });
  }, [dispatch]);

  const handleBackStep = () => {
    navigate("/step2");
  };

  return (
    <Theme>
      <S.Form>
        <label id="about">
          Nos conte mais sobre você
          <textarea
            value={state.user.about}
            onChange={handleChange}
            name="about"
          />
          <S.Validation>
            {errors.about && <span>{errors.about}</span>}
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
            onClick={() => handleNextStep("/user-info")}
            type="button"
          >
            <b>Próximo Passo</b>
          </StyledButton>
        </S.ButtonContainer>
      </S.Form>
    </Theme>
  );
};
