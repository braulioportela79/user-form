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
        [name]: value.replace(/\s{2,}/g, " "),
        address: { ...state.user.address, [name]: value.replace(/\s{2,}/g, " ") },
      },
    });

    setErrors((oldErrors) => ({
      ...oldErrors,
      [name]: "",
      address: { ...oldErrors.address, [name]: "" },
    }));
  };

  const handleNextStep = async (page: To) => {
    if (
      state.user.name &&
      state.user.email &&
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(state.user.email) &&
      state.user.password &&
      state.user.password.length >= 6 &&
      state.user.confirmPassword &&
      state.user.password === state.user.confirmPassword &&
      state.user.birthDate &&
      state.currentStep === 1
    ) {
      navigate(page);
    } else {
      setErrors(validate(state.user));
    }

    if (
      state.user.address.zipCode &&
      state.user.address.zipCode.length === 9 &&
      state.user.address.street &&
      state.user.address.number &&
      state.user.address.neighborhood &&
      state.user.address.city &&
      state.user.address.reference &&
      state.currentStep === 2
    ) {
      navigate(page);
    } else {
      setErrors(validate(state.user));
    }
  };
  return { errors, state, dispatch, handleChange, handleNextStep };
};
