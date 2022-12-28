import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IconArea = styled.div<{ step: number }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;

  #info {
    fill: ${(props) =>
      props.step === 1
        ? props.theme.colors.purple
        : props.step > 1 && props.theme.colors.green};
  }

  #address {
    fill: ${(props) =>
      props.step === 2
        ? props.theme.colors.purple
        : props.step > 2
        ? props.step > 1 && props.theme.colors.green
        : props.step < 2 && props.theme.colors.darkGrey};
  }

  #about {
    fill: ${(props) =>
      props.step === 3
        ? props.theme.colors.purple
        : props.step < 3 && props.theme.colors.darkGrey};
  }
`;
