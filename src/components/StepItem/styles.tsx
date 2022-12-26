import styled from "styled-components";
import { ThemeColors } from "styles/global";

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
        ? `${ThemeColors.colors.purple}`
        : props.step > 1 && `${ThemeColors.colors.green}`};
  }

  #address {
    fill: ${(props) =>
      props.step === 2
        ? `${ThemeColors.colors.purple}`
        : props.step > 2
        ? `${ThemeColors.colors.green}`
        : props.step < 2 && `${ThemeColors.colors.darkGrey}`};
  }

  #about {
    fill: ${(props) =>
      props.step === 3
        ? `${ThemeColors.colors.purple}`
        : props.step < 3 && `${ThemeColors.colors.darkGrey}`};
  }
`;
