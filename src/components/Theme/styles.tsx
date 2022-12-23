import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: right;
`;

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 3.5rem;
  margin: auto;
  width: 70vw;
  height: 70vh;
  border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.colors.lightGrey};
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Steps = styled.div`
  margin-top: 3rem;
  height: 50px;
`;

export const Page = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
