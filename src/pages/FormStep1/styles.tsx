import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

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

export const InputContainer = styled.div`
  grid-area: password;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
