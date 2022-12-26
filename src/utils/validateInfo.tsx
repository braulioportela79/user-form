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
    about: "",
  };

  if (!state.name) {
    errors.name = "Obrigatório";
  } else if (state.name.length < 3) {
    errors.name = "Mínimo 3 caracteres";
  }

  if (!state.email) {
    errors.email = "Obrigatório";
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(state.email)) {
    errors.email = "Formato inválido";
  }

  if (!state.password) {
    errors.password = "Obrigatório";
  } else if (state.password.length < 6) {
    errors.password = "Mínimo 6 caracteres";
  }

  if (!state.confirmPassword) {
    errors.confirmPassword = "Obrigatório";
  } else if (state.confirmPassword !== state.password) {
    errors.confirmPassword = "Senhas não são iguais";
  }

  const d1 = Date.parse(new Date().toISOString().split("T")[0]);
  const d2 = Date.parse(state.birthDate);

  if (!state.birthDate) {
    errors.birthDate = "Obrigatório";
  } else if (d2 > d1) {
    errors.birthDate = "Data inválida";
  }

  if (!state.address.city) {
    errors.address.city = "Obrigatório";
  }

  if (!state.address.zipCode) {
    errors.address.zipCode = "Obrigatório";
  } else if (state.address.zipCode.length < 9) {
    errors.address.zipCode = "Formato inválido";
  }

  if (!state.address.street) {
    errors.address.street = "Obrigatório";
  }

  if (!state.address.number) {
    errors.address.number = "Obrigatório";
  }

  if (!state.address.neighborhood) {
    errors.address.neighborhood = "Obrigatório";
  }

  if (!state.address.reference) {
    errors.address.reference = "Obrigatório";
  }

  if (!state.about) {
    errors.about = "Obrigatório";
  } else if (state.about.length < 50) {
    errors.about = "Mínimo 50 caracteres";
  }

  return errors;
};
