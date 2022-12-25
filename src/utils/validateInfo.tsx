import { User } from "contexts/FormContext";

export const validateInfo = (state: User) => {
  const errors: User = {
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
    errors.name = "Este campo é obrigatório";
  } else if (state.name.length < 3) {
    errors.name = "Mínimo 3 caracteres";
  }

  if (!state.email) {
    errors.email = "Este campo é obrigatório";
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(state.email)) {
    errors.email = "Formato inválido";
  }

  if (!state.password) {
    errors.password = "Este campo é obrigatório";
  } else if (state.password.length < 6) {
    errors.password = "Mínimo 6 caracteres";
  }

  if (!state.confirmPassword) {
    errors.confirmPassword = "Este campo é obrigatório";
  } else if (state.confirmPassword !== state.password) {
    errors.confirmPassword = "Senhas não são iguais";
  }

  if (!state.birthDate) {
    errors.birthDate = "Este campo é obrigatório";
  }

  if (!state.address.city) {
    errors.address.city = "Este campo é obrigatório";
  }

  if (!state.address.zipCode) {
    errors.address.zipCode = "Este campo é obrigatório";
  } else if (state.address.zipCode.length < 9) {
    errors.address.zipCode = "Formato inválido";
  }

  if (!state.address.street) {
    errors.address.street = "Este campo é obrigatório";
  }

  if (!state.address.number) {
    errors.address.number = "Este campo é obrigatório";
  }

  if (!state.address.neighborhood) {
    errors.address.neighborhood = "Este campo é obrigatório";
  }
  
  if (!state.address.reference) {
    errors.address.reference = "Este campo é obrigatório";
  }

  return errors;
};
