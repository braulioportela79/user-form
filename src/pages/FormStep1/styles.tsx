import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-areas:
    "name name"
    "password confirmPassword"
    "email birthDate";
  grid-gap: 2rem;
  #name {
    grid-area: name;
  }

  #password {
    grid-area: password;
  }

  #confirmPassword {
    grid-area: confirmPassword;
  }

  #email {
    grid-area: email;
  }

  #birthDate {
    grid-area: birthDate;
  }

  label {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black};
  }

  input {
    width: 100%;
    height: 2.75rem;
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    padding: 0.5rem;
  }
`;
