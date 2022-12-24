import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import * as S from "./styles";
import { StyledButton } from "styles/buttons";
import { Theme } from "components/Theme";
import { useForm, FormActions, User } from "contexts/FormContext";

export const FormStep1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [errors, setErrors] = useState<User>({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
    birthDate: "",
    address: {
      zipCode: "",
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      reference: "",
    },
  });

  const handleNextStep = () => {
    if (!state.user.name.trim()) {
      setErrors((oldErrors) => ({ ...oldErrors, name: "Nome é obrigatório" }));
    } else {
      navigate("/step2");
    }
  };

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, [dispatch]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    dispatch({
      type: FormActions.setUser,
      payload: {
        ...state.user,
        [name]: value,
      },
    });
    setErrors((oldErrors) => ({ ...oldErrors, name: "" }));
  };

  return (
    <Theme>
      <S.Form>
        <label id="name">
          Nome
          <input
            type="text"
            value={state.user.name}
            onChange={handleChange}
            name="name"
          />
          {errors.name && <span>{errors.name}</span>}
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
      </S.Form>
      <S.ButtonContainer>
        <StyledButton
          fontSize="md"
          buttonColor="purple"
          buttonSize="sm"
          onClick={handleNextStep}
        >
          <b>Próximo Passo</b>
        </StyledButton>
      </S.ButtonContainer>
    </Theme>
  );
};
