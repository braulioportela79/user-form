import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  flex: 1;
  /* display: grid; */
  display: flex;
  flex-direction: column;
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
    display: flex;
    justify-content: space-between;
    gap: 2rem;
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
    width: 100%;
  }

  input {
    width: 100%;
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    padding: 0.5rem;
  }
`;

export const InputContainer = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
