import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  span {
    color: ${({ theme }) => theme.colors.red};
    font-size: 10px;
  }

  label {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black};
    width: 100%;
  }

  #about {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 100%;
    border: none;
    height: 2.75rem;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.grey};
    padding: 0.5rem;
  }

  textarea {
    height: 15.4rem;
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors.grey};
    resize: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const Validation = styled.div`
  display: flex;
  height: 0;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
