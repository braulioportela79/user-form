import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  flex: 1;
  display: grid;
  grid-template-areas:
    "name name"
    "password confirmPassword"
    "email birthDate";
  grid-gap: 1rem;
  
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
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    padding: 0.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
