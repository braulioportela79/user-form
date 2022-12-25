import { User } from "contexts/FormContext";

export const validateInfo = (state: User) => {
  let errors: User = {
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
  };

  if (!state.name) {
    errors.name = "Nome obrigatorio";
  }

  if (!state.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(state.email)) {
    errors.email = "Email address is invalid";
  }

  if (!state.password) {
    errors.password = "Password is required";
  } else if (state.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!state.confirmPassword) {
    errors.confirmPassword = "Password is required";
  } else if (state.confirmPassword !== state.password) {
    errors.confirmPassword = "Passwords do not match";
  }
  if (!state.birthDate) {
    errors.birthDate = "Birthdate is required";
  }

  return errors;
};
