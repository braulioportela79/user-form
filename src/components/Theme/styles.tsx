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

export const Area = styled.div`
  border-radius: 8px;
  padding: 3rem;
  margin: auto;
  width: 60vw;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 31px ${({ theme }) => theme.colors.grey};
`;

export const Steps = styled.div`
  background-color: orange;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
