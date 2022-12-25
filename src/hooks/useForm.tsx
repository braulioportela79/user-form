import { useFormContext } from "hooks/useFormContext";
import { ChangeEvent, useState } from "react";
import { To, useNavigate } from "react-router-dom";
import { FormActions, User } from "contexts/FormContext";

export const useForm = (validate: { (state: User): User }) => {
  const { state, dispatch } = useFormContext();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    dispatch({
      type: FormActions.setUser,
      payload: {
        ...state.user,
        [name]: value,
      },
    });

    setErrors((oldErrors) => ({
      ...oldErrors,
      [name]: "",
    }));
  };

  const handleNextStep = async (page: To) => {
    let isValid = false;
    if (
      state.user.name &&
      state.user.email &&
      /\S+@\S+\.\S+/.test(state.user.email) &&
      state.user.password &&
      state.user.password.length >= 6 &&
      state.user.confirmPassword &&
      state.user.password === state.user.confirmPassword &&
      state.user.birthDate
    ) {
      isValid = true;
    } else {
      setErrors(validate(state.user));
    }

    if (isValid) {
      navigate(page);
    }
    console.log(isValid);
  };
  return { errors, state, dispatch, handleChange, handleNextStep };
};
