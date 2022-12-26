import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.lightGrey} 0%,
    ${({ theme }) => theme.colors.lightGrey} 50%,
    ${({ theme }) => theme.colors.white} 50%,
    ${({ theme }) => theme.colors.white}
  );
`;

export const Wrapper = styled.div`
  border-radius: 8px;
  padding: 3.5rem;
  margin: auto;
  width: 30vw;
  min-width: 500px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 31px ${({ theme }) => theme.colors.grey};
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    align-self: center;
  }

  h3 {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  button {
    align-self: center;
    width: 110%;
    margin-top: 3rem;
  }

  hr {
    border: 1px solid ${({ theme }) => theme.colors.grey};
    width: 105%;
    align-self: center;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
