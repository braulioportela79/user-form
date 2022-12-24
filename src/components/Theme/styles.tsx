import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 2rem;
  margin: auto;
  width: 70vw;
  height: 75vh;
  border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.colors.lightGrey};
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Steps = styled.div`
  height: 3rem;
`;

export const Page = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
